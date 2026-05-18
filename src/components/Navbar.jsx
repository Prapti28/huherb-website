import { Link } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {

  useEffect(() => {
    // Set settings first
    window.gtranslateSettings = {
      default_language: "en",
      wrapper_selector: ".gtranslate_wrapper",
      detect_browser_language: true,
    };

    // Only inject the script once
    if (!document.querySelector('script[src*="gtranslate"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
      document.body.appendChild(script);
    }
  }, []); // Empty array = runs once after first mount

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo-container">
        <img src="/logo.jpeg" alt="HuHerb Logo" className="logo-img" />
        <span className="logo-text">Hu-Herb</span>
      </Link>

      {/* Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/certificates">Certificates</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Translator */}
      <div className="gtranslate_wrapper"></div>

    </nav>
  );
}

export default Navbar;