# lung_cancer_route.py
from flask import request, jsonify
import pandas as pd
import joblib

def init_lung_cancer_route(app):
    @app.route("/api/LungCancer-Model", methods=["POST"])
    def get_lung_cancer_value():
        req_data = request.json
        df = pd.DataFrame(req_data, index=[0])
        
        # Convert string values to the types expected by the model:
        # 'No' -> 1, 'Yes' -> 2, 'Male' -> True, 'Female' -> False
        conversion_map = {
            'No': 1,
            'Yes': 2,
            'Male': True,
            'Female': False
        }
        df = df.replace(conversion_map)
        df = df.infer_objects(copy=False)
  
        # Load the pre-trained lung cancer prediction model.
        log_model = joblib.load("./models/lung-cancer.joblib")
        
        # Generate prediction using the model.
        prediction = log_model.predict(df)
        
        return jsonify({"prediction": "Not at risk" if prediction[0] == 1 else "At risk"}), 201
