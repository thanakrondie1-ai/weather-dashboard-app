import { useState } from "react";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY || "YOUR_OPENWEATHERMAP_API_KEY";
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>🌤️ Weather Dashboard</h1>
          <p>Get real-time weather information for any city</p>
        </header>

        <div className="search-section">
          <div className="search-box">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter city name (e.g., Paris, Tokyo, New York)"
              className="search-input"
            />
            <button onClick={fetchWeather} disabled={loading} className="search-btn">
              {loading ? "Loading..." : "Search"}
            </button>
          </div>
        </div>

        {error && <div className="error-message">❌ {error}</div>}

        {weather && (
          <div className="weather-card">
            <div className="weather-header">
              <h2>{weather.name}, {weather.sys.country}</h2>
              <p className="weather-description">{weather.weather[0].main}</p>
            </div>

            <div className="weather-main">
              <div className="temperature">
                <span className="temp-value">{Math.round(weather.main.temp)}°C</span>
                <span className="feels-like">Feels like {Math.round(weather.main.feels_like)}°C</span>
              </div>
              <div className="weather-icon">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                  alt={weather.weather[0].main}
                />
              </div>
            </div>

            <div className="weather-details">
              <div className="detail-item">
                <span className="detail-label">🌡️ Temperature</span>
                <span className="detail-value">{Math.round(weather.main.temp)}°C</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">💧 Humidity</span>
                <span className="detail-value">{weather.main.humidity}%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">💨 Wind Speed</span>
                <span className="detail-value">{weather.wind.speed} m/s</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🔽 Pressure</span>
                <span className="detail-value">{weather.main.pressure} hPa</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">👁️ Visibility</span>
                <span className="detail-value">{(weather.visibility / 1000).toFixed(1)} km</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">☁️ Cloudiness</span>
                <span className="detail-value">{weather.clouds.all}%</span>
              </div>
            </div>
          </div>
        )}

        {!weather && !error && (
          <div className="welcome-message">
            <p>🔍 Search for a city to see the weather forecast</p>
          </div>
        )}
      </div>
    </div>
  );
}