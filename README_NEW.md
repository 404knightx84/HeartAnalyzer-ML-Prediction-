# ❤️ HeartAnalyzer - Heart Disease Prediction System

**An AI-powered machine learning application that predicts heart disease risk based on clinical parameters using advanced algorithms and modern web technologies.**

---

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage Guide](#usage-guide)
- [API Documentation](#api-documentation)
- [Model Information](#model-information)
- [Health Parameters Explained](#health-parameters-explained)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Disclaimer](#disclaimer)

---

## ✨ Features

### 🎨 Modern User Interface
- **Beautiful React-based Frontend**: Built with Vite and Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Intuitive Form**: 13 health parameter inputs with validation and helpful descriptions
- **Real-time Predictions**: Instant results with confidence scores and risk levels

### 📊 Prediction Features
- **AI-Powered Analysis**: Machine learning model trained on extensive heart disease dataset
- **Confidence Scoring**: Visual progress bars showing prediction confidence
- **Risk Classification**: High, Medium, or Low risk levels based on predictions
- **Parameter Display**: Comprehensive breakdown of submitted health data
- **Health Recommendations**: Personalized suggestions based on prediction results

### 📥 Report Generation
- **HTML Report Download**: Download detailed prediction report as an HTML file
- **Professional Formatting**: Well-structured report with styling and recommendations
- **Timestamp**: Automatic date and time generation for each report
- **Disclaimer**: Important medical disclaimer included in every report

### 🔄 User Experience
- **New Assessment**: Easily restart and perform multiple predictions
- **Form Validation**: Input validation to ensure data accuracy
- **Error Handling**: Graceful error messages and recovery
- **Mobile Optimized**: Touch-friendly interface for mobile devices

---

## 🛠 Technologies Used

### Frontend
- **React 19** - UI library for building interactive components
- **Vite 8** - Fast frontend build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Font Awesome 6** - Icon library for UI elements
- **Axios** - HTTP client for API communication
- **JavaScript (ES6+)** - Modern JavaScript features

### Backend
- **FastAPI** - High-performance Python web framework
- **Uvicorn** - ASGI server for running FastAPI
- **Scikit-learn** - Machine learning library for model training and predictions
- **Pandas** - Data manipulation and analysis
- **NumPy** - Numerical computing library
- **Matplotlib & Seaborn** - Data visualization libraries
- **Python 3.13** - Programming language

### Machine Learning Model
- **Algorithm**: Trained machine learning model (stored as `model.pkl`)
- **Scaler**: StandardScaler for feature normalization (`scalar.pkl`)
- **Input Features**: 13 medical parameters
- **Training Data**: `heart.csv` dataset with 303+ patient records

---

## 📁 Project Structure

```
Heart-disease-Prediction-using-Machine-Learning-master/
├── application.py                 # FastAPI backend server
├── requirements.txt               # Python dependencies
├── test_model.py                  # Model testing script
├── README.md                      # Project documentation (this file)
├── Dockerfile                     # Docker configuration
├── Procfile                       # Deployment configuration
├── render.yaml                    # Render deployment config
│
├── Models/
│   ├── model.pkl                  # Trained ML model
│   └── scalar.pkl                 # Feature scaler
│
├── notebooks/
│   ├── Heart_Disease_Prediction_using_Machine_Learning.ipynb  # Analysis notebook
│   └── heart.csv                  # Training dataset
│
├── static/
│   ├── css/
│   │   └── style.css              # Custom styles
│   ├── images/
│   │   └── visualizations/        # Chart images
│   └── js/
│       └── script.js              # Custom JavaScript
│
├── templates/
│   ├── index.html                 # Home page template
│   ├── result.html                # Results page template
│   ├── dashboard.html             # Dashboard template
│   ├── about.html                 # About page template
│   ├── info.html                  # Information page template
│   └── result.html.new            # Backup template
│
└── frontend/                       # React application
    ├── src/
    │   ├── components/
    │   │   ├── Navigation.jsx      # Navigation bar component
    │   │   ├── Hero.jsx            # Hero section component
    │   │   ├── PredictionForm.jsx  # Form component
    │   │   └── ResultCard.jsx      # Results component
    │   ├── App.jsx                 # Main React component
    │   ├── main.jsx                # React entry point
    │   ├── App.css                 # Application styles
    │   └── index.css               # Global styles
    ├── index.html                  # HTML template
    ├── package.json                # NPM dependencies
    ├── vite.config.js              # Vite configuration
    └── public/                     # Static assets
```

---

## 🚀 Installation

### Prerequisites
- **Python 3.11+** installed on your system
- **Node.js 16+** and npm (for frontend)
- **Git** for version control

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/Heart-disease-Prediction-using-Machine-Learning.git
cd Heart-disease-Prediction-using-Machine-Learning
```

### Step 2: Backend Setup

#### Create a Python Virtual Environment (Optional but Recommended)
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

#### Install Python Dependencies
```bash
pip install -r requirements.txt
```

### Step 3: Frontend Setup
```bash
cd frontend

# Install npm packages
npm install

# Return to project root
cd ..
```

---

## 🏃 Running the Application

### Option 1: Run Both Servers Separately (Development Mode)

#### Terminal 1 - Start FastAPI Backend
```bash
python -m uvicorn application:app --reload --host 0.0.0.0 --port 8000
```
- Backend will be available at: `http://localhost:8000`
- API endpoint: `http://localhost:8000/api/predict`

#### Terminal 2 - Start React Frontend
```bash
cd frontend
npm run dev
```
- Frontend will be available at: `http://localhost:5173`

#### Terminal 3 - View the Application
- Open your browser and navigate to: `http://localhost:5173`

### Option 2: Run in Production Mode

#### Build the Frontend
```bash
cd frontend
npm run build
# This creates optimized build in 'dist' folder
```

#### Run FastAPI Server
```bash
python -m uvicorn application:app --host 0.0.0.0 --port 8000
```

### Option 3: Using Docker (If Dockerfile is available)
```bash
# Build Docker image
docker build -t heartanalyzer .

# Run Docker container
docker run -p 8000:8000 -p 5173:5173 heartanalyzer
```

---

## 📖 Usage Guide

### Making a Prediction

1. **Open the Application**
   - Navigate to `http://localhost:5173` in your web browser

2. **Fill in Your Health Information**
   - **Age**: Your age in years (18-100)
   - **Sex**: Select Male or Female
   - **Chest Pain Type**: Choose from Typical Angina, Atypical Angina, Non-Anginal Pain, or Asymptomatic
   - **Resting Blood Pressure**: Your resting BP in mm Hg (80-200)
   - **Serum Cholesterol**: Your cholesterol level in mg/dl (100-600)
   - **Fasting Blood Sugar**: Whether it's above 120 mg/dl (Yes/No)
   - **Resting Electrocardiogram**: Select Normal, ST-T Abnormality, or LV Hypertrophy
   - **Max Heart Rate Achieved**: Maximum heart rate during exercise (60-220)
   - **Exercise Induced Angina**: Whether you experience chest pain during exercise (Yes/No)
   - **ST Depression**: Induced depression by exercise (0-10)
   - **Slope of Peak Exercise ST**: Choose Upsloping, Flat, or Downsloping
   - **Number of Major Vessels**: Colored by fluoroscopy (0-3)
   - **Thalassemia**: Select Normal, Fixed Defect, or Reversible Defect

3. **Submit the Form**
   - Click the **"Get Prediction"** button
   - The system will analyze your data using the ML model

4. **View Results**
   - See your prediction: **Presence** or **Absence** of heart disease
   - Check the **Confidence Level** with a visual progress bar
   - Review your **Risk Level**: High, Medium, or Low Risk
   - See all your submitted **Health Parameters**
   - Read **Health Recommendations** tailored to your results

5. **Download Report**
   - Click **"Download Report"** to get an HTML report
   - Report includes prediction, parameters, and recommendations
   - Save for medical records

6. **New Assessment**
   - Click **"New Assessment"** to clear the form and make another prediction

---

## 📡 API Documentation

### Prediction Endpoint

**POST** `/api/predict`

#### Request Body (JSON)
```json
{
  "age": 55,
  "sex": 1,
  "cp": 0,
  "trestbps": 140,
  "chol": 250,
  "fbs": 1,
  "restecg": 0,
  "thalach": 180,
  "exang": 1,
  "oldpeak": 1.5,
  "slope": 1,
  "ca": 2,
  "thal": 1
}
```

#### Response (JSON)
```json
{
  "prediction": "Presence",
  "confidence": 87.34,
  "risk_probability": 12.66,
  "input_data": {
    "age": 55,
    "sex": "Male",
    "chest_pain_type": 0,
    "resting_bp": 140,
    "cholesterol": 250,
    "fasting_bs": 1,
    "resting_ecg": 0,
    "max_heart_rate": 180,
    "exercise_angina": "Yes",
    "st_depression": 1.5,
    "st_slope": 1,
    "major_vessels": 2,
    "thalassemia": 1
  }
}
```

#### Example cURL Request
```bash
curl -X POST http://localhost:8000/api/predict \
  -H "Content-Type: application/json" \
  -d '{
    "age": 55,
    "sex": 1,
    "cp": 0,
    "trestbps": 140,
    "chol": 250,
    "fbs": 1,
    "restecg": 0,
    "thalach": 180,
    "exang": 1,
    "oldpeak": 1.5,
    "slope": 1,
    "ca": 2,
    "thal": 1
  }'
```

---

## 🤖 Model Information

### Model Details
- **Type**: Machine Learning Classification Model (Binary Classification)
- **Algorithm**: Trained classifier for heart disease prediction
- **Input Features**: 13 medical parameters
- **Output**: Binary classification (Presence/Absence of heart disease)
- **Model File**: `Models/model.pkl`
- **Scaler File**: `Models/scalar.pkl`

### Training Data
- **Dataset**: `heart.csv` (303 patient records)
- **Features**: 13 medical parameters
- **Target**: Presence or Absence of heart disease
- **Location**: `notebooks/heart.csv`

### Model Accuracy
- The model has been trained on a comprehensive heart disease dataset
- Provides confidence scores for each prediction
- Includes probability calculations for risk assessment

### Feature Engineering
- **StandardScaler**: Features are normalized using StandardScaler
- **Feature Scaling**: All input features are scaled before prediction
- **Validation**: Input data is validated against expected ranges

---

## 📚 Health Parameters Explained

| Parameter | Range | Description |
|-----------|-------|-------------|
| **Age** | 18-100 | Patient age in years |
| **Sex** | 0/1 | 0=Female, 1=Male |
| **Chest Pain Type (cp)** | 0-3 | 0=Typical Angina, 1=Atypical, 2=Non-Anginal, 3=Asymptomatic |
| **Resting BP** | 80-200 | Resting blood pressure in mm Hg |
| **Cholesterol** | 100-600 | Serum cholesterol in mg/dl |
| **Fasting BS (fbs)** | 0/1 | Fasting blood sugar > 120 mg/dl (0=No, 1=Yes) |
| **Resting ECG** | 0-2 | 0=Normal, 1=ST-T Abnormality, 2=LV Hypertrophy |
| **Max Heart Rate (thalach)** | 60-220 | Maximum heart rate achieved in bpm |
| **Exercise Angina (exang)** | 0/1 | Exercise induced angina (0=No, 1=Yes) |
| **ST Depression (oldpeak)** | 0-10 | Depression induced by exercise relative to rest |
| **ST Slope** | 0-2 | Slope of peak exercise ST segment (0=Up, 1=Flat, 2=Down) |
| **Major Vessels (ca)** | 0-3 | Number of major vessels colored by fluoroscopy |
| **Thalassemia (thal)** | 1-3 | 1=Normal, 2=Fixed Defect, 3=Reversible Defect |

---

## 🔧 Troubleshooting

### Issue: Backend Server Won't Start
```bash
# Solution: Kill existing process on port 8000
# Windows:
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:8000 | xargs kill -9
```

### Issue: Frontend Server Won't Start
```bash
# Solution: Clear npm cache and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: CORS Errors
- Make sure FastAPI backend is running on `http://localhost:8000`
- Check that `CORSMiddleware` is properly configured in `application.py`
- Try accessing the backend directly: `http://localhost:8000`

### Issue: Model Files Not Found
- Ensure `Models/model.pkl` and `Models/scalar.pkl` exist
- Check file permissions are readable
- Verify the path in `application.py` is correct

### Issue: Report Download Not Working
- Check browser console for JavaScript errors (F12)
- Ensure pop-up blocker is not blocking downloads
- Try a different browser (Chrome, Firefox, Edge)

### Issue: Form Validation Errors
- Ensure all fields are filled correctly
- Check that values are within the specified ranges
- Verify numeric fields contain only numbers

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Areas for Contribution
- Improve UI/UX design
- Add more health parameters
- Implement data visualization
- Add user authentication
- Enhance model accuracy
- Add multi-language support
- Create mobile app

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## ⚠️ Disclaimer

### Important Medical Disclaimer

**THIS APPLICATION IS FOR EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY.**

- **NOT a Medical Device**: This application is NOT approved as a medical device by the FDA or any regulatory body
- **Not a Substitute for Professional Medical Advice**: Results should NOT be used as a substitute for professional medical diagnosis, treatment, or advice
- **Consult Healthcare Professionals**: Always consult qualified healthcare providers for medical concerns
- **Model Limitations**: The ML model is based on training data and may not be 100% accurate
- **No Liability**: The authors are not liable for any consequences arising from the use of this application
- **Data Privacy**: Ensure any personal health data is handled securely and in compliance with regulations (HIPAA, GDPR, etc.)

### When to Seek Medical Help

If you experience any of the following, seek immediate medical attention:
- ❌ Severe chest pain or pressure
- ❌ Shortness of breath
- ❌ Pain radiating to arm, jaw, or back
- ❌ Dizziness or fainting
- ❌ Severe nausea or vomiting

### Recommendation

This tool is designed to raise awareness about heart disease risk factors. Use it for:
- ✅ Educational purposes
- ✅ Personal health awareness
- ✅ Discussion with healthcare providers
- ✅ Understanding risk factors

---

## 📞 Support & Contact

- **GitHub Issues**: Report bugs and request features
- **Email**: [Your contact email]
- **Documentation**: See this README for detailed information

---

## 🙏 Acknowledgments

- **Dataset Source**: Heart Disease Dataset (UCI Machine Learning Repository)
- **Framework Credits**: FastAPI, React, and Vite teams
- **Icons**: Font Awesome
- **Styling**: Tailwind CSS

---

## 📈 Project Statistics

- **Frontend Components**: 4 (Navigation, Hero, PredictionForm, ResultCard)
- **API Endpoints**: 2 (/home, /api/predict)
- **Input Parameters**: 13 health metrics
- **ML Model**: Binary classification model
- **Responsive Breakpoints**: Mobile, Tablet, Desktop

---

**Last Updated**: May 2026

**Version**: 1.0.0

**Status**: ✅ Production Ready

---

**Made with ❤️ for better health awareness**
