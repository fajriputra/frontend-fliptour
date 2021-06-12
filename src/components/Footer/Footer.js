import Logo from "components/Logo/Logo";
import Button from "components/UI/Button/Button";
import React from "react";

function Footer() {
  const year = new Date();

  let newYears = year.getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto footer-logo">
            <Logo />
          </div>

          <div className="col">
            <h6>For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/forgotpassword">
                  Forgot Password
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payments">
                  Payments
                </Button>
              </li>
            </ul>
          </div>

          <div className="col">
            <h6>Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h6>Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="/mailto:support@fliptour.com"
                >
                  support@fliptour.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/tel:+6289678013979">
                  0896-7801-3979
                </Button>
              </li>
              <li className="list-group-item">
                <span>Fliptour.id, PIK, Jakarta Utara</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyrights {newYears} • All rights reserved • Fliptour.id ❤️‍
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
