export default function About() {
  return (
    <section className="p-6 flex flex-col items-center justify-center gap-6">
      {/* Overview */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-6 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">About This Project</h2>
        <p className="text-green-900 text-base mb-4">
          CloudSprouts is a full-stack IoT system that collects real-world temperature and humidity data from a sensor, transmits it to the cloud, and displays it in a responsive web dashboard. It blends embedded C, AWS infrastructure, and modern React design into a single seamless pipeline.
        </p>
      </div>

      {/* Embedded Systems */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg p-6 w-full max-w-4xl text-left">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">🔌 Embedded Hardware</h3>
        <ul className="list-disc list-inside text-green-900 text-base space-y-1">
          <li><strong>ESP32 (ESP-IDF):</strong> Runs a custom C firmware that polls a DHT11 sensor for temperature and humidity.</li>
          <li><strong>JSON Payloads:</strong> Sensor data is formatted into a compact JSON object including a timestamp and device ID.</li>
          <li><strong>MQTT Protocol:</strong> Readings are published securely to AWS IoT Core on a dedicated topic.</li>
        </ul>
      </div>

      {/* Cloud Infrastructure */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg p-6 w-full max-w-4xl text-left">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">☁️ AWS Cloud Stack</h3>
        <ul className="list-disc list-inside text-green-900 text-base space-y-1">
          <li><strong>AWS IoT Core:</strong> Receives MQTT messages from the ESP32 and routes them using an IoT rule.</li>
          <li><strong>Lambda Function (Write):</strong> Parses each payload and stores it in DynamoDB using <code>deviceID</code> and <code>timestamp</code>.</li>
          <li><strong>DynamoDB:</strong> Optimized for time-series queries with a flat schema—ideal for real-time and historical lookups.</li>
          <li><strong>Lambda Function (Read):</strong> Provides two endpoints:
            <ul className="ml-6 list-disc list-inside">
              <li><code>/data</code>: returns the most recent reading</li>
              <li><code>/data?type=weekly</code>: returns one reading per hour for the past 7 days</li>
            </ul>
          </li>
          <li><strong>API Gateway:</strong> Publishes these endpoints to the frontend securely over HTTPS.</li>
        </ul>
      </div>

      {/* Frontend */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg p-6 w-full max-w-4xl text-left">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">🖥️ React Frontend</h3>
        <ul className="list-disc list-inside text-green-900 text-base space-y-1">
          <li><strong>Create React App:</strong> Used to scaffold the web dashboard quickly and cleanly.</li>
          <li><strong>TailwindCSS:</strong> Provides the plant-inspired, glassy UI with responsive utility classes.</li>
          <li><strong>Recharts:</strong> Visualizes weekly sensor data in a polished, animated line graph.</li>
          <li><strong>Responsive Design:</strong> Fully mobile-friendly and consistent across dark/light environments.</li>
        </ul>
      </div>

      {/* Deployment */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg p-6 w-full max-w-4xl text-left">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">🚀 Hosting & Deployment</h3>
        <ul className="list-disc list-inside text-green-900 text-base space-y-1">
          <li><strong>AWS Amplify:</strong> Manages hosting with CI/CD from GitHub.</li>
          <li><strong>Custom Domains:</strong> Uses Route 53 and CloudFront to deliver the site over HTTPS with CDN caching.</li>
          <li><strong>Auto Deploys:</strong> Every push to <code>main</code> triggers a fresh build and deployment.</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-6 w-full max-w-4xl text-center">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">📚 Summary</h3>
        <p className="text-green-900 text-base">
          From low-level sensor polling to a real-time dashboard in the browser, CloudSprouts showcases the full journey of IoT data. It's a complete system built from scratch—hardware, cloud, and frontend—all stitched together for a real-world use case.
        </p>
      </div>
    </section>
  );
}
