export default function About() {
  return (
    <section className="p-6 flex flex-col items-center justify-center gap-6">
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-6 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">🌱 About This Project</h2>
        <p className="text-green-900 text-base mb-4">
          This is a full-stack IoT project I built to monitor temperature and humidity from a real-world sensor using cloud infrastructure and modern web tools. It combines embedded systems, AWS cloud services, and a custom-designed dashboard.
        </p>
      </div>

      {/* Embedded Systems */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg p-6 w-full max-w-4xl text-left">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">🔌 Embedded Hardware</h3>
        <ul className="list-disc list-inside text-green-900 text-base space-y-1">
          <li><strong>ESP32 (ESP-IDF):</strong> Runs C that reads from a DHT11 temperature/humidity sensor and publishes readings via MQTT.</li>
          <li><strong>MQTT Payloads:</strong> Messages are sent to AWS IoT Core in JSON format, including timestamp and device ID.</li>
        </ul>
      </div>

      {/* Cloud Infrastructure */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg p-6 w-full max-w-4xl text-left">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">☁️ AWS Cloud Stack</h3>
        <ul className="list-disc list-inside text-green-900 text-base space-y-1">
          <li><strong>AWS IoT Core:</strong> Accepts MQTT messages from the ESP32 and routes them using an IoT Rule.</li>
          <li><strong>IoT Rule → DynamoDB:</strong> The rule triggers a Lambda function that writes the data to DynamoDB.</li>
          <li><strong>Lambda + API Gateway:</strong> Custom endpoints let the frontend fetch the latest reading or aggregate a weekly trend.</li>
          <li><strong>DynamoDB:</strong> Stores all sensor readings with efficient querying via a composite key (deviceID + timestamp).</li>
        </ul>
      </div>

      {/* Frontend */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg p-6 w-full max-w-4xl text-left">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">🖥️ React Frontend</h3>
        <ul className="list-disc list-inside text-green-900 text-base space-y-1">
          <li><strong>Create React App:</strong> Used as the base framework for the web dashboard.</li>
          <li><strong>TailwindCSS:</strong> Drives the modern UI with a glassy, translucent feel and a green plant-inspired palette.</li>
          <li><strong>Recharts:</strong> Renders a clean, animated graph of hourly sensor readings from the past week.</li>
          <li><strong>Responsive Design:</strong> The dashboard works across devices and adjusts to dark/light contrast with a consistent plant-themed aesthetic.</li>
        </ul>
      </div>

      {/* Deployment */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-lg p-6 w-full max-w-4xl text-left">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">🚀 Hosting & Deployment</h3>
        <ul className="list-disc list-inside text-green-900 text-base space-y-1">
          <li><strong>AWS Amplify:</strong> Handles frontend hosting with automatic CI/CD via GitHub integration.</li>
          <li><strong>Custom Domains:</strong> Supports HTTPS and routes through a global CDN for fast delivery.</li>
          <li><strong>Auto Deploys:</strong> Every push to <code>main</code> triggers a rebuild and live deployment.</li>
        </ul>
      </div>

      {/* Summary */}
      <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-6 w-full max-w-4xl text-center">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">📚 Summary</h3>
        <p className="text-green-900 text-base">
          This project demonstrates an end-to-end system where embedded hardware talks to the cloud, and the cloud powers a modern, styled frontend. Everything from the ESP32 firmware to the AWS policies and React styling was built from scratch as a showcase of full-stack IoT capability.
        </p>
      </div>
    </section>
  );
}
