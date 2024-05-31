import React from "react";
import "../css/Products.css";
import product from "../assets/images/flower.png";
import product1 from "../assets/images/flower1.png";

function Products() {
  return (
    <div className="section">
      <div className="container">
        <div className="row text-center">
          <div className="heading">
            <span>Our Trending Products</span>
          </div>
          <h2 className="about-heading" style={{ paddingBottom: "60px" }}>
            Products That Make Remark
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="product">
              <div className="sub-product">
                <img src={product} alt="" />

                <h3>Pipes & Tubes</h3>
                <button type="button" className="btn btn-primary">
                  About Us
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product">
              <div className="sub-product">
                {<img src={product1} alt="" />}

                <h3>Pipes & Tubes</h3>
                <button type="button" className="btn btn-primary">
                  About Us
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product">
              <div className="sub-product">
                <img src={product} alt="" />

                <h3>Pipes & Tubes</h3>
                <button type="button" className="btn btn-primary">
                  About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
