export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <nav className="navbar-container" role="navigation" aria-label="Main navigation">
        <div className="logo">
          <a href="/" aria-label="Skinsavage.ai homepage">
            <h1>Skinsavage.ai</h1>
          </a>
        </div>
        
        <div className="navbar-links">
          <ul className="nav-links" role="menubar">
            <li role="none">
              <a href="/brands" role="menuitem" aria-label="Browse brands">
                Brands
              </a>
            </li>
            <li role="none">
              <a href="/about" role="menuitem" aria-label="Learn about us">
                About Us
              </a>
            </li>
            <li role="none">
              <a href="/contact" role="menuitem" aria-label="Contact information">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}