# ☀️ Weather Dashboard

A beautiful, responsive weather dashboard application that fetches real-time weather data from the OpenWeatherMap API.

## Features

✨ **Key Features:**
- 🔍 Search for weather by city name
- 🌡️ Real-time temperature display
- 💧 Humidity levels
- 💨 Wind speed information
- 🔽 Atmospheric pressure
- 👁️ Visibility metrics
- ☁️ Cloud coverage
- 📱 Fully responsive design
- 🎨 Beautiful gradient UI with smooth animations
- ⌨️ Enter key support for search
- ⏱️ Loading states
- ❌ Error handling

## Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3 with Flexbox & Grid
- **Weather API:** OpenWeatherMap API
- **Package Manager:** npm

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (free at https://openweathermap.org/api)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thanakrondie1-ai/weather-dashboard-app.git
cd weather-dashboard-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Add your OpenWeatherMap API key to `.env.local`:
```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter a city name in the search box
2. Press Enter or click the Search button
3. View the current weather information and forecast
4. Try searching for different cities!

## Building for Production

```bash
npm run build
```

The optimized files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## API Information

### OpenWeatherMap API
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Documentation:** https://openweathermap.org/current
- **Free Plan:** 1000 calls/day

### Getting an API Key

1. Visit https://openweathermap.org/api
2. Sign up for a free account
3. Generate an API key from your account dashboard
4. Add it to your `.env.local` file

## Project Structure

```
weather-dashboard-app/
├── src/
│   ├── App.jsx           # Main React component
│   ├── App.css           # Component styling
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore file
└── README.md             # This file
```

## Features in Detail

### Current Weather Display
- City name and country code
- Current temperature and "feels like" temperature
- Weather condition with icon
- Weather description

### Weather Details
- **Temperature:** Current temperature in Celsius
- **Humidity:** Percentage of atmospheric moisture
- **Wind Speed:** Speed in meters per second
- **Pressure:** Atmospheric pressure in hectopascals
- **Visibility:** Visibility distance in kilometers
- **Cloudiness:** Cloud coverage percentage

### User Experience
- Clean, intuitive interface
- Real-time API calls
- Error handling for invalid cities
- Loading state during API requests
- Responsive design for all screen sizes
- Smooth animations and transitions

## Error Handling

- **Invalid City:** Displays an error message if the city is not found
- **API Errors:** Gracefully handles API failures
- **Network Issues:** User-friendly error messages

## Responsive Design

The dashboard is fully responsive and works on:
- 📱 Mobile phones (320px and up)
- 📱 Tablets (600px and up)
- 💻 Desktop screens (1024px and up)

## Future Enhancements

- [ ] 5-day weather forecast
- [ ] Multiple city search and comparison
- [ ] Weather alerts and notifications
- [ ] Unit toggle (Celsius/Fahrenheit)
- [ ] Weather history graphs
- [ ] Geolocation support
- [ ] Dark mode theme
- [ ] Favorite cities bookmarking
- [ ] Air quality index (AQI)
- [ ] UV index information

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

## Author

Created with ❤️ for weather enthusiasts
