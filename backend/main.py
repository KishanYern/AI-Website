# The main thing we want to do is to be able to take a json input through a request
# with fields that we can later put into the model that will be imported and retrieve a predicted value

from flask import request, jsonify
from config import app
# from models import ...
import pandas as pd
import numpy as np


@app.route("/Laptop-Model", methods=["POST"])
def get_laptop_value():
    # Requesting all the required info, Unknowns and nulls will be handled at the front end
    # company = request.json.get("company")
    # type_name = request.json.get("typeName")
    # inches = request.json.get("inches")
    # ram = request.json.get("ram")
    # gpu = request.json.get("gpu")
    # operating_system = request.json.get("operatingSystem")
    # weight = request.json.get("weight")
    # touch_screen = request.json.get("touchScreen")
    # resolution = request.json.get("resolution")
    # cpu = request.json.get("cpu")
    # clock_rate = request.json.get("clockRate")
    # ssd = request.json.get("SSD")
    # hdd = request.json.get("HDD")
    # hybrid = request.json.get("Hybrid")
    # flash_storage = request.json.get("FlashStorage")

    req_data = request.json.values() # data will be in the correct order (from the frontend)

    pred_data = [np.array(req_data)] # converts array to numpy array to feed into the model




if __name__ == "__main__":



    app.run(debug=True)
