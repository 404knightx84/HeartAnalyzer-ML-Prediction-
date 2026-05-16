# 🚀 Quick Start Guide - HeartAnalyzer

## Installation & Setup (5 minutes)

### Windows Setup

#### Step 1: Install Python Dependencies
```bash
# Open Command Prompt or PowerShell in the project root directory
pip install -r requirements.txt
```

#### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

#### Step 3: Start Backend Server
```bash
# Open a terminal/PowerShell window
python -m uvicorn application:app --reload --host 0.0.0.0 --port 8000
# You should see: INFO:     Uvicorn running on http://0.0.0.0:8000
```

#### Step 4: Start Frontend Server
```bash
# Open another terminal/PowerShell window
cd frontend
npm run dev
# You should see: ➜  Local:   http://localhost:5173/
```

#### Step 5: Open Application
- Open your web browser
- Navigate to: `http://localhost:5173`
- You should see the beautiful HeartAnalyzer interface!

---

### macOS Setup

#### Step 1: Install Python Dependencies
```bash
pip3 install -r requirements.txt
```

#### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

#### Step 3: Start Backend Server
```bash
# Terminal 1
python3 -m uvicorn application:app --reload --host 0.0.0.0 --port 8000
```

#### Step 4: Start Frontend Server
```bash
# Terminal 2
cd frontend
npm run dev
```

#### Step 5: Open Application
- Open Safari, Chrome, or Firefox
- Navigate to: `http://localhost:5173`

---

### Linux Setup

#### Step 1: Install Python Dependencies
```bash
pip install -r requirements.txt
```

#### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

#### Step 3: Start Backend Server
```bash
# Terminal 1
python -m uvicorn application:app --reload --host 0.0.0.0 --port 8000
```

#### Step 4: Start Frontend Server
```bash
# Terminal 2
cd frontend
npm run dev
```

#### Step 5: Open Application
- Open your browser
- Navigate to: `http://localhost:5173`

---

## ✅ Verification Checklist

- [ ] Backend server running on `http://localhost:8000` (you see "Uvicorn running" message)
- [ ] Frontend server running on `http://localhost:5173` (you see "Local:" message)
- [ ] Browser can load the HeartAnalyzer application
- [ ] Can fill and submit the prediction form
- [ ] Can see prediction results with confidence score
- [ ] Can download the report as HTML file
- [ ] Can click "New Assessment" to restart

---

## 🐛 Troubleshooting

### Problem: "Port 8000 already in use"
```bash
# Windows - Find and kill process on port 8000
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:8000 | xargs kill -9
```

### Problem: "npm command not found"
- Ensure Node.js is installed: `node --version`
- Download from: https://nodejs.org

### Problem: "Python command not found"
- Ensure Python 3.11+ is installed: `python --version`
- Download from: https://www.python.org

### Problem: "Module not found" errors
```bash
# Reinstall dependencies
pip install -r requirements.txt

# Or for frontend:
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Problem: "Connection refused" when submitting form
- Verify backend is running on port 8000
- Check if firewall is blocking connections
- Try accessing `http://localhost:8000` directly in browser

### Problem: Report download not working
- Check browser console (F12)
- Disable pop-up blocker
- Try a different browser (Chrome, Firefox, Edge)

---

## 📊 What You Can Do

1. **Fill Health Form**
   - Enter your medical parameters (age, BP, cholesterol, etc.)
   - All 13 parameters are required

2. **Get AI Prediction**
   - Click "Get Prediction" button
   - Wait for AI analysis (usually < 1 second)

3. **View Results**
   - See prediction with confidence score
   - Get risk level classification
   - Review all parameters
   - Read health recommendations

4. **Download Report**
   - Click "Download Report" button
   - Saves as HTML file with date
   - Can be opened in any browser
   - Contains medical disclaimer

5. **Make Another Prediction**
   - Click "New Assessment"
   - Form resets and ready for new patient data

---

## 🔧 Project Structure Overview

```
Root Directory/
├── application.py          ← Backend server
├── requirements.txt        ← Python packages
├── README.md               ← Full documentation
├── Models/
│   ├── model.pkl           ← AI model
│   └── scalar.pkl          ← Data scaler
└── frontend/
    ├── package.json        ← NPM dependencies
    └── src/
        ├── App.jsx         ← Main React component
        └── components/
            ├── Navigation.jsx
            ├── Hero.jsx
            ├── PredictionForm.jsx
            └── ResultCard.jsx
```

---

## 📱 Features Explained

### 1. Health Assessment Form
- 13 medical parameters
- Real-time validation
- Helpful tooltips and ranges
- Mobile-responsive design

### 2. AI Prediction Engine
- FastAPI backend
- Scikit-learn ML model
- Feature scaling
- Confidence scoring

### 3. Results Display
- Risk level indicator (High/Medium/Low)
- Confidence progress bar
- Parameter breakdown
- Health recommendations

### 4. Report Generation
- Professional HTML report
- Includes timestamp
- Medical disclaimer
- Download as file

---

## 💡 Tips & Best Practices

1. **Accurate Data**
   - Use actual medical measurements
   - Ensure values are within valid ranges
   - Consult a doctor for exact values

2. **Multiple Predictions**
   - Try different scenarios
   - Compare results
   - Understand risk factors

3. **Data Interpretation**
   - High confidence = Model is certain
   - Always consult healthcare provider
   - Use for awareness, not diagnosis

4. **Report Usage**
   - Download reports for personal records
   - Share with healthcare provider
   - Keep copies for future reference

---

## 🆘 Still Having Issues?

1. **Read the full README.md** for detailed documentation
2. **Check the logs** in terminal windows
3. **Verify all ports** are not blocked by firewall
4. **Try different browser** (Chrome, Firefox, Edge, Safari)
5. **Reinstall dependencies** completely

---

## 📚 Additional Resources

- **FastAPI Documentation**: https://fastapi.tiangolo.com
- **React Documentation**: https://react.dev
- **Vite Documentation**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com

---

## ✨ Enjoy HeartAnalyzer!

The application is now ready to use. Make predictions, learn about heart disease risk factors, and stay healthy! 

Remember: **This is for educational purposes. Always consult healthcare professionals for medical advice.**

---

**Need Help?** Check README.md for comprehensive documentation.

**Found a Bug?** Report it on GitHub Issues.

**Want to Contribute?** See CONTRIBUTING.md for guidelines.
