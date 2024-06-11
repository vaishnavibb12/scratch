import React, { useState, useRef } from "react";
import "../css/Getintouch.css";
import Iframe from "react-iframe";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Getintouch() {
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
        </div>
      </div>
    </div>
  );
}

export default Getintouch;
