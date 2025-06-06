import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Roadtripper Chronicles. All Rights
            Reserved.
          </p>
          <ul className="footer-links">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
