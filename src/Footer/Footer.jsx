import React, { useEffect } from "react";
import AOS from "aos";
import "./footer.scss";

const Footer = () => {
  // Initialize AOS (Animate On Scroll) library when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations in milliseconds
    });
  }, []);

  return (
    <section className="footer">
      <footer className="text-center text-md-start">
        <div className="container p-4">
          <div className="row">
            {/* Main footer description section */}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0" data-aos="fade-up">
              <h3 className="text-uppercase">MORENT</h3>
              <p>
                Our vision is to provide convenience <br />
                and help increase your sales business.
              </p>
            </div>
            {/* About section with links */}
            <div
              className="col-lg-2 col-md-6 mb-4 mb-md-0"
              data-aos="fade-up-left"
            >
              <h5 className="text-uppercase">About</h5>
              <ul className="list-unstyled mb-0 footer-behave">
                <li>
                  <a href="#!" className="text-edit">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-edit">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-edit">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-edit">
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>
            {/* Community section with links */}
            <div
              className="col-lg-2 col-md-6 mb-4 mb-md-0"
              data-aos="fade-up-left"
            >
              <h5 className="text-uppercase">Community</h5>
              <ul className="list-unstyled footer-behave">
                <li>
                  <a href="#!" className="text-edit">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-edit">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-edit">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-edit">
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>
            {/* Social media links section */}
            <div
              className="col-lg-2 col-md-6 mb-4 mb-md-0"
              data-aos="fade-up-left"
            >
              <h5 className="text-uppercase">Socials</h5>
              <ul className="list-unstyled footer-behave">
                <li>
                  <a href="#!" className="text-edit">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-edit">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-edit">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-edit">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer bottom section */}
          <div className="last">
            <p>&copy; 2022 MORENT. All rights reserved.</p>
            <div className="footer-bask">
              <a href="#!">Privacy & Policy </a>
              <a href="#!">Terms & Condition</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
