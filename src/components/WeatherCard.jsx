import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function WeatherCard({ weather }) {
  useEffect(() => {
    // debug: check what `weather` contains when this component renders
    console.log('WeatherCard weather prop:', weather)
  }, [weather])

  if (!weather) return null

  // normalize icon to full https URL or null
  const rawIcon = weather.icon || ''
  const iconUrl =
    typeof rawIcon === 'string'
      ? rawIcon.startsWith('//')
        ? `https:${rawIcon}`
        : rawIcon
      : null

  return (
    <motion.div
      className="weather-card-large"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="current-location">{weather.location}</h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="current-temp" style={{ fontSize: '2.5rem' }}>
          {weather.temp}°F
        </div>

        {/* Only render an <img> — do not render the URL as text */}
        {iconUrl ? (
          <motion.img
            key={iconUrl}
            src={iconUrl}
            alt={weather.condition || 'weather icon'}
            style={{ width: '64px', height: '64px', display: 'block' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onError={(e) => {
              // if image fails to load, hide it and log
              e.currentTarget.style.display = 'none'
              console.error('Weather icon failed to load:', iconUrl)
            }}
          />
        ) : null}
      </div>

      <p className="weather-description">{weather.condition}</p>

      <div className="weather-details">
        <div className="weather-detail-item">
          <div className="detail-label">Humidity</div>
          <div className="detail-value">{weather.humidity}%</div>
        </div>
        <div className="weather-detail-item">
          <div className="detail-label">Wind</div>
          <div className="detail-value">{weather.windSpeed} mph</div>
        </div>
        <div className="weather-detail-item">
  <div className="detail-label">Pressure</div>
  <div className="detail-value">
    {(weather.pressure * 0.02953).toFixed(2)} inHg
  </div>
</div>

        <div className="weather-detail-item">
          <div className="detail-label">UV Index</div>
          <div className="detail-value">{weather.uvIndex}</div>
        </div>
      </div>
    </motion.div>
  )
}
