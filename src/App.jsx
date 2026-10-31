import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import {
  SiKotlin, SiJetpackcompose, SiOpenjdk, SiSpringboot, SiApachekafka, SiReact,
  SiAndroid,
} from 'react-icons/si'
import {
  FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiDownload, FiArrowUpRight, FiArrowUp,
  FiSend, FiMenu, FiX, FiCode, FiSmartphone, FiServer, FiDatabase, FiGlobe, FiShield, FiCpu,
  FiAward, FiZap, FiUsers, FiExternalLink, FiBriefcase, FiTerminal, FiHome, FiCheckCircle,
} from 'react-icons/fi'
import { LuGraduationCap, LuUtensils } from 'react-icons/lu'
import { profile, stats, skills, topSkills, experience, projects, achievements, education } from './data'

const NAV = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

const catIcons = { code: FiCode, mobile: FiSmartphone, server: FiServer, db: FiDatabase, web: FiGlobe, shield: FiShield, ai: FiCpu }
const skillIcons = { Kotlin: SiKotlin, 'Jetpack Compose': SiJetpackcompose, Java: SiOpenjdk, 'Spring Boot': SiSpringboot, 'Apache Kafka': SiApachekafka, React: SiReact }
const projIcons = { hostel: FiHome, food: LuUtensils, cli: FiTerminal, sdk: SiAndroid }
const achIcons = { award: FiAward, zap: FiZap, db: FiDatabase, users: FiUsers }

// Scroll-reveal wrapper used everywhere
const Reveal = ({ children, delay = 0, y = 40, className, as = 'div', ...rest }) => {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}

const SectionHead = ({ badge, title, accent, text, children }) => (
  <Reveal className="sec-head">
    <div>
      <span className="badge">{badge}</span>
      <h2>{title} <span className="grad">{accent}</span></h2>
    </div>
    {text && <p>{text}</p>}
    {children}
  </Reveal>
)

function useTyped(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const word = words[i % words.length]
    if (!del && text === word) { const t = setTimeout(() => setDel(true), pause); return () => clearTimeout(t) }
    if (del && text === '') { setDel(false); setI(i + 1); return }
    const t = setTimeout(() => setText(word.slice(0, text.length + (del ? -1 : 1))), del ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [text, del, i, words, speed, pause])
  return text
}

function CountUp({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [, num, suffix] = value.match(/^([\d.]+)(.*)$/) || [, 0, value]
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let frame, start
    const step = (t) => {
      start ??= t
      const p = Math.min((t - start) / 1400, 1)
      setN(Number(num) * (1 - Math.pow(1 - p, 3)))
      if (p < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, num])
  const shown = num.includes('.') ? n.toFixed(2) : Math.round(n)
  return <b ref={ref} className="grad">{shown}{suffix}</b>
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach((n) => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  return (
    <>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      <motion.nav
        className={`nav glass ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ duration: 0.6 }}
      >
        <a href="#home" className="logo"><span className="logo-mark">FK</span><span>Fernandes<span className="grad">.dev</span></span></a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className={active === n.toLowerCase() ? 'active' : ''} onClick={() => setOpen(false)}>{n}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-ghost">Let's Talk <FiSend /></a>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
      </motion.nav>
    </>
  )
}

function Hero() {
  const typed = useTyped(profile.roles)
  const [imgOk, setImgOk] = useState(true)
  const orbits = [
    { Icon: SiKotlin, style: { top: '4%', left: '-6%' }, color: '#a78bfa' },
    { Icon: SiAndroid, style: { top: '-4%', right: '8%' }, color: '#4ade80' },
    { Icon: SiSpringboot, style: { bottom: '22%', left: '-12%' }, color: '#86efac' },
    { Icon: SiApachekafka, style: { top: '38%', right: '-10%' }, color: '#e2e8f0' },
  ]
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <motion.span className="badge" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <FiCheckCircle /> Open to opportunities
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}>
            <span className="hi">Hi, I'm</span>
            <span className="grad">{profile.name}</span>
          </motion.h1>
          <motion.div className="typed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            {'> '}<span className="typed-text">{typed}</span><span className="caret" />
          </motion.div>
          <motion.p className="lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
            {profile.tagline}
          </motion.p>
          <motion.div className="hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
            <a href="#projects" className="btn btn-primary">View My Work <FiArrowUpRight /></a>
            <a href={profile.resume} download className="btn btn-ghost">Download CV <FiDownload /></a>
          </motion.div>
          <motion.div className="socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}>
            <a className="social glass glow-hover" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a className="social glass glow-hover" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a className="social glass glow-hover" href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
          </motion.div>
          <div className="scroll-hint"><span className="mouse" /> SCROLL DOWN</div>
        </div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9 }}>
          <div className="avatar-wrap">
            <span className="avatar-ring r2" />
            <span className="avatar-ring" />
            <div className="avatar">
              {imgOk
                ? <img src={profile.photo} alt={profile.name} onError={() => setImgOk(false)} />
                : <span className="initials grad">FK</span>}
            </div>
            {orbits.map(({ Icon, style, color }, i) => (
              <motion.span
                key={i}
                className="orbit glass"
                style={{ ...style, color }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon />
              </motion.span>
            ))}
            <div className="stats-card glass">
              {stats.slice(0, 3).map((s) => (
                <div className="stat-row" key={s.label}>
                  <FiZap className="ico" />
                  <div><b>{s.value}</b><span>{s.label}</span></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHead badge="About Me" title="Building payments that" accent="just work" />
        <div className="about-grid">
          <Reveal className="about-text glass">
            <p>{profile.summary}</p>
            <p>
              Day to day I own payment-method modules and security hardening for SDKs used by IRCTC, IOCL, HDFC and IDFC,
              and build Kafka-driven Spring Boot services that move millions of rows reliably.
            </p>
            <div className="info-list">
              <div><FiMapPin /> {profile.location}</div>
              <div><FiMail /> <a href={`mailto:${profile.email}`}>{profile.email}</a></div>
              <div><FiBriefcase /> SDE @ Hatio Innovations (BillDesk)</div>
              <div><LuGraduationCap /> B.Tech CSE — CGPA {education.cgpa}</div>
            </div>
          </Reveal>
          <div className="counter-grid">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="counter glass glow-hover">
                <CountUp value={s.value} />
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHead badge="My Expertise" title="Skills &" accent="Technologies" text="From Compose UI to Kafka pipelines — the tools I ship production code with." />
        <div className="top-skills">
          {topSkills.map((s, i) => {
            const Icon = skillIcons[s.name]
            return (
              <Reveal key={s.name} delay={i * 0.07} className="skill-tile glass glow-hover">
                <div className="s-ico"><Icon /></div>
                <h4>{s.name}</h4>
                <div className="meta"><span>{s.level}</span><span>{s.pct}%</span></div>
                <div className="bar">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 + i * 0.07 }} />
                </div>
              </Reveal>
            )
          })}
        </div>
        <div className="skill-cats">
          {skills.map((c, i) => {
            const Icon = catIcons[c.icon]
            return (
              <Reveal key={c.title} delay={(i % 3) * 0.1} className="skill-cat glass glow-hover">
                <h3><Icon /> {c.title}</h3>
                <div className="chips">{c.items.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ExpCard({ job }) {
  const [tab, setTab] = useState(0)
  const p = job.projects[tab]
  return (
    <div className="t-card glass">
      <div className="t-head">
        <div>
          <h3>{job.role}</h3>
          <div className="company">{job.company}</div>
        </div>
        <span className="period">{job.period}</span>
      </div>
      <div className="chips" style={{ marginTop: 12 }}>{job.stack.map((s) => <span key={s} className="chip">{s}</span>)}</div>
      {job.projects.length > 1 && (
        <div className="tabs">
          {job.projects.map((x, i) => (
            <button key={x.name} className={`tab ${i === tab ? 'on' : ''}`} onClick={() => setTab(i)}>{x.name}</button>
          ))}
        </div>
      )}
      {job.projects.length === 1 && <h4 style={{ margin: '20px 0 12px', color: 'var(--cyan)' }}>{p.name}</h4>}
      <motion.ul key={tab} className="points" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.06 } } }}>
        {p.points.map((pt) => (
          <motion.li key={pt} variants={{ h: { opacity: 0, x: -14 }, s: { opacity: 1, x: 0 } }}>{pt}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHead badge="Career" title="Work" accent="Experience" text="Fintech-grade Android SDKs and backend systems at scale." />
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="t-item">
              <span className="t-dot" />
              <ExpCard job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHead badge="Featured Work" title="Selected" accent="Projects">
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">View GitHub <FiArrowUpRight /></a>
        </SectionHead>
        <div className="proj-grid">
          {projects.map((p, i) => {
            const Icon = projIcons[p.icon]
            return (
              <Reveal key={p.title} delay={i * 0.1} className="proj glass glow-hover">
                <div className="proj-cover" style={{ background: `linear-gradient(135deg, ${p.accent[0]}, ${p.accent[1]})` }}>
                  {p.work && <span className="tag-work">PROFESSIONAL</span>}
                  <Icon />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-foot">
                  <div className="chips">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}><FiExternalLink /></a>}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <SectionHead badge="Highlights" title="Impact &" accent="Education" />
        <div className="ach-grid">
          {achievements.map((a, i) => {
            const Icon = achIcons[a.icon]
            return (
              <Reveal key={a.title} delay={i * 0.1} className="ach glass glow-hover">
                <div className="a-ico"><Icon /></div>
                <h4>{a.title}</h4>
                <p>{a.text}</p>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="edu glass" style={{ marginTop: 22 }}>
          <div className="a-ico"><LuGraduationCap /></div>
          <div className="edu-body">
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p>{education.uni} · {education.period}</p>
          </div>
          <div className="cgpa"><b className="grad">{education.cgpa}</b><span>CGPA</span></div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { Icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { Icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { Icon: FiLinkedin, label: 'LinkedIn', value: 'in/fernandes7', href: profile.linkedin },
    { Icon: FiGithub, label: 'GitHub', value: 'Fernandes7', href: profile.github },
  ]
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="cta glass">
          <h2><small>Let's build something</small><span className="grad">Amazing together</span> 👋</h2>
          <p>I'm always open to discussing new roles, SDK or backend projects, and anything payments. Based in {profile.location}.</p>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">Get In Touch <FiSend /></a>
        </Reveal>
        <div className="contact-grid">
          {items.map(({ Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.08} as="a" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-item glass glow-hover">
              <Icon />
              <div style={{ minWidth: 0 }}><small>{label}</small><span>{value}</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container foot">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <nav>{NAV.map((n) => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
        <button className="to-top" onClick={() => window.scrollTo({ top: 0 })}><i><FiArrowUp /></i> Back to Top</button>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <div className="bg-fx"><div className="grid" /><span className="blob b1" /><span className="blob b2" /><span className="blob b3" /></div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
