import React from 'react';

const ContactInfoSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <hr className="border-t border-gray-300 mb-12" />
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl mb-4">Location</h2>
          <p className="text-gray-600">500 Terry Francine St.</p>
          <p className="text-gray-600">San Francisco, CA 94158</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl mb-4">Hours</h2>
          <p className="text-gray-600">Mon - Fri 9:00 am – 5:00 pm</p>
          <p className="text-gray-600">Saturday 9:00 am – 2:00 pm</p>
          <p className="text-gray-600">Sunday 9:00 am – 2:00 pm</p>
        </div>
        <div>
          <h2 className="text-3xl mb-4">Contact</h2>
          <p className="text-gray-600">123-456-7890</p>
          <p className="text-gray-600">info@mysite.com</p>
          <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
      <hr className="border-t border-gray-300 mt-12" />
    </div>
  );
};

export default ContactInfoSection;