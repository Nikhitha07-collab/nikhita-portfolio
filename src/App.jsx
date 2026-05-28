import "./App.css";

function App() {
  return (
    <div className="portfolio-root">

      {/* NAVBAR */}

      <nav className="nav">

        <a href="#" className="nav-logo">
          Nikhita<span className="nav-logo-dot">.</span>
        </a>

        <ul className="nav-links">

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#education">Education</a></li>

          <li>
            <a
              className="nav-cta"
              href="https://breast-ultrasound-ai-app-rpjenoks5pbx7wd9uevn28.streamlit.app/"
              target="_blank"
            >
              Live AI Demo
            </a>
          </li>

        </ul>

      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="hero-name">

          <span className="hero-first">
            Nikhita
          </span>

          <span className="hero-last">
            Kanneganti
          </span>

        </div>

        <h2 className="hero-role">
          BIOMEDICAL ENGINEER • HEALTHCARE AI • MEDICAL IMAGING
        </h2>

        <p className="hero-intro">
          Biomedical Engineering graduate student focused on healthcare AI,
          medical imaging, AI-assisted diagnostics, prosthetic design,
          intelligent healthcare systems, and real-world biomedical
          applications.
        </p>

        <div className="hero-actions">

          <a
            href="#projects"
            className="btn btn-primary"
          >
            View Projects
          </a>

          <a
            href="https://www.linkedin.com/in/nikhitha-kanneganti/"
            target="_blank"
            className="btn btn-ghost"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Nikhitha07-collab"
            target="_blank"
            className="btn btn-ghost"
          >
            GitHub
          </a>

        </div>

      </section>

      {/* ABOUT */}

      <section className="section" id="about">

        <p className="section-label">
          ABOUT ME
        </p>

        <h2 className="section-title">
          Building AI Solutions for Better Healthcare
        </h2>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I am currently pursuing a Master’s degree in Biomedical
              Engineering at Southern Illinois University Carbondale with
              focus areas in healthcare AI, medical imaging, biomedical
              software systems, prosthetic design, and intelligent
              healthcare technologies.
            </p>

            <p>
              My work includes AI-assisted breast ultrasound diagnostic
              systems using CNN and U-Net architectures, healthcare
              monitoring systems, and biomedical application development.
            </p>

            <p>
              I enjoy combining artificial intelligence, biomedical
              research, software engineering, and healthcare innovation
              to create impactful patient-centered technologies.
            </p>

          </div>

          <div className="about-stats">

            <div className="stat-card">

              <div className="stat-number">
                AI
              </div>

              <span className="stat-label">
                Medical Imaging Systems
              </span>

            </div>

            <div className="stat-card">

              <div className="stat-number">
                4+
              </div>

              <span className="stat-label">
                Biomedical Projects
              </span>

            </div>

            <div className="stat-card">

              <div className="stat-number">
                3D
              </div>

              <span className="stat-label">
                Prosthetic CAD Design
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section className="section section-alt" id="skills">

        <p className="section-label">
          TECHNICAL SKILLS
        </p>

        <h2 className="section-title">
          Healthcare AI & Biomedical Technologies
        </h2>

        <div className="skills-grid">

          <div className="skill-card">

            <div className="skill-card-header">
              <h3>Medical Imaging</h3>
            </div>

            <div className="skill-tags">

              <span className="skill-tag">Ultrasound Imaging</span>

              <span className="skill-tag">CNN</span>

              <span className="skill-tag">U-Net</span>

              <span className="skill-tag">Segmentation</span>

              <span className="skill-tag">DICOM</span>

            </div>

          </div>

          <div className="skill-card">

            <div className="skill-card-header">
              <h3>AI / Machine Learning</h3>
            </div>

            <div className="skill-tags">

              <span className="skill-tag">TensorFlow</span>

              <span className="skill-tag">Keras</span>

              <span className="skill-tag">OpenCV</span>

              <span className="skill-tag">Deep Learning</span>

            </div>

          </div>

          <div className="skill-card">

            <div className="skill-card-header">
              <h3>Programming</h3>
            </div>

            <div className="skill-tags">

              <span className="skill-tag">Python</span>

              <span className="skill-tag">MATLAB</span>

              <span className="skill-tag">Streamlit</span>

              <span className="skill-tag">C</span>

            </div>

          </div>

          <div className="skill-card">

            <div className="skill-card-header">
              <h3>CAD & Biomedical Design</h3>
            </div>

            <div className="skill-tags">

              <span className="skill-tag">Fusion 360</span>

              <span className="skill-tag">SOLIDWORKS</span>

              <span className="skill-tag">AutoCAD</span>

              <span className="skill-tag">3D Modeling</span>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="section" id="projects">

        <p className="section-label">
          FEATURED PROJECTS
        </p>

        <h2 className="section-title">
          Biomedical AI & Healthcare Solutions
        </h2>

        <div className="featured-project">

          <div className="featured-num">
            01
          </div>

          <div className="featured-body">

            <span className="featured-badge-pill">
              Featured AI Project
            </span>

            <h3>
              Breast Ultrasound AI Diagnostic Support System
            </h3>

            <p>
              Developed an AI-assisted breast ultrasound diagnostic
              application using deep learning models including U-Net
              segmentation and CNN-based classification for normal,
              benign, and malignant lesion prediction.
            </p>

            <div className="project-tags">

              <span className="project-tag">TensorFlow</span>

              <span className="project-tag">CNN</span>

              <span className="project-tag">U-Net</span>

              <span className="project-tag">Medical Imaging</span>

              <span className="project-tag">Streamlit</span>

            </div>

            <br />

            <div className="project-links">

              <a
                href="https://breast-ultrasound-ai-app-rpjenoks5pbx7wd9uevn28.streamlit.app/"
                target="_blank"
                className="btn btn-primary"
              >
                Live AI Demo
              </a>

              <a
                href="https://github.com/Nikhitha07-collab/Breast-Ultrasound-AI-App"
                target="_blank"
                className="btn btn-ghost"
              >
                GitHub Repo
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* EDUCATION */}

      <section className="section section-alt" id="education">

        <p className="section-label">
          EDUCATION
        </p>

        <h2 className="section-title">
          Academic Background
        </h2>

        <div className="edu-timeline">

          <div className="edu-item">

            <div className="edu-dot"></div>

            <div className="edu-content">

              <h3>
                Southern Illinois University Carbondale
              </h3>

              <p className="edu-period">
                2024 — 2026
              </p>

              <p className="edu-degree">
                Master of Science in Biomedical Engineering
              </p>

            </div>

          </div>

          <div className="edu-item">

            <div className="edu-dot"></div>

            <div className="edu-content">

              <h3>
                Vignan University
              </h3>

              <p className="edu-period">
                2019 — 2023
              </p>

              <p className="edu-degree">
                Bachelor of Technology in Biomedical Engineering
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="section section-contact">

        <p className="section-label">
          CONTACT
        </p>

        <h2 className="contact-heading">
          Let’s Build the Future of <em>Healthcare AI</em>
        </h2>

        <p className="contact-sub">
          Open to biomedical engineering, healthcare AI,
          medical imaging, prosthetic design, and research
          collaboration opportunities.
        </p>

        <div className="contact-details">

          <a
            href="mailto:nikhitakanneganti07@gmail.com"
            className="contact-link"
          >
            nikhitakanneganti07@gmail.com
          </a>

          <span className="contact-sep">•</span>

          <a
            href="https://www.linkedin.com/in/nikhitha-kanneganti/"
            target="_blank"
            className="contact-link"
          >
            LinkedIn
          </a>

          <span className="contact-sep">•</span>

          <a
            href="https://github.com/Nikhitha07-collab"
            target="_blank"
            className="contact-link"
          >
            GitHub
          </a>

        </div>

      </section>

      <footer className="footer">
        © 2026 Nikhita Kanneganti • Biomedical Engineering Portfolio
      </footer>

    </div>
  );
}

export default App;
