import React from "react";
import "../css/Footer.css";
import Foot from "../assets/images/logo-nature.png";
import Icons from "./Icons";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="sections">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Icons />
            </div>
            <div className="row df">
              <div className="col-md-3">
                <div className="para">
                  <img src={Foot} alt="" />
                  <p>qweewrfe fdfefrf fdfdfdf dsed</p>
                </div>
              </div>
              <div className="col-md-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="icons">
                  <li>
                    <a href="#!" className="text-black">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className="text-uppercase">Links</h5>

                <ul className="icons">
                  <li>
                    <a href="#!" className="text-black">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-black">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className="text-uppercase">Links</h5>
                <p>sjojffjlmcdfvmdkcmf </p>

                <div class="vc">
                  <FaInstagramSquare />
                  123445455435
                </div>

                <div class="vc">
                  <FaInstagramSquare />
                  12324345
                </div>
              </div>
            </div>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgb(248 249 250)" }}
            >
              © 2020 Copyright:
              <a className="text-black"> Vaishnvi.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
