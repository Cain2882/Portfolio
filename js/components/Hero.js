function Hero() {
  return (
    <section className="hero-bg py-16 md:py-24">
      <div className="blog-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-6">Hello, I'm Cain Antony</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Junior AI<span className="gradient-text"> Product</span> Developer</h1>
            <p className="text-gray-600 text-lg mb-8">I'm in the junior level in creating and developing AGI products.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-serene-500 text-white rounded-lg hover:bg-serene-600 transition-all flex items-center justify-center">
                View Projects
                <i className="fas fa-arrow-right ml-2"></i>
              </button>

              <a
                href="C:/Users/Cain Antony/SCM/Cain Antony Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border-2 border-serene-300 text-serene-700 rounded-lg hover:bg-serene-50 transition-all flex items-center justify-center"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </a>
            </div>
          </div>

          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Professional developer"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-semibold mb-2">Creative Solutions</h3>
                <p className="text-white/80">Changing thoughts to reality through coding and developing</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow-lg transform hover:rotate-12 transition-all cursor-pointer">
                <i className="fas fa-heart text-serene-500"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
