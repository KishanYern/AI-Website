# AI-Website

## Overview
**AI-Website** is a user-friendly interface that connects multiple machine learning models with a modern, responsive frontend. Users can input data to get predictions for various tasks including laptop price estimation, diabetes risk assessment, lung cancer risk evaluation, and medical expense estimation. These models were developed in the [Data Science Repository](https://github.com/KishanYern/Data-Science-Repository).

## Purpose
The main purpose of this project is to provide an interactive platform where users can easily enter their data and retrieve predictions from pre-trained models. The frontend is built with React and TailwindCSS, while the backend is powered by Flask. This separation allows for flexible development and easy scaling of the application.

## Features
- **Multi-Model Predictions:**  
  - **Laptop Price Prediction:** Estimate the price of laptops based on specifications.
  - **Diabetes Risk Predictor:** Assess the risk of diabetes using clinical diagnostic data.
  - **Lung Cancer Risk Predictor:** Evaluate the risk of lung cancer using survey and clinical data.
  - **Medical Expense Predictor:** Predict future medical expenses based on patient data.

- **User-Friendly Interface:**  
  Modern, responsive, and intuitive UI using React and TailwindCSS.

- **API-Driven Architecture:**  
  A Flask backend serves multiple endpoints that connect to pre-trained machine learning models.

- **Transparent Data Sources:**  
  The models are built using publicly available datasets from Kaggle, ensuring transparency in data sources.

## Technologies Used
- **Frontend:** React, TailwindCSS
- **Backend:** Flask, Python
- **Machine Learning:** Scikit-learn, XGBoost, seaborn, mathplotlib, etc.
- **Data Sources:** Public Kaggle datasets

## Source Data
The machine learning models used in this project were trained on the following datasets:

- **Laptop Training Dataset**  
  *Description:* The Uncleaned Laptop Price dataset is a collection of laptop product listings scraped from an online e-commerce website. It includes details such as brand, screen size, processor, memory, storage, operating system, and price.  
  [View Dataset](https://www.kaggle.com/datasets/ehtishamsadiq/uncleaned-laptop-price-dataset)

- **Diabetes Risk Training Dataset**  
  *Description:* Originally sourced from the National Institute of Diabetes and Digestive and Kidney Diseases, this dataset is used to predict whether a patient has diabetes based on various diagnostic measurements.  
  [View Dataset](https://www.kaggle.com/datasets/akshaydattatraykhare/diabetes-dataset/data)

- **Medical Expense Training Dataset**  
  [View Dataset](https://www.kaggle.com/datasets/awaiskaggler/insurance-csv)

- **Lung Cancer Risk Training Dataset**  
  [View Dataset](https://www.kaggle.com/datasets/ajisofyan/survey-lung-cancer)

## Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/KishanYern/AI-Website.git
cd AI-Website
