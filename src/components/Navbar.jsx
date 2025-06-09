export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h4>Skinsavage.ai</h4>
        </div>
      <div className="navbar-links">
          <ul className="nav-links">
          <li><a href="/">Brands</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        </div>
      </div>
    </nav>
  );
}