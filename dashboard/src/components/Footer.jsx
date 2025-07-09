export default function Footer() {
  return (
    <footer className="p-6 mt-16 text-center text-green-700/70 text-sm">
      <div className="flex flex-col items-center gap-2">
        <div className="animate-spin-slow text-2xl">🪴</div>
        <p>Thanks for checking out CloudSprouts!</p>
        <p className="flex gap-4 justify-center text-green-800">
          <a
            href="https://www.linkedin.com/in/bonness/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/TomBonness"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
