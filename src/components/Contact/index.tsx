import React, { useState } from "react";
import "./style.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const data = new FormData();
    data.append("Name", formData.Name);
    data.append("Email", formData.Email);
    data.append("Phone", formData.Phone);
    data.append("Subject", formData.Subject);
    data.append("Message", formData.Message);

    // Replace with your API endpoint to handle form submission
    const sheetUrl = "https://script.google.com/macros/s/AKfycbztO84YozsxkytHR9B6zCQ2rTBf4j9R3WipULkx8rZN4ZU8EAoOmoC-StSwkwQoCTn9/exec";

    try {
      await fetch(sheetUrl, {
        method: "POST",
        body: data,
      });

      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        Subject: "",
        Message: "",
      });
    } catch (error) {
      console.log("Error submitting the form:", error);
    }
  };

  return (
    <div className="Contact py-4">
      <h1 className="text-black text-2xl text-center">Reach Out!</h1>
      <div className="flex-center">
        <form className="w-full flex flex-col lg:flex-row p-4 items-start justify-center gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              className="text-black border-2 border-[#016fb9] rounded-md p-3"
              placeholder="Your Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              type="text"
              required
            />
            <input
              className="text-black border-2 border-[#016fb9] rounded-md p-3"
              placeholder="Your Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              type="email"
              required
            />
            <input
              className="text-black border-2 border-[#016fb9] rounded-md p-3"
              placeholder="Your Phone number"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              type="tel"
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="text-black border-2 border-[#016fb9] rounded-md p-3"
              placeholder="The subject"
              name="Subject"
              value={formData.Subject}
              onChange={handleChange}
              type="text"
            />
            <textarea
              className="text-black border-2 border-[#016fb9] rounded-md p-3"
              placeholder="Your Message"
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              type="text"
              rows={4}
            />
            <button type="submit" className="self-end w-52 text-xl bg-primary p-3 rounded-md">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
