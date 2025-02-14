import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>CONVERSE</h1>
      <ul className="links">
        <li className="link-item">Home</li>
        <li className="link-item">About Us</li>
        <li className="link-item">Products</li>
        <li className="link-item">Contact Us</li>
      </ul>
    </nav>
  );
}
