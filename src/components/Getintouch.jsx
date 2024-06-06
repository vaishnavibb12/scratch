import React from "react";
import "../css/Getintouch.css";
import Iframe from "react-iframe";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Getintouch() {
  return (
    <div className="section nm">
      <div className="container">
        <div className="new">
          <div className="zxc">
            {" "}
            <div className="map">
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118615!3d19.082250749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1717660059963!5m2!1sen!2sin"
                width="100%"
                height="100%    "
                id=""
                className=""
                display="block"
                position="relative"
              />
            </div>
          </div>
          <div className="asd">
            <div className="emo mk">
              <MdEmail />
              <p>vaishnvi@gmail.com</p>
            </div>
            <div className="emo mk">
              <FaLocationDot />
              <p>
                Level 7, Plot, C, FIFC Building, 54&55, G Block BKC, Bandra
                East, Mumbai, Maharashtra 400051
              </p>
            </div>
            <div className="emo mk">
              <IoCallSharp />
              <p>1234567878</p>
            </div>
            <div className="input-form sd">
              <form action="#">
                <div className="col-lg-12">
                  <fieldset>
                    <h3>Get In Touch</h3>
                    <input
                      // ref="name"
                      type="text"
                      size="30"
                      placeholder="Name"
                    />
                    <br />
                    <input
                      // refs="email"
                      type="text"
                      size="30"
                      placeholder="Email"
                    />
                    <br />
                    <input
                      // refs="phone"
                      type="text"
                      size="30"
                      placeholder="Phone"
                    />
                    <br />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea
                      // refs="message"
                      cols="40"
                      rows="20"
                      className="comments"
                      placeholder="Message"
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea
                      // refs="message"
                      cols="40"
                      rows="20"
                      className="comments"
                      placeholder="Message"
                    />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="button" className="btn btn-primary">
                      Submit
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getintouch;
