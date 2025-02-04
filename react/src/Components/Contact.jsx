import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID, // Your service ID
        import.meta.env.VITE_EMAIL_TEMPLATE_ID, // Your template ID
        formData, // The data from the form
        import.meta.env.VITE_EMAIL_PUBLIC_KEY // Your public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setIsSent(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.error("Failed to send email:", err);
          setError("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-500 min-h-screen flex flex-col items-center text-white px-4 py-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Contact me</h1>
        <p className="text-lg">
        I appreciate open communication and encourage any questions, feedback, or opportunities for collaboration. Feel free to reach out by filling out the contact form below!
        </p>
      </header>

      <form onSubmit={handleSubmit} className="bg-blue-700 p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-blue-600 text-white placeholder-gray-300 border border-blue-400 focus:outline-none focus:ring focus:ring-yellow-400"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-blue-600 text-white placeholder-gray-300 border border-blue-400 focus:outline-none focus:ring focus:ring-yellow-400"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-blue-600 text-white placeholder-gray-300 border border-blue-400 focus:outline-none focus:ring focus:ring-yellow-400"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-blue-600 text-white placeholder-gray-300 border border-blue-400 focus:outline-none focus:ring focus:ring-yellow-400"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-blue-900 font-bold py-2 rounded-lg hover:bg-yellow-300 transition"
        >
          Send Message
        </button>
        {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Contact;
