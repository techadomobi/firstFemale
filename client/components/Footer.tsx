import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="container mx-auto px-6">
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
     
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
            <p className="text-sm leading-relaxed">
              We are committed to delivering top-notch web and mobile
              development services. Our goal is to help businesses thrive in the
              digital world with cutting-edge solutions and exceptional customer
              support.
            </p>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Get in Touch
            </h3>
            <ul className="space-y-2">
              <li>Email: info@yourcompany.com</li>
              <li>Phone: +1 (234) 567-890</li>
              <li>Address: 123 Main Street, City</li>
            </ul>
            <p className="text-sm mt-4">
              Feel free to reach out to us for any inquiries or collaboration
              opportunities.
            </p>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter and stay updated with the latest news
              and exclusive offers.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-gray-900 rounded-lg focus:outline-none mb-4"
              />
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

   
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 text-2xl transition duration-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 text-2xl transition duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 text-2xl transition duration-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 text-2xl transition duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

     
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All Rights
            Reserved.
          </p>
          <p className="text-xs mt-2">
            Built with ❤️ by Your Company. Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
