import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-700 leading-relaxed">
        Have questions, suggestions, or feedback? We'd love to hear from you! Feel free to reach out to us using the
        contact information below:
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p className="text-gray-700 leading-relaxed">support@[yourstore].com</p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Phone</h2>
        <p className="text-gray-700 leading-relaxed">+1 (123) 456-7890</p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p className="text-gray-700 leading-relaxed">
          123 Main Street,
          <br />
          Cityville, Country
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
        <form>
          {/* Include your contact form fields here */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>

          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
