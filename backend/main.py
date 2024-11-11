# main.py
from config import app
from api.laptop_route import init_laptop_route
from api.diabeties_route import init_diabeties_route

# Initialize the app and the routes
init_laptop_route(app)
init_diabeties_route(app)

if __name__ == "__main__":
    app.run(debug=True)
