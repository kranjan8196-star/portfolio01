import { useState } from 'react'
import './App.css'

const services = [
  {
    number: '01',
    icon: 'social',
    title: 'Social Media Marketing',
    description: 'Connect with your audience through useful, engaging content on the right platforms.',
  },
  {
    number: '02',
    icon: 'search',
    title: 'Search Engine Optimization',
    description: 'Make your website and content easier to discover through search.',
  },
  {
    number: '03',
    icon: 'ads',
    title: 'Meta & Google Ads',
    description: 'Learn targeted paid campaign setup for Meta and Google, including audience targeting and lead forms.',
  },
  {
    number: '04',
    icon: 'web',
    title: 'Websites and Landing Pages',
    description: 'Create a clear, useful, mobile-friendly online home for your brand.',
  },
  {
    number: '05',
    icon: 'content',
    title: 'Canva Design',
    description: 'Design engaging social posts, banners, clothing presentations, and visual creatives with Canva.',
  },
  {
    number: '06',
    icon: 'strategy',
    title: 'AI-Powered Marketing',
    description: 'Use ChatGPT and modern AI tools to plan smarter marketing and create useful content.',
  },
]

const skillGroups = [
  {
    title: 'AI and Digital Marketing',
    skills: [
      'AI-powered marketing with ChatGPT and modern AI tools',
      'Social media management for Facebook, Instagram, and YouTube',
      'Meta and Google Ads, audience targeting, campaigns, and lead forms',
      'Canva design for posts, graphics, banners, and reels',
      'Website SEO and digital content creation',
    ],
  },
  {
    title: 'Computer Applications (ADCA)',
    skills: [
      'MS Excel, data entry, reports, VLOOKUP, and PivotTables',
      'MS Word documents and PowerPoint presentations',
      'Computerized accounting with Tally Prime',
      'Email handling, online research, and software installation',
    ],
  },
]

const education = [
  {
    level: 'Bachelor of Arts (B.A.)',
    detail: 'Semester 1 · S. U. College, Hilsa (Nalanda)',
    duration: '2026 – Present',
  },
  {
    level: '12th · Higher Secondary',
    detail: 'Utkramit Uchcha Madhayamik Vidhyalay Rasalpur, Fatuha (Patna) · Bihar School Examination Board',
  },
  {
    level: '10th · Matriculation',
    detail: 'Rajkiyakrit High School Tope (Patna) · Bihar School Examination Board',
  },
  {
    level: 'ADCA Diploma',
    detail: 'One-Year Diploma in Computer Application',
  },
]

const projects = [
  {
    number: '01',
    title: 'Facebook and Instagram Page Management',
    description: 'Set up brand pages, schedule posts and reels, build organic presence, and support audience engagement.',
    tags: 'Social Media · Content Scheduling',
  },
  {
    number: '02',
    title: 'Meta Ads Campaigns',
    description: 'Set up Facebook and Instagram campaigns with custom audience targeting, paid ads, and lead generation forms.',
    tags: 'Meta Ads · Audience Targeting',
  },
  {
    number: '03',
    title: 'Canva Design',
    description: 'Create social media posts, banners, clothing presentations, and visual creatives for digital platforms.',
    tags: 'Canva · Visual Design',
  },
  {
    number: '04',
    title: 'Website Design',
    description: 'Design responsive, user-friendly websites and landing pages with AI tools and modern techniques.',
    tags: 'Web Design · Landing Pages',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'The Conversation',
    description: 'We start by understanding your brand, needs, and goals.',
  },
  {
    number: '02',
    title: 'The Plan',
    description: 'Choose the right digital channels and priorities for your needs.',
  },
  {
    number: '03',
    title: 'Work and Improve',
    description: 'Put the plan into action and keep learning what can be improved.',
  },
]

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/ranjan_kumar291/' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61592488077243' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ranjan-kumar-a86a30426/' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCvPH5rLCVDtwlJQ-GfC4iUA' },
]

const currentYear = new Date().getFullYear()

function Icon({ name, className = '' }) {
  const paths = {
    social: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="4" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="m21 15-5-5L5 20" />
      </>
    ),
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5M8.5 10.8h4.6M10.8 8.5v4.6" />
      </>
    ),
    ads: (
      <>
        <path d="m4 3 6.2 16 2.3-6.5L19 10.2 4 3Z" />
        <path d="m13 13 5.5 5.5" />
      </>
    ),
    web: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 9v11" />
        <circle cx="6" cy="6.5" r=".5" />
      </>
    ),
    content: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
      </>
    ),
    strategy: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
        <path d="m15.5 8.5 5-5" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [messagePreview, setMessagePreview] = useState('')
  const [emailDraft, setEmailDraft] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const details = formData.get('details')

    const message = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nHow I can help: ${details}`
    const subject = encodeURIComponent(`Website enquiry from ${name}`)

    setMessagePreview(message)
    setEmailDraft(
      `mailto:keanjan8196@gmail.com?subject=${subject}&body=${encodeURIComponent(message)}`,
    )
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner page-shell">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Ranjan Ai Digital Marketing — Home">
            <span className="brand-mark">
              <img src="/images/ranjan-logo.jpeg" alt="" />
            </span>
            <span className="brand-copy">
              <span className="brand-name">Ranjan Ai</span>
              <span className="brand-caption">DIGITAL MARKETING</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav
            className={menuOpen ? 'navigation navigation--open' : 'navigation'}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#about" onClick={closeMenu}>Profile</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Contact <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section page-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> AI &amp; Digital Marketing Creator</p>
            <h1>
              Ranjan Kumar
              <br />
              <span>Digital Marketer.</span>
            </h1>
            <p className="hero-description">
              A fresher in digital marketing with a One-Year Diploma in Computer
              Application (ADCA), building practical skills across AI tools, social
              media, Meta Ads, Canva design, and websites.
            </p>
            <div className="hero-actions">
              <a className="button button--gold" href="#contact">
                Let&apos;s Work Together <ArrowIcon />
              </a>
              <a className="text-link" href="#services">
                Explore Services <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <span>Fresher · Practical skills · AI-powered digital marketing</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-halo" />
            <div className="portrait-frame">
              <img
                className="portrait-image"
                src="/images/ranjan-portrait.png"
                alt="Ranjan Kumar, AI and digital marketing creator"
              />
            </div>
            <div className="portrait-label">
              <span className="label-sparkle" aria-hidden="true">✳</span>
              <span><strong>Hello, I&apos;m Ranjan Kumar</strong><small>AI &amp; Digital Marketing Creator</small></span>
            </div>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
          </div>
          <span className="hero-index" aria-hidden="true">01 — 03</span>
        </section>

        <section className="intro-strip" aria-label="Digital marketing">
          <div className="intro-strip-inner page-shell">
            <span>Social Media</span><i>✳</i>
            <span>Search Optimization</span><i>✳</i>
            <span>Digital Strategy</span><i>✳</i>
            <span>Brand Growth</span>
          </div>
        </section>

        <section className="services-section section-pad page-shell" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow--dark">What I Can Do</p>
              <h2>Digital Services<br /><span>For Your Brand.</span></h2>
            </div>
            <p className="section-intro">
              The digital marketing essentials tailored to your needs—with a clear plan
              and work shaped around your brand.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <Icon name={service.icon} className="service-icon" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="service-link" href="#contact" aria-label={`Contact me about ${service.title}`}>
                  <ArrowIcon diagonal />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section section-pad">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-dot" /> Professional Skills</p>
                <h2>Skills for the<br /><span>Digital World.</span></h2>
              </div>
              <p className="section-intro">
                Digital marketing skills backed by a foundation in computer applications,
                office tools, and data management.
              </p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skills-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner page-shell">
            <div className="about-image-wrap">
              <img
                src="/images/ranjan-portrait.png"
                alt="Ranjan Kumar at his workspace"
                loading="lazy"
              />
              <span className="about-image-caption">RANJAN AI · DIGITAL MARKETING</span>
            </div>
            <div className="about-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> About Me · Fresher</p>
              <h2>Hello,<br />I&apos;m <span>Ranjan Kumar.</span></h2>
              <p>
                I am a digital marketer and AI &amp; Digital Marketing Creator. I have
                completed a One-Year Diploma in Computer Application (ADCA) and am
                currently pursuing a Bachelor of Arts. My computer application training
                includes office operations, computerized accounting with Tally Prime,
                and data management with Excel.
              </p>
              <p>
                I am a fresher with practical project experience in social media page
                management, Meta Ads, Canva design, and responsive website design.
              </p>
              <a className="button button--outline" href="#contact">
                Get in Touch <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="education-section section-pad" id="education">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-dot" /> Education</p>
                <h2>Learning and<br /><span>Foundations.</span></h2>
              </div>
              <p className="section-intro">
                A growing academic journey, alongside a practical foundation in computer
                applications.
              </p>
            </div>
            <div className="education-grid">
              {education.map((item, index) => (
                <article className="education-card" key={item.level}>
                  <span className="education-index">0{index + 1}</span>
                  <div>
                    <h3>{item.level}</h3>
                    <p>{item.detail}</p>
                    {item.duration && <span className="education-duration">{item.duration}</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section section-pad page-shell">
          <div className="section-heading section-heading--process">
            <div>
              <p className="eyebrow eyebrow--dark">How We Work Together</p>
              <h2>One Step<br /><span>In The Right Direction.</span></h2>
            </div>
            <p className="section-intro">
              From the first conversation to the next steps—clarity at every stage.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section section-pad" id="projects">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-dot" /> Practical Experience</p>
                <h2>Selected<br /><span>Projects.</span></h2>
              </div>
              <p className="section-intro">
                Hands-on work across social media, digital advertising, visual design,
                and website creation.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <span className="project-number">{project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-tags">{project.tags}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner page-shell">
            <div className="contact-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> Let&apos;s Talk</p>
              <h2>What&apos;s Your<br /><span>Next Step?</span></h2>
              <p>
                Tell me about your brand and what you need. Start the conversation here.
              </p>
              <div className="contact-details">
                <a href="tel:+918294171400">
                  <span>Phone</span>
                  <strong>+91 82941 71400</strong>
                </a>
                <a href="mailto:keanjan8196@gmail.com">
                  <span>Email</span>
                  <strong>keanjan8196@gmail.com</strong>
                </a>
              </div>
              <nav className="social-links" aria-label="Social media profiles">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                    {social.name} <ArrowIcon diagonal />
                  </a>
                ))}
              </nav>
              <span className="contact-decoration" aria-hidden="true">✳</span>
            </div>
            <div className="contact-form-wrap">
              <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="contact-name">Your Name</label>
                <input id="contact-name" name="name" type="text" placeholder="Enter your name" autoComplete="name" required />

                <label htmlFor="contact-email">Email Address</label>
                <input id="contact-email" name="email" type="email" placeholder="name@example.com" autoComplete="email" required />

                <label htmlFor="contact-phone">Phone Number</label>
                <input id="contact-phone" name="phone" type="tel" placeholder="+91" autoComplete="tel" required />

                <label htmlFor="contact-details">How can I help?</label>
                <textarea id="contact-details" name="details" rows="3" placeholder="Tell me about your brand and what you need..." required />

                <button className="button button--gold form-submit" type="submit">
                  Prepare Message <ArrowIcon />
                </button>
                <p className="form-note">
                  This form prepares an email draft on your device. Your email app must
                  be set up to send it; submissions are not stored on this website.
                </p>
              </form>
              {messagePreview && (
                <div className="message-preview" role="status">
                  <strong>Your email draft is ready</strong>
                  <p>Review it in your email app, then send it to Ranjan.</p>
                  <pre>{messagePreview}</pre>
                  <a className="email-draft-link" href={emailDraft}>
                    Open email app <ArrowIcon />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner page-shell">
          <a className="brand brand--footer" href="#home">
            <span className="brand-mark"><img src="/images/ranjan-logo.jpeg" alt="" /></span>
            <span className="brand-copy">
              <span className="brand-name">Ranjan Ai</span>
              <span className="brand-caption">DIGITAL MARKETING</span>
            </span>
          </a>
          <p>Your brand&apos;s digital identity.</p>
          <a className="back-to-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
          <span className="copyright">© {currentYear} Ranjan Ai Digital Marketing</span>
        </div>
      </footer>
    </>
  )
}

export default App
