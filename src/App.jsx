import "./App.css";

function App() {
  return (
    <div className="portfolio-root">
      <nav className="nav">
        <a href="#" className="nav-logo">
          Nikhita<span className="nav-logo-dot">.</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
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

      <section className="hero">
        <div className="hero-name">
          <span className="hero-first">Nikhita</span>
          <span className="hero-last">Kanneganti</span>
        </div>

        <h2 className="hero-role">
          BIOMEDICAL ENGINEER • MEDICAL IMAGING • CLINICAL APPLICATIONS • HEALTHCARE AI
        </h2>

        <p className="hero-intro">
          Biomedical Engineering graduate student specializing in Medical Imaging,
          Ultrasound Applications, Clinical Applications, Healthcare AI, and
          Data Analytics. Experienced in AI-assisted diagnostics, medical image
          analysis, clinical workflow support, and diagnostic imaging technologies.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="https://www.linkedin.com/in/nikhitha-kanneganti/" target="_blank" className="btn btn-ghost">LinkedIn</a>
          <a href="https://github.com/Nikhitha07-collab" target="_blank" className="btn btn-ghost">GitHub</a>
        </div>
      </section>

      <section className="section" id="about">
        <p className="section-label">ABOUT ME</p>
        <h2 className="section-title">Medical Imaging, Clinical Applications & Healthcare AI</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am pursuing my Master’s in Biomedical Engineering at Southern
              Illinois University Carbondale with a focus on medical imaging,
              clinical applications, AI-assisted diagnostics, and healthcare
              data analytics.
            </p>

            <p>
              My experience includes supporting diagnostic imaging systems in
              hospital environments, conducting device demonstrations, assisting
              clinical users, and working with biomedical equipment workflows.
            </p>

            <p>
              I also developed a Breast Ultrasound AI Diagnostic Support System
              using U-Net segmentation, CNN classification, Streamlit deployment,
              and data-driven diagnostic support.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">US</div>
              <span className="stat-label">Ultrasound Imaging</span>
            </div>

            <div className="stat-card">
              <div className="stat-number">AI</div>
              <span className="stat-label">Healthcare AI</span>
            </div>

            <div className="stat-card">
              <div className="stat-number">DA</div>
              <span className="stat-label">Data Analytics</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="experience">
        <p className="section-label">CLINICAL EXPERIENCE</p>
        <h2 className="section-title">Hospital & Medical Device Experience</h2>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-card-num">01</div>
            <h3>Clinical Application Engineer</h3>
            <p className="project-card-desc">
              Apollo Hospitals — Supported diagnostic imaging systems including
              ultrasound and patient monitoring equipment. Assisted with device
              demonstrations, clinical user training, workflow support, and
              hospital technology operations.
            </p>
          </div>

          <div className="project-card">
            <div className="project-card-num">02</div>
            <h3>Medical Device Training Associate</h3>
            <p className="project-card-desc">
              Harvey Biomedicals — Performed device validation, calibration,
              preventive maintenance, troubleshooting, documentation, and
              clinical technology support aligned with medical device standards.
            </p>
          </div>

          <div className="project-card">
            <div className="project-card-num">03</div>
            <h3>Biomedical Engineering Trainee</h3>
            <p className="project-card-desc">
              Medicover Hospitals — Supported biomedical engineering operations,
              inspection, preventive maintenance, hospital imaging environments,
              and clinical equipment safety workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <p className="section-label">TECHNICAL SKILLS</p>
        <h2 className="section-title">Clinical, Imaging, AI & Analytics Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-card-header"><h3>Clinical Applications</h3></div>
            <div className="skill-tags">
              <span className="skill-tag">Clinical Support</span>
              <span className="skill-tag">Product Demonstration</span>
              <span className="skill-tag">Technical Training</span>
              <span className="skill-tag">Workflow Optimization</span>
              <span className="skill-tag">CMMS</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header"><h3>Medical Imaging</h3></div>
            <div className="skill-tags">
              <span className="skill-tag">Ultrasound Imaging</span>
              <span className="skill-tag">DICOM</span>
              <span className="skill-tag">PACS</span>
              <span className="skill-tag">Radiology Workflows</span>
              <span className="skill-tag">Diagnostic Imaging</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header"><h3>Healthcare AI</h3></div>
            <div className="skill-tags">
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Keras</span>
              <span className="skill-tag">CNN</span>
              <span className="skill-tag">U-Net</span>
              <span className="skill-tag">OpenCV</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-header"><h3>Data Analytics</h3></div>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">EDA</span>
              <span className="skill-tag">Visualization</span>
              <span className="skill-tag">Reporting</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="projects">
        <p className="section-label">FEATURED PROJECTS</p>
        <h2 className="section-title">Biomedical AI & Diagnostic Imaging Projects</h2>

        <div className="featured-project">
          <div className="featured-num">01</div>

          <div className="featured-body">
            <span className="featured-badge-pill">Featured AI Project</span>

            <h3>AI-Assisted Breast Ultrasound Imaging and Diagnostic Decision Support Platform</h3>

            <p>
              Developed a real-time breast ultrasound diagnostic support platform
              using U-Net lesion segmentation and CNN classification for normal,
              benign, and malignant image analysis. The system includes image
              upload, segmentation overlay, lesion localization, confidence
              visualization, and AI diagnostic support notes.
            </p>

            <div className="project-tags">
              <span className="project-tag">TensorFlow</span>
              <span className="project-tag">U-Net</span>
              <span className="project-tag">CNN</span>
              <span className="project-tag">OpenCV</span>
              <span className="project-tag">Streamlit</span>
              <span className="project-tag">Healthcare Analytics</span>
            </div>

            <br />

            <div className="project-links">
              <a href="https://breast-ultrasound-ai-app-rpjenoks5pbx7wd9uevn28.streamlit.app/" target="_blank" className="btn btn-primary">
                Live AI Demo
              </a>

              <a href="https://github.com/Nikhitha07-collab/Breast-Ultrasound-AI-App" target="_blank" className="btn btn-ghost">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-card-num">02</div>
            <h3>Smart Rehabilitation & Assistive Communication System</h3>
            <p className="project-card-desc">
              Designed a remote patient monitoring and assistive communication
              system using Arduino, flex sensors, EMG modules, accelerometers,
              Python, MQTT, and fall detection alerts.
            </p>
          </div>

          <div className="project-card">
            <div className="project-card-num">03</div>
            <h3>Medical Imaging Data Analysis</h3>
            <p className="project-card-desc">
              Performed preprocessing, interpretation, model evaluation, and
              data-driven analysis of ultrasound imaging datasets to support
              AI-assisted diagnostic research.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <p className="section-label">EDUCATION</p>
        <h2 className="section-title">Academic Background</h2>

        <div className="edu-timeline">
          <div className="edu-item">
            <div className="edu-dot"></div>
            <div className="edu-content">
              <h3>Southern Illinois University Carbondale</h3>
              <p className="edu-period">2024 — 2026</p>
              <p className="edu-degree">M.S. Biomedical Engineering | GPA: 3.5 / 4.0</p>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-dot"></div>
            <div className="edu-content">
              <h3>Vignan University</h3>
              <p className="edu-period">2019 — 2023</p>
              <p className="edu-degree">B.Tech Biomedical Engineering | CGPA: 8.64 / 10</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-contact">
        <p className="section-label">CONTACT</p>

        <h2 className="contact-heading">
          Let’s Build the Future of <em>Healthcare Technology</em>
        </h2>

        <p className="contact-sub">
          Open to Clinical Applications, Medical Imaging, Ultrasound Applications,
          Healthcare AI, Diagnostic Imaging, and Healthcare Data Analytics roles.
        </p>

        <div className="contact-details">
          <a href="mailto:nikhitakanneganti07@gmail.com" className="contact-link">
            nikhitakanneganti07@gmail.com
          </a>

          <span className="contact-sep">•</span>

          <a href="https://www.linkedin.com/in/nikhitha-kanneganti/" target="_blank" className="contact-link">
            LinkedIn
          </a>

          <span className="contact-sep">•</span>

          <a href="https://github.com/Nikhitha07-collab" target="_blank" className="contact-link">
            GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        Nikhita Kanneganti • Biomedical Engineering Portfolio
      </footer>
    </div>
  );
}

export default App;