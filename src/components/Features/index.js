import { Button } from "@mui/material";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { GiHandWing } from "react-icons/gi";
import { GiDramaMasks } from "react-icons/gi";
import { BsWatch } from "react-icons/bs";

const FeaturesSec = () => {
  return (
    <section className="effortless-section d-flex align-items-center justify-content-between">
      <div className="image-stack">
        <img
          src="https://www.simplyinked.in/cdn/shop/files/home-page-new.png?v=1724742156"
          alt="Tattoo on Hand"
          className="img1"
        />
      </div>
      <div className="text-content">
        <h2>EFFORTLESS EXPRESSION, THOUGHTFULLY DESIGNED</h2>
        <p>
          At InkX, we believe that every design tells a story — your story. Our tattoos are crafted to celebrate individuality with style, simplicity, and grace. Discover why our customers trust us for meaningful, temporary expression:
        </p>
        <ul className="features-list">
          <li className="d-flex align-items-center">
          <GiHandWing className="feature-icon"/>
            <div className="feature-text">
            <strong className="feature-semitext"> 1. SEAMLESS EXPERIENCE <GiHandWing className="feature-icon-mobile"/></strong>
            <br />
            Enjoy smooth, hassle-free application and removal. No complications — just clean, elegant results.
            </div>
          </li>
          <li className="d-flex align-items-center">
            <GiDramaMasks className="feature-icon"/>
            <div className="feature-text">
            <strong className="feature-semitext">2. MEANINGFUL, YET TEMPORARY  <GiDramaMasks className="feature-icon-mobile"/></strong>
            <br />
            Express yourself with confidence. Our designs let you explore your identity without permanent commitment.
            </div>
          </li>
          <li className="d-flex align-items-center">
            <BsWatch className="feature-icon"/>
            <div className="feature-text">
            <strong className="feature-semitext">3. TIMELESS DESIGNS <BsWatch className="feature-icon-mobile" /></strong>
            <br />
            Our curated collection features refined, eye-catching artwork made to complement every style — subtle, bold, or in between.
            </div>
          </li>
        </ul>
        <Button className="shop-btn">
          Shop Now <FiArrowRight className="ms-2" />
        </Button>
      </div>
    </section>
  );
};

export default FeaturesSec;
