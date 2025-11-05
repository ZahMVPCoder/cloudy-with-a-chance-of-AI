import React from 'react'

export default function ForecastGrid({ forecast }) {
  if (!forecast || forecast.length === 0) return null

  return (
    <div className="forecast-grid">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-card">
          <div className="forecast-day">{day.day}</div>

          {/* ✅ Show image instead of link */}
          <div style={{ margin: '0.5rem 0' }}>
            <img
              src={day.icon}
              alt={day.condition}
              style={{ width: '64px', height: '64px' }}
            />
          </div>

          <div className="forecast-temp">{day.temp}°</div>
          <div className="forecast-condition">{day.condition}</div>
        </div>
      ))}
    </div>
  )
}
