import { TypeAnimation } from "react-type-animation";
import "../css/Contact.css";
import Contactdemo from "./Contactdemo";
import Email from "./Email";
import Addressdemo from "./Addressdemo";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

function Contact() {
  const notify = () => toast("Message Send Sucessfully😁👍!");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    password: "",
    confirmPassword: "",
  });
  const form = useRef();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sxtx7vd", "template_z44etsf", form.current, {
        publicKey: "poPJWNtvXf5cjhB5j",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      // notify();
      toast.success("Message Send Sucessfully!!😁👍❤");
      console.log("Form submitted successfully!");
    } else {
      toast.error("Enter Details");
      console.log(`Form submission failed
         due to validation errors.`);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.user_name.trim()) {
      errors.user_name = "user_name is required";
    }

    if (!data.user_email.trim()) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.user_email)) {
      errors.user_email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = `Password must be at 
        least 8 characters long`;
    }

    // if (data.confirmPassword !== data.password) {
    //   errors.confirmPassword = "Passwords do not match";
    // }

    return errors;
  };

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
              <form onSubmit={handleSubmit} ref={form}>
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="User Name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                    />
                    {errors.user_name && (
                      <span className="error-message">{errors.user_name}</span>
                    )}
                    <br />
                    <input
                      className="form-input"
                      placeholder="Email"
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                    />
                    {errors.user_email && (
                      <span className="error-message">{errors.user_email}</span>
                    )}
                    <br />
                    <input
                      className="form-input"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <span className="error-message">{errors.password}</span>
                    )}

                    <br />
                  </fieldset>
                </div>
                {/* <div className="col-lg-12">
                  <fieldset>
                    <textarea
                      // refs="message"
                      cols="40"
                      rows="20"
                      className="comments"
                      placeholder="Message"
                    />
                  </fieldset>
                </div> */}
                <div className="col-md-12">
                  <fieldset>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      value="Send"
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
