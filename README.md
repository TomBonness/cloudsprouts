# 🌱 CloudSprouts: Real-Time Garden Insights

CloudSprouts is a full-stack IoT project that collects real-world temperature and humidity data from an ESP32 sensor, sends it to the cloud using MQTT, and displays it in a stylish, responsive web dashboard. Built to grow 🍃 from embedded C all the way to the frontend!

---

## 🛠️ Tech Stack

**👾 Embedded**
- **ESP32 w/ ESP-IDF** — Collects data from a DHT11 sensor
- **MQTT** — Sends JSON payloads (temp, humidity, timestamp) to AWS IoT Core

**☁️ Cloud (AWS)**
- **IoT Core** — Receives and routes MQTT messages
- **Lambda** — Parses & stores readings
- **DynamoDB** — Efficient, timestamped storage
- **API Gateway** — Frontend fetches latest & weekly data

**🖥️ Frontend**
- **React (CRA)** — Core dashboard UI
- **TailwindCSS** — Plant-inspired aesthetic with glassy effects
- **Recharts** — Beautiful time-series data graphs
- **Responsive Design** — Works on all screens and themes

**🚀 Deployment**
- **AWS Amplify** — CI/CD + Hosting
- **Custom Domain + CDN** — HTTPS, fast, global

---

## 🔧 Features

- 🌡️ View real-time temperature and humidity
- 📈 Visualize weekly trends
- 🕸️ End-to-end pipeline: sensor → cloud → UI
- 📲 Mobile-ready and pretty

---

## 📁 Project Structure

```
src/
├── components/       # React UI components
├── App.js            # Main app entry
├── index.css         # Tailwind + base styles
└── index.js          # ReactDOM renderer

public/
├── index.html        # Template for CRA
├── favicon.ico       # Custom favicon & PWA assets
└── manifest.json     # Web app manifest

ESP32 Firmware (separate repo recommended)
- Uses C, MQTT, JSON encoding
- Publishes to AWS IoT Core
```

---

## 🌐 Live Demo

[https://your-cloudsprouts-site-url.com](https://your-cloudsprouts-site-url.com)
