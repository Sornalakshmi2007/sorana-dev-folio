import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  GraduationCap,
  ArrowRight,
  Code2,
  Globe,
  Coffee,
  Braces,
  Menu,
  X,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sorana Lakshmi — Full Stack Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sorana Lakshmi, a 3rd-year Computer Science Engineering student and aspiring Full Stack Web Developer. Skills, education, projects and contact.",
      },
      { property: "og:title", content: "Sorana Lakshmi — Full Stack Web Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Sorana Lakshmi, a 3rd-year CSE student building practical full stack web projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Portfolio,
});

const LINKEDIN = "https://www.linkedin.com/in/sornalakshmi-p-06917a366";
const GITHUB = "https://github.com/Sornalakshmi2007";
const EMAIL = "soranalakshmi36@gmail.com";
const PHONE = "6384990695";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    name: "HTML",
    icon: Globe,
    level: "Markup & structure",
    desc: "Semantic pages, forms, tables and accessible layouts.",
  },
  {
    name: "CSS",
    icon: Braces,
    level: "Styling & layout",
    desc: "Flexbox, Grid, responsive design and smooth animations.",
  },
  {
    name: "JavaScript",
    icon: Code2,
    level: "Logic & interactivity",
    desc: "DOM manipulation, events and dynamic web pages.",
  },
  {
    name: "Java",
    icon: Coffee,
    level: "Programming core",
    desc: "OOP concepts, data structures and problem solving.",
  },
];

const projects = [
  {
    name: "Student Management System",
    description:
      "A web application for managing student information and records — add, view, update and organize student data in one place.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Symposium Website",
    description:
      "A college symposium website displaying technical and non-technical events, schedules and registration details.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, education and projects with a clean, responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

function SocialButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={GITHUB}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
      >
        <Github size={20} />
      </a>
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Sorana<span className="text-primary">.</span>
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/resume"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md md:inline-flex"
          >
            <Download size={16} /> Resume
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/resume"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  <Download size={16} /> Download Resume
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden pt-16"
      >
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-64 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open to opportunities
          </span>
          <h1 className="animate-fade-in mt-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.72_0.15_230)] bg-clip-text text-transparent">
              Sorana Lakshmi
            </span>
          </h1>
          <p className="animate-fade-in mt-4 text-xl font-semibold text-foreground/80 sm:text-2xl">
            Full Stack Web Developer
          </p>
          <p className="animate-fade-in mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A 3rd-year Computer Science Engineering student who loves turning
            ideas into clean, working websites — and learning something new with
            every project.
          </p>
          <div className="animate-fade-in mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg sm:w-auto"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md sm:w-auto"
            >
              Contact Me
            </a>
          </div>
          <SocialButtons className="animate-fade-in mt-8 justify-center" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading label="About Me" title="A little about who I am" />
          <div className="mt-10 grid items-center gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="min-w-0">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I am a Computer Science and Engineering student interested in
                web development. I am learning Full Stack Web Development and
                building practical projects to improve my technical skills. My
                goal is to become a skilled Full Stack Web Developer.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I enjoy breaking problems into small steps, writing clean code,
                and seeing a project come alive in the browser.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Web Development", "Problem Solving", "Quick Learner", "Team Player"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3rd", label: "Year of B.E. CSE" },
                { value: "4+", label: "Technologies learned" },
                { value: "3", label: "Projects built" },
                { value: "100%", label: "Curiosity & effort" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-20 bg-secondary/50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading label="Education" title="Where I'm studying" />
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap size={28} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold">
                    B.E. — Computer Science and Engineering
                  </h3>
                  <p className="mt-1 font-medium text-primary">
                    University College of Engineering Arni
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Currently in 3rd year · Building a strong foundation in
                    programming, web technologies and software development.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                      Bachelor of Engineering
                    </span>
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                      Computer Science & Engineering
                    </span>
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                      3rd Year
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading label="Skills" title="Technologies I work with" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <skill.icon size={30} />
                </div>
                <h3 className="mt-4 text-lg font-bold">{skill.name}</h3>
                <p className="mt-0.5 text-sm font-medium text-primary">{skill.level}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 bg-secondary/50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading label="Projects" title="Things I've built" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project, i) => (
              <article
                key={project.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-primary to-[oklch(0.55_0.15_230)]">
                  <span className="text-5xl font-extrabold text-primary-foreground/25">
                    0{i + 1}
                  </span>
                  <Code2
                    size={40}
                    className="absolute text-primary-foreground/90 transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    View Project <ExternalLink size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resume CTA */}
      <section id="resume" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.5_0.15_235)] px-6 py-14 text-center shadow-lg sm:px-12">
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary-foreground/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-primary-foreground/10 blur-2xl" />
            <h2 className="relative text-2xl font-extrabold text-primary-foreground sm:text-3xl">
              Want the full picture?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-primary-foreground/85">
              Download my resume to see my education, skills and projects in
              one clean document.
            </p>
            <Link
              to="/resume"
              className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-bold text-primary shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Download size={18} /> Download Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-secondary/50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading label="Contact" title="Let's get in touch" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="flex flex-col gap-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Have a question, an opportunity, or just want to say hello? My
                inbox is always open — I'll do my best to reply quickly.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-muted-foreground">Email</span>
                  <span className="block truncate text-sm font-semibold">{EMAIL}</span>
                </span>
              </a>
              <a
                href={`tel:+91${PHONE}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Phone size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-muted-foreground">Phone</span>
                  <span className="block text-sm font-semibold">+91 {PHONE}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-muted-foreground">Location</span>
                  <span className="block text-sm font-semibold">Tamil Nadu, India</span>
                </span>
              </div>
              <SocialButtons />
            </div>
            <form
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(
                  `Portfolio message from ${data.get("name")}`,
                );
                const body = encodeURIComponent(
                  `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
                );
                window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Sorana<span className="text-primary">.</span>
          </a>
          <SocialButtons />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sorana Lakshmi. Built with passion and
            lots of coffee.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
        {label}
      </span>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-primary" />
    </div>
  );
}
