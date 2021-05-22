import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id="Footer" className="footer-container">
      <div className="backToTop">
        <span className="backToTopText" onClick={() => window.scrollTo(1, 1)}>
          Back to top
        </span>
      </div>
      <div className="footer-link-wrapper">
        <div class="footer-link-items">
          <div className="footer-link-heading">Get to Know Us</div>
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Press Releases</Link>
            </li>
            <li>
              <Link to="/">Amazon Cares</Link>
            </li>
            <li>
              <Link to="/">Gift a Smile</Link>
            </li>
          </ul>
        </div>
        <div className="footer-links-spacer"></div>
        <div class="footer-link-items">
          <div className="footer-link-heading">Contact with Us</div>
          <ul>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
          </ul>
        </div>
        <div className="footer-links-spacer"></div>
        <div class="footer-link-items">
          <div className="footer-link-heading">Make Money with Us</div>
          <ul>
            <li>
              <Link to="/">Sell on Amazon</Link>
            </li>
            <li>
              <Link to="/">Sell under Amazon Accelerator</Link>
            </li>
            <li>
              <Link to="/">Amazon Global Selling</Link>
            </li>
            <li>
              <Link to="/">Become an Affiliate</Link>
            </li>
            <li>
              <Link to="/">Fulfilment by Amazon</Link>
            </li>
            <li>
              <Link to="/">Advertise Your Products</Link>
            </li>
            <li>
              <Link to="/">Amazon Pay on Merchants</Link>
            </li>
          </ul>
        </div>
        <div className="footer-links-spacer"></div>
        <div class="footer-link-items">
          <div className="footer-link-heading">Let Us Help You</div>
          <ul>
            <li>
              <Link to="/">COVID-19 and Amazon</Link>
            </li>
            <li>
              <Link to="/">Your Account</Link>
            </li>
            <li>
              <Link to="/">Returns Centre</Link>
            </li>
            <li>
              <Link to="/">100% Purchase Protection</Link>
            </li>
            <li>
              <Link to="/">Amazon App Download</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-link-item-line">
        <span>
          <div className="footer-logo">
            <a href="/">
              <div className="amazon-logo"></div>
            </a>
          </div>
        </span>
        <span className="icp-container">
          <div className="FooterLine">
            <a className="icp-button" href="/">
              <div className="icp-globe-img"></div>
              <span className="icp-color-base">English</span>
            </a>
          </div>
        </span>
      </div>
      <div className="footer-country-line">
        <ul>
          <li>
            <a href="/">Australia</a>
          </li>
          <li>
            <a href="/">Brazil</a>
          </li>
          <li>
            <a href="/">Canada</a>
          </li>
          <li>
            <a href="/">China</a>
          </li>
          <li>
            <a href="/">France</a>
          </li>
          <li>
            <a href="/">Germany</a>
          </li>
          <li>
            <a href="/">Italy</a>
          </li>
          <li>
            <a href="/">Japan</a>
          </li>
          <li>
            <a href="/">Mexico</a>
          </li>
          <li>
            <a href="/">Neterlands</a>
          </li>
          <li>
            <a href="/">Poland</a>
          </li>
          <li>
            <a href="/">Singapore</a>
          </li>
          <li>
            <a href="/">Spain</a>
          </li>
          <li>
            <a href="/">Turkey</a>
          </li>
          <li>
            <a href="/">United Arab Emirates </a>
          </li>
          <li>
            <a href="/">United Kingdom</a>
          </li>
          <li>
            <a href="/">United States</a>
          </li>
        </ul>
      </div>
      <div className="footer-license">
        <ul>
          <li>
            <a href="/">Conditions of Use & Sale</a>
          </li>
          <li>
            <a href="/">Privacy Notice</a>
          </li>
          <li>
            <a href="/">Interest-Based Ads</a>
          </li>
        </ul>
        <span>© 1996-2021, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default Footer;
