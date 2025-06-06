import "./PrivacyPolicy.css";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <Link to="/" className="back-to-home">
          ← Back on the Road
        </Link>

        <h1>Privacy Policy</h1>
        <p className="last-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>Information We Collect</h2>
          <p>
            We may collect information you provide directly to us, such as when
            you subscribe to our podcast, contact us, or interact with our
            content.
          </p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our podcast service, communicate with you, and send you updates
            about new episodes.
          </p>
        </section>

        <section>
          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us through our website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
