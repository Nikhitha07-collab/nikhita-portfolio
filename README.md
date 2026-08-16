# Breast Ultrasound AI Diagnostic Support System

AI-powered diagnostic support application for breast ultrasound image analysis using deep learning and medical imaging techniques.

## Live Demo

https://breast-ultrasound-ai-app-rpjenoks5pbx7wd9uevn28.streamlit.app/

## Portfolio

https://nikhita-portfolio-liard.vercel.app

## Overview

This project supports breast ultrasound image analysis by combining lesion segmentation, image classification, and diagnostic support reporting in an interactive Streamlit application.

The system allows users to upload ultrasound images and view:

- Original ultrasound image
- Predicted lesion segmentation mask
- Lesion localization using bounding box
- Classification result: Normal, Benign, or Malignant
- Prediction confidence score
- Probability breakdown
- AI-generated diagnostic support note

## Key Features

- Breast ultrasound image upload
- U-Net based lesion segmentation
- CNN based image classification
- Lesion localization and visualization
- Prediction confidence display
- Probability breakdown for each class
- Diagnostic support note generation
- Streamlit Cloud deployment

## Technologies Used

- Python
- TensorFlow / Keras
- OpenCV
- NumPy
- Streamlit
- U-Net
- CNN
- Medical Image Processing
- Healthcare Data Analytics

## Project Workflow

1. Upload a breast ultrasound image
2. Preprocess the image for model input
3. Generate lesion segmentation mask
4. Localize lesion region using bounding box
5. Classify image as Normal, Benign, or Malignant
6. Display prediction confidence and probability values
7. Generate AI diagnostic support note

## Model Approach

### Segmentation

A U-Net based model is used to generate the predicted lesion mask from ultrasound images.

### Classification

A CNN based classification model predicts whether the uploaded image belongs to one of the following categories:

- Normal
- Benign
- Malignant

## Purpose

This project demonstrates how artificial intelligence can support medical imaging workflows by assisting with ultrasound image interpretation, lesion localization, and diagnostic decision support.

## Disclaimer

This application is for educational and research purposes only. It is not intended for clinical diagnosis. A qualified radiologist or physician must review all medical findings before clinical use.

## Author

Nikhita Kanneganti  
Biomedical Engineering | Medical Imaging | Healthcare AI | Clinical Applications