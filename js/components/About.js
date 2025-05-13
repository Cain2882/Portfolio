function About() {
  return (
    <section className="about-section py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg mb-6">
          I'm Cain Antony, a Junior AI Product Developer passionate about building AGI-based solutions and futuristic applications.
        </p>
        <a
          href="/Cain Antony Resume.pdf"
          download="Cain Antony Resume.pdf"
          type="application/pdf"
          className="px-6 py-3 bg-serene-500 text-white rounded-lg hover:bg-serene-600 transition-all flex items-center"
        >
          <i className="fas fa-download mr-2"></i>
          Download My Resume
        </a>
      </div>
    </section>
  );
}

export default About;
