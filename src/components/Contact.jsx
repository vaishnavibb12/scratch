import { TypeAnimation } from "react-type-animation";
import "../css/Contact.css";
import Contactdemo from "./Contactdemo";
import Email from "./Email";
import Addressdemo from "./Addressdemo";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const notify = () => toast("Message Send Sucessfully😁👍!");
  return (
    <div className="section">
      <div className="container">
        <div className="row text-center">
          <TypeAnimation
            sequence={[`Get In Touch!\n We Believe\.`, 1000, ""]}
            speed={20}
            repeat={Infinity}
          />
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div className="ldfginks">
              <div className="gh">
                <Link to="/Contactdemo">Contact</Link>
                <Link to="/Email">Email</Link>
                <Link to="/Addressdemo">Address</Link>
              </div>

              <Routes>
                <Route path="/Addressdemo" element={<Addressdemo />} />
                <Route path="/Email" element={<Email />} />
                <Route path="/Contactdemo" element={<Contactdemo />} />
              </Routes>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="input-form">
              <form action="#">
                <div className="col-lg-12">
                  <fieldset>
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
                <div className="col-md-12">
                  <fieldset>
                    <button
                      onClick={notify}
                      type="button"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                    <ToastContainer />
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
