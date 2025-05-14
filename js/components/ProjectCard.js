function ProjectCard({ project, delay = 0 }) {
  return (
    <div
      className="blog-card bg-white fade-in"
      style={{ animationDelay: `${delay}s` }}
      data-id="zdn0titxn"
      data-path="js/components/ProjectCard.js"
    >
      <div
        className="blog-card-image"
        data-id="cumgc92vb"
        data-path="js/components/ProjectCard.js"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          data-id="bttp150bu"
          data-path="js/components/ProjectCard.js"
        />
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          data-id="x7eoxtrvg"
          data-path="js/components/ProjectCard.js"
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-serene-500 text-white rounded-lg hover:bg-serene-600 transition-all m-2"
            data-id="1k6cgcx5r"
            data-path="js/components/ProjectCard.js"
          >
            View Project
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all m-2"
            data-id="0mt38w9x0"
            data-path="js/components/ProjectCard.js"
          >
            <i
              className="fab fa-github mr-2"
              data-id="10t342yvd"
              data-path="js/components/ProjectCard.js"
            ></i>
            GitHub
          </a>
        </div>
      </div>

      <div
        className="blog-card-content"
        data-id="7s8the5kj"
        data-path="js/components/ProjectCard.js"
      >
        <div
          className="flex flex-wrap mb-3"
          data-id="5mlrkkz74"
          data-path="js/components/ProjectCard.js"
        >
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="blog-tag bg-serene-50 text-serene-700"
              data-id="n28mxkoqp"
              data-path="js/components/ProjectCard.js"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3
          className="text-xl font-bold mb-2 hover:text-serene-600 transition-all"
          data-id="ed0wc3akl"
          data-path="js/components/ProjectCard.js"
        >
          {project.title}
        </h3>

        <p
          className="text-gray-600 mb-4"
          data-id="94bwfmjck"
          data-path="js/components/ProjectCard.js"
        >
          {project.description}
        </p>

        <div
          className="flex items-center justify-between"
          data-id="ppjrm3qys"
          data-path="js/components/ProjectCard.js"
        >
          <div
            className="flex items-center"
            data-id="r2g17t9ep"
            data-path="js/components/ProjectCard.js"
          >
            <span
              className="text-sm text-gray-500"
              data-id="02qca9qwt"
              data-path="js/components/ProjectCard.js"
            >
              {project.date}
            </span>
          </div>

          <button
            className="flex items-center text-serene-600 hover:text-serene-700 transition-all"
            data-id="abgtahnrl"
            data-path="js/components/ProjectCard.js"
          >
            <span
              className="mr-1 text-sm font-medium custom-underline"
              data-id="mkfkjdfwd"
              data-path="js/components/ProjectCard.js"
            >
              Details
            </span>
            <i
              className="fas fa-arrow-right text-xs"
              data-id="wfgibi13r"
              data-path="js/components/ProjectCard.js"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Chatbot",
      description:
        "A partially-completed chatbot created with gradient colors for an attractive look.",
      image:
        "https://t3.ftcdn.net/jpg/03/23/83/00/240_F_323830067_Qd0gNLxdF4bu7PfsPpkJtVr0dBtnGKpX.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      date: "August 2024",
      link: "https://food-menu-list-ai.netlify.app/",
      github: "https://github.com/Cain2882/Cain-Antony",
    },
    {
      id: 2,
      title: "Airlines Food Preference System (AI)",
      description:
        "AI web product developed to train and test datasets of passengers and food menu.",
      image:
        "https://assets.newatlas.com/dims4/default/fd80a14/2147483647/strip/true/crop/2505x1670+37+0/resize/1200x800!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F87%2F51%2Ffbb92a794d30b3e08e8a25b34048%2Fscreenshot-2024-05-22-at-4.15.57%20pm.png",
      technologies: ["Python"],
      date: "August to October 2024",
      link: "public/CAIN ANTONY MINIPROJECT.pdf", // ensure this file is in /public folder
      github: "https://github.com/Cain2882/Airlines-Food-Preference-System-",
    },
    {
      id: 3,
      title: "Somepo",
      description: "Website made for user's google authentication.",
      image:
        "https://static.tildacdn.com/tild3864-3466-4837-b362-373738653832/Google_auth.png",
      technologies: ["JavaScript", "HTML", "TOML", "JSON"],
      date: "December 2024 to January 2025",
      link: "https://somepo.netlify.app/",
      github:
        "https://github.com/Cain2882/Social-Media-Customized-Posting-with-AI",
    },
    {
      id: 4,
      title: "AI Copywriting Agent (AI)",
      description:
        "AI Copywriting Agent developed for LinkedIn and Tumblr for content creation.",
      image:
        "https://www.shutterstock.com/shutterstock/photos/2291224853/display_1500/stock-photo-artificial-intelligence-and-creativity-concept-ai-creative-services-copywriter-image-generators-2291224853.jpg",
      technologies: ["JavaScript", "Python", "HTML"],
      date: "December 2024 to Februrry 2025",
      link: "public/SINGLE CLICK MULTIPLE SOCIAL MEDIA POSTING WITH CUSTOMIZED COPYWRITING EACH.pdf", // ensure this file is in /public folder
      github: "https://github.com/Cain2882/AI-Copywriting-Agent",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-serene-50/50"
      data-id="06kx9xnht"
      data-path="js/components/ProjectCard.js"
    >
      <div
        className="blog-container"
        data-id="vb98sdg7c"
        data-path="js/components/ProjectCard.js"
      >
        <div
          className="text-center mb-12"
          data-id="vam6eohzu"
          data-path="js/components/ProjectCard.js"
        >
          <span
            className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-4"
            data-id="3uu55w99k"
            data-path="js/components/ProjectCard.js"
          >
            My Work
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-id="d1zox3pfm"
            data-path="js/components/ProjectCard.js"
          >
            Featured Projects
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            data-id="jy62q4ncr"
            data-path="js/components/ProjectCard.js"
          >
            A selection of my recent work showcasing AGI product creation.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-id="0af776bcw"
          data-path="js/components/ProjectCard.js"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={0.1 * index} />
          ))}
        </div>
      </div>
    </section>
  );
}
