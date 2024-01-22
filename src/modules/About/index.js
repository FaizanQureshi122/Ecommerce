
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-gray-700 leading-relaxed">
        Welcome to our online store! We are passionate about providing high-quality products and excellent
        customer service to our valued customers. Our goal is to make your online shopping experience
        enjoyable, simple, and stress-free.
      </p>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At [Your Store Name], we strive to offer a diverse selection of products to meet the unique
          needs and preferences of our customers. Our mission is to provide a convenient and secure
          online shopping platform where you can find the latest trends, top-quality items, and
          exceptional deals.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions, concerns, or feedback, please feel free to reach out to our
          customer support team. We are here to assist you and ensure that your shopping experience
          with us is positive and enjoyable.
        </p>
        <p className="text-gray-700 mt-2">Email: support@[yourstore].com</p>
      </div>
    </div>
  );
};

export default About;
