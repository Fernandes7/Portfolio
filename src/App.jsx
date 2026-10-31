import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, MotionConfig, useInView, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import {
  SiKotlin, SiAndroid, SiJetpackcompose, SiAndroidstudio, SiGradle, SiFirebase, SiSpringboot, SiApachekafka, SiNodedotjs,
  SiExpress, SiFastify, SiApachemaven, SiJunit5, SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiSqlite, SiReact, SiNextdotjs,
  SiVuedotjs, SiTypescript, SiJavascript, SiTailwindcss, SiVite, SiPython, SiLangchain, SiGooglegemini, SiDocker, SiGit,
  SiLinux, SiPostman, SiIntellijidea, SiJira, SiFigma, SiFlask,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { GiCrown, GiCheckedShield, GiStarsStack, GiCastle, GiCrossedSwords } from 'react-icons/gi'
import {
  FiArrowUpRight, FiArrowUp, FiDownload, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiHome, FiUser, FiGrid, FiClock, FiBox, FiTerminal, FiUsers, FiGitBranch, FiDatabase, FiRepeat, FiBookOpen, FiLock, FiSmartphone, FiCloud,
  FiBriefcase, FiActivity, FiLayers, FiAward, FiCreditCard, FiShield, FiServer,
  FiZap, FiGlobe, FiCpu, FiExternalLink,
} from 'react-icons/fi'
import {
  LuSparkles, LuGraduationCap, LuCompass, LuImages, LuTrees, LuSnowflake, LuCamera, LuMapPin,
  LuX, LuChevronLeft, LuChevronRight, LuPlane, LuFootprints, LuSunset,
} from 'react-icons/lu'
import {
  profile, trustedBy, aboutStats, about, services, techGroups, experience, projects, process, architecture, expertise, education, clan, travel,
} from './data'

/* ---------------- icon registries ---------------- */
const OracleIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em"><rect x="2" y="7" width="20" height="10" rx="5" fill="none" stroke="#F80000" strokeWidth="2.6" /></svg>
)
const TECH = {
  Kotlin: [SiKotlin, '#7F52FF'], Android: [SiAndroid, '#3DDC84'], 'Jetpack Compose': [SiJetpackcompose, '#4285F4'],
  'Android Studio': [SiAndroidstudio, '#3DDC84'], Gradle: [SiGradle, '#02303A'], Firebase: [SiFirebase, '#FFCA28'],
  Java: [FaJava, '#E76F00'], 'Spring Boot': [SiSpringboot, '#6DB33F'], 'Apache Kafka': [SiApachekafka, '#231F20'],
  'Node.js': [SiNodedotjs, '#5FA04E'], Express: [SiExpress, '#000000'], Fastify: [SiFastify, '#000000'],
  Maven: [SiApachemaven, '#C71A36'], JUnit5: [SiJunit5, '#25A162'], PostgreSQL: [SiPostgresql, '#4169E1'],
  MongoDB: [SiMongodb, '#47A248'], Oracle: [OracleIcon, '#F80000'], Redis: [SiRedis, '#FF4438'], Prisma: [SiPrisma, '#2D3748'],
  SQLite: [SiSqlite, '#003B57'], React: [SiReact, '#61DAFB'], 'Next.js': [SiNextdotjs, '#000000'], 'Vue.js': [SiVuedotjs, '#4FC08D'],
  TypeScript: [SiTypescript, '#3178C6'], JavaScript: [SiJavascript, '#F7DF1E'], 'Tailwind CSS': [SiTailwindcss, '#06B6D4'],
  Vite: [SiVite, '#646CFF'], Python: [SiPython, '#3776AB'], LangChain: [SiLangchain, '#1C3C3C'], Gemini: [SiGooglegemini, '#8E75B2'],
  Docker: [SiDocker, '#2496ED'], Git: [SiGit, '#F05032'], Linux: [SiLinux, '#1f2937'], Postman: [SiPostman, '#FF6C37'],
  'IntelliJ IDEA': [SiIntellijidea, '#000000'], Jira: [SiJira, '#0052CC'], Figma: [SiFigma, '#F24E1E'],
}
// Tag chips: brand icon from TECH (via alias), else a generic icon; unknown tags render text-only
const TAG_ALIAS = { 'Android SDK': 'Android', Compose: 'Jetpack Compose', 'Java 17': 'Java', Kafka: 'Apache Kafka', 'Prisma ORM': 'Prisma', 'React.js': 'React' }
const TAG_EXTRA = {
  Payments: [FiCreditCard, '#7c3aed'], 'MVVM / MVI': [FiLayers, '#6366f1'], 'REST APIs': [FiServer, '#0ea5e9'], SQL: [FiDatabase, '#0891b2'],
  Room: [FiDatabase, '#3DDC84'], WorkManager: [FiClock, '#3DDC84'], SceneView: [FiBox, '#6366f1'], Filament: [FiBox, '#f97316'],
  Flask: [SiFlask, '#000000'], CLI: [FiTerminal, '#111827'], RBAC: [FiShield, '#7c3aed'], 'Sentiment AI': [FiCpu, '#ec4899'],
  'AI Agents': [FiCpu, '#2563eb'], 'Multi-Agent': [FiUsers, '#7c3aed'], Orchestration: [FiGitBranch, '#0ea5e9'],
}
const Chip = ({ label }) => {
  const [Icon, color] = TAG_EXTRA[label] ?? TECH[TAG_ALIAS[label] ?? label] ?? []
  return <span className="chip">{Icon && <Icon style={{ color }} aria-hidden="true" />}{label}</span>
}

const UI = {
  briefcase: FiBriefcase, activity: FiActivity, layers: FiLayers, award: FiAward, android: SiAndroid, card: FiCreditCard,
  shield: FiShield, server: FiServer, kafka: SiApachekafka, zap: FiZap, web: FiGlobe, ai: FiCpu,
}
const NAV = [['/', 'HOME', FiHome], ['/about', 'ABOUT', FiUser], ['/work', 'WORKS', FiGrid], ['/contact', 'CONTACT', FiMail]]

/* ---------------- tiny router ---------------- */
// ponytail: History-API router (no params/nesting) — swap for react-router if routes grow
const navigate = (to) => {
  if (to === location.pathname) return window.scrollTo({ top: 0 })
  history.pushState(null, '', to)
  dispatchEvent(new PopStateEvent('popstate'))
}
function usePath() {
  const [path, setPath] = useState(location.pathname)
  useEffect(() => {
    const on = () => setPath(location.pathname)
    addEventListener('popstate', on)
    return () => removeEventListener('popstate', on)
  }, [])
  return path
}
const linkClick = (to, after) => (e) => {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return   // let new-tab clicks through
  e.preventDefault()
  after?.()
  navigate(to)
}
const Link = ({ to, onNav, ...rest }) => <a href={to} onClick={linkClick(to, onNav)} {...rest} />

/* ---------------- animation helpers ---------------- */
const ease = [0.22, 1, 0.36, 1]
const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }
const stagger = (s = 0.08) => ({ hidden: {}, show: { transition: { staggerChildren: s } } })

const Reveal = ({ as = 'div', children, delay = 0, ...rest }) => {
  const M = motion[as]
  return (
    <M initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay }} {...rest}>
      {children}
    </M>
  )
}
const Stagger = ({ children, className, gap }) => (
  <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger(gap)}>
    {children}
  </motion.div>
)
const Item = ({ as = 'div', children, ...rest }) => {
  const M = motion[as]
  return <M variants={fadeUp} {...rest}>{children}</M>
}

const Head = ({ eyebrow, title, accent, text, children }) => (
  <Reveal className="sec-head">
    <div>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title} {accent && <span className="grad-text">{accent}</span>}</h2>
    </div>
    {text && <p>{text}</p>}
    {children}
  </Reveal>
)

function useTyped(words, speed = 65, pause = 1700) {
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
  const [, num, suffix] = value.match(/^([\d.]+)(.*)$/)
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf, start
    const step = (t) => {
      start ??= t
      const p = Math.min((t - start) / 1500, 1)
      setN(Number(num) * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, num])
  return <b ref={ref}>{num.includes('.') ? n.toFixed(2) : Math.round(n)}{suffix}</b>
}

// Subtle 3D tilt that follows the pointer (mouse only)
function Tilt({ children, className }) {
  const rx = useMotionValue(0), ry = useMotionValue(0)
  const sx = useSpring(rx, { stiffness: 200, damping: 18 }), sy = useSpring(ry, { stiffness: 200, damping: 18 })
  const move = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 8)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8)
  }
  return (
    <motion.div className={className} variants={fadeUp} style={{ rotateX: sx, rotateY: sy, transformPerspective: 900 }}
      onPointerMove={move} onPointerLeave={() => { rx.set(0); ry.set(0) }}>
      {children}
    </motion.div>
  )
}

/* ---------------- sections ---------------- */
function Nav({ path }) {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      <motion.div className="nav-wrap" initial={{ y: -90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease }}>
        <nav className={`nav shell ${scrolled ? 'scrolled' : ''}`}>
          <Link to="/" className="brand">
            <img className="brand-mark" src="/avatar.jpg" alt="" width="40" height="40" />
            <span><b>{profile.name}</b><small>{profile.title}</small></span>
          </Link>
          <ul className="nav-links">
            {NAV.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className={path === to ? 'active' : ''} aria-current={path === to ? 'page' : undefined}>
                  {path === to && <motion.span layoutId="nav-pill" className="nav-pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-glass btn-sm nav-cta">Let's Talk <FiArrowUpRight /></Link>
          <a href={profile.resume} download className="icon-btn nav-cv" aria-label="Download CV"><FiDownload /></a>
        </nav>
      </motion.div>
      {/* mobile: tabs live in a floating bar at the bottom-centre (outside the transformed top bar so `fixed` works) */}
      <nav className="bottom-nav" aria-label="Primary">
        {NAV.map(([to, label, Icon]) => (
          <Link key={to} to={to} className={path === to ? 'active' : ''} aria-current={path === to ? 'page' : undefined}>
            {path === to && <motion.span layoutId="bottom-pill" className="bottom-pill" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />}
            <Icon />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}

const Typed = ({ words }) => <span className="typed-text">{useTyped(words)}</span>

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const words = profile.name.split(' ')

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="shell">
        <div className="panel">
          <span className="bubble" style={{ width: 120, height: 120, right: -30, top: 40, opacity: 0.6 }} />
          <div className="hero-grid">
            <div>
              <motion.span className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>Hello, I'm</motion.span>
              <h1>
                {words.map((w, i) => (
                  <span key={w} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: 4 }}>
                    <motion.span className="word" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.4 + i * 0.12, duration: 0.9, ease }}>
                      {w}{i < words.length - 1 ? ' ' : ''}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <motion.div className="typed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                <Typed words={profile.roles} /><span className="caret" />
              </motion.div>
              <p className="motto">
                {profile.motto.map((m, i) => (
                  <motion.span key={m} className={i === 1 ? 'grad-text' : undefined} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.15, duration: 0.6, ease }}>{m}</motion.span>
                ))}
              </p>
              <motion.p className="lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45, duration: 0.7 }}>
                {profile.bio}
              </motion.p>
              <motion.div className="cta-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.7 }}>
                <Link to="/work" className="btn btn-dark">View My Work <FiArrowUpRight /></Link>
                <a href={profile.resume} download className="btn btn-glass">Download CV <FiDownload /></a>
              </motion.div>
              <motion.div className="trusted" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.7 }}>
                <small>My code ships in apps &amp; platforms of</small>
                <div className="marquee">
                  <div className="marquee-track">
                    {[...trustedBy, ...trustedBy].map((t, i) => (
                      <span key={i} className="logo-item" aria-hidden={i >= trustedBy.length || undefined}>
                        <img src={t.logo} alt={i < trustedBy.length ? `${t.name} logo` : ''} />{t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="hero-visual">
              <motion.div className="portrait-frame" style={{ y: imgY }}
                initial={{ opacity: 0, scale: 0.92, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.3, duration: 1.1, ease }}>
                <div className="portrait">
                  <motion.img src="/hero-art.webp" alt={profile.name} initial={{ scale: 1.25 }} animate={{ scale: 1.04 }} transition={{ duration: 1.6, ease }} />
                </div>
              </motion.div>

              <motion.div className="float-card fc-exp" style={{ y: cardY }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, type: 'spring', stiffness: 120 }}>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                  <b className="grad-text">3+</b><span>Years of<br />Experience</span>
                </motion.div>
              </motion.div>

              <motion.div className="float-card fc-sdk" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, type: 'spring', stiffness: 120 }}>
                <span className="dot"><LuCompass /></span>
                <div><b>Design Thinking</b><span>Questioning the obvious</span></div>
              </motion.div>

              <motion.div className="float-card fc-impact" style={{ y: cardY }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, type: 'spring', stiffness: 120 }}>
                <small>Growing through experiences</small>
                <b>Always Learning</b>
                <svg viewBox="0 0 160 40" fill="none">
                  <defs>
                    <linearGradient id="spark" x1="0" x2="1"><stop stopColor="#a78bfa" /><stop offset="1" stopColor="#3b82f6" /></linearGradient>
                  </defs>
                  <motion.path d="M2 34 C 20 30, 28 22, 42 26 S 64 34, 78 22 S 100 18, 112 20 S 136 8, 158 4" stroke="url(#spark)" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 1.4, ease: 'easeInOut' }} />
                </svg>
              </motion.div>

              <motion.span className="bubble sparkle" initial={{ scale: 0 }} animate={{ scale: 1, y: [0, -10, 0] }}
                transition={{ scale: { delay: 1.4, type: 'spring' }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }} style={{ position: 'absolute' }}>
                <LuSparkles />
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about">
      <div className="shell">
        <div className="panel">
          <div className="about-grid">
            <Reveal className="profile-card">
              <div className="profile-photo">
                <img src="/about.webp" alt={profile.name} loading="lazy" />
              </div>
              <div className="profile-meta">
                <h3>{profile.name}</h3>
                <p>{profile.title}</p>
                <ul>
                  <li><FiBriefcase /> Hatio Innovations · BillDesk</li>
                  <li><FiMapPin /> {profile.location}</li>
                </ul>
              </div>
            </Reveal>

            <div className="about-main">
              <span className="eyebrow">About Me</span>
              <Reveal>
                    <h2>Engineering payments with <span className="grad-text">precision</span>, building with purpose.</h2>
                    <p className="about-bio">{about.bio}</p>
                    <Stagger className="focus-list" gap={0.1}>
                      {about.focus.map((f) => {
                        const Icon = UI[f.icon]
                        return (
                          <Item key={f.title} className="focus-item">
                            <span className="s-ico"><Icon /></span>
                            <div><b>{f.title}</b><span>{f.text}</span></div>
                          </Item>
                        )
                      })}
                    </Stagger>
                    <Stagger className="stat-grid glass" gap={0.08}>
                      {aboutStats.map((s) => (
                        <Item className="stat" key={s.label}>
                          <CountUp value={s.value} />
                          <span>{s.label}</span>
                        </Item>
                      ))}
                    </Stagger>
              </Reveal>
              <Reveal className="cta-row about-cta">
                <a href={profile.resume} download className="btn btn-dark">Download Resume <FiDownload /></a>
                <Link to="/contact" className="btn btn-glass">Let's Talk <FiArrowUpRight /></Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const groups = ['All', ...Object.keys(techGroups)]
  const [tab, setTab] = useState('All')
  const list = tab === 'All' ? Object.values(techGroups).flat() : techGroups[tab]
  return (
    <section id="skills">
      <div className="shell">
        <div className="panel">
          <Head eyebrow="Tools & Skills" title="Technologies I" accent="Use">
            <div className="tabs" role="tablist">
              {groups.map((g) => (
                <button key={g} role="tab" aria-selected={tab === g} className={`tab ${tab === g ? 'on' : ''}`} onClick={() => setTab(g)}>
                  {tab === g && <motion.span layoutId="tab-pill" className="tab-pill" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                  {g}
                </button>
              ))}
            </div>
          </Head>
          <motion.div className="tech-grid" layout>
            <AnimatePresence mode="popLayout">
              {list.map((name, i) => {
                const [Icon, color] = TECH[name]
                return (
                  <motion.div key={name} layout className="tech glass lift"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }}
                    exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.5) }}>
                    <span className="tech-ico" style={{ color, background: `${color}14` }}><Icon /></span>
                    <span>{name}</span>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ExpCard({ job }) {
  const [tab, setTab] = useState(0)
  const p = job.projects[tab]
  return (
    <Item className="exp glass">
      <div className="exp-side">
        <div className="co">
          <span className="co-logo"><img src={job.logo} alt={`${job.company} logo`} loading="lazy" /></span>
          <div><b>{job.company}</b><small>{job.sub}</small></div>
        </div>
        <h3>{job.role}</h3>
        <span className="period">{job.period}</span>
        <div className="chips">{job.stack.map((s) => <Chip key={s} label={s} />)}</div>
      </div>
      <div className="exp-main">
        {job.projects.length > 1
          ? (
            <div className="exp-tabs">
              {job.projects.map((x, i) => (
                <button key={x.name} className={`exp-tab ${i === tab ? 'on' : ''}`} onClick={() => setTab(i)}>{x.name}</button>
              ))}
            </div>
          )
          : <h4>{p.name}</h4>}
        <AnimatePresence mode="wait">
          <motion.ul key={tab} className="points" initial="hidden" animate="show" exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }} variants={stagger(0.06)}>
            {p.points.map((pt) => (
              <motion.li key={pt} variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } } }}>{pt}</motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </Item>
  )
}

function Experience() {
  return (
    <section id="experience">
      <div className="shell">
        <div className="panel">
          <Head eyebrow="Career" title="Work" accent="Experience" text="Building production fintech at BillDesk scale — and the web platforms before it." />
          <Stagger className="exp-list" gap={0.15}>
            {experience.map((job) => <ExpCard key={job.company} job={job} />)}
          </Stagger>
        </div>
      </div>
    </section>
  )
}

const Mock = ({ kind }) => {
  if (kind === 'kafka') return (
    <div className="mock mock-kafka">
      <div className="k-flow">
        <div className="k-box">Order API</div><span className="k-dot" />
        <div className="k-box k-topic">orders</div><span className="k-dot" style={{ animationDelay: '.5s' }} />
        <div className="k-cons"><div className="k-box">inventory</div><div className="k-box">notification</div><div className="k-box">analytics</div></div>
      </div>
    </div>
  )
  return (
    <div className="mock mock-cli">
      <div className="term">
        <div className="bar"><i style={{ background: '#f87171' }} /><i style={{ background: '#fbbf24' }} /><i style={{ background: '#4ade80' }} /></div>
        <div><span className="p">dev@box:~$</span> nosudo install docker</div>
        <div className="ok">✔ role: developer · whitelisted</div>
        <div className="ok">✔ installed docker 27.1</div>
        <div><span className="p">dev@box:~$</span> nosudo install nmap</div>
        <div className="no">✖ not in whitelist — request sent</div>
      </div>
    </div>
  )
}

function Work() {
  return (
    <section id="work">
      <div className="shell">
        <div className="panel">
          <Head eyebrow="Featured Projects" title="Selected" accent="Work">
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-glass btn-sm">View All on GitHub <FiArrowUpRight /></a>
          </Head>
          <Stagger className="proj-grid" gap={0.1}>
            {projects.map((p) => (
              <Tilt key={p.title} className="proj glass lift">
                <div className={`proj-cover ${p.imageFit === 'logo' ? 'logo' : ''}`} style={p.bg ? { background: p.bg } : undefined}>
                  {p.image ? <img src={p.image} alt={`${p.title} preview`} loading="lazy" style={p.imagePos ? { objectPosition: p.imagePos } : undefined} /> : <Mock kind={p.mock} />}
                  {(p.live || p.code) && (
                    <div className="overlay">
                      {p.live && <a className="btn btn-glass btn-sm" href={p.live} target="_blank" rel="noreferrer">Live <FiExternalLink /></a>}
                      {p.code && <a className="btn btn-dark btn-sm" href={p.code} target="_blank" rel="noreferrer">Code <FiGithub /></a>}
                    </div>
                  )}
                </div>
                <div className="proj-body">
                  <span className="type">{p.type}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  {p.features && <ul className="proj-feats">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>}
                  <div className="chips">{p.tags.map((t) => <Chip key={t} label={t} />)}</div>
                </div>
              </Tilt>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}


/* ---------------- home sections ---------------- */
function FeaturedWork() {
  return (
    <section id="featured">
      <div className="shell">
        <div className="panel">
          <Head eyebrow="Featured Projects" title="Selected" accent="Work">
            <Link to="/work" className="btn btn-glass btn-sm">View All Projects <FiArrowUpRight /></Link>
          </Head>
          <Stagger className="feat-grid" gap={0.12}>
            {projects.slice(0, 3).map((p) => (
              <Item key={p.title} className="feat glass lift">
                <div className="feat-cover">
                  <img src={p.image} alt={`${p.title} preview`} loading="lazy" style={p.imagePos ? { objectPosition: p.imagePos } : undefined} />
                </div>
                <div className="feat-body">
                  <div>
                    <h3>{p.title}</h3>
                    <small>{p.type}</small>
                  </div>
                  <Link to="/work" className="icon-btn" aria-label={`More about ${p.title}`}><FiArrowUpRight /></Link>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}

function WhatIDo() {
  return (
    <section id="services">
      <div className="shell">
        <div className="panel">
          <Head eyebrow="Services" title="What I" accent="Do" />
          <Stagger className="do-grid" gap={0.08}>
            {services.slice(0, 4).map((s) => {
              const Icon = UI[s.icon]
              return (
                <Item key={s.title} className="do-card glass lift">
                  <span className="do-ico" style={{ color: s.tint, background: `${s.tint}1a` }}><Icon /></span>
                  <div><h3>{s.title}</h3><p>{s.text}</p></div>
                </Item>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}

function ExperienceStrip() {
  const [i, setI] = useState(0)
  const n = experience.length
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % n), 6000)
    return () => clearInterval(id)
  }, [n, i])   // i in deps: clicking a dot restarts the timer
  const job = experience[i]
  return (
    <section id="experience-strip">
      <div className="shell">
        <Reveal className="panel quote-panel">
          <span className="quote-mark" aria-hidden="true">“</span>
          <div>
            <span className="eyebrow">Professional Experience</span>
            <AnimatePresence mode="wait">
              <motion.figure key={i} className="quote-body" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4, ease }}>
                <blockquote>{job.summary}</blockquote>
                <figcaption className="quote-who">
                  <span className="quote-logo"><img src={job.logo} alt={`${job.company} logo`} /></span>
                  <span><b>{job.role}</b><small>{job.company}</small><small className="quote-period">{job.period}</small></span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="quote-foot">
            <Link to="/about" className="quote-more">See full experience <FiArrowUpRight /></Link>
            <div className="quote-dots">
              {experience.map((e, k) => <button key={e.company} aria-label={`Show ${e.company}`} className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section id="expertise">
      <div className="shell">
        <div className="panel">
          <Head eyebrow="Tools & Skills" title="My" accent="Expertise" />
          <div className="xp-grid">
            <Stagger className="xp-bars" gap={0.08}>
              {expertise.bars.map((b, i) => (
                <Item key={b.name} className="xp-bar">
                  <div className="xp-label"><span>{b.name}</span><span>{b.pct}%</span></div>
                  <div className="bar">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${b.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.2 + i * 0.08, ease }} />
                  </div>
                </Item>
              ))}
            </Stagger>
            <Stagger className="xp-tools" gap={0.04}>
              {expertise.tools.map((name) => {
                const [Icon, color] = TECH[name]
                return (
                  <Item key={name} className="xp-tool glass lift">
                    <span className="tech-ico" style={{ color, background: `${color}14` }}><Icon /></span>
                    <span>{name}</span>
                  </Item>
                )
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}

const ARCH_ICONS = {
  compose: [SiJetpackcompose, '#4285F4'], state: [FiRepeat, '#7c3aed'], card: [FiCreditCard, '#8b5cf6'], db: [FiDatabase, '#0891b2'],
  shield: [FiShield, '#16a34a'], spring: [SiSpringboot, '#6DB33F'], server: [FiServer, '#0ea5e9'], kafka: [SiApachekafka, '#231F20'],
  ledger: [FiBookOpen, '#f59e0b'], oracle: [OracleIcon, '#F80000'],
}

function ArchStack({ side, icon: SideIcon, delay }) {
  const n = side.layers.length
  return (
    <div className="arch-col">
      <div className="arch-head"><SideIcon /> {side.title}</div>
      <div className="arch-stack">
        {side.layers.map((l, i) => {
          const [Icon, color] = ARCH_ICONS[l.icon]
          return (
            <motion.div key={l.name} className="arch-layer" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease, delay: delay + (n - 1 - i) * 0.12 }}>   {/* bottom layer first */}
              <span className="arch-ico" style={{ color, background: `${color}14` }}><Icon /></span>
              <div><small>{l.name}</small><b>{l.tech}</b><span>{l.note}</span></div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function Architecture() {
  return (
    <div className="arch">
      <Reveal className="arch-title">
        <span className="eyebrow">Application Architecture</span>
        <h3>The foundation I design — layered, secure, event-driven</h3>
      </Reveal>
      <div className="arch-grid">
        <ArchStack side={architecture.client} icon={FiSmartphone} delay={0} />
        <div className="arch-link" aria-hidden="true">
          <span className="arch-wire"><i /><i /><i /></span>
          <span className="arch-lock"><FiLock /></span>
          <small>{architecture.link}</small>
        </div>
        <ArchStack side={architecture.server} icon={FiCloud} delay={0.3} />
      </div>
    </div>
  )
}

function Process() {
  return (
    <section id="process">
      <div className="shell">
        <div className="panel">
          <Head eyebrow="My Process" title="A Simple, Effective" accent="Process" />
          <div className="steps">
            <motion.span className="steps-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }} />
            <Stagger className="steps-grid" gap={0.12}>
              {process.map((s, i) => (
                <Item key={s.title} className="step">
                  <span className="step-num">0{i + 1}</span>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                  {s.tags && <div className="step-tags">{s.tags.map((tg) => <span key={tg}>{tg}</span>)}</div>}
                </Item>
              ))}
            </Stagger>
          </div>
          <Architecture />
        </div>
      </div>
    </section>
  )
}

const CLAN_ICONS = { crown: GiCrown, shield: GiCheckedShield, stars: GiStarsStack, castle: GiCastle }

function Clan() {
  return (
    <section id="leadership">
      <div className="shell">
        <div className="clan-panel">
          <div className="clan-content">
            <div className="clan-top">
              <Stagger gap={0.1}>
                <Item as="span" className="clan-eyebrow"><GiCrossedSwords /> Leadership Beyond Code</Item>
                <Item as="h2" className="clan-title">{clan.title}</Item>
                <Item as="p" className="clan-org"><b>{clan.org}</b><span>{clan.meta}</span></Item>
                <Item className="clan-stats">
                  {clan.stats.map((s) => {
                    const Icon = CLAN_ICONS[s.icon]
                    return (
                      <div key={s.label} className="clan-stat">
                        <span className="clan-ico"><Icon /></span>
                        <CountUp value={s.value} />
                        <span>{s.label}</span>
                      </div>
                    )
                  })}
                </Item>
                <Item className="clan-ranks">
                  {clan.ranks.map((r) => {
                    const Icon = CLAN_ICONS[r.icon]
                    return (
                      <div key={r.rank} className="rank-card">
                        <span className="rank-ico"><Icon /></span>
                        <div>
                          <h3>{r.rank} <small>{r.period}</small></h3>
                          <p>{r.summary}</p>
                        </div>
                      </div>
                    )
                  })}
                </Item>
              </Stagger>
              <Reveal className="clan-poster" delay={0.2}>
                <img src="/coc.webp" alt="Clash of Clans artwork" loading="lazy" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Education() {
  const pct = Number(education.cgpa) / 10
  const C = 2 * Math.PI * 52
  return (
    <section id="education">
      <div className="shell">
        <div className="panel">
          <Head eyebrow="Education" title="Academic" accent="Foundation" />
          <Stagger className="edu-grid" gap={0.15}>
            <Item className="edu glass lift">
              <span className="edu-ico"><LuGraduationCap /></span>
              <div>
                <h3>{education.degree}</h3>
                <p>{education.school}</p>
                <p>{education.uni} · {education.period}</p>
              </div>
            </Item>
            <Item className="edu glass lift">
              <div className="cgpa-ring">
                <svg viewBox="0 0 120 120">
                  <defs><linearGradient id="ring" x1="0" x2="1"><stop stopColor="#8b5cf6" /><stop offset="1" stopColor="#3b82f6" /></linearGradient></defs>
                  <circle cx="60" cy="60" r="52" stroke="#ece9fb" strokeWidth="10" fill="none" />
                  <motion.circle cx="60" cy="60" r="52" stroke="url(#ring)" strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray={C}
                    initial={{ strokeDashoffset: C }} whileInView={{ strokeDashoffset: C * (1 - pct) }} viewport={{ once: true }} transition={{ duration: 1.6, ease }} />
                </svg>
                <div><b className="grad-text">{education.cgpa}</b><small>/ 10 CGPA</small></div>
              </div>
              <div>
                <h3>Graduated with a 9.45 CGPA</h3>
                <p>B.Tech CSE, APJ Abdul Kalam Technological University.</p>
              </div>
            </Item>
          </Stagger>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [f, setF] = useState({ name: '', email: '', topic: 'Full-time role', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  // ponytail: mailto opens the visitor's mail app — swap for Formspree/EmailJS if you want in-page sending
  const submit = (e) => {
    e.preventDefault()
    const body = `${f.message}\n\n— ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`[Portfolio] ${f.topic} — ${f.name}`)}&body=${encodeURIComponent(body)}`
  }
  const items = [
    [FiMail, profile.email, `mailto:${profile.email}`],
    [FiPhone, profile.phone, `tel:${profile.phone.replace(/\s/g, '')}`],
    [FiMapPin, profile.location],
  ]
  return (
    <section id="contact">
      <div className="shell">
        <div className="panel" style={{ overflow: 'hidden' }}>
          <motion.span className="bubble" style={{ width: 220, height: 220, right: -70, bottom: -70 }} animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }} transition={{ duration: 9, repeat: Infinity }} />
          <Reveal className="resume-card glass">
            <a className="resume-page" href={profile.resume} target="_blank" rel="noreferrer" aria-label="Open full resume (PDF)">
              <img src="/resume-page1.webp" alt="First page of Fernandes K J's resume" loading="lazy" />
              <span className="resume-zoom"><FiExternalLink /> View full PDF</span>
            </a>
            <div className="resume-info">
              <span className="eyebrow">Resume</span>
              <h3>Everything on one page</h3>
              <p>My work at BillDesk (Hatio) and Mantis — payment SDKs, mobile security, backend systems — plus my full technical skill set.</p>
              <div className="cta-row">
                <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-glass">View Full Resume <FiExternalLink /></a>
                <a href={profile.resume} download className="btn btn-dark">Download PDF <FiDownload /></a>
              </div>
            </div>
          </Reveal>
          <div className="contact-grid">
            <Reveal className="contact-left">
              <span className="eyebrow">Let's Connect</span>
              <h2>Have a role or project in mind?<br />Let's build something <span className="grad-text">impactful</span> together.</h2>
              <div className="c-list">
                {items.map(([Icon, text, href]) => {
                  const Tag = href ? 'a' : 'div'
                  return <Tag key={text} className="c-item" href={href}><span className="c-ico"><Icon /></span><span>{text}</span></Tag>
                })}
              </div>
              <div className="socials">
                <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
                <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
                <a className="icon-btn" href={profile.resume} download aria-label="Download resume"><FiDownload /></a>
              </div>
            </Reveal>
            <Reveal as="form" className="form glass" delay={0.15} onSubmit={submit}>
              <input className="field" placeholder="Your Name" required value={f.name} onChange={set('name')} aria-label="Your name" />
              <input className="field" type="email" placeholder="Your Email" required value={f.email} onChange={set('email')} aria-label="Your email" />
              <select className="field full" value={f.topic} onChange={set('topic')} aria-label="Topic">
                <option>Full-time role</option><option>Freelance / Contract</option><option>Android SDK project</option><option>Backend project</option><option>Just saying hi</option>
              </select>
              <textarea className="field full" placeholder="Your Message" required value={f.message} onChange={set('message')} aria-label="Your message" />
              <motion.button className="btn btn-dark full" type="submit" whileTap={{ scale: 0.97 }}>Send Message <FiSend /></motion.button>
              <span className="form-note full">Opens your email app with the message pre-filled.</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="shell">
      <div className="foot glass">
        <span>© {new Date().getFullYear()} {profile.name}. Crafted with React &amp; Framer Motion.</span>
        <nav>{NAV.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</nav>
        <button className="to-top" onClick={() => window.scrollTo({ top: 0 })}><span className="icon-btn"><FiArrowUp /></span> Back to Top</button>
      </div>
    </footer>
  )
}

/* ---------------- personal: travel diaries ---------------- */
const TRAVEL_ICONS = { images: LuImages, plane: LuPlane, trek: LuFootprints, snow: LuSnowflake, forest: LuTrees, sunset: LuSunset }
const pad = (n) => String(n).padStart(2, '0')
const thumb = (n) => `/travel/t/${pad(n)}.webp`
const full = (n) => `/travel/${pad(n)}.webp`

function Lightbox({ album, start, onClose }) {
  const [i, setI] = useState(start)
  const n = album.photos.length
  const go = (d) => setI((x) => (x + d + n) % n)
  const closeRef = useRef(onClose)
  closeRef.current = onClose
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeRef.current()
      if (e.key === 'ArrowRight') setI((x) => (x + 1) % n)
      if (e.key === 'ArrowLeft') setI((x) => (x - 1 + n) % n)
    }
    addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [n])
  const stop = (e) => e.stopPropagation()
  return (
    <motion.div className="lb" role="dialog" aria-modal="true" aria-label={`${album.name} photos`} onClick={onClose}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <div className="lb-top" onClick={stop}>
        <div><b>{album.name}</b><small><LuMapPin /> {album.place} · {i + 1} / {n}</small></div>
        <button className="lb-btn" onClick={onClose} aria-label="Close"><LuX /></button>
      </div>
      <div className="lb-stage">
        <button className="lb-btn lb-prev" onClick={(e) => { stop(e); go(-1) }} aria-label="Previous photo"><LuChevronLeft /></button>
        <AnimatePresence mode="wait">
          <motion.img key={i} className="lb-img" src={full(album.photos[i])} alt={`${album.name} — photo ${i + 1}`} onClick={stop}
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.4}
            onDragEnd={(_, info) => { if (info.offset.x < -60) go(1); else if (info.offset.x > 60) go(-1) }} />
        </AnimatePresence>
        <button className="lb-btn lb-next" onClick={(e) => { stop(e); go(1) }} aria-label="Next photo"><LuChevronRight /></button>
      </div>
      <div className="lb-strip" onClick={stop}>
        {album.photos.map((p, k) => (
          <button key={p} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Photo ${k + 1}`}><img src={thumb(p)} alt="" /></button>
        ))}
      </div>
    </motion.div>
  )
}

function Travel() {
  const [cat, setCat] = useState('all')
  const [open, setOpen] = useState(null)   // { album, start }
  const list = cat === 'all' ? travel.albums : travel.albums.filter((a) => a.cats.includes(cat))
  const total = travel.albums.reduce((s, a) => s + a.photos.length, 0)
  const openPhoto = (photo) => {
    const album = travel.albums.find((a) => a.photos.includes(photo))
    setOpen({ album, start: album.photos.indexOf(photo) })
  }
  const strip = [
    [LuCamera, `${total} Photos`, 'Captured on the road'],
    [LuMapPin, `${travel.albums.length} Albums`, 'Hills to heritage'],
    [LuFootprints, 'Trekking', 'Himalayan trails & valleys'],
    [LuSunset, 'Golden Hours', 'Sunrises & sunsets'],
  ]
  return (
    <section id="travel">
      <div className="shell">
        <div className="panel">
          <Head eyebrow="Travel Diaries" title="Places I've" accent="Explored" text="Travelling, trekking, chasing snow, forest rides and sunsets — moments captured along the way." />

          <Stagger className="travel-strip glass" gap={0.08}>
            {strip.map(([Icon, title, sub]) => (
              <Item key={title} className="ts-item"><span className="ts-ico"><Icon /></span><div><b>{title}</b><small>{sub}</small></div></Item>
            ))}
          </Stagger>

          <div className="travel-cats" role="tablist" aria-label="Filter albums">
            {travel.categories.map((c) => {
              const Icon = TRAVEL_ICONS[c.icon]
              return (
                <button key={c.id} role="tab" aria-selected={cat === c.id} className={cat === c.id ? 'on' : ''} onClick={() => setCat(c.id)}>
                  <span className="tc-ico"><Icon /></span>{c.label}
                </button>
              )
            })}
          </div>

          <motion.div className="album-grid" layout>
            <AnimatePresence mode="popLayout">
              {list.map((a) => (
                <motion.button key={a.name} layout className="album" onClick={() => setOpen({ album: a, start: 0 })}
                  initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.35, ease }}>
                  <img src={thumb(a.cover)} alt="" loading="lazy" />
                  <span className="album-count"><LuCamera /> {a.photos.length}</span>
                  <span className="album-info">
                    <b>{a.name}</b>
                    <small><LuMapPin /> {a.place}</small>
                    <em>{a.note}</em>
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="moments glass">
            <Reveal className="moments-text">
              <span className="eyebrow">Favourite Moments</span>
              <h3>Stories from the road</h3>
              <p>A few frames I keep coming back to — sunrise over a sea of clouds, a Himalayan temple town and a palace on a lake.</p>
              <button className="btn btn-dark btn-sm" onClick={() => setOpen({ album: travel.albums[0], start: 0 })}>Open Gallery <LuImages /></button>
            </Reveal>
            <Stagger className="moments-grid" gap={0.1}>
              {travel.moments.map((m) => (
                <Item key={m.photo} as="button" className="moment" onClick={() => openPhoto(m.photo)}>
                  <img src={thumb(m.photo)} alt="" loading="lazy" />
                  <span><b>{m.title}</b><small><LuMapPin /> {m.place}</small></span>
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
      {createPortal(
        <AnimatePresence>{open && <Lightbox key={open.album.name + open.start} {...open} onClose={() => setOpen(null)} />}</AnimatePresence>,
        document.body,
      )}
    </section>
  )
}

const PROFILE_TABS = [['pro', 'Professional', FiBriefcase], ['personal', 'Personal', FiUser]]

function ProfileTabs() {
  const [tab, setTab] = useState('pro')
  return (
    <>
      <div className="seg-wrap shell">
        <div className="seg" role="tablist" aria-label="Profile">
          {PROFILE_TABS.map(([k, label, Icon]) => (
            <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>
              {tab === k && <motion.span layoutId="seg-pill" className="seg-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <Icon /> {label}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={tab} role="tabpanel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease }}>
          {tab === 'pro' ? <><Experience /><Skills /><Education /></> : <><Travel /><Clan /></>}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

const PAGES = {
  '/': { title: null, el: <><Hero /><FeaturedWork /><WhatIDo /><ExperienceStrip /><Expertise /><Process /></> },
  '/about': { title: 'About', el: <><About /><ProfileTabs /></> },
  '/work': { title: 'Works', el: <Work /> },
  '/contact': { title: 'Contact', el: <Contact /> },
}

export default function App() {
  const path = usePath()
  const page = PAGES[path] ?? PAGES['/']
  useEffect(() => {
    document.title = page.title ? `${page.title} | ${profile.name}` : `${profile.name} | ${profile.title}`
  }, [page])
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-fx"><span className="orb o1" /><span className="orb o2" /><span className="orb o3" /></div>
      <Nav path={path} />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
        <motion.main key={path} className={page.title ? 'page-inner' : undefined}
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4, ease }}>
          {page.el}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </MotionConfig>
  )
}
