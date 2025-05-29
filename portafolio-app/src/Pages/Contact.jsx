import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaCalendarAlt } from "react-icons/fa";
import "../Pages/CSS/Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_s92k7xg", // Replace with your EmailJS service ID
            "template_omrxm9s", // Replace with your EmailJS template ID
            formData,
            "vHTGZrNx4ORrCkhva" // Replace with your EmailJS public key
        )
        .then(() => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch((error) => {
            alert("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", error);
        });
    };

    return (
        <section className="contact-section" id="contact">
            <h2>Contact Me</h2>

            {/* Social Media Icons */}
            <div className="social-icons">
                <a href="https://github.com/AbrahamZambranoTablante" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/abrahamzambranotablante/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}
