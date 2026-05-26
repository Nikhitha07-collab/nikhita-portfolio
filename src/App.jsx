import "./App.css";

function App() {
  return (
    <main className="portfolio-root">
      <div className="bg-grid"></div>
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>

      <nav className="nav nav-scrolled">
        <a href="#home" className="nav-logo">
          Nikhita<span className="nav-logo-dot">.</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li>
            <a
              href="https://www.linkedin.com/in/nikhitha-kanneganti/"
              target="_blank"
              className="nav-cta"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-badge-row">
          <span className="hero-badge">
            <span className="pulse-dot"></span>
            Biomedical AI Portfolio
          </span>
        </div>

        <h1 className="hero-name">
          <span className="hero-first">Nikhita</span>
          <span className="hero-last">Kanneganti</span>
        </h1>

        <p className="hero-role">
          Biomedical AI Developer • Medical Imaging • Healthcare Technology
        </p>

        <p className="hero-intro">
          Biomedical Engineering graduate student focused on healthcare AI,
          medical imaging, diagnostic support systems, and real-world AI
          application deployment.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
      </section>

      <section className="section" id="about">
        <p className="section-label">ABOUT</p>
        <h2 className="section-title">Building AI tools for healthcare.</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am pursuing my Master’s in Biomedical Engineering at Southern
              Illinois University Carbondale. My interests include medical
              imaging, healthcare AI, biomedical instrumentation, diagnostic
              support systems, and practical AI applications for patient care.
            </p>

            <p>
              My work combines biomedical engineering knowledge with software
              tools such as Python, TensorFlow, OpenCV, Streamlit, and DICOM
              processing to build usable healthcare technology projects.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">MS</span>
              <span className="stat-label">Biomedical Engineering</span>
            </div>

            <div className="stat-card">
              <span className="stat-number">AI</span>
              <span className="stat-label">Medical Imaging Focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="skills">
        <p className="section-label">SKILLS</p>
        <h2 className="section-title">Technical strengths.</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-icon">▣</span>
              <h3>AI / Software</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">CNN</span>
              <span className="skill-tag">U-Net</span>
              <span className="skill-tag">OpenCV</span>
              <span className="skill-tag">Streamlit</span>
              <span className="skill-tag">GitHub</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-icon">✦</span>
              <h3>Biomedical Tools</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">MATLAB</span>
              <span className="skill-tag">Arduino</span>
              <span className="skill-tag">AutoCAD</span>
              <span className="skill-tag">Fusion 360</span>
              <span className="skill-tag">COMSOL</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header">
              <span className="skill-icon">＋</span>
              <h3>Healthcare Tech</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">DICOM</span>
              <span className="skill-tag">Ultrasound AI</span>
              <span className="skill-tag">Medical Imaging</span>
              <span className="skill-tag">Diagnostics</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-label">PROJECTS</p>
        <h2 className="section-title">Featured work.</h2>

        <div className="featured-project">
          <div className="featured-num">01</div>

          <div className="featured-body">
            <span className="featured-badge-pill">Live AI App</span>
            <h3>Breast Ultrasound AI Diagnostic Support System</h3>

            <p>
              Deployed a healthcare AI application that analyzes breast
              ultrasound images, segments lesion regions, classifies scans as
              normal, benign, or malignant, supports DICOM uploads, and
              generates an AI-assisted diagnostic note.
            </p>

            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">TensorFlow</span>
              <span className="project-tag">U-Net</span>
              <span className="project-tag">CNN</span>
              <span className="project-tag">Streamlit</span>
              <span className="project-tag">DICOM</span>
            </div>

            <div className="project-links">
              <a
                href="https://breast-ultrasound-ai-app-rpjenoks5pbx7wd9uevn28.streamlit.app/"
                target="_blank"
                className="btn btn-primary btn-sm"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Nikhitha07-collab/Breast-Ultrasound-AI-App"
                target="_blank"
                className="btn btn-ghost btn-sm"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <p className="project-card-num">02</p>
            <h3>IoT Based Paralysis Monitoring System</h3>
            <p className="project-card-desc desc-visible">
              Designed an IoT-enabled monitoring system for paralysis patients
              with real-time data analysis and alert support.
            </p>
          </div>

          <div className="project-card">
            <p className="project-card-num">03</p>
            <h3>Smart Glove for Hearing and Speech Impaired</h3>
            <p className="project-card-desc desc-visible">
              Developed a gesture-recognition smart glove concept for assistive
              communication.
            </p>
          </div>

          <div className="project-card">
            <p className="project-card-num">04</p>
            <h3>Ultrasonic Nebulizer</h3>
            <p className="project-card-desc desc-visible">
              Designed an ultrasonic nebulizer system for respiratory therapy
              and improved medication delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="education">
        <p className="section-label">EDUCATION</p>
        <h2 className="section-title">Academic background.</h2>

        <div className="edu-timeline">
          <div className="edu-item">
            <span className="edu-dot"></span>
            <div className="edu-content">
              <p className="edu-period">2024 – 2026</p>
              <h3>Southern Illinois University Carbondale</h3>
              <p className="edu-degree">Master’s in Biomedical Engineering</p>
            </div>
          </div>

          <div className="edu-connector"></div>

          <div className="edu-item">
            <span className="edu-dot"></span>
            <div className="edu-content">
              <p className="edu-period">2019 – 2023</p>
              <h3>Vignan University</h3>
              <p className="edu-degree">
                B.Tech in Biomedical Engineering | CGPA: 8.64 / 10
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-contact" id="contact">
        <h2 className="contact-heading">
          Let’s build <em>healthcare AI</em>.
        </h2>

        <p className="contact-sub">
          Open to healthcare AI, biomedical software, medical imaging, and
          diagnostic support system opportunities.
        </p>

        <div className="contact-details">
          <a
            href="mailto:nikhitakanneganti07@gmail.com"
            className="contact-link"
          >
            nikhitakanneganti07@gmail.com
          </a>

          <span className="contact-sep">•</span>
          <span className="contact-location">Carbondale, Illinois</span>
        </div>

        <div className="contact-actions">
          <a
            href="https://www.linkedin.com/in/nikhitha-kanneganti/"
            target="_blank"
            className="btn btn-primary"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Nikhitha07-collab/Breast-Ultrasound-AI-App"
            target="_blank"
            className="btn btn-ghost"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Nikhita Kanneganti • Biomedical AI Portfolio</p>
      </footer>
    </main>
  );
}

export default App;