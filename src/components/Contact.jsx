import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_qyonu08',      // Your Service ID
        'template_i4b48za',     // Your Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message
        },
        '2LSlVvQP_4hzRkDA-'     // Your Public Key
      )
      .then(() => {
        alert('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        alert('Failed to send message. Please try again.');
        console.error(err);
      });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-20">
      <div className="bg-[#15202b] rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Me</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-[#0b0f15] border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-[#0b0f15] border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="p-3 rounded-lg bg-[#0b0f15] border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
          ></textarea>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;