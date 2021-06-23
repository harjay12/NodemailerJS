import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navContainer">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/ContactForm">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
