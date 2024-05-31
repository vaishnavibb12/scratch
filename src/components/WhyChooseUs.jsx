import React from "react";
import "../css/WhyChooseUs.css";
import logo from "../assets/images/logo-nature.png";

function WhyChooseUs() {
  return (
    <>
      <div className="section df">
        <div className="row text-center">
          <h2 className="about-heading" style={{ paddingBottom: "20px" }}>
            Welcome To Natures
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section sd">
                <div className="background-image">
                  <div className="overimage">
                    <div className="right">
                      <div className="center">
                        <img src={logo} alt="" />
                      </div>
                      <div className="left">
                        <h2 className="about-heading">Welcome To Natures</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Minus et deleniti nesciunt sint eligendi
                          reprehenderit reiciendis, quibusdam illo, beatae quia
                          fugit consequatur laudantium velit magnam error.
                          Consectetur distinctio fugit doloremque.
                        </p>
                        <button type="button" className="btn btn-primary">
                          About Us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
