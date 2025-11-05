import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim()) onSearch(query)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search 🔍
        </button>
      </div>
    </div>
  )
}
