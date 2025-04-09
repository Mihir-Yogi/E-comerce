import { IoDiamondSharp } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { Palette } from "lucide-react";
import { GiStorkDelivery } from "react-icons/gi";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                    <IoDiamondSharp style={{marginRight:"5px"}}/><span>Premium Quality Tattoos</span>
                    </div>
                    <div className="col d-flex align-items-center">
                    <FaHandHoldingWater style={{marginRight:"5px"}}/><span>Water & Sweat Resistant</span>
                    </div>
                    <div className="col d-flex align-items-center">
                    <Palette style={{marginRight:"5px"}}/><span> Custom Design Services</span>
                    </div>
                    <div className="col d-flex align-items-center">
                    <GiStorkDelivery style={{marginRight:"5px"}}/><span> Fast & Reliable Delivery</span>
                    </div>
                </div>

                <div className="footer-container mt-3">
        {/* 👉 Replace this with your actual logo image */}
        <div className="footer-left">
          <h2 className="logo">
            InkX <span className="sub-logo">TATTOOS</span>
          </h2>
            <ul className="footer-links">
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Shipping Policy</a></li>
                <li><a href="/">Refund Policy</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Service</a></li>
            </ul>
        </div>

        <div className="footer-center mt-5">
          <p className="subscribe-text">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <div className="email-input-wrapper">
          <input 
                type="email" 
                placeholder="Enter your email"
                style={{
                border: 'none',
                borderBottom: '1px solid #000',
                outline: 'none',
                padding: '8px 12px',
                fontSize: '14px',
                backgroundColor: 'transparent',
                color: '#000'
            }} 
                />
            <span className="email-icon"><MdEmail/></span>
          </div>
          <div className="social-icons">
            <FaSquareInstagram/>
            <FaFacebookSquare/>
            <FaXTwitter/>
            <FaPinterestSquare/>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 InkX Tattoos proudly made in INDIA 🇮🇳
            </div>
      </div>
        </footer>
    );
}
export default Footer;