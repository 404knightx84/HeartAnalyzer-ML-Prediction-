import { useState } from 'react'
import axios from 'axios'
import Navigation from './components/Navigation'
import PredictionForm from './components/PredictionForm'
import ResultCard from './components/ResultCard'
import Hero from './components/Hero'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = {
        age: parseInt(formData.age),
        sex: parseInt(formData.sex),
        cp: parseInt(formData.cp),
        trestbps: parseInt(formData.trestbps),
        chol: parseInt(formData.chol),
        fbs: parseInt(formData.fbs),
        restecg: parseInt(formData.restecg),
        thalach: parseInt(formData.thalach),
        exang: parseInt(formData.exang),
        oldpeak: parseFloat(formData.oldpeak),
        slope: parseInt(formData.slope),
        ca: parseInt(formData.ca),
        thal: parseInt(formData.thal)
      }

      const response = await axios.post('/api/predict', payload)
      setResult(response.data)
    } catch (error) {
      console.error('Error:', error)
      alert('Error making prediction. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setResult(null)
    setFormData({
      age: '',
      sex: '',
      cp: '',
      trestbps: '',
      chol: '',
      fbs: '',
      restecg: '',
      thalach: '',
      exang: '',
      oldpeak: '',
      slope: '',
      ca: '',
      thal: ''
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      {!result ? (
        <>
          <Hero />
          <PredictionForm 
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </>
      ) : (
        <ResultCard 
          result={result}
          onReset={handleReset}
        />
      )}
    </div>
  )
}

export default App
