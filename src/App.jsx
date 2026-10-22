import { useId, useState } from 'react'
import './App.css'

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

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
    icon: 'web',
    title: 'Website Design & Landing Pages',
    description: 'Design modern, responsive websites and landing pages tailored to your brand and mobile visitors.',
  },
  {
    number: '04',
    icon: 'ads',
    title: 'Meta & Google Ads',
    description: 'Learn targeted paid campaign setup for Meta and Google, including audience targeting and lead forms.',
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
  {
    level: 'AI & Digital Marketing',
    detail: 'Professional learning in AI-powered marketing, social media, Meta and Google Ads, Canva design, and SEO',
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

const focusMissions = [
  {
    title: 'AI Strategy',
    description: 'Use ChatGPT and modern AI tools to explore ideas and support smarter marketing workflows.',
    tag: 'SMARTER GROWTH',
  },
  {
    title: 'Digital Marketing',
    description: 'Bring campaigns, SEO, content, and digital strategy together around clear goals.',
    tag: 'DIGITAL STRATEGY',
  },
  {
    title: 'Social Media Management',
    description: 'Manage content and build a consistent presence across Facebook, Instagram, and YouTube.',
    tag: 'SOCIAL PRESENCE',
  },
]

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/ranjan_kumar291/' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61592488077243' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ranjan-kumar-a86a30426/' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCvPH5rLCVDtwlJQ-GfC4iUA' },
  { name: 'WhatsApp', url: 'https://api.whatsapp.com/send?phone=918294171400' },
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

function DartboardIllustration({ label }) {
  const uniqueId = useId().replace(/:/g, '')
  const ids = {
    boardSurface: `board-surface-${uniqueId}`,
    bullseye: `bullseye-${uniqueId}`,
    dartShaft: `dart-shaft-${uniqueId}`,
    dartTrail: `dart-trail-${uniqueId}`,
    dartGlow: `dart-glow-${uniqueId}`,
    description: `dartboard-description-${uniqueId}`,
  }
  const boardNumbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5]
  const pointOnBoard = (radius, angle) => ({
    x: 250 + Math.cos(angle) * radius,
    y: 250 + Math.sin(angle) * radius,
  })
  const segmentPath = (innerRadius, outerRadius, startAngle, endAngle) => {
    const innerStart = pointOnBoard(innerRadius, startAngle)
    const outerStart = pointOnBoard(outerRadius, startAngle)
    const outerEnd = pointOnBoard(outerRadius, endAngle)
    const innerEnd = pointOnBoard(innerRadius, endAngle)

    return [
      `M ${innerStart.x} ${innerStart.y}`,
      `L ${outerStart.x} ${outerStart.y}`,
      `A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${innerRadius} ${innerRadius} 0 0 0 ${innerStart.x} ${innerStart.y}`,
      'Z',
    ].join(' ')
  }

  return (
    <svg
      className="dartboard-art"
      viewBox="0 0 500 500"
      role="img"
      aria-label={`${label} mission dartboard`}
      aria-describedby={ids.description}
    >
      <desc id={ids.description}>
        A dimensional premium dartboard with three gold darts launching one after another into the same bullseye.
      </desc>
      <defs>
        <radialGradient id={ids.boardSurface} cx="45%" cy="38%">
          <stop offset="0%" stopColor="#34251a" />
          <stop offset="72%" stopColor="#1d140e" />
          <stop offset="100%" stopColor="#100b08" />
        </radialGradient>
        <radialGradient id={ids.bullseye} cx="38%" cy="32%">
          <stop offset="0%" stopColor="#f4d38f" />
          <stop offset="48%" stopColor="#d4a858" />
          <stop offset="100%" stopColor="#a77532" />
        </radialGradient>
        <linearGradient id={ids.dartTrail} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#fff0c8" stopOpacity="0" />
          <stop offset="55%" stopColor="#f3c875" stopOpacity=".25" />
          <stop offset="100%" stopColor="#fff0c8" stopOpacity=".9" />
        </linearGradient>
        <linearGradient id={ids.dartShaft} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff0c8" />
          <stop offset="38%" stopColor="#edca83" />
          <stop offset="72%" stopColor="#9b6c34" />
          <stop offset="100%" stopColor="#f2d99f" />
        </linearGradient>
        <filter id={ids.dartGlow} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse cx="257" cy="274" rx="206" ry="202" fill="#000" fillOpacity=".55" filter={`url(#${ids.dartGlow})`} />
      <circle cx="250" cy="258" r="194" fill="#080604" stroke="#6c4827" strokeWidth="8" />
      <circle className="board-rim-shadow" cx="250" cy="250" r="194" fill="#080604" />
      <circle cx="250" cy="250" r="190" fill={`url(#${ids.boardSurface})`} stroke="#d7ac62" strokeOpacity=".78" strokeWidth="4" />
      <circle cx="250" cy="250" r="186" fill="none" stroke="#f4d38f" strokeOpacity=".25" strokeWidth="1" />
      <circle cx="250" cy="250" r="181" fill="none" stroke="#6b4b2c" strokeWidth="2" />
      <circle cx="250" cy="250" r="174" fill="none" stroke="#c29350" strokeOpacity=".8" strokeWidth="3" />
      <g className="board-number-ring">
        {boardNumbers.map((number, index) => {
          const angle = ((index * 18) - 90) * Math.PI / 180
          const point = pointOnBoard(162, angle)
          return (
            <text key={number} x={point.x} y={point.y} textAnchor="middle" dominantBaseline="central">
              {number}
            </text>
          )
        })}
      </g>
      <circle cx="250" cy="250" r="151" fill="#17100b" stroke="#d7ac62" strokeOpacity=".7" strokeWidth="2" />
      <g className="board-scoring-ring">
        {boardNumbers.map((number, index) => {
          const startAngle = ((index * 18) - 99) * Math.PI / 180
          const endAngle = ((index * 18) - 81) * Math.PI / 180
          return (
            <path
              key={number}
              d={segmentPath(145, 151, startAngle, endAngle)}
              className={index % 2 === 0 ? 'board-segment board-segment--gold' : 'board-segment board-segment--dark'}
            />
          )
        })}
      </g>
      <circle cx="250" cy="250" r="127" fill="#21170f" stroke="#785532" strokeWidth="2" />
      <circle cx="250" cy="250" r="104" fill="none" stroke="#d7ac62" strokeOpacity=".52" strokeWidth="3" />
      <g className="board-scoring-ring board-scoring-ring--inner">
        {boardNumbers.map((number, index) => {
          const startAngle = ((index * 18) - 99) * Math.PI / 180
          const endAngle = ((index * 18) - 81) * Math.PI / 180
          return (
            <path
              key={number}
              d={segmentPath(98, 104, startAngle, endAngle)}
              className={index % 2 === 0 ? 'board-segment board-segment--gold' : 'board-segment board-segment--dark'}
            />
          )
        })}
      </g>
      <circle cx="250" cy="250" r="78" fill="#1b120c" stroke="#956b39" strokeWidth="2" />
      <circle cx="250" cy="250" r="55" fill="none" stroke="#d7ac62" strokeOpacity=".63" strokeWidth="3" />
      <circle cx="250" cy="250" r="33" fill="#21160e" stroke="#aa7b3e" strokeWidth="2" />
      <circle cx="250" cy="250" r="19" fill={`url(#${ids.bullseye})`} stroke="#f2d397" strokeOpacity=".78" strokeWidth="2" />
      <g className="board-spokes">
        {boardNumbers.map((number, index) => {
          const angle = ((index * 18) - 99) * Math.PI / 180
          const outer = pointOnBoard(174, angle)
          const inner = pointOnBoard(33, angle)
          return (
            <line key={number} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} />
          )
        })}
      </g>

      <g className="dart dart--one">
        <path className="dart-trail" d="M -90 250 250 250" fill="none" stroke={`url(#${ids.dartTrail})`} strokeWidth="12" strokeLinecap="round" />
        <line x1="250" y1="250" x2="55" y2="250" stroke="#080604" strokeOpacity=".82" strokeWidth="9" strokeLinecap="round" />
        <line x1="250" y1="250" x2="55" y2="250" stroke={`url(#${ids.dartShaft})`} strokeWidth="4" strokeLinecap="round" />
        <line x1="245" y1="246" x2="61" y2="246" stroke="#fff1cf" strokeOpacity=".7" strokeWidth="1" />
        <path d="m55 250-40-25 8 34Z" fill="#b88442" stroke="#f0cf8e" strokeWidth="2" filter={`url(#${ids.dartGlow})`} />
        <path d="m55 250-38 18-9-35Z" fill="#7c522b" stroke="#d7ac62" strokeWidth="2" />
        <circle cx="55" cy="250" r="5" fill="#f3d697" />
      </g>

      <g className="dart dart--two">
        <path className="dart-trail" d="M 590 -70 250 250" fill="none" stroke={`url(#${ids.dartTrail})`} strokeWidth="12" strokeLinecap="round" />
        <line x1="250" y1="250" x2="405" y2="105" stroke="#080604" strokeOpacity=".75" strokeWidth="8" strokeLinecap="round" />
        <line x1="250" y1="250" x2="405" y2="105" stroke={`url(#${ids.dartShaft})`} strokeWidth="4" strokeLinecap="round" />
        <line x1="260" y1="240" x2="399" y2="110" stroke="#fff1cf" strokeOpacity=".65" strokeWidth="1" />
        <path d="m405 105 39-24-18 42Z" fill="#b88442" stroke="#f0cf8e" strokeWidth="2" filter={`url(#${ids.dartGlow})`} />
        <path d="m405 105 20-34-42 20Z" fill="#7c522b" stroke="#d7ac62" strokeWidth="2" />
        <circle cx="405" cy="105" r="5" fill="#f3d697" />
      </g>

      <g className="dart dart--three">
        <path className="dart-trail" d="M 580 585 250 250" fill="none" stroke={`url(#${ids.dartTrail})`} strokeWidth="12" strokeLinecap="round" />
        <line x1="250" y1="250" x2="393" y2="405" stroke="#080604" strokeOpacity=".75" strokeWidth="8" strokeLinecap="round" />
        <line x1="250" y1="250" x2="393" y2="405" stroke={`url(#${ids.dartShaft})`} strokeWidth="4" strokeLinecap="round" />
        <line x1="259" y1="260" x2="388" y2="398" stroke="#fff1cf" strokeOpacity=".65" strokeWidth="1" />
        <path d="m393 405 39 24-42-18Z" fill="#b88442" stroke="#f0cf8e" strokeWidth="2" filter={`url(#${ids.dartGlow})`} />
        <path d="m393 405 34 20-19-42Z" fill="#7c522b" stroke="#d7ac62" strokeWidth="2" />
        <circle cx="393" cy="405" r="5" fill="#f3d697" />
      </g>

      <g className="impact-rings" fill="none" stroke="#f3d697">
        <circle className="impact-ring impact-ring--one" cx="250" cy="250" r="23" />
        <circle className="impact-ring impact-ring--two" cx="250" cy="250" r="23" />
        <circle className="impact-ring impact-ring--three" cx="250" cy="250" r="23" />
      </g>
      <circle cx="250" cy="250" r="8" fill="#fff1cf" filter={`url(#${ids.dartGlow})`} />
      <circle cx="250" cy="250" r="3" fill="#fff8e8" />
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
              <img src={assetUrl('images/ranjan-logo.jpeg')} alt="" />
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
              <span>AI Digital Marketer.</span>
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
                src={assetUrl('images/ranjan-portrait.png')}
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

        <section className="focus-section">
          <div className="focus-inner page-shell">
            <div className="focus-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> Three Focused Missions</p>
              <h2>Three missions.<br /><span>One bullseye.</span></h2>
              <p className="focus-intro">
                AI, digital marketing, and social media management—three focused
                missions, one shared target.
              </p>
              <div className="focus-missions">
                {focusMissions.map((mission, index) => (
                  <article className={`focus-mission focus-mission--${index + 1}`} key={mission.title}>
                    <span className="mission-number">0{index + 1}</span>
                    <span className="mission-copy">
                      <strong>{mission.title}</strong>
                      <small>{mission.tag}</small>
                    </span>
                    <span className="mission-status"><i /> MISSION 0{index + 1}</span>
                  </article>
                ))}
              </div>
              <a className="button button--gold" href="#services">
                Explore All Services <ArrowIcon />
              </a>
            </div>
            <div className="focus-visual">
              <div className="focus-art-glow" />
              <DartboardIllustration label="Three mission darts converging on the bullseye" />
              <span className="focus-art-label">THREE MISSIONS · ONE TARGET</span>
              <div className="board-side-label">
                <span>FOCUS</span>
                <strong>100%</strong>
                <i />
                <small>ON TARGET</small>
              </div>
              <div className="board-rim-caption">AI&nbsp; · &nbsp;DIGITAL&nbsp; · &nbsp;SOCIAL</div>
            </div>
            <div className="focus-footer">
              <span><i /> AIM WITH PURPOSE. HIT WITH PRECISION.</span>
              <span>01 &nbsp;—&nbsp; 03</span>
            </div>
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
              <article className="service-card" key={service.title}>
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
                src={assetUrl('images/ranjan-portrait.png')}
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
                  <a key={social.name} href={social.url}>
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
            <span className="brand-mark"><img src={assetUrl('images/ranjan-logo.jpeg')} alt="" /></span>
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
