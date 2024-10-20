# main.py
from flask import Flask
from config import app
from api.laptop_route import init_laptop_route

# Initialize the app and the routes
init_laptop_route(app)

if __name__ == "__main__":
    app.run(debug=True)
