# 🌿 CloudSprouts Monorepo

CloudSprouts is an end-to-end IoT project that delivers real-time insights from my garden. It combines an ESP32-based sensor with a cloud backend and a modern web dashboard to monitor temperature and humidity from anywhere.

---

## 🧱 Repos Included

This monorepo contains two main components:

1. **`iot-device/`** — Firmware for the ESP32 sensor node  
2. **`dashboard/`** — Frontend web dashboard to visualize sensor data

---

## 🛠️ Tech Overview

### 👾 Embedded
- **ESP32 + DHT11** using **ESP-IDF**
- Sends JSON data via **MQTT** to **AWS IoT Core**

### ☁️ Cloud
- **AWS IoT Core** — Ingests MQTT data
- **Lambda** — Parses and stores readings
- **DynamoDB** — Time-series storage
- **API Gateway** — REST endpoints for frontend

### 🖥️ Frontend
- **React** with **TailwindCSS**
- **Recharts** for graphing
- **AWS Amplify** for deployment

---

## 🌡️ Features

- Real-time temperature and humidity readings
- Weekly trend graphs
- Full mobile + desktop support
- Secure TLS/MQTT pipeline
- Built for ESP32 with low-power DHT11 sensor

---

