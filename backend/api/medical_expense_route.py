# Medical_Expense_Route.py
from flask import request, jsonify
import pandas as pd 
import joblib # Needed to import model.

def init_medical_expense_route(app):
    @app.route("/api/Medical-Expenses", methods=["POST"])
    def get_medical_expense():
        req_data = request.json
        input_data_df = pd.DataFrame(req_data, index = [0])

        # Convert the region based on how the model was trained:
        # 0: northeast, 1: northwest, 2: southeast, 3: southwest
        region_convert_map = {
            "northeast": 0,
            "northwest": 1,
            "southeast": 2,
            "southwest": 3 
        }
        input_data_df["region"] = region_convert_map[input_data_df["region"][0]]

        # Convert the sex based on how the model was trained:
        # 0: female, 1: male
        sex_convert_map = {
            "female": 0, 
            "male": 1
        }
        input_data_df["sex"] = sex_convert_map[input_data_df["sex"][0]]

        # Convert smoker based on how the model was trained:
        # 0: no, 1: yes
        smoker_convert_map = {
            "no": 0,
            "yes": 1
        }
        input_data_df["smoker"] = smoker_convert_map[input_data_df["smoker"][0]]
        
        # Import the model
        medical_expense_model = joblib.load("./models/Medical_Expense_rf_Model.joblib")

        # Make our prediction with the given inputs
        pred_vector = medical_expense_model.predict(input_data_df)

        return jsonify({"prediction": float(pred_vector[0])}), 201
