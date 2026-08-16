import "./App.css";
// Remove tracking parameters from the browser URL
if (window.location.search) {
  window.history.replaceState(
    {},
    document.title,
    window.location.pathname + window.location.hash
  );
}

function App() {
  const MEDICAL_IMAGING_APP_URL = "https://medical-imaging-platform.onrender.com";
  const BREAST_ULTRASOUND_APP_URL = "https://breast-ultrasound-ai-app-rpjenoks5pbx7wd9uevn28.streamlit.app/";

  const experienceListStyle = {
    listStyle: "none",
    padding: 0,
    margin: "18px auto 0",
    maxWidth: "920px",
    textAlign: "left",
  };

  const experienceItemStyle = {
    position: "relative",
    paddingLeft: "22px",
    marginBottom: "10px",
    lineHeight: "1.65",
  };

  const bulletStyle = {
    position: "absolute",
    left: "0",
    top: "0",
    color: "#13c8f4",
    fontWeight: "700",
  };

  const experienceBlockStyle = {
    maxWidth: "1000px",
    margin: "0 auto 55px",
    paddingBottom: "35px",
    borderBottom: "1px solid rgba(255,255,255,0.10)",
  };

  const educationBlockStyle = {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto 55px",
    textAlign: "center",
  };

  return (
    <div className="portfolio-root">

      {/* ===================== NAVIGATION ===================== */}

      <nav className="nav">
        <a href="#home" className="nav-logo">
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
              href="https://github.com/Nikhitha07-collab"
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>


      {/* ===================== HERO ===================== */}

      <section className="hero" id="home">

        <div className="hero-name">
          <span className="hero-first">
            Nikhita
          </span>

          <span className="hero-last">
            Kanneganti
          </span>
        </div>

        <h2 className="hero-role">
          BIOMEDICAL ENGINEER • MEDICAL IMAGING • DICOM • CLINICAL APPLICATIONS
        </h2>

        <p className="hero-intro">
          Biomedical Engineer focused on medical imaging, diagnostic imaging
          systems, DICOM workflows, clinical applications, and medical image
          processing. My experience combines hospital-based clinical support
          with Python-based imaging software development, segmentation,
          classification, lesion localization, and medical image visualization.
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
            rel="noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Nikhitha07-collab"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            GitHub
          </a>

        </div>
      </section>


      {/* ===================== ABOUT ===================== */}

      <section className="section" id="about">

        <p className="section-label">
          ABOUT ME
        </p>

        <h2 className="section-title">
          Medical Imaging & Clinical Applications
        </h2>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I am a Biomedical Engineer with a strong interest in medical
              imaging systems, diagnostic imaging technology, DICOM workflows,
              and clinical applications.
            </p>

            <p>
              My clinical experience includes supporting diagnostic imaging
              equipment in hospital environments, assisting clinical users,
              performing product demonstrations, supporting technical
              troubleshooting, and working with biomedical equipment workflows.
            </p>

            <p>
              I also build medical imaging software using Python, DICOM,
              computer vision, segmentation, classification, localization,
              and medical image visualization.
            </p>

          </div>


          <div className="about-stats">

            <div className="stat-card">
              <span className="stat-number">
                MI
              </span>

              <span className="stat-label">
                Medical Imaging
              </span>
            </div>


            <div className="stat-card">
              <span className="stat-number">
                DICOM
              </span>

              <span className="stat-label">
                Imaging Workflows
              </span>
            </div>


            <div className="stat-card">
              <span className="stat-number">
                CA
              </span>

              <span className="stat-label">
                Clinical Applications
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* ===================== EXPERIENCE ===================== */}

      <section
        className="section section-alt"
        id="experience"
        style={{ textAlign: "center" }}
      >

        <p className="section-label">
          EXPERIENCE
        </p>

        <h2 className="section-title">
          Clinical & Biomedical Engineering Experience
        </h2>

        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
          }}
        >

          {/* APOLLO */}

          <div style={experienceBlockStyle}>

            <p
              style={{
                color: "#13c8f4",
                fontWeight: "700",
                letterSpacing: "0.09em",
                marginBottom: "6px",
              }}
            >
              JUL 2023 — JAN 2024
            </p>

            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "5px",
              }}
            >
              Clinical Application Engineer
            </h3>

            <p
              style={{
                fontWeight: "500",
                marginBottom: "16px",
              }}
            >
              Apollo Hospitals · Hyderabad, Telangana
            </p>

            <ul style={experienceListStyle}>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Supported diagnostic imaging systems, including ultrasound
                equipment and patient monitoring technology, across a
                500+ bed hospital.
              </li>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Delivered clinical product demonstrations and end-user training
                for physicians, nurses, and clinical technicians.
              </li>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Supported clinical imaging workflows and provided technical
                troubleshooting in active hospital environments.
              </li>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Coordinated with clinical users and biomedical engineering
                teams for equipment support and workflow integration.
              </li>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Maintained equipment lifecycle and CMMS documentation.
              </li>

            </ul>
          </div>


          {/* HARVEY */}

          <div style={experienceBlockStyle}>

            <p
              style={{
                color: "#13c8f4",
                fontWeight: "700",
                letterSpacing: "0.09em",
                marginBottom: "6px",
              }}
            >
              FEB 2024 — APR 2024
            </p>

            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "5px",
              }}
            >
              Medical Device Training Associate
            </h3>

            <p
              style={{
                fontWeight: "500",
                marginBottom: "16px",
              }}
            >
              Harvey Biomedicals · Bangalore, Karnataka
            </p>

            <ul style={experienceListStyle}>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Worked with biomedical instrumentation, medical electronics,
                embedded systems, sensors, and signal acquisition.
              </li>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Performed medical device calibration and electrical safety
                testing.
              </li>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Supported hardware and PCB-level troubleshooting under
                biomedical engineering guidance.
              </li>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Maintained calibration and compliance documentation for
                medical device quality requirements.
              </li>

            </ul>
          </div>


          {/* AKAS */}

          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >

            <p
              style={{
                color: "#13c8f4",
                fontWeight: "700",
                letterSpacing: "0.09em",
                marginBottom: "6px",
              }}
            >
              DEC 2022 — JUN 2023
            </p>

            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "5px",
              }}
            >
              Infusion Systems Specialist Intern
            </h3>

            <p
              style={{
                fontWeight: "500",
                marginBottom: "16px",
              }}
            >
              AKAS Infusions · Trichy, India
            </p>

            <ul style={experienceListStyle}>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Validated infusion, syringe, and volumetric pump performance.
              </li>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Performed flow-rate testing from 0.1 mL/hr to 1200 mL/hr
                across multiple syringe configurations.
              </li>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Evaluated occlusion alarm response and battery performance.
              </li>

              <li style={experienceItemStyle}>
                <span style={bulletStyle}>•</span>
                Supported device validation and quality documentation.
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* ===================== SKILLS ===================== */}

      <section className="section" id="skills">

        <p className="section-label">
          SKILLS
        </p>

        <h2 className="section-title">
          Medical Imaging & Clinical Technology
        </h2>

        <div
          className="skills-grid"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            alignItems: "stretch",
          }}
        >

          {/* SKILL 01 */}

          <div className="skill-card">

            <div className="skill-card-header">
              <span className="skill-icon">
                ◉
              </span>

              <h3>
                Medical Imaging
              </h3>
            </div>

            <div className="skill-tags">

              <span className="skill-tag">CT</span>
              <span className="skill-tag">MRI</span>
              <span className="skill-tag">Ultrasound</span>
              <span className="skill-tag">DICOM</span>
              <span className="skill-tag">PACS</span>
              <span className="skill-tag">pydicom</span>
              <span className="skill-tag">Diagnostic Imaging</span>
              <span className="skill-tag">Medical Image Processing</span>
              <span className="skill-tag">Imaging Workflows</span>

            </div>

          </div>


          {/* SKILL 02 */}

          <div className="skill-card">

            <div className="skill-card-header">
              <span className="skill-icon">
                ◇
              </span>

              <h3>
                Medical Image AI & Software
              </h3>
            </div>

            <div className="skill-tags">

              <span className="skill-tag">Python</span>
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">Keras</span>
              <span className="skill-tag">OpenCV</span>
              <span className="skill-tag">U-Net</span>
              <span className="skill-tag">CNN</span>
              <span className="skill-tag">YOLO</span>
              <span className="skill-tag">Grad-CAM</span>
              <span className="skill-tag">Segmentation</span>
              <span className="skill-tag">Classification</span>
              <span className="skill-tag">Localization</span>
              <span className="skill-tag">NiceGUI</span>
              <span className="skill-tag">Streamlit</span>

            </div>

          </div>


          {/* SKILL 03 */}

          <div className="skill-card">

            <div className="skill-card-header">
              <span className="skill-icon">
                +
              </span>

              <h3>
                Clinical Applications & Biomedical Devices
              </h3>
            </div>

            <div className="skill-tags">

              <span className="skill-tag">Clinical Support</span>
              <span className="skill-tag">Product Demonstration</span>
              <span className="skill-tag">User Training</span>
              <span className="skill-tag">Troubleshooting</span>
              <span className="skill-tag">CMMS</span>
              <span className="skill-tag">Ultrasound Systems</span>
              <span className="skill-tag">Patient Monitors</span>
              <span className="skill-tag">Infusion Pumps</span>
              <span className="skill-tag">Calibration</span>
              <span className="skill-tag">Electrical Safety</span>

            </div>

          </div>

        </div>

      </section>


      {/* ===================== PROJECTS ===================== */}

      <section
        className="section section-alt"
        id="projects"
      >

        <p className="section-label">
          FEATURED PROJECTS
        </p>

        <h2 className="section-title">
          Medical Imaging & Biomedical Projects
        </h2>


        {/* PROJECT 01 */}

        <div className="featured-project">

          <div className="featured-num">
            01
          </div>

          <div className="featured-body">

            <span className="featured-badge-pill">
              Medical Imaging Platform
            </span>

            <h3>
              Multi-Modality Medical Imaging Platform
            </h3>

            <p>
              Developed a Python-based medical imaging platform for viewing
              and analyzing CT, brain MRI, and thyroid ultrasound DICOM
              studies through a unified clinical-style imaging interface.
            </p>

            <p>
              The platform supports DICOM study processing, series detection,
              metadata extraction, image navigation, modality identification,
              preprocessing, classification, segmentation, and lesion
              localization.
            </p>

            <p>
              CT and MRI workflows include experimental classification and
              localization visualization, while the ultrasound workflow
              combines classification with YOLO-based lesion localization,
              confidence reporting, and bounding-box visualization.
            </p>

            <div className="project-tags">

              <span className="project-tag">Python</span>
              <span className="project-tag">DICOM</span>
              <span className="project-tag">pydicom</span>
              <span className="project-tag">CT</span>
              <span className="project-tag">MRI</span>
              <span className="project-tag">Ultrasound</span>
              <span className="project-tag">NiceGUI</span>
              <span className="project-tag">TensorFlow</span>
              <span className="project-tag">YOLO</span>
              <span className="project-tag">Segmentation</span>

            </div>


            <div className="project-links">

              {/* THIS NOW OPENS THE ACTUAL APP */}

              <a
                href={MEDICAL_IMAGING_APP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                Open Medical Imaging Platform ↗
              </a>


              {/* THIS OPENS GITHUB SOURCE CODE */}

              <a
                href="https://github.com/Nikhitha07-collab/Medical-Imaging-Platform"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-sm"
              >
                View Python Code ↗
              </a>

            </div>

          </div>

        </div>


        {/* PROJECT 02 */}

        <div className="featured-project">

          <div className="featured-num">
            02
          </div>

          <div className="featured-body">

            <span className="featured-badge-pill">
              Breast Ultrasound Imaging
            </span>

            <h3>
              Breast Ultrasound AI Diagnostic Platform
            </h3>

            <p>
              Developed a breast ultrasound image analysis platform using
              U-Net segmentation and CNN classification for normal, benign,
              and malignant ultrasound images.
            </p>

            <p>
              The application provides lesion segmentation overlays,
              classification probabilities, model confidence, and Grad-CAM
              visualization for reviewing image regions contributing to
              model predictions.
            </p>

            <div className="project-tags">

              <span className="project-tag">Ultrasound</span>
              <span className="project-tag">TensorFlow</span>
              <span className="project-tag">U-Net</span>
              <span className="project-tag">CNN</span>
              <span className="project-tag">Grad-CAM</span>
              <span className="project-tag">OpenCV</span>
              <span className="project-tag">Streamlit</span>

            </div>

            <div className="project-links">

              <a
                href={BREAST_ULTRASOUND_APP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                Open Breast Ultrasound Application ↗
              </a>

              <a
                href="https://github.com/Nikhitha07-collab/Breast-Ultrasound-AI-App"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-sm"
              >
                View Code ↗
              </a>

            </div>

          </div>

        </div>


        {/* PROJECT 03 */}

        <div className="featured-project">

          <div className="featured-num">
            03
          </div>

          <div className="featured-body">

            <span className="featured-badge-pill">
              Rehabilitation Technology
            </span>

            <h3>
              Smart Rehabilitation & Assistive Communication System
            </h3>

            <p>
              Designed a smart rehabilitation and assistive communication
              system integrating flex sensors, EMG modules, accelerometers,
              and embedded hardware for continuous patient movement monitoring.
            </p>

            <p>
              The system supported gesture-based assistive communication,
              movement tracking, fall detection, and automated caregiver
              notifications using MQTT-based communication.
            </p>

            <div className="project-tags">

              <span className="project-tag">Arduino</span>
              <span className="project-tag">EMG</span>
              <span className="project-tag">Flex Sensors</span>
              <span className="project-tag">Python</span>
              <span className="project-tag">MQTT</span>
              <span className="project-tag">Fall Detection</span>

            </div>

          </div>

        </div>

      </section>


      {/* ===================== EDUCATION ===================== */}

      <section
        className="section"
        id="education"
        style={{ textAlign: "center" }}
      >

        <p className="section-label">
          EDUCATION
        </p>

        <h2 className="section-title">
          Biomedical Engineering Education
        </h2>

        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >

          <div style={educationBlockStyle}>

            <p
              style={{
                color: "#13c8f4",
                fontWeight: "600",
                letterSpacing: "0.06em",
                marginBottom: "10px",
              }}
            >
              2024 — 2026
            </p>

            <h3
              style={{
                fontSize: "1.45rem",
                marginBottom: "8px",
              }}
            >
              Southern Illinois University Carbondale
            </h3>

            <p
              style={{
                fontSize: "1.05rem",
                fontWeight: "500",
                marginBottom: "12px",
              }}
            >
              M.S. Biomedical Engineering · GPA 3.5 / 4.0
            </p>

            <p
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Graduate focus in medical imaging systems, biomedical
              instrumentation, biomedical signal processing, regulatory
              affairs in medical devices, and medical imaging software
              development.
            </p>

          </div>


          <div style={educationBlockStyle}>

            <p
              style={{
                color: "#13c8f4",
                fontWeight: "600",
                letterSpacing: "0.06em",
                marginBottom: "10px",
              }}
            >
              2019 — 2023
            </p>

            <h3
              style={{
                fontSize: "1.45rem",
                marginBottom: "8px",
              }}
            >
              Vignan University
            </h3>

            <p
              style={{
                fontSize: "1.05rem",
                fontWeight: "500",
              }}
            >
              B.Tech Biomedical Engineering · CGPA 8.64 / 10
            </p>

          </div>

        </div>

      </section>


      {/* ===================== CONNECT ===================== */}

      <section className="section section-contact section-alt">

        <p className="section-label">
          CONNECT
        </p>

        <h2 className="contact-heading">
          Medical imaging.
          <br />
          <em>
            Clinical impact.
          </em>
        </h2>

        <p className="contact-sub">
          Interested in opportunities involving Medical Imaging,
          DICOM/PACS, Clinical Applications, Ultrasound Applications,
          and Biomedical Engineering.
        </p>

        <div className="contact-actions">

          <a
            href="https://www.linkedin.com/in/nikhitha-kanneganti/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Nikhitha07-collab"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            GitHub
          </a>

        </div>

      </section>


      {/* ===================== FOOTER ===================== */}

      <footer className="footer">

        <p>
          © 2026 Nikhita Kanneganti · Biomedical Engineering · Medical Imaging
        </p>

      </footer>

    </div>
  );
}

export default App;