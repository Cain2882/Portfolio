function Contact() {
  return (
    <section id="contact" className="py-16 bg-serene-600 text-white">
      <div className="blog-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info Section */}
          <div className="fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-serene-700 text-serene-50 font-medium text-sm mb-6">
              Get In Touch
            </span>
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-serene-50 mb-8">
              Have a vision of product in mind or interested in working together? I'd love to hear from you.
              Fill out the form, and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-serene-700 flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-serene-100">Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-serene-700 flex items-center justify-center mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-serene-100">antonytcain@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-serene-700 flex items-center justify-center mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-serene-100">+91-9940578462</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Cain2882"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-serene-700 flex items-center justify-center hover:bg-serene-800 transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/cain-antony-415852300/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-serene-700 flex items-center justify-center hover:bg-serene-800 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://x.com/CainAntony2882"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-serene-700 flex items-center justify-center hover:bg-serene-800 transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-800 text-xl font-semibold mb-4">Send Me a Message</h3>

              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serene-400 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serene-400 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serene-400 focus:border-transparent outline-none transition-all"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-serene-400 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-serene-500 hover:bg-serene-600 text-white rounded-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
