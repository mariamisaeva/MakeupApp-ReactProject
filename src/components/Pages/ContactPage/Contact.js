import React, { useState } from 'react';
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [messageSent, setMessageSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessageSent(true);

        setFormData({  // Reset form fields
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='contact-page'>
            <div className='contact-form'>
                <h1 className='contact-title'>Contact Us</h1>
                {messageSent && <p className='contact-message'>Your message has been successfully sent!</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='contact-label' htmlFor="name">Name:</label>
                        <input className='contact-input' type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label className='contact-label' htmlFor="email">Email:</label>
                        <input className='contact-input' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label className='contact-label' htmlFor="message">Message:</label>
                        <textarea className='contact-textarea' id="message" name="message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button className='contact-button' type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
