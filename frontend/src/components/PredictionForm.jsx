import React from 'react'

export default function PredictionForm({ formData, onInputChange, onSubmit, loading }) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-6">
            <h2 className="text-3xl font-bold text-white">
              <i className="fas fa-heartbeat mr-3"></i>Health Assessment Form
            </h2>
            <p className="text-red-100 mt-2">Fill in your medical information for accurate prediction</p>
          </div>

          <form onSubmit={onSubmit} className="p-8 space-y-8">
            {/* Row 1: Age and Sex */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-user mr-2 text-red-500"></i>Age (years)
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={onInputChange}
                  min="18"
                  max="100"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                  placeholder="Enter your age"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-venus-mars mr-2 text-red-500"></i>Sex
                </label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                >
                  <option value="">Select gender</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>
            </div>

            {/* Row 2: Chest Pain Type and Resting BP */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-lung mr-2 text-red-500"></i>Chest Pain Type
                </label>
                <select
                  name="cp"
                  value={formData.cp}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                >
                  <option value="">Select type</option>
                  <option value="0">Typical Angina</option>
                  <option value="1">Atypical Angina</option>
                  <option value="2">Non-Anginal Pain</option>
                  <option value="3">Asymptomatic</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-blood-pressure mr-2 text-red-500"></i>Resting Blood Pressure (mm Hg)
                </label>
                <input
                  type="number"
                  name="trestbps"
                  value={formData.trestbps}
                  onChange={onInputChange}
                  min="80"
                  max="200"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                  placeholder="e.g., 120"
                />
              </div>
            </div>

            {/* Row 3: Cholesterol and FBS */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-flask mr-2 text-red-500"></i>Serum Cholesterol (mg/dl)
                </label>
                <input
                  type="number"
                  name="chol"
                  value={formData.chol}
                  onChange={onInputChange}
                  min="100"
                  max="600"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                  placeholder="e.g., 240"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-candy-cane mr-2 text-red-500"></i>Fasting Blood Sugar &gt; 120 mg/dl
                </label>
                <select
                  name="fbs"
                  value={formData.fbs}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                >
                  <option value="">Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
            </div>

            {/* Row 4: Resting ECG and Max Heart Rate */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-heart mr-2 text-red-500"></i>Resting Electrocardiogram
                </label>
                <select
                  name="restecg"
                  value={formData.restecg}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                >
                  <option value="">Select</option>
                  <option value="0">Normal</option>
                  <option value="1">ST-T Abnormality</option>
                  <option value="2">LV Hypertrophy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-running mr-2 text-red-500"></i>Max Heart Rate Achieved
                </label>
                <input
                  type="number"
                  name="thalach"
                  value={formData.thalach}
                  onChange={onInputChange}
                  min="60"
                  max="220"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                  placeholder="e.g., 150"
                />
              </div>
            </div>

            {/* Row 5: Exercise Angina and ST Depression */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-exclamation-circle mr-2 text-red-500"></i>Exercise Induced Angina
                </label>
                <select
                  name="exang"
                  value={formData.exang}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                >
                  <option value="">Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-graph-down mr-2 text-red-500"></i>ST Depression (induced by exercise)
                </label>
                <input
                  type="number"
                  name="oldpeak"
                  value={formData.oldpeak}
                  onChange={onInputChange}
                  step="0.1"
                  min="0"
                  max="10"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                  placeholder="e.g., 1.5"
                />
              </div>
            </div>

            {/* Row 6: ST Slope and Major Vessels */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-wave-square mr-2 text-red-500"></i>Slope of Peak Exercise ST
                </label>
                <select
                  name="slope"
                  value={formData.slope}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                >
                  <option value="">Select</option>
                  <option value="0">Upsloping</option>
                  <option value="1">Flat</option>
                  <option value="2">Downsloping</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <i className="fas fa-sitemap mr-2 text-red-500"></i>Number of Major Vessels (0-3)
                </label>
                <select
                  name="ca"
                  value={formData.ca}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
                >
                  <option value="">Select</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>

            {/* Row 7: Thalassemia */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <i className="fas fa-vial mr-2 text-red-500"></i>Thalassemia Type
              </label>
              <select
                name="thal"
                value={formData.thal}
                onChange={onInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition duration-300"
              >
                <option value="">Select</option>
                <option value="1">Normal</option>
                <option value="2">Fixed Defect</option>
                <option value="3">Reversible Defect</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>Analyzing...
                  </>
                ) : (
                  <>
                    <i className="fas fa-check-circle mr-2"></i>Get Prediction
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
