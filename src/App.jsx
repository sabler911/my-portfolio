import './App.css'

const Icon = ({ name, size = 22 }) => {
  const shared = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'github') {
    return (
      <svg {...shared} fill="currentColor" stroke="none" viewBox="0 0 24 24">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.11 5.52.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg {...shared} fill="currentColor" stroke="none" viewBox="0 0 24 24">
        <path d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.7v11.6H3.4V9Zm5.9 0h3.5v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.4 4.5 5.5v6.5h-3.7v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.9H9.3V9Z" />
      </svg>
    )
  }

  const shapes = {
    code: <><path d="m8 7-5 5 5 5" /><path d="m16 7 5 5-5 5" /><path d="m14 4-4 16" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11A22 22 0 0 1 12 15Z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /><path d="m16 8 5-5" /></>,
    external: <><path d="M14 3h7v7" /><path d="m10 14 11-11" /><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  }

  return <svg {...shared}>{shapes[name]}</svg>
}

const projects = [
  {
    title: 'AI Recipe Generator',
    description: 'Full-stack app that creates custom recipes from user ingredients using the Groq AI API.',
    image: '/recipe%20.png',
    alt: 'AI Recipe Generator project screenshot',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Groq API'],
    live: 'https://ai-recipe-app-inky.vercel.app/',
    source: 'https://github.com/sabler911/ai-recipe-app',
  },
  {
    title: 'Kickstore',
    description: 'Full-stack e-commerce platform with product search, cart, checkout, and order tracking.',
    image: '/kick%20.png',
    alt: 'Kickstore e-commerce project screenshot',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    live: 'https://sneaker-store-6q0gwhxw.vercel.app/',
    source: 'https://github.com/sabler911/sneaker-store',
  },
  {
    title: 'Job Tracker',
    description: 'A collaborative task management app with real-time updates, user authentication, and team workspaces.',
    image: '/job%20.png',
    alt: 'Job Tracker project screenshot',
    tags: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'JWT'],
    live: 'https://job-tracker-pi-flax.vercel.app/',
    source: 'https://github.com/sabler911/job-tracker',
  },
]

function App() {
  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="#home" aria-label="Kumar Dev home">
          <Icon name="code" size={34} />
          <span>Kumar <strong>Dev</strong></span>
        </a>
        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="/Kumar_Frederick_Resume.pdf" className="resume-btn" download><Icon name="download" size={17} /> Resume</a>
      </nav>

      <main className="portfolio">
        <header className="hero" id="home">
          <div className="hero-content">
            <p className="subtitle">SOFTWARE DEVELOPMENT PORTFOLIO</p>
            <h1>Full-Stack Developer <span className="cursor">|</span><br /><span className="highlight">Software Engineer</span></h1>
            <p className="description">
              I design, build, and deploy scalable, end-to-end web applications
              using modern technologies, clean code, and real-world problem solving.
            </p>
            <div className="hero-buttons">
              <a href="/Kumar_Frederick_Resume.pdf" className="btn-primary" target="_blank" rel="noreferrer"><Icon name="download" size={19} /> View Resume</a>
              <a href="#contact" className="btn-secondary"><Icon name="mail" size={19} /> Contact Me</a>
              <a href="https://github.com/sabler911" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub">
                <Icon name="github" size={23} />
              </a>
              <a href="https://www.linkedin.com/in/kumar-frederick-b9642756/" target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn">
                <Icon name="linkedin" size={23} />
              </a>
            </div>
          </div>
          <div className="hero-image" role="img" aria-label="Purple-lit developer workspace" />
        </header>

        <section className="stats-bar" aria-label="Portfolio highlights">
          <div className="stat">
            <Icon name="layers" size={35} />
            <div><h3>3</h3><p>Full-Stack Projects</p></div>
          </div>
          <div className="stat">
            <Icon name="code" size={35} />
            <div><h3>10+</h3><p>Technologies &amp; Tools</p></div>
          </div>
          <div className="stat">
            <Icon name="rocket" size={35} />
            <div><h3>End-to-End Development</h3><p>Design · Build · Deploy</p></div>
          </div>
          <div className="stat">
            <Icon name="target" size={35} />
            <div><h3>Job Ready</h3><p>Open to Full-Time, Contract, or Remote Roles</p></div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-header">
            <div>
              <h2>Featured Projects</h2>
              <p>A showcase of my recent full-stack projects, demonstrating real-world development, API integration, and database design.</p>
            </div>
            <a href="https://github.com/sabler911" target="_blank" rel="noreferrer" className="view-all-link">
              View All Projects <Icon name="arrow" size={17} />
            </a>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-main">
                  <div className="project-image">
                    <img src={project.image} alt={project.alt} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className="tech-tags">
                  {project.tags.map((tag, index) => (
                    <span key={tag}><i className={`tag-dot tag-${index}`} />{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-live">
                    Live Demo <Icon name="external" size={15} />
                  </a>
                  <a href={project.source} target="_blank" rel="noreferrer" className="btn-code">
                    <Icon name="github" size={18} /> GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-skills" id="about">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I am a Full Stack Developer with a unique background in Game Art and Animation.
              I combine a strong eye for design with technical expertise in React, Node.js, and database management.
              I love building scalable applications that solve real-world problems and am currently looking for my next opportunity in the tech industry.
            </p>
          </div>
          <div className="skills-content" id="skills">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category"><h3>Frontend</h3><p>React, JavaScript, HTML5, CSS3, Vite</p></div>
              <div className="skill-category"><h3>Backend</h3><p>Node.js, Express, REST APIs, PostgreSQL</p></div>
              <div className="skill-category"><h3>Tools &amp; Deployment</h3><p>Git, GitHub, Vercel, Render, Neon</p></div>
            </div>
          </div>
        </section>

        <footer className="contact-section" id="contact">
          <h2>Let&apos;s build something together.</h2>
          <p>I&apos;m currently open to full-time, contract, and remote opportunities.</p>
          <div className="contact-buttons">
            <a href="mailto:kumarfrederick@gmail.com" className="btn-primary">Email Me</a>
            <a href="https://www.linkedin.com/in/kumar-frederick-b9642756/" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
          </div>
          <p className="footer-text">© 2026 Kumar Frederick. Built with React.</p>
        </footer>
      </main>
    </>
  )
}

export default App
