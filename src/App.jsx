import { useEffect, useRef, useState } from 'react'
import './App.css'
import nicolaPortrait from './assets/profile/nicola-portrait.jpg'

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" /></svg>
const LinkedIn = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5v9M6.5 5.5v.1M10.5 17.5v-5c0-2.2 4-2.4 4 0v5M10.5 8.5v9M18.5 17.5v-5.7c0-5.2-8-4.8-8 0" /></svg>
const Instagram = () => <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.7" r=".8" className="icon-fill" /></svg>

const profile = {
  name: 'Muhammad Nicola Feby Salvaturi',
  role: 'Senior Mobile Engineer',
  company: 'PT Bank Multiarta Sentosa Tbk (Bank MAS)',
  location: 'South Jakarta, Jakarta, Indonesia',
  linkedin: 'https://www.linkedin.com/in/nicola-feby',
  instagram: 'https://www.instagram.com/nicolafeby/',
  phone: '+6289514785353',
  email: 'nicolafsalv@gmail.com',
}

const copy = {
  id: {
    locale: 'id-ID',
    langLabel: 'ID',
    langToggle: 'EN',
    navLabel: 'Navigasi utama',
    homeAria: `${profile.name}, kembali ke atas`,
    menuAria: 'Buka menu',
    nav: {
      about: 'Tentang',
      journey: 'Pengalaman',
      work: 'Proyek',
      skills: 'Skills',
      contact: 'Mari terhubung',
    },
    hero: {
      kicker: 'Mobile Engineer / 2026',
      imageAlt: `Potret ${profile.name}`,
      captionRole: 'Senior Mobile Engineer',
      intro: <>Senior Mobile Engineer yang membangun pengalaman mobile banking yang <em>aman, scalable,</em> dan intuitif.</>,
      scroll: 'Kenali saya lebih jauh',
      timezone: 'WIB',
    },
    about: {
      label: 'Tentang saya',
      statement: <>Saya membangun produk mobile yang <span>aman dan intuitif</span> untuk kebutuhan nyata pengguna.</>,
      paragraphs: [
        <>Saya {profile.name}, {profile.role} di {profile.company}.</>,
        'Dengan latar belakang Computer Engineering, saya berfokus pada pengembangan Flutter untuk Android dan iOS serta menghadirkan solusi mobile banking yang secure, scalable, dan mudah digunakan.',
        'Perjalanan saya juga mencakup riset Robotics dan Internet of Things, yang membentuk cara berpikir sistematis dalam menyelesaikan masalah.',
      ],
      cta: 'Lihat profil LinkedIn',
    },
    journey: {
      label: 'Pengalaman profesional',
      overline: '2018 - Sekarang',
      title: <>Dibentuk oleh<br /><em>pengalaman.</em></>,
    },
    work: {
      label: 'Proyek pilihan',
      title: <>Gagasan yang<br /><em>berjalan.</em></>,
      description: 'Eksplorasi machine learning, computer vision, robotics, dan embedded systems yang membentuk fondasi engineering saya.',
      associated: 'Terkait dengan',
    },
    education: {
      label: 'Pendidikan',
      description: 'Computer Engineering · Researcher at RnEST Laboratory',
      focus: 'IoT · Robotics · Machine Learning',
    },
    skills: {
      label: 'Keahlian teknis',
      overline: 'Dari mobile hingga intelligent systems',
      title: <>Tools yang<br /><em>terasah.</em></>,
      description: 'Keahlian yang tumbuh melalui pekerjaan profesional, riset, dan proyek nyata sejak masa kuliah.',
    },
    contact: {
      top: 'Terbuka untuk koneksi profesional',
      focus: 'Mobile engineering · Financial technology',
      linkedinAria: 'Hubungi Nicola Feby melalui LinkedIn',
      instagramAria: 'Ikuti Nicola Feby di Instagram, @nicolafeby',
      backTop: 'Kembali ke atas ↑',
    },
  },
  en: {
    locale: 'en-US',
    langLabel: 'EN',
    langToggle: 'ID',
    navLabel: 'Main navigation',
    homeAria: `${profile.name}, back to top`,
    menuAria: 'Open menu',
    nav: {
      about: 'About',
      journey: 'Experience',
      work: 'Projects',
      skills: 'Skills',
      contact: "Let's connect",
    },
    hero: {
      kicker: 'Mobile Engineer / 2026',
      imageAlt: `Portrait of ${profile.name}`,
      captionRole: 'Senior Mobile Engineer',
      intro: <>Senior Mobile Engineer building mobile banking experiences that are <em>secure, scalable,</em> and intuitive.</>,
      scroll: 'Get to know me',
      timezone: 'WIB',
    },
    about: {
      label: 'About me',
      statement: <>I build mobile products that are <span>secure and intuitive</span> for real user needs.</>,
      paragraphs: [
        <>I'm {profile.name}, {profile.role} at {profile.company}.</>,
        'With a Computer Engineering background, I focus on Flutter development for Android and iOS while delivering secure, scalable, and easy-to-use mobile banking solutions.',
        'My journey also includes Robotics and Internet of Things research, which shaped a systematic way of solving engineering problems.',
      ],
      cta: 'View LinkedIn profile',
    },
    journey: {
      label: 'Professional experience',
      overline: '2018 - Present',
      title: <>Built through<br /><em>experience.</em></>,
    },
    work: {
      label: 'Selected projects',
      title: <>Ideas, built<br /><em>to work.</em></>,
      description: 'Machine learning, computer vision, robotics, and embedded systems explorations that shaped my engineering foundation.',
      associated: 'Associated with',
    },
    education: {
      label: 'Education',
      description: 'Computer Engineering · Researcher at RnEST Laboratory',
      focus: 'IoT · Robotics · Machine Learning',
    },
    skills: {
      label: 'Technical skills',
      overline: 'From mobile to intelligent systems',
      title: <>Tools shaped<br /><em>by practice.</em></>,
      description: 'Skills grown through professional work, research, and real projects since university.',
    },
    contact: {
      top: 'Open to professional connections',
      focus: 'Mobile engineering · Financial technology',
      linkedinAria: 'Contact Nicola Feby on LinkedIn',
      instagramAria: 'Follow Nicola Feby on Instagram, @nicolafeby',
      backTop: 'Back to top ↑',
    },
  },
}

const experienceItems = {
  id: [
  { period: '2026 - Kini', role: 'Senior Mobile Engineer', company: 'Bank MAS', meta: 'Penuh waktu / Remote', skills: 'Flutter, Android Development' },
  { period: '2023 - 2025', role: 'Mobile Engineer', company: 'Bank MAS', meta: 'Penuh waktu / Remote', skills: 'Android Development, Flutter' },
  { period: '2024 - 2025', role: 'Mobile Developer', company: 'PT Treetan Nusantara Network', meta: 'Freelance / Remote', skills: 'iOS Development, Android Development' },
  { period: '2024', role: 'Mobile Engineer', company: 'PT Meta Pesona Teknologi', meta: 'Paruh waktu / Remote', skills: 'Flutter, Android Development' },
  { period: '2022 - 2023', role: 'Mobile Engineer', company: 'OnTime Technology', meta: 'Penuh waktu / On-site', skills: 'Android Development, Flutter' },
  { period: '2018 - 2020', role: 'Researcher', company: 'RnEST Laboratory', meta: 'Penuh waktu / Bandung', skills: 'Robotics, Internet of Things (IoT)' },
  { period: '2019', role: 'IT Help Desk Support', company: 'Telkom Indonesia', meta: 'Magang / Surabaya', skills: 'Information Technology Support' },
  ],
  en: [
    { period: '2026 - Present', role: 'Senior Mobile Engineer', company: 'Bank MAS', meta: 'Full-time / Remote', skills: 'Flutter, Android Development' },
    { period: '2023 - 2025', role: 'Mobile Engineer', company: 'Bank MAS', meta: 'Full-time / Remote', skills: 'Android Development, Flutter' },
    { period: '2024 - 2025', role: 'Mobile Developer', company: 'PT Treetan Nusantara Network', meta: 'Freelance / Remote', skills: 'iOS Development, Android Development' },
    { period: '2024', role: 'Mobile Engineer', company: 'PT Meta Pesona Teknologi', meta: 'Part-time / Remote', skills: 'Flutter, Android Development' },
    { period: '2022 - 2023', role: 'Mobile Engineer', company: 'OnTime Technology', meta: 'Full-time / On-site', skills: 'Android Development, Flutter' },
    { period: '2018 - 2020', role: 'Researcher', company: 'RnEST Laboratory', meta: 'Full-time / Bandung', skills: 'Robotics, Internet of Things (IoT)' },
    { period: '2019', role: 'IT Help Desk Support', company: 'Telkom Indonesia', meta: 'Internship / Surabaya', skills: 'Information Technology Support' },
  ],
}

const projectItems = {
  id: [
    {
      period: 'Mar 2021 - Jul 2021',
      title: 'Self Driving Car Robot Based on Road Sign Classification',
      affiliation: 'Universitas Telkom',
      description: 'Sistem kemudi mobil otomatis berbasis pengenalan rambu lalu lintas untuk perintah lurus, kanan, kiri, dan berhenti menggunakan algoritma CNN.',
      skills: 'Deep Learning, Machine Learning',
      category: 'AI / Robotics',
    },
    {
      period: 'May 2021 - Jun 2021',
      title: 'Smart Door Lock System Based on Face Recognition',
      affiliation: 'Universitas Telkom',
      description: 'Sistem face recognition pada mekanisme pintu yang dapat membuka otomatis untuk pengguna terdaftar dan menangkap wajah yang tidak dikenal.',
      skills: 'Machine Learning',
      category: 'Computer Vision',
    },
    {
      period: 'Jun 2020 - Jul 2020',
      title: 'Attendance System Based on Face Recognition',
      affiliation: 'ProCode CG, Bandung',
      description: 'Sistem absensi karyawan otomatis menggunakan facial recognition untuk mengurangi antrean dan kontak fisik dengan perangkat absensi.',
      skills: 'Machine Learning',
      category: 'Face Recognition',
    },
    {
      period: 'Sep 2019',
      title: 'Object Detection',
      affiliation: 'Universitas Telkom',
      description: 'Sistem image processing kolaboratif berbasis Python untuk mendeteksi objek produk.',
      skills: 'Machine Learning, Python',
      category: 'Image Processing',
    },
    {
      period: 'Aug 2019',
      title: 'Line Follower Car Robot',
      affiliation: 'RnEST Laboratory',
      description: 'Proyek robotics dan embedded systems yang dirancang untuk mengikuti jalur atau garis hitam.',
      skills: 'Robotics, Embedded Systems',
      category: 'Robotics',
    },
    {
      period: 'Sep 2018',
      title: 'Avoiding Car Robot',
      affiliation: 'RnEST Laboratory',
      description: 'Robot otonom yang mampu mendeteksi dan menghindari rintangan tanpa menabrak dinding atau objek.',
      skills: 'Robotics, Embedded Systems',
      category: 'Autonomous Systems',
    },
  ],
  en: [
    {
      period: 'Mar 2021 - Jul 2021',
      title: 'Self Driving Car Robot Based on Road Sign Classification',
      affiliation: 'Telkom University',
      description: 'Automatic car steering system based on traffic sign recognition for straight, right, left, and stop commands using a CNN algorithm.',
      skills: 'Deep Learning, Machine Learning',
      category: 'AI / Robotics',
    },
    {
      period: 'May 2021 - Jun 2021',
      title: 'Smart Door Lock System Based on Face Recognition',
      affiliation: 'Telkom University',
      description: 'A face recognition system applied to a door mechanism, allowing it to unlock automatically for recognized users while capturing unknown faces.',
      skills: 'Machine Learning',
      category: 'Computer Vision',
    },
    {
      period: 'Jun 2020 - Jul 2020',
      title: 'Attendance System Based on Face Recognition',
      affiliation: 'ProCode CG, Bandung',
      description: 'An automated employee attendance system using facial recognition to minimize queues and physical contact with attendance devices.',
      skills: 'Machine Learning',
      category: 'Face Recognition',
    },
    {
      period: 'Sep 2019',
      title: 'Object Detection',
      affiliation: 'Telkom University',
      description: 'A collaborative image-processing system built with Python to detect product objects.',
      skills: 'Machine Learning, Python',
      category: 'Image Processing',
    },
    {
      period: 'Aug 2019',
      title: 'Line Follower Car Robot',
      affiliation: 'RnEST Laboratory',
      description: 'A robotic and embedded systems project designed to follow a path or a black line.',
      skills: 'Robotics, Embedded Systems',
      category: 'Robotics',
    },
    {
      period: 'Sep 2018',
      title: 'Avoiding Car Robot',
      affiliation: 'RnEST Laboratory',
      description: 'An autonomous robot capable of detecting and avoiding obstacles without crashing into walls or objects.',
      skills: 'Robotics, Embedded Systems',
      category: 'Autonomous Systems',
    },
  ],
}

const skillItems = {
  id: [
    { name: 'Flutter', group: 'Mobile Development', level: 'Core', proof: '4 pengalaman di Bank MAS dan 2 perusahaan lain', endorsements: '4 endorsement' },
    { name: 'Android Development', group: 'Mobile Development', level: 'Core', proof: '5 pengalaman di Bank MAS dan 3 perusahaan lain', endorsements: '4 endorsement' },
    { name: 'iOS Development', group: 'Mobile Development', level: 'Profesional', proof: '5 pengalaman di Bank MAS dan 3 perusahaan lain', endorsements: '3 endorsement' },
    { name: 'Machine Learning', group: 'Artificial Intelligence', level: 'Berbasis proyek', proof: 'RnEST Laboratory, Telkom University, dan 4 proyek', endorsements: '1 endorsement' },
    { name: 'Deep Learning', group: 'Artificial Intelligence', level: 'Berbasis proyek', proof: 'Self Driving Car Robot Based on Road Sign Classification', endorsements: 'CNN / Road Sign Classification' },
    { name: 'Internet of Things (IoT)', group: 'Connected Systems', level: 'Riset', proof: 'Researcher di RnEST Laboratory dan Telkom University', endorsements: '4 endorsement' },
    { name: 'Robotics', group: 'Embedded Systems', level: 'Riset', proof: 'RnEST Laboratory, Telkom University, dan 3 proyek robotics', endorsements: '2 endorsement' },
  ],
  en: [
    { name: 'Flutter', group: 'Mobile Development', level: 'Core', proof: '4 experiences across Bank MAS and 2 other companies', endorsements: '4 endorsements' },
    { name: 'Android Development', group: 'Mobile Development', level: 'Core', proof: '5 experiences across Bank MAS and 3 other companies', endorsements: '4 endorsements' },
    { name: 'iOS Development', group: 'Mobile Development', level: 'Professional', proof: '5 experiences across Bank MAS and 3 other companies', endorsements: '3 endorsements' },
    { name: 'Machine Learning', group: 'Artificial Intelligence', level: 'Project-based', proof: 'RnEST Laboratory, Telkom University, and 4 projects', endorsements: '1 endorsement' },
    { name: 'Deep Learning', group: 'Artificial Intelligence', level: 'Project-based', proof: 'Self Driving Car Robot Based on Road Sign Classification', endorsements: 'CNN / Road Sign Classification' },
    { name: 'Internet of Things (IoT)', group: 'Connected Systems', level: 'Research', proof: 'Researcher at RnEST Laboratory and Telkom University', endorsements: '4 endorsements' },
    { name: 'Robotics', group: 'Embedded Systems', level: 'Research', proof: 'RnEST Laboratory, Telkom University, and 3 robotics projects', endorsements: '2 endorsements' },
  ],
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState('id')
  const [time, setTime] = useState('')
  const pageRef = useRef(null)
  const t = copy[language]
  const experiences = experienceItems[language]
  const projects = projectItems[language]
  const skills = skillItems[language]

  useEffect(() => {
    const updateTime = () => setTime(new Intl.DateTimeFormat(copy[language].locale, { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()))
    updateTime()
    const timer = setInterval(updateTime, 60000)
    return () => clearInterval(timer)
  }, [language])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    const handlePointer = (event) => {
      pageRef.current?.style.setProperty('--pointer-x', `${event.clientX}px`)
      pageRef.current?.style.setProperty('--pointer-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', handlePointer)
    return () => { observer.disconnect(); window.removeEventListener('pointermove', handlePointer) }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const closeMenu = () => setMenuOpen(false)
  const switchLanguage = () => {
    setLanguage((current) => current === 'id' ? 'en' : 'id')
    closeMenu()
  }

  return (
    <main ref={pageRef}>
      <div className="noise" aria-hidden="true" /><div className="spotlight" aria-hidden="true" />
      <nav className="nav shell" aria-label={t.navLabel}>
        <a className="monogram" href="#home" onClick={closeMenu} aria-label={t.homeAria}>NF<span>.</span></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-label={t.menuAria} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a><a href="#journey" onClick={closeMenu}>{t.nav.journey}</a><a href="#work" onClick={closeMenu}>{t.nav.work}</a><a href="#skills" onClick={closeMenu}>{t.nav.skills}</a>
          <button className="language-toggle" type="button" onClick={switchLanguage} aria-label={`Switch language to ${t.langToggle}`}><span>{t.langLabel}</span><b>{t.langToggle}</b></button>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>{t.nav.contact} <Arrow /></a>
        </div>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-eyebrow"><span className="status-dot" /><span>{profile.location}</span><span className="eyebrow-line" /><span>{time} {t.hero.timezone}</span></div>
        <div className="hero-heading">
          <p className="hero-kicker">{t.hero.kicker}</p>
          <figure className="hero-portrait reveal">
            <img src={nicolaPortrait} alt={t.hero.imageAlt} />
            <figcaption><span>{t.hero.captionRole}</span><strong>Bank MAS</strong></figcaption>
          </figure>
          <h1 className="hero-name"><span className="line secondary"><span>MUHAMMAD</span></span><span className="line primary"><span>NICOLA FEBY</span></span><span className="line secondary last-name"><span>SALVATURI</span></span></h1>
          <div className="orbit" aria-hidden="true"><span>FLUTTER / ANDROID / IOS / </span><b>+</b></div>
        </div>
        <div className="hero-bottom">
          <p className="hero-intro">{t.hero.intro}</p>
          <a className="scroll-link" href="#about"><span>{t.hero.scroll}</span><span className="scroll-arrow">&darr;</span></a>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div className="marquee-track">{Array.from({ length: 6 }).map((_, index) => <span key={index}>FLUTTER <i>&#10022;</i> ANDROID <i>&#10022;</i> IOS <i>&#10022;</i> MOBILE BANKING <i>&#10022;</i></span>)}</div></div>

      <section className="about shell section" id="about">
        <header className="section-label reveal"><span>01</span><p>{t.about.label}</p></header>
        <div className="about-grid">
          <p className="big-statement reveal">{t.about.statement}</p>
          <div className="about-copy reveal">
            {t.about.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">{t.about.cta} <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="journey shell section" id="journey">
        <header className="section-label reveal"><span>02</span><p>{t.journey.label}</p></header>
        <div className="journey-layout">
          <div className="journey-title reveal"><p className="overline">{t.journey.overline}</p><h2>{t.journey.title}</h2></div>
          <div className="timeline reveal">
            {experiences.map((item, index) => <article key={`${item.company}-${item.role}`}>
              <span className="timeline-year">{item.period}</span>
              <div><h3>{item.role}</h3><p className="timeline-company">{item.company} &middot; {item.meta}</p><p>{item.skills}</p></div>
              <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
            </article>)}
          </div>
        </div>
      </section>

      <section className="work shell section" id="work">
        <header className="section-label reveal"><span>03</span><p>{t.work.label}</p></header>
        <div className="work-heading reveal"><h2>{t.work.title}</h2><p>{t.work.description}</p></div>
        <div className="projects-list">
          {projects.map((project, index) => <article className="case-study reveal" key={project.title}>
            <div className="case-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="case-main">
              <div className="case-meta"><span>{project.period}</span><span>{project.category}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="case-tags">{project.skills.split(', ').map((skill) => <span key={skill}>{skill}</span>)}</div>
            </div>
            <div className="case-side"><span>{t.work.associated}</span><strong>{project.affiliation}</strong></div>
          </article>)}
        </div>
        <div className="education-card reveal"><span className="education-mark">TU</span><div><p className="overline">{t.education.label}</p><h3>Telkom University</h3><p>{t.education.description}</p></div><span>{t.education.focus}</span></div>
      </section>

      <section className="skills shell section" id="skills">
        <header className="section-label reveal"><span>04</span><p>{t.skills.label}</p></header>
        <div className="skills-heading reveal">
          <div><p className="overline">{t.skills.overline}</p><h2>{t.skills.title}</h2></div>
          <p>{t.skills.description}</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => <article className="skill-card reveal" key={skill.name} style={{ '--skill-delay': `${index * 45}ms` }}>
            <div className="skill-top"><span>{String(index + 1).padStart(2, '0')}</span><span>{skill.level}</span></div>
            <p className="skill-group">{skill.group}</p>
            <h3>{skill.name}</h3>
            <p className="skill-proof">{skill.proof}</p>
            <div className="skill-footer"><span>{skill.endorsements}</span><i aria-hidden="true">&#8599;</i></div>
          </article>)}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-top reveal"><p>{t.contact.top}</p><span>{t.contact.focus}</span></div>
        <div className="contact-main reveal">
          <div className="contact-content">
            <h2>LET'S<br /><span>CONNECT</span></h2>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong><Arrow /></a>
              <a href={`https://wa.me/${profile.phone.replace('+', '')}`} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{profile.phone}</strong><Arrow /></a>
            </div>
          </div>
          <div className="contact-socials">
            <a className="contact-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={t.contact.linkedinAria}><LinkedIn /><Arrow /></a>
            <a className="contact-button instagram-button" href={profile.instagram} target="_blank" rel="noreferrer" aria-label={t.contact.instagramAria}><Instagram /><Arrow /></a>
          </div>
        </div>
        <footer><p>&copy; {new Date().getFullYear()} {profile.name}</p><p>{profile.role}</p><a href="#home">{t.contact.backTop}</a></footer>
      </section>
    </main>
  )
}

export default App
