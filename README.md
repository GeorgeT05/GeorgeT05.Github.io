<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>George Tong — Geomatics Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg: #0d1117;
      --surface: #161b22;
      --surface2: #1c2330;
      --border: #30363d;
      --accent: #4fa8a8;
      --accent2: #7dd3a8;
      --text: #e6edf3;
      --muted: #8b949e;
      --highlight: #f0a500;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      line-height: 1.7;
      overflow-x: hidden;
    }

    /* ── GRID OVERLAY ── */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(79,168,168,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(79,168,168,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none;
      z-index: 0;
    }

    /* ── NAV ── */
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.2rem 4rem;
      background: rgba(13,17,23,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }

    .nav-logo {
      font-family: 'DM Mono', monospace;
      font-size: 0.85rem;
      color: var(--accent);
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .nav-links {
      display: flex;
      gap: 2.5rem;
      list-style: none;
    }

    .nav-links a {
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem;
      color: var(--muted);
      text-decoration: none;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      transition: color 0.2s;
    }

    .nav-links a:hover { color: var(--accent); }

    /* ── HERO ── */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 8rem 4rem 4rem;
      overflow: hidden;
    }

    .hero-map-bg {
      position: absolute;
      inset: 0;
      opacity: 0.07;
      background:
        radial-gradient(ellipse 60% 50% at 70% 50%, rgba(79,168,168,0.4) 0%, transparent 70%),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cpath d='M0 300 Q200 200 400 300 T800 300' stroke='%234fa8a8' stroke-width='1' fill='none' opacity='0.5'/%3E%3Cpath d='M0 200 Q200 100 400 200 T800 200' stroke='%234fa8a8' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Cpath d='M0 400 Q200 300 400 400 T800 400' stroke='%234fa8a8' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Ccircle cx='200' cy='280' r='3' fill='%234fa8a8' opacity='0.8'/%3E%3Ccircle cx='400' cy='320' r='5' fill='%234fa8a8' opacity='0.8'/%3E%3Ccircle cx='600' cy='260' r='3' fill='%234fa8a8' opacity='0.8'/%3E%3Ccircle cx='320' cy='180' r='2' fill='%237dd3a8' opacity='0.8'/%3E%3Ccircle cx='550' cy='380' r='4' fill='%237dd3a8' opacity='0.8'/%3E%3Cline x1='200' y1='280' x2='400' y2='320' stroke='%234fa8a8' stroke-width='0.5' opacity='0.4'/%3E%3Cline x1='400' y1='320' x2='600' y2='260' stroke='%234fa8a8' stroke-width='0.5' opacity='0.4'/%3E%3C/svg%3E");
      background-size: cover;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 750px;
    }

    .hero-tag {
      display: inline-block;
      font-family: 'DM Mono', monospace;
      font-size: 0.72rem;
      color: var(--accent);
      letter-spacing: 0.2em;
      text-transform: uppercase;
      border: 1px solid var(--accent);
      padding: 0.3rem 0.8rem;
      margin-bottom: 2rem;
      animation: fadeUp 0.6s ease both;
    }

    .hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(3.5rem, 8vw, 7rem);
      font-weight: 900;
      line-height: 1.0;
      letter-spacing: -0.02em;
      margin-bottom: 1.5rem;
      animation: fadeUp 0.6s ease 0.1s both;
    }

    .hero h1 span {
      color: transparent;
      -webkit-text-stroke: 1px var(--accent);
    }

    .hero-sub {
      font-size: 1.1rem;
      color: var(--muted);
      max-width: 520px;
      margin-bottom: 2.5rem;
      animation: fadeUp 0.6s ease 0.2s both;
    }

    .hero-ctas {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      animation: fadeUp 0.6s ease 0.3s both;
    }

    .btn {
      display: inline-block;
      padding: 0.75rem 1.8rem;
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 2px;
      transition: all 0.25s;
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background: var(--accent);
      color: var(--bg);
      font-weight: 500;
    }

    .btn-primary:hover {
      background: var(--accent2);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(79,168,168,0.3);
    }

    .btn-outline {
      background: transparent;
      color: var(--text);
      border: 1px solid var(--border);
    }

    .btn-outline:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-2px);
    }

    .hero-coords {
      position: absolute;
      bottom: 3rem;
      right: 4rem;
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      color: var(--muted);
      letter-spacing: 0.1em;
      opacity: 0.5;
    }

    .hero-status {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-family: 'DM Mono', monospace;
      font-size: 0.78rem;
      color: var(--muted);
      background: rgba(125, 211, 168, 0.07);
      border: 1px solid rgba(125, 211, 168, 0.2);
      padding: 0.45rem 1rem;
      border-radius: 2px;
      margin-bottom: 2rem;
      animation: fadeUp 0.6s ease 0.25s both;
    }

    .status-dot {
      width: 7px;
      height: 7px;
      background: var(--accent2);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--accent2);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--accent2); }
      50% { opacity: 0.5; box-shadow: 0 0 3px var(--accent2); }
    }

    /* ── SECTIONS ── */
    section {
      position: relative;
      z-index: 1;
      padding: 6rem 4rem;
    }

    .section-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      color: var(--accent);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .section-label::after {
      content: '';
      display: block;
      height: 1px;
      width: 40px;
      background: var(--accent);
      opacity: 0.4;
    }

    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      margin-bottom: 3rem;
      line-height: 1.2;
    }

    /* ── ABOUT ── */
    #about {
      background: var(--surface);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: start;
    }

    .about-text p {
      color: var(--muted);
      margin-bottom: 1.2rem;
      font-size: 1.0rem;
    }

    .about-text p strong {
      color: var(--text);
    }

    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }

    .skill-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-family: 'DM Mono', monospace;
      font-size: 0.78rem;
      color: var(--muted);
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--border);
    }

    .skill-item::before {
      content: '▸';
      color: var(--accent);
      font-size: 0.65rem;
    }

    /* ── EXPERIENCE ── */
    .timeline {
      position: relative;
      padding-left: 2rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 1px;
      background: linear-gradient(to bottom, var(--accent), transparent);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      padding-left: 2rem;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -2.4rem;
      top: 0.4rem;
      width: 8px;
      height: 8px;
      background: var(--accent);
      border-radius: 50%;
      box-shadow: 0 0 12px var(--accent);
    }

    .timeline-date {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      color: var(--accent);
      letter-spacing: 0.1em;
      margin-bottom: 0.3rem;
    }

    .timeline-company {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 0.2rem;
    }

    .timeline-role {
      font-size: 0.85rem;
      color: var(--muted);
      margin-bottom: 0.8rem;
      font-family: 'DM Mono', monospace;
    }

    .timeline-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .timeline-bullets li {
      font-size: 0.9rem;
      color: var(--muted);
      padding-left: 1rem;
      position: relative;
    }

    .timeline-bullets li::before {
      content: '—';
      position: absolute;
      left: 0;
      color: var(--accent);
      opacity: 0.5;
    }

    /* ── PROJECTS ── */
    #projects { background: var(--bg); }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .project-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 2rem;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    .project-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--accent), var(--accent2));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s;
    }

    .project-card:hover {
      border-color: var(--accent);
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.4);
    }

    .project-card:hover::before { transform: scaleX(1); }

    .project-number {
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      color: var(--accent);
      letter-spacing: 0.2em;
      opacity: 0.6;
      margin-bottom: 1rem;
    }

    .project-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
      line-height: 1.3;
    }

    .project-desc {
      font-size: 0.88rem;
      color: var(--muted);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .tag {
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      color: var(--accent);
      background: rgba(79,168,168,0.1);
      border: 1px solid rgba(79,168,168,0.2);
      padding: 0.2rem 0.6rem;
      border-radius: 2px;
      letter-spacing: 0.08em;
    }

    .project-placeholder {
      background: linear-gradient(135deg, var(--surface2) 0%, var(--surface) 100%);
      border: 2px dashed var(--border);
      opacity: 0.6;
    }

    .project-placeholder .project-title { color: var(--muted); font-style: italic; }
    .project-placeholder .project-desc { opacity: 0.7; }

    .add-project-hint {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      color: var(--accent);
      letter-spacing: 0.1em;
      opacity: 0.6;
      margin-top: 0.5rem;
    }

    /* ── CERTIFICATIONS ── */
    #certifications {
      background: var(--surface);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .certs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1rem;
    }

    .cert-card {
      border: 1px solid var(--border);
      padding: 1.2rem 1.5rem;
      border-radius: 4px;
      background: var(--surface2);
      transition: border-color 0.2s, transform 0.2s;
    }

    .cert-card:hover {
      border-color: var(--accent2);
      transform: translateY(-2px);
    }

    .cert-issuer {
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      color: var(--accent2);
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 0.4rem;
    }

    .cert-name {
      font-size: 0.9rem;
      color: var(--text);
      font-weight: 400;
      line-height: 1.4;
    }

    .cert-year {
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      color: var(--muted);
      margin-top: 0.4rem;
    }

    /* ── CONTACT ── */
    #contact { background: var(--bg); }

    .contact-inner {
      max-width: 600px;
    }

    .contact-inner p {
      color: var(--muted);
      margin-bottom: 2rem;
      font-size: 1rem;
    }

    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      color: var(--text);
      padding: 1rem 1.5rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      transition: all 0.2s;
      font-family: 'DM Mono', monospace;
      font-size: 0.82rem;
    }

    .contact-link:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateX(6px);
    }

    .contact-link-icon {
      font-size: 1.1rem;
      width: 24px;
      text-align: center;
    }

    /* ── FOOTER ── */
    footer {
      border-top: 1px solid var(--border);
      padding: 2rem 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    footer p {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      color: var(--muted);
      letter-spacing: 0.08em;
    }

    /* ── ANIMATIONS ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .fade-in {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      nav { padding: 1rem 1.5rem; }
      .nav-links { gap: 1.2rem; }
      section { padding: 4rem 1.5rem; }
      .hero { padding: 7rem 1.5rem 4rem; }
      .about-grid { grid-template-columns: 1fr; gap: 3rem; }
      footer { flex-direction: column; gap: 0.5rem; padding: 1.5rem; }
      .hero-coords { display: none; }
    }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav>
    <div class="nav-logo">GT / Geomatics</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#certifications">Certs</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-map-bg"></div>
    <div class="hero-content">
      <div class="hero-tag">Geomatics · GIS · Spatial Analysis</div>
      <h1>George<br/><span>Tong</span></h1>
      <p class="hero-sub">
        Geomatics student at the University of Waterloo — building spatial solutions with ArcGIS, QGIS, Python, and Google Earth Engine.
      </p>
      <div class="hero-status">
        <span class="status-dot"></span>
        Currently working as GIS Contractor @ <a href="https://geneticks.ca/tick-testing-statistics/" target="_blank" style="color: var(--accent2); text-decoration: none;">Geneticks</a>
      </div>
      <div class="hero-ctas">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-outline">Get In Touch</a>
      </div>
    </div>
    <div class="hero-coords">43.4723° N, 80.5449° W — Waterloo, ON</div>
  </section>

  <!-- ABOUT -->
  <section id="about">
    <div class="about-grid">
      <div class="about-text fade-in">
        <div class="section-label">01 — About</div>
        <h2 class="section-title">Mapping the world,<br/>one layer at a time.</h2>
        <p>
          I'm an <strong>ambitious Geomatics student</strong> at the University of Waterloo (B.Env.Sci., 2028) with 8+ years of experience in fast-paced, high-responsibility environments.
        </p>
        <p>
          Currently working as a <strong>GIS Contractor at Geneticks</strong>, where I redesign spatial map layouts in ArcGIS, streamline data pipelines, and automate workflows with Python.
        </p>
        <p>
          I'm fluent in both <strong>English and Mandarin</strong>, and passionate about applying geospatial technology to real-world environmental and public health challenges.
        </p>
        <br/>
        <a href="/cdn-cgi/l/email-protection#0b6c6e647f64656c3b3e4b6c666a626725686466" class="btn btn-outline">Download Resume</a>
      </div>
      <div class="fade-in">
        <div class="section-label">Tools & Software</div>
        <div class="skills-grid">
          <div class="skill-item">ArcGIS Pro</div>
          <div class="skill-item">QGIS</div>
          <div class="skill-item">ArcGIS Online</div>
          <div class="skill-item">PostGIS</div>
          <div class="skill-item">Python</div>
          <div class="skill-item">Google Earth Engine</div>
          <div class="skill-item">SQL</div>
          <div class="skill-item">AutoCAD</div>
          <div class="skill-item">GeoJSON</div>
          <div class="skill-item">Excel</div>
        </div>
      </div>
    </div>
  </section>

  <!-- EXPERIENCE -->
  <section id="experience" style="background: var(--bg);">
    <div class="section-label fade-in">02 — Experience</div>
    <h2 class="section-title fade-in">Where I've worked.</h2>
    <div class="timeline">

      <div class="timeline-item fade-in">
        <div class="timeline-date">Mar. 2026 — Present</div>
        <div class="timeline-company">Geneticks</div>
        <div class="timeline-role">GIS Contractor · Remote</div>
        <ul class="timeline-bullets">
          <li>Redesigned and modernized spatial map layouts in ArcGIS, migrating from Power BI to improve geographic accuracy and usability.</li>
          <li>Streamlined the organization's data pipeline, reducing redundancy and improving spatial data processing efficiency.</li>
          <li>Applied Python scripting to support data transformation and automation within GIS workflows.</li>
        </ul>
      </div>

      <div class="timeline-item fade-in">
        <div class="timeline-date">Nov. 2025 — Jan. 2026</div>
        <div class="timeline-company">Outlier</div>
        <div class="timeline-role">Outlier Analyst · Remote</div>
        <ul class="timeline-bullets">
          <li>Evaluated and parsed AI outputs to ensure reliability and accuracy — achieving a 95% activity score.</li>
          <li>Created and refined high-quality examples to enhance AI model behaviour.</li>
          <li>Assessed complex data outputs against quality benchmarks, identifying patterns and inconsistencies.</li>
        </ul>
      </div>

      <div class="timeline-item fade-in">
        <div class="timeline-date">Oct. 2017 — Jul. 2023</div>
        <div class="timeline-company">Q-tea & Asian Food</div>
        <div class="timeline-role">Boba Barista / Line Cook · Windsor, ON</div>
        <ul class="timeline-bullets">
          <li>Delivered outstanding customer service in a high-volume, fast-paced environment.</li>
          <li>Managed responsibilities across multiple roles including service, register, inventory, and kitchen operations.</li>
        </ul>
      </div>

    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects">
    <div class="section-label fade-in">03 — Projects</div>
    <h2 class="section-title fade-in">Spatial work & analysis.</h2>
    <div class="projects-grid">

      <!-- REAL PROJECT: Geneticks Map Redesign -->
      <div class="project-card fade-in">
        <div class="project-number">PROJECT / 001</div>
        <div class="project-title">Geneticks Tick Distribution Map Redesign</div>
        <p class="project-desc">
          Migrated and redesigned interactive tick distribution visualizations from Microsoft Power BI into ArcGIS, improving geographic accuracy, usability, and overall map layout quality for public health communication.
        </p>
        <div class="project-tags">
        
          <span class="tag">ArcGIS Pro</span>
          <span class="tag">ArcGIS Online</span>
          <span class="tag">Python</span>
          <span class="tag">Data Pipeline</span>
        </div>
      </div>

      <!-- PLACEHOLDER 2 -->
      <div class="project-card project-placeholder fade-in">
        <div class="project-number">PROJECT / 002</div>
        <div class="project-title">Coming Soon</div>
        <p class="project-desc">
          Add your next project here — land use analysis, a web map, a Python automation script, or a StoryMap.
        </p>
        <div class="add-project-hint">// slot available</div>
      </div>

      <!-- PLACEHOLDER 3 -->
      <div class="project-card project-placeholder fade-in">
        <div class="project-number">PROJECT / 003</div>
        <div class="project-title">Coming Soon</div>
        <p class="project-desc">
          Watershed delineation, NDVI analysis, site suitability — your next GIS project goes here.
        </p>
        <div class="add-project-hint">// slot available</div>
      </div>

      <!-- PLACEHOLDER 4 -->
      <div class="project-card project-placeholder fade-in">
        <div class="project-number">PROJECT / 004</div>
        <div class="project-title">Coming Soon</div>
        <p class="project-desc">
          PostGIS spatial queries, ArcPy automation, or a Google Earth Engine script — ready to showcase.
        </p>
        <div class="add-project-hint">// slot available</div>
      </div>

    </div>
  </section>

  <!-- CERTIFICATIONS -->
  <section id="certifications">
    <div class="section-label fade-in">04 — Certifications</div>
    <h2 class="section-title fade-in">Credentials & learning.</h2>
    <div class="certs-grid">

      <div class="cert-card fade-in">
        <div class="cert-issuer">Esri</div>
        <div class="cert-name">GIS Fundamentals Foundation</div>
        <div class="cert-year">2026</div>
      </div>

      <div class="cert-card fade-in">
        <div class="cert-issuer">Esri</div>
        <div class="cert-name">Building Web Solutions Using ArcGIS Experience Builder</div>
        <div class="cert-year">2026</div>
      </div>

      <div class="cert-card fade-in">
        <div class="cert-issuer">Code Academy</div>
        <div class="cert-name">ArcGIS API for Python Fundamentals</div>
        <div class="cert-year">2026</div>
      </div>

      <div class="cert-card fade-in">
        <div class="cert-issuer">Esri</div>
        <div class="cert-name">Make an Impact with Modern Geo Apps</div>
        <div class="cert-year">2026</div>
      </div>

      <div class="cert-card fade-in">
        <div class="cert-issuer">Code Academy</div>
        <div class="cert-name">SQL Data Scientist: Analytics Specialist</div>
        <div class="cert-year">2026</div>
      </div>

      <div class="cert-card fade-in">
        <div class="cert-issuer">Alison</div>
        <div class="cert-name">Microsoft Excel for Beginners and Experts</div>
        <div class="cert-year">2025</div>
      </div>

    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact">
    <div class="section-label fade-in">05 — Contact</div>
    <div class="contact-inner">
      <h2 class="section-title fade-in">Let's work together.</h2>
      <p class="fade-in">
        I'm actively seeking entry-level GIS roles and open to freelance spatial analysis work. Feel free to reach out — I'd love to connect.
      </p>
      <div class="contact-links fade-in">
        <a href="/cdn-cgi/l/email-protection#90f7f5ffe4fffef7a0a5d0f7fdf1f9fcbef3fffd" class="contact-link">
          <span class="contact-link-icon">✉</span>
          <span class="__cf_email__" data-cfemail="1374767c677c7d74232653747e727a7f3d707c7e">[email&#160;protected]</span>
        </a>
        <a href="https://www.linkedin.com/in/george-tong" target="_blank" class="contact-link">
          <span class="contact-link-icon">in</span>
          LinkedIn — George Tong
        </a>
        <a href="tel:+12262807933" class="contact-link">
          <span class="contact-link-icon">☏</span>
          (226) 280-7933
        </a>

      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>© 2026 George Tong — Geomatics Portfolio</p>
    <p>University of Waterloo · B.Env.Sci. · 2028</p>
  </footer>

  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
    // Scroll-triggered fade-in
    const observer = new IntersectionObserver((entr
