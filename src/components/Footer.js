import React from 'react'
import "./FooterStyles.css"
import { Link } from 'react-router-dom';
import { FaFacebook ,FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col solutions">
          <h6>Solutions</h6>
          <ul>
            <li>
              {" "}
              <Link to="/" className="Link">Marketing</Link>
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Analytics</Link>
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Commerce</Link>
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Insights</Link>
            </li>
          </ul>
        </div>

        <div className="col support">
          <h6>Support</h6>
          <ul>
            <li>
              {" "}
              <Link to="/" className="Link">Pricing</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Documentation</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Guides</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Api Status</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="col company">
          <h6>Company</h6>
          <ul>
            <li>
              {" "}
              <Link to="/" className="Link">About</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Blog</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Jobs</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Press</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="col legal">
          <h6>Legal</h6>
          <ul>
            <li>
              {" "}
              <Link to="/" className="Link">Claim</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Privacy</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Cookies</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="Link">Terms</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="col-subscribe">
          <h6>Subscribe to our newsletter</h6>
          <p>
            The latest news , articles and resources sent to your inbox weekly.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="content">
          <div className="rights">
            <p>&copy; Workflow , Inc. all rights reserved.</p>
          </div>
          
          <div>
            <FaFacebook
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaInstagram
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer