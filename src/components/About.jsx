import React from "react";
import "../css/About.css";
import we from "../assets/images/we.png";
import { IoBagCheckSharp } from "react-icons/io5";
import { AiFillBank } from "react-icons/ai";
import { IoDiamondSharp } from "react-icons/io5";
import { FaRegHandPeace } from "react-icons/fa6";

function About() {
  return (
    <div className="section">
      <div className="container">
        <div className="row text-center">
          <h2>About us</h2>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="rightimg">
              <img src={we} alt="About Us" />
            </div>
          </div>
          <div className="col-lg-7">
            <h2 className="about-heading">Welcome To Natures</h2>
            <p>
              Inox Steel India is known for Staonless Steel Pipe, Stainless
              Steel Seameless Pipe, Stainless Steel Welded Pipe, Stainless Steel
              ERW Pipe and Large Diameter pipe manufacturing and supplying
              India.
            </p>
            <p>
              Inox Steel India is known for Staonless Steel Pipe, Stainless
              Steel Seameless Pipe, Stainless Steel Welded Pipe, Stainless Steel
              ERW Pipe and Large Diameter pipe manufacturing and supplying
              India.
            </p>
            <p>
              Inox Steel India is known for Staonless Steel Pipe, Stainless
              Steel Seameless Pipe, Stainless Steel Welded Pipe, Stainless Steel
              ERW Pipe and Large Diameter pipe manufacturing and supplying
              India.
            </p>
            <p>
              Inox Steel India is known for Staonless Steel Pipe, Stainless
              Steel Seameless Pipe, Stainless Steel Welded Pipe, Stainless Steel
              ERW Pipe and Large Diameter pipe manufacturing and supplying
              India.
            </p>
            <p>
              Inox Steel India is known for Staonless Steel Pipe, Stainless
              Steel Seameless Pipe, Stainless Steel Welded Pipe, Stainless Steel
              ERW Pipe and Large Diameter pipe manufacturing and supplying
              India.
            </p>
            <p>
              Inox Steel India is known for Staonless Steel Pipe, Stainless
              Steel Seameless Pipe, Stainless Steel Welded Pipe, Stainless Steel
              ERW Pipe and Large Diameter pipe manufacturing and supplying
              India.
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul class="reason-list">
                  <li>
                    <span>
                      <IoBagCheckSharp />
                    </span>
                    EXPERT &amp; PROFESSIONAL
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul class="reason-list">
                  <li>
                    <span>
                      <IoDiamondSharp />
                    </span>
                    PROFESSIONAL APPROACH
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul class="reason-list">
                  <li>
                    <span>
                      <AiFillBank />
                    </span>
                    THIRD-PARTY INSPECTION
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul class="reason-list">
                  <li>
                    <span>
                      <FaRegHandPeace />
                    </span>
                    SATISFACTION GUARANTEE
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" className="btn btn-primary">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
