import "./TermsOfService.css";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <Link to="/" className="back-to-home">
          ← Back on the Road
        </Link>

        <h1>Terms of Service</h1>
        <p className="last-updated">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using Roadtripper Chronicles, you accept and agree
            to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials on Roadtripper Chronicles for personal, non-commercial
            transitory viewing only.
          </p>
        </section>

        <section>
          <h2>Disclaimer</h2>
          <p>
            This podcast is not endorsed by Roadtrip Nation. The views and
            opinions expressed in this podcast are solely those of the
            participants and do not necessarily reflect the views or opinions of
            Roadtrip Nation.
          </p>
        </section>

        <section>
          <h2>Content Accuracy</h2>
          <p>
            The materials on Roadtripper Chronicles are provided on an 'as is'
            basis. We make no warranties, expressed or implied, and hereby
            disclaim all other warranties.
          </p>
        </section>

        <section>
          <h2>Limitations</h2>
          <p>
            In no event shall Roadtripper Chronicles or its suppliers be liable
            for any damages arising out of the use or inability to use the
            materials on our website.
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us through our website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
