# ⛅ Cloudy with a Chance of AI

A modern, intelligent weather application built with React that demonstrates real-world implementation of React concepts while providing an exceptional user experience.

## 🌟 What Makes This Special

**Smart Search**: Search by city name OR state (e.g., "California", "TX") - automatically selects a representative city
**Always 7 Days**: Consistent week-long forecast starting with "Today"
**Educational Codebase**: Comprehensive documentation of React concepts in action
**Modern Design**: Beautiful responsive interface with smooth animations

## 🚀 Key Features

- **🔍 Intelligent Search**: State-aware search that converts "California" → random CA city
- **📍 Auto-Location**: Detects your location automatically on first visit
- **📅 Consistent Forecast**: Always shows exactly 7 days starting from today
- **📱 Responsive Design**: Works seamlessly on all devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎨 Modern UI**: Glassmorphism design with smooth Framer Motion animations

## 📚 Educational Value

This project serves as a comprehensive learning resource for:
- **React Hooks**: useState, useEffect, custom hooks
- **State Management**: Lifting state, passing props, component communication
- **API Integration**: RESTful API calls with error handling
- **Modern React Patterns**: Functional components, controlled inputs, conditional rendering
- **Project Structure**: Clean architecture with pages, components, and utilities

## 🛠️ Technology Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **WeatherAPI** - Reliable weather data source
- **CSS3** - Modern styling with CSS variables and glassmorphism effects

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/chriskeels/cloudy-with-a-chance-of-AI.git
   cd cloudy-with-a-chance-of-AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_WEATHER_API_KEY=your_weather_api_key_here
   ```
   Get your free API key from [WeatherAPI.com](https://www.weatherapi.com/)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Learning Concepts

Each component is thoroughly documented with explanations of React concepts:

- **Components**: Reusable UI pieces (`SearchBar`, `WeatherCard`, `ForecastGrid`)
- **Hooks**: State management (`useState`) and side effects (`useEffect`)
- **Props**: Data flow between components
- **API Calls**: Fetching and handling external data
- **State Lifting**: Sharing state between sibling components
- **Error Handling**: Graceful handling of API failures and user errors

## 🏗️ Project Structure

```
src/
├── pages/          # Route components (Frontpage, Homepage)
├── components/     # Reusable UI components
├── style/         # Component-specific CSS files
├── utils/         # Utility functions (state-to-city mapping)
└── App.jsx        # Main application component
```

## 🤝 Contributing

This project welcomes contributions! Whether you're fixing bugs, adding features, or improving documentation, your input is valuable.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Problem Statement

For a detailed explanation of the problems this app solves, see [PROBLEM_STATEMENT.md](./PROBLEM_STATEMENT.md).

---

**Built with ❤️ as an educational resource for the React community**
