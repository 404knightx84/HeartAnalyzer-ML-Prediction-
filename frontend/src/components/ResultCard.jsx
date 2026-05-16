import React from 'react'

export default function ResultCard({ result, onReset }) {
  const riskLevel = result.confidence >= 70 ? 'High Risk' : result.confidence >= 40 ? 'Medium Risk' : 'Low Risk'
  const riskColor = result.confidence >= 70 ? 'red' : result.confidence >= 40 ? 'yellow' : 'green'
  
  const downloadReport = (result) => {
    // Create HTML content for the report
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Heart Disease Prediction Report</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
                background: #f5f5f5;
            }
            .container {
                max-width: 900px;
                margin: 0 auto;
                background: white;
                padding: 40px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            header {
                text-align: center;
                border-bottom: 3px solid #e63946;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            .logo {
                font-size: 28px;
                font-weight: bold;
                color: #e63946;
                margin-bottom: 10px;
            }
            .report-title {
                font-size: 24px;
                color: #1d3557;
                margin-bottom: 10px;
            }
            .timestamp {
                color: #666;
                font-size: 14px;
            }
            .result-section {
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                padding: 30px;
                border-radius: 10px;
                margin-bottom: 30px;
                text-align: center;
            }
            .prediction {
                font-size: 32px;
                font-weight: bold;
                color: #e63946;
                margin-bottom: 10px;
            }
            .risk-level {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 10px;
                padding: 10px 20px;
                border-radius: 5px;
                display: inline-block;
            }
            .risk-high {
                background: #fee;
                color: #c92a2a;
            }
            .risk-medium {
                background: #fff3bf;
                color: #f59f00;
            }
            .risk-low {
                background: #c3fac3;
                color: #2f9e44;
            }
            .confidence-bar {
                width: 100%;
                background: #ddd;
                border-radius: 10px;
                height: 30px;
                margin: 20px 0;
                overflow: hidden;
            }
            .confidence-fill {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 14px;
            }
            .parameters-section {
                margin-bottom: 30px;
            }
            .section-title {
                font-size: 18px;
                font-weight: bold;
                color: #1d3557;
                margin-bottom: 15px;
                border-left: 4px solid #e63946;
                padding-left: 10px;
            }
            .parameters-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
            }
            .parameter {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 8px;
                border-left: 3px solid #457b9d;
            }
            .parameter-label {
                font-size: 12px;
                color: #666;
                text-transform: uppercase;
                font-weight: bold;
                margin-bottom: 5px;
            }
            .parameter-value {
                font-size: 16px;
                font-weight: bold;
                color: #1d3557;
            }
            .recommendations {
                background: #c3fac3;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #2f9e44;
            }
            .recommendations h3 {
                color: #2f9e44;
                margin-bottom: 10px;
            }
            .recommendations ul {
                list-style-position: inside;
                color: #333;
            }
            .recommendations li {
                margin-bottom: 8px;
                line-height: 1.5;
            }
            footer {
                border-top: 2px solid #e63946;
                margin-top: 30px;
                padding-top: 20px;
                text-align: center;
                color: #666;
                font-size: 12px;
            }
            .disclaimer {
                background: #ffeaea;
                padding: 15px;
                border-radius: 5px;
                margin-top: 20px;
                font-size: 12px;
                color: #c92a2a;
                border-left: 4px solid #c92a2a;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <div class="logo">❤️ HeartAnalyzer</div>
                <div class="report-title">Heart Disease Prediction Report</div>
                <div class="timestamp">Generated on ${new Date().toLocaleString()}</div>
            </header>

            <div class="result-section">
                <div class="prediction">${result.prediction}</div>
                <div class="risk-level ${riskLevel === 'High Risk' ? 'risk-high' : riskLevel === 'Medium Risk' ? 'risk-medium' : 'risk-low'}">
                    ${riskLevel}
                </div>
                <div style="margin-top: 10px;">
                    <strong>Confidence Level:</strong> ${result.confidence}%
                </div>
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: ${result.confidence}%; background: ${riskLevel === 'High Risk' ? '#e63946' : riskLevel === 'Medium Risk' ? '#f59f00' : '#2f9e44'};">
                        ${result.confidence}%
                    </div>
                </div>
                <div style="margin-top: 10px;">
                    <strong>Risk Probability:</strong> ${result.risk_probability}%
                </div>
            </div>

            <div class="parameters-section">
                <div class="section-title">📊 Your Health Parameters</div>
                <div class="parameters-grid">
                    <div class="parameter">
                        <div class="parameter-label">Age</div>
                        <div class="parameter-value">${result.input_data.age} years</div>
                    </div>
                    <div class="parameter">
                        <div class="parameter-label">Gender</div>
                        <div class="parameter-value">${result.input_data.sex}</div>
                    </div>
                    <div class="parameter">
                        <div class="parameter-label">Resting Blood Pressure</div>
                        <div class="parameter-value">${result.input_data.resting_bp} mm Hg</div>
                    </div>
                    <div class="parameter">
                        <div class="parameter-label">Cholesterol</div>
                        <div class="parameter-value">${result.input_data.cholesterol} mg/dl</div>
                    </div>
                    <div class="parameter">
                        <div class="parameter-label">Max Heart Rate</div>
                        <div class="parameter-value">${result.input_data.max_heart_rate} bpm</div>
                    </div>
                    <div class="parameter">
                        <div class="parameter-label">ST Depression</div>
                        <div class="parameter-value">${result.input_data.st_depression}</div>
                    </div>
                    <div class="parameter">
                        <div class="parameter-label">Chest Pain Type</div>
                        <div class="parameter-value">${result.input_data.chest_pain_type}</div>
                    </div>
                    <div class="parameter">
                        <div class="parameter-label">Fasting Blood Sugar</div>
                        <div class="parameter-value">${result.input_data.fasting_bs ? 'Yes' : 'No'}</div>
                    </div>
                </div>
            </div>

            <div class="recommendations">
                <h3>✅ Health Recommendations</h3>
                <ul>
                    <li>Consult with a healthcare professional for detailed assessment and personalized advice</li>
                    <li>Maintain regular exercise routine (at least 150 minutes per week of moderate activity)</li>
                    <li>Follow a balanced, heart-healthy diet (Mediterranean diet is recommended)</li>
                    <li>Monitor blood pressure and cholesterol levels regularly</li>
                    <li>Reduce stress through meditation, yoga, or other relaxation techniques</li>
                    <li>Avoid smoking and limit alcohol consumption</li>
                    <li>Get adequate sleep (7-9 hours per night)</li>
                    <li>Schedule regular check-ups with your healthcare provider</li>
                </ul>
            </div>

            <div class="disclaimer">
                ⚠️ <strong>Important Disclaimer:</strong> This report is generated by an AI prediction model and should NOT be used as a substitute for professional medical advice. Always consult with a qualified healthcare provider for accurate diagnosis and treatment. Results are based on the provided parameters and clinical data used for model training.
            </div>

            <footer>
                <p>HeartAnalyzer - AI-Powered Heart Disease Prediction System</p>
                <p>Report generated by HeartAnalyzer Application</p>
            </footer>
        </div>
    </body>
    </html>
    `;

    // Create a blob from the HTML content
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = `Heart_Disease_Report_${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-r ${riskColor === 'red' ? 'from-red-500 to-red-600' : riskColor === 'yellow' ? 'from-yellow-500 to-yellow-600' : 'from-green-500 to-green-600'} px-8 py-8`}>
            <h2 className="text-4xl font-bold text-white mb-2">
              <i className="fas fa-heartbeat mr-3"></i>Prediction Result
            </h2>
            <p className="text-white text-opacity-90">Your AI-powered health assessment is complete</p>
          </div>

          {/* Main Result */}
          <div className="p-8">
            <div className="text-center mb-8">
              <div className={`inline-block rounded-full p-8 bg-${riskColor}-100 mb-6`}>
                <i className={`fas fa-heart text-6xl text-${riskColor}-600`}></i>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {result.prediction}
              </h3>
              <p className={`text-2xl font-semibold text-${riskColor}-600 mb-4`}>
                {riskLevel}
              </p>
              <p className="text-gray-600 text-lg">
                Confidence: <span className="font-bold text-gray-900">{result.confidence}%</span>
              </p>
            </div>

            {/* Confidence Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-gray-700">Prediction Confidence</span>
                <span className="text-sm font-bold text-gray-900">{result.confidence}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    result.confidence >= 70 ? 'bg-red-500' : 
                    result.confidence >= 40 ? 'bg-yellow-500' : 
                    'bg-green-500'
                  }`}
                  style={{ width: `${result.confidence}%` }}
                ></div>
              </div>
            </div>

            {/* Risk Probability */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 font-semibold mb-2">
                <i className="fas fa-info-circle text-blue-500 mr-2"></i>Risk Assessment
              </p>
              <p className="text-gray-600">
                Overall Risk Probability: <span className="font-bold text-gray-900">{result.risk_probability}%</span>
              </p>
            </div>

            {/* Health Parameters Table */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                <i className="fas fa-stethoscope mr-2 text-red-500"></i>Your Health Parameters
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-600 text-sm">Age</p>
                  <p className="text-gray-900 font-bold text-lg">{result.input_data.age} years</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-600 text-sm">Gender</p>
                  <p className="text-gray-900 font-bold text-lg">{result.input_data.sex}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-600 text-sm">Resting Blood Pressure</p>
                  <p className="text-gray-900 font-bold text-lg">{result.input_data.resting_bp} mm Hg</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-600 text-sm">Cholesterol</p>
                  <p className="text-gray-900 font-bold text-lg">{result.input_data.cholesterol} mg/dl</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-600 text-sm">Max Heart Rate</p>
                  <p className="text-gray-900 font-bold text-lg">{result.input_data.max_heart_rate} bpm</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-600 text-sm">ST Depression</p>
                  <p className="text-gray-900 font-bold text-lg">{result.input_data.st_depression}</p>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
              <h5 className="text-lg font-bold text-green-900 mb-4">
                <i className="fas fa-lightbulb text-green-500 mr-2"></i>Health Recommendations
              </h5>
              <ul className="space-y-2 text-green-800">
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Consult with a healthcare professional for detailed assessment</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Maintain regular exercise and balanced diet</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Monitor blood pressure and cholesterol levels</li>
                <li><i className="fas fa-check-circle text-green-500 mr-2"></i>Reduce stress through meditation or yoga</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onReset}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center"
              >
                <i className="fas fa-redo mr-2"></i>New Assessment
              </button>
              <button 
                onClick={() => downloadReport(result)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center"
              >
                <i className="fas fa-download mr-2"></i>Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
