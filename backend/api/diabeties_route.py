# diabeties.py
from flask import request, jsonify
import pandas as pd
import joblib

def init_diabeties_route(app):
    @app.route("/api/Diabeties-Model", methods=["POST"])
    def get_diabeties_value():
        req_data = request.json
        df = pd.DataFrame(req_data, index=[0])

        # Import the saved model and scaler transformation
        model = joblib.load("./models/diabeties/diabeties.joblib")
        scaler = joblib.load("./models/diabeties/scaler.joblib")

        # Scale the data
        df = scaler.transform(df)

        # Make our prediction
        pred_vector = model.predict(df)

        return jsonify({"prediction": float(pred_vector[0])}), 201
