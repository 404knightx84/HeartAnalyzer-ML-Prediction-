import React from 'react'

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Heart Disease Prediction
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced AI-powered machine learning model that predicts your heart disease risk based on clinical parameters. Get instant, accurate predictions to guide your health decisions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300">
                <i className="fas fa-heartbeat mr-2"></i>Start Prediction
              </button>
              <button className="bg-white text-red-500 border-2 border-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-8 shadow-2xl">
              <div className="text-white text-center">
                <i className="fas fa-stethoscope text-6xl mb-4 opacity-80"></i>
                <p className="text-lg font-semibold">Powered by Advanced ML</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
