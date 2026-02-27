import { useEffect, useState } from 'react'
import './App.css'
import heroPoster from './images/gallery/WhatsApp Image 2026-02-20 at 12.15.12 PM.jpeg'
import profileVideo from './images/gallery/profile.mp4'
import logoImg from './images/workexp/logo.png'

const projects = [
  // ===================== TV SERIALS =====================

  {
    id: 'dal-chini',
    title: 'Dal Chini',
    category: 'tv',
    typeLabel: 'TV Serial',
    role: 'Child Artist',
    year: '2024',
    image: 'https://img.youtube.com/vi/XcsJrkamw5w/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=XcsJrkamw5w',
  },

  {
    id: 'ganga-mai-ki-betiyan',
    title: 'Ganga Mai Ki Betiyan (Zee TV)',
    category: 'tv',
    typeLabel: 'TV Serial',
    role: 'Supporting Child Role',
    year: '2024',
    image: 'https://img.youtube.com/vi/0X5M33ABkd8/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=0X5M33ABkd8',
  },

  {
    id: 'sampurna',
    title: 'Sampurna (Star Plus)',
    category: 'tv',
    typeLabel: 'TV Serial',
    role: 'Child Artist',
    year: '2024',
    image: 'https://img.youtube.com/vi/ENUsFOm9BNk/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=ENUsFOm9BNk',
  },

  // ===================== SONGS =====================

  {
    id: 'mera-ishq',
    title: 'Mera Ishq – Sagar Bhatia',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Performance',
    year: '2023',
    image: 'https://img.youtube.com/vi/BR6LqRAfb4g/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=BR6LqRAfb4g',
  },

  {
    id: 'masoom-sharma',
    title: 'Music Video – Masoom Sharma (MS)',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://via.placeholder.com/800x1000?text=Masoom+Sharma+MS',
  },

  {
    id: 'kulwinder-billa',
    title: 'Music Video – Kulwinder Billa',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://img.youtube.com/vi/fO39St3ADnk/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=fO39St3ADnk',
  },

  {
    id: 'balaam',
    title: 'Balaam – Aman Jaji',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://img.youtube.com/vi/MlxDNu6ljdk/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=MlxDNu6ljdk',
  },

  {
    id: 'vicky-song',
    title: 'Music Video – Vicky',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://img.youtube.com/vi/vs-ZSzn2xso/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=vs-ZSzn2xso',
  },

  {
    id: 'harpreet-song',
    title: 'Music Video – Harpreet (H)',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://via.placeholder.com/800x1000?text=Harpreet+Song+H',
  },

  {
    id: 'aao-ramji',
    title: 'Aao Ramji – Hansraj Raghuwanshi',
    category: 'song',
    typeLabel: 'Devotional Music Video',
    role: 'Child Artist',
    year: '2023',
    image: 'https://img.youtube.com/vi/gg7XZ3d4zWg/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=gg7XZ3d4zWg',
  },

  {
    id: 'maa-bhola',
    title: 'Maa – Bhola Sangruria',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Emotional Child Role',
    year: '2023',
    image: 'https://img.youtube.com/vi/-maGP96d55c/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=-maGP96d55c',
  },

  {
    id: 'maa-stair-records',
    title: 'Maa – Stair Records',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://img.youtube.com/vi/af3HoSQAjgA/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=af3HoSQAjgA',
  },

  {
    id: 'saah-tiger',
    title: 'Saah Tiger Song',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://img.youtube.com/vi/9rZYFlDlb5Y/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=9rZYFlDlb5Y',
  },

  {
    id: 'tara-tara',
    title: 'Tara Tara – Gurlez Akhtar',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://img.youtube.com/vi/4h3VvW4qv5s/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=4h3VvW4qv5s',
  },

  {
    id: 'tere-jehi',
    title: 'Tere Jehi – Shivjot',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://img.youtube.com/vi/LvL8EUumrVQ/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=LvL8EUumrVQ',
  },

  {
    id: 'saiyaan',
    title: 'Saiyaan',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://img.youtube.com/vi/GgPmSV786do/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=GgPmSV786do',
  },

  {
    id: 'chandan-ki-palki',
    title: 'Chandan Ki Palki – Roshan Prince',
    category: 'song',
    typeLabel: 'Music Video',
    role: 'Featured Appearance',
    year: '2023',
    image: 'https://img.youtube.com/vi/IOMyPZgdHzg/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=IOMyPZgdHzg',
  },

  // ===================== FILMS =====================

  {
    id: 'safar-movie',
    title: 'Safar – with Sunny Deol',
    category: 'film',
    typeLabel: 'Feature Film',
    role: 'Child Artist',
    year: '2024',
    image: 'https://img.youtube.com/vi/tboP0zeBu-I/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=tboP0zeBu-I',
  },

  {
    id: 'rabba-menu-maaf-kari',
    title: 'Rabba Menu Maaf Kari',
    category: 'film',
    typeLabel: 'Feature Film',
    role: 'Supporting Role',
    year: '2024',
    image: 'https://via.placeholder.com/800x1000?text=Rabba+Menu+Maaf+Kari',
  },

  {
    id: 'punjab-files',
    title: 'Punjab Files',
    category: 'film',
    typeLabel: 'Feature Film',
    role: 'Child Role',
    year: '2024',
    image: 'https://via.placeholder.com/800x1000?text=Punjab+Files',
  },

  {
    id: 'godday-godday-chaa-2',
    title: 'Godday Godday Chaa 2',
    category: 'film',
    typeLabel: 'Feature Film',
    role: 'Supporting Child Role',
    year: '2024',
    image: 'https://via.placeholder.com/800x1000?text=Godday+Godday+Chaa+2',
  },

  {
    id: 'ek-tere-karke',
    title: 'Ek Tere Karke',
    category: 'film',
    typeLabel: 'Feature Film',
    role: 'Child Artist',
    year: '2024',
    image: 'https://via.placeholder.com/800x1000?text=Ek+Tere+Karke',
  },

  // ===================== ADVERTISEMENT =====================

  {
    id: 'tata-allianz',
    title: 'TATA Allianz Group Advertisement',
    category: 'ad',
    typeLabel: 'Commercial',
    role: 'Featured Child',
    year: '2023',
    image: 'https://img.youtube.com/vi/9rZYFlDlb5Y/maxresdefault.jpg',
    videoLink: 'https://www.youtube.com/watch?v=9rZYFlDlb5Y',
  },
];
const galleryModules = import.meta.glob(
  './images/gallery/**/*.{png,jpg,jpeg,webp,avif}',
  { eager: true }
)

const galleryImages = Object.entries(galleryModules).map(
  ([path, module], index) => {
    // Handle both { default: '...' } and '...' (Vite glob variations)
    const src = typeof module === 'string' ? module : module?.default || module

    const filename = path.split('/').pop() || `image-${index + 1}`
    const baseName = filename.replace(/\.[^.]+$/, '')
    const label = baseName.replace(/[_-]+/g, ' ')

    return {
      id: `gallery-${index + 1}`,
      thumb: src,
      full: src,
      alt: `Seerat gallery photo - ${label}`,
    }
  }
)

// const galleryModules = import.meta.glob(
//   './images/gallery/*.{png,jpg,jpeg,JPG,JPEG,webp,avif}',
//   {
//     eager: true,
//     query: '?url',
//     import: 'default',
//   },
// )

// const galleryImages = Object.entries(galleryModules).map(
//   ([path, src], index) => {
//     const filename = path.split('/').pop() || `image-${index + 1}`
//     const baseName = filename.replace(/\.[^.]+$/, '')
//     const label = baseName.replace(/[_-]+/g, ' ')
//     return {
//       id: `gallery-${index + 1}`,
//       thumb: src,
//       full: src,
//       alt: `Seerat gallery photo - ${label}`,
//     }
//   },
// )

function App() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [navOpen, setNavOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [gallerySelection, setGallerySelection] = useState(null)

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]')
    
    // Safety fallback: if everything is still hidden after 2 seconds, show it anyway
    const timer = setTimeout(() => {
      elements.forEach((element) => {
        if (!element.classList.contains('visible')) {
          element.classList.add('visible')
        }
      })
    }, 2000)

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'))
      clearTimeout(timer)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // Lower threshold for better visibility trigger
        rootMargin: '0px 0px -50px 0px'
      },
    )
    elements.forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo-container">
            <img src={logoImg} alt="Seerat Logo" className="logo-img" />
          </div>
          <nav className="main-nav" aria-label="Main navigation">
            <button
              className="nav-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={navOpen ? 'true' : 'false'}
              onClick={() => setNavOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
            <ul className={`nav-links${navOpen ? ' open' : ''}`}>
              <li>
                <a href="#hero" onClick={() => setNavOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setNavOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setNavOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => setNavOpen(false)}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#showreel" onClick={() => setNavOpen(false)}>
                  Showreel
                </a>
              </li>
              {/* <li>
                <a href="#achievements" onClick={() => setNavOpen(false)}>
                  Achievements
                </a>
              </li> */}
              <li>
                <a href="#contact" onClick={() => setNavOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero section-shell">
          <div className="container">
            <div className="section-inner hero-grid">
              <div className="hero-content" data-animate>
                <p className="eyebrow">Professional Child Actor</p>
                <h1 className="hero-title">Seerat </h1>
                <p className="hero-tagline">Child Actor | Performer | Model</p>
                <p className="hero-summary">
                  A confident, expressive young performer with experience across
                  television, film, songs, and commercials.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn primary-btn">
                    View Projects
                  </a>
                  <a href="#showreel" className="btn ghost-btn">
                    Watch Showreel
                  </a>
                </div>
              </div>
              <div className="hero-media" data-animate>
                <div className="hero-image-frame">
                  <video
                    className="hero-image"
                    src={profileVideo}
                    poster={heroPoster}
                    autoPlay
                    muted
                    playsInline
                    loop
                    controls
                  />
                  <div className="hero-badge">
                    <span className="hero-badge-label">Available for</span>
                    <span className="hero-badge-value">
                      Films • TV • Ads
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <div className="container">
            <div className="section-inner" data-animate>
              <div className="section-header">
                <h2>About</h2>
                <p>
                  Professional, warm, and camera-ready, with a cinematic
                  presence suited for leading and supporting roles.
                </p>
              </div>
              <div className="about-grid">
                <div className="about-bio">
                  <p>
                    Seerat is a dedicated child actor with strong on-camera
                    presence, natural expressions, and the ability to take
                    direction with ease. She has experience performing in
                    television serials, digital films, and commercial
                    advertisements.
                  </p>
                  <p>
                    Known for her expressive eyes and nuanced emotional range,
                    she is comfortable on set, adapts quickly to new
                    environments, and performs confidently in both dramatic and
                    light-hearted roles.
                  </p>
                 
                </div>
                <div className="about-details">
                  <dl className="detail-list">
                    <div className="detail-row">
                      <dt>Age</dt>
                      <dd>9 years</dd>
                    </div>
                    <div className="detail-row">
                      <dt>Height</dt>
                      <dd>4&apos; 6&quot; (137.16 cm)</dd>
                    </div>
                    <div className="detail-row">
                      <dt>Weight</dt>
                      <dd>20 kg</dd>
                    </div>
                    <div className="detail-row">
                      <dt>Location</dt>
                      <dd>Mohali,Punjab</dd>
                    </div>
                    <div className="detail-row">
                      <dt>Languages</dt>
                      <dd>English, Hindi, Punjabi</dd>
                    </div>
                  </dl>
                  <div className="skills">
                    <h3>Skills</h3>
                    <ul className="chips">
                      <li>On-camera acting</li>
                      <li>Dialogue delivery</li>
                      <li>Facial expressions</li>
                      <li>Dancing</li>
                      <li>Photoshoots</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell">
          <div className="container">
            <div className="section-inner" data-animate>
              <div className="section-header">
                <h2>Projects</h2>
                <p>
                  Selected work across television, films, songs, and brand
                  commercials.
                </p>
              </div>
              <div
                className="project-filters"
                role="tablist"
                aria-label="Project categories"
              >
                <button
                  type="button"
                  className={`filter-btn${
                    activeFilter === 'all' ? ' active' : ''
                  }`}
                  role="tab"
                  aria-selected={activeFilter === 'all' ? 'true' : 'false'}
                  onClick={() => setActiveFilter('all')}
                >
                  All
                </button>
                <button
                  type="button"
                  className={`filter-btn${
                    activeFilter === 'tv' ? ' active' : ''
                  }`}
                  role="tab"
                  aria-selected={activeFilter === 'tv' ? 'true' : 'false'}
                  onClick={() => setActiveFilter('tv')}
                >
                  TV Serials
                </button>
                <button
                  type="button"
                  className={`filter-btn${
                    activeFilter === 'film' ? ' active' : ''
                  }`}
                  role="tab"
                  aria-selected={activeFilter === 'film' ? 'true' : 'false'}
                  onClick={() => setActiveFilter('film')}
                >
                  Films
                </button>
                <button
                  type="button"
                  className={`filter-btn${
                    activeFilter === 'song' ? ' active' : ''
                  }`}
                  role="tab"
                  aria-selected={activeFilter === 'song' ? 'true' : 'false'}
                  onClick={() => setActiveFilter('song')}
                >
                  Songs
                </button>
                <button
                  type="button"
                  className={`filter-btn${
                    activeFilter === 'ad' ? ' active' : ''
                  }`}
                  role="tab"
                  aria-selected={activeFilter === 'ad' ? 'true' : 'false'}
                  onClick={() => setActiveFilter('ad')}
                >
                  Advertisements
                </button>
              </div>
              <div className="project-grid">
                {filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    className="project-card"
                    data-category={project.category}
                  >
                    <div className="project-thumb">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="project-meta">
                      <span className="project-tag">{project.typeLabel}</span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-role">Role: {project.role}</p>
                      <p className="project-year">{project.year}</p>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <button
                        type="button"
                        className="text-link"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section-shell">
          <div className="container">
            <div className="section-inner" data-animate>
              <div className="section-header">
                <h2>Gallery</h2>
                <p>
                  Curated images that highlight range, expressions, and on-camera
                  comfort.
                </p>
              </div>
              <div className="gallery-grid">
                {galleryImages.map((image) => (
                  <button
                    key={image.id}
                    type="button"
                    className="gallery-item"
                    onClick={() => setGallerySelection(image)}
                  >
                    <img
                      src={image.thumb}
                      alt={image.alt}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="showreel" className="section-shell">
          <div className="container">
            <div className="section-inner" data-animate>
              <div className="section-header">
                <h2>Showreel</h2>
                <p>
                  A concise reel showcasing recent performances and on-camera
                  range.
                </p>
              </div>
              <div className="showreel-frame">
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/GyWw1RDCpyE?si=CAiAbTrF39F8peOT"
                    title="Child actor showreel"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="achievements" className="section-shell">
          <div className="container">
            <div className="section-inner" data-animate>
              <div className="section-header">
                <h2>Achievements</h2>
                <p>
                  A selection of recognitions that highlight professionalism and
                  on-screen impact.
                </p>
              </div>
              <div className="achievement-timeline">
                {achievements.map((item) => (
                  <article key={item.year} className="achievement-card">
                    <div className="achievement-year">{item.year}</div>
                    <div className="achievement-body">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <section id="contact" className="section-shell">
          <div className="container">
            <div className="section-inner" data-animate>
              <div className="section-header">
                <h2>Contact</h2>
                <p>
                  For casting, auditions, and collaborations, please use the
                  contact details below.
                </p>
              </div>
              <div className="contact-grid">
                <div className="contact-details">
                  <h3>Parent / Manager</h3>
                  <p className="contact-name">Anupreet Arora</p>
                  <dl className="detail-list">
                    <div className="detail-row">
                      <dt>Phone</dt>
                      <dd>
                        <a href="tel:+919779119333 ">+91 97791 19333</a>
                      </dd>
                    </div>
                    <div className="detail-row">
                      <dt>Email</dt>
                      <dd>
                        <a href="mailto:seeratofficial216@gmail.com">
                          seeratofficial216@gmail.com
                        </a>
                      </dd>
                    </div>
                    <div className="detail-row">
                      <dt>Instagram</dt>
                      <dd>
                        <a
                          href="https://www.instagram.com/official_seerat223?utm_source=qr&igsh=aGRnaW1uMDQzcnVy"
                          target="_blank"
                          rel="noreferrer"
                        >
                          instagram.com/seerat
                        </a>
                      </dd>
                    </div>
                    <div className="detail-row">
                      <dt>Facebook</dt>
                      <dd>
                        <a
                          href="https://share.google/FSN01L7kqvs00nevo"
                          target="_blank"
                          rel="noreferrer"
                        >
                          facebook.com/seerat
                        </a>
                      </dd>
                    </div>
                    <div className="detail-row">
                      <dt>Facebook</dt>
                      <dd>
                        <a
                          href="https://youtube.com/@offical_seerat223?si=30p7oaWdqhq08uHc"
                          target="_blank"
                          rel="noreferrer"
                        >
                          youtube.com/@offical_seerat
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <div className="contact-icons">
                    <a
                      href="tel:+919779119333 "
                      className="contact-icon"
                      aria-label="Call parent or manager"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.6 2.8 8.8 2A2 2 0 0 1 11.3 3.2l1 3.4a2 2 0 0 1-.5 2L10.7 9.7a11 11 0 0 0 4.6 4.6l1.1-1.1a2 2 0 0 1 2-.5l3.4 1a2 2 0 0 1 1.2 2.5l-.8 2.2A2 2 0 0 1 20.3 20 17 17 0 0 1 4 3.7a2 2 0 0 1 2.6-0.9Z" />
                      </svg>
                    </a>
                    <a
                      href="mailto: seeratofficial216@gmail.com"
                      className="contact-icon"
                      aria-label="Email for casting enquiries"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm0 3.5V17h16v-6.5l-7.4 4.6a2 2 0 0 1-2.1 0L4 10.5Z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/official_seerat223?utm_source=qr&igsh=aGRnaW1uMDQzcnVy"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                      aria-label="Instagram profile"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5Zm4.25-3.75a1 1 0 1 1-.7 1.7 1 1 0 0 1 .7-1.7Z" />
                      </svg>
                    </a>
                    <a
                      href="https://share.google/FSN01L7kqvs00nevo"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-icon"
                      aria-label="Facebook profile"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13 21v-7h2.3a1 1 0 0 0 1-.8l.4-2.5A1 1 0 0 0 15.7 9H13V7.2A1.2 1.2 0 0 1 14.3 6H17a1 1 0 0 0 1-1V3.7A1 1 0 0 0 17 2h-3.8A4.2 4.2 0 0 0 9 6.3V9H7a1 1 0 0 0-1 .9v2.3a1 1 0 0 0 1 .8h2v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-logo">
            <img src={logoImg} alt="Seerat Logo" className="logo-img footer-logo-img" />
          </div>
          <p className="footer-meta">
            Photography and footage available on request.
          </p>
        </div>
      </footer>

      {selectedProject && (
        <div
          className="modal-backdrop open"
          aria-hidden="false"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null)
            }
          }}
        >
          <div
            className="modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close details"
              onClick={() => setSelectedProject(null)}
            />
            <div className="modal-content">
              <h3 id="project-modal-title">{selectedProject.title}</h3>
              <p className="modal-role">{selectedProject.role}</p>
              <p className="modal-year">{selectedProject.year}</p>
              <p className="modal-body">{selectedProject.description}</p>
              {selectedProject.videoLink && (
                <div className="modal-actions">
                  <a
                    href={selectedProject.videoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary-btn"
                  >
                    Watch Video
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {gallerySelection && (
        <div
          className="modal-backdrop open"
          aria-hidden="false"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setGallerySelection(null)
            }
          }}
        >
          <div
            className="modal-dialog gallery-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Expanded gallery image"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close image"
              onClick={() => setGallerySelection(null)}
            />
            <div className="modal-content gallery-modal-content">
              <img
                src={gallerySelection.full}
                alt={gallerySelection.alt}
                className="gallery-modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
