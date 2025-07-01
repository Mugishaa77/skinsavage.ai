import { useState, useEffect } from "react";

const bannerOptions = [
  "Talk to SavageBot",
  "Find Community",
  "Find Savagebot on WhatsApp",
  "Publish your Skincare Story",
  "Talk to a dermatologist"
];

export default function Hero() {
  const [currentOption, setCurrentOption] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOption((prev) => (prev + 1) % bannerOptions.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleBannerClick = () => {
    // Handle click based on current option
    const option = bannerOptions[currentOption];
    console.log(`Clicked: ${option}`);
    
    // You can add specific actions for each option here
    switch(option) {
      case "Talk to SavageBot":
        // Navigate to SavageBot
        break;
      case "Find Community":
        // Navigate to community
        break;
      case "Find Savagebot on WhatsApp":
        // Open WhatsApp link
        break;
      case "Publish your Skincare Story":
        // Navigate to story submission
        break;
      case "Talk to a dermatologist":
        // Navigate to dermatologist chat
        break;
      default:
        break;
    }
  };

  return (
    <div className="hero">
      {/* Rotating Banner Button */}
      <button 
        onClick={handleBannerClick}
        className="rotating-banner-btn"
      >
        <span className="banner-badge">New</span>
        <span className="banner-text">{bannerOptions[currentOption]}</span>
        <svg 
          className="banner-arrow"
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 6 10"
        >
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>

      <div className="hero-txt">
        <h1>
          Beautiful Skin
          <br/> Begins with 
          <br/>Intelligent Choices
        </h1>
        <button>Try it Now</button>
      </div>
      <div className="hero-image">
      </div>
    </div>
  );
}