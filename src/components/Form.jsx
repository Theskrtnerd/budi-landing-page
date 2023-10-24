import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../style";
import { ComputersCanvas } from './canvas'


const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function ContactForm() {
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => {
        alert("Success!");
        setForm(initialFormState); // Reset form values
      })
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen" id="joinus">
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-[900px] bg-pri-100 p-8 rounded-3xl"
        >
          <p className="text-sec-100">Join the movement</p>
          <h3 className="text-white font-black md:text-[30px] sm:text-[24px] xs:text-[20px] text-[16px]">
          Join the exclusive waitlist!
          </h3>
  
          <form
            name="contact"
            data-netlify="true"
            className="mt-4 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-2">
              <label htmlFor="name" className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="w-[840px] bg-tertiary py-2 px-3 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="w-[840px] bg-tertiary py-2 px-3 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="flex flex-col">
                <span className="text-white font-medium mb-2">Who do you shop with?</span>
              </label>
              <textarea
                rows={4}
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Adidas/Nike/Uniqlo/etc"
                className="w-[840px] bg-tertiary py-2 px-3 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </div>
            <div className="flex justify-center items-center">

            <button
              type="submit"
              className="justify-center items-center bg-sec-100 py-2 px-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary"
            >
              Send
            </button>
            </div>
          </form>
        </motion.div>

      </div>
    </div>
  );
  }  

export default ContactForm;
