# laptop_route.py
from flask import request, jsonify
import pandas as pd
import xgboost as xgb

def init_laptop_route(app):
    @app.route("/api/Laptop-Model", methods=["POST"])
    def get_laptop_value():
        req_data = request.json
        df = pd.DataFrame(req_data, index=[0])

        # One-hot encoding categorical features
        encoded_df = pd.get_dummies(df)

        # Convert column names to strings and handle problematic characters
        encoded_df.columns = encoded_df.columns.astype(str)
        encoded_df.columns = encoded_df.columns.str.replace('[', '_').str.replace(']', '_').str.replace('<', '_').str.replace('>', '_').str.replace(',', '_')

        # Load the XGBoost model
        model = xgb.Booster()
        model.load_model('./models/laptop_l2.json')
        feature_names = model.feature_names

        # Identify missing columns
        missing_features = [feature for feature in feature_names if feature not in encoded_df.columns]

        # Add missing columns with value 0
        missing_df = pd.DataFrame(0, index=encoded_df.index, columns=missing_features)

        # Concatenate the missing columns to the encoded_df
        encoded_df = pd.concat([encoded_df, missing_df], axis=1)

        # Reorder columns to match the model's feature_names
        encoded_df = encoded_df[feature_names]

        # Convert the DataFrame to DMatrix for prediction
        dmatrix_data = xgb.DMatrix(encoded_df)

        pred_vector = model.predict(dmatrix_data)

        return jsonify({"prediction": float(pred_vector[0])}), 201
