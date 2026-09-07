import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Github, Linkedin, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Sorana Lakshmi" },
      {
        name: "description",
        content:
          "Resume of Sorana Lakshmi, Full Stack Web Developer and 3rd-year Computer Science Engineering student.",
      },
    ],
  }),
  component: Resume,
});

const LINKEDIN = "https://www.linkedin.com/in/sornalakshmi-p-06917a366";
const GITHUB = "https://github.com/Sornalakshmi2007";

function Resume() {
  return (
    <div className="min-h-screen bg-secondary/50 py-10">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
          >
            <Download size={16} /> Download / Print
          </button>
        </div>

        <article className="rounded-2xl border border-border bg-card p-8 shadow-lg sm:p-12 print:rounded-none print:border-none print:shadow-none">
          <header className="border-b border-border pb-6 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sorana Lakshmi
            </h1>
            <p className="mt-1 text-lg font-semibold text-primary">
              Full Stack Web Developer
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Mail size={14} /> soranalakshmi36@gmail.com
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone size={14} /> +91 6384990695
              </span>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </header>

          <ResumeSection title="Objective">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Computer Science and Engineering student learning Full Stack Web
              Development by building practical projects. Seeking opportunities
              to apply my skills and grow into a skilled Full Stack Web
              Developer.
            </p>
          </ResumeSection>

          <ResumeSection title="Education">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold">
                  B.E. — Computer Science and Engineering
                </h3>
                <span className="text-sm font-medium text-primary">3rd Year</span>
              </div>
              <p className="text-sm text-muted-foreground">
                University College of Engineering Arni
              </p>
            </div>
          </ResumeSection>

          <ResumeSection title="Technical Skills">
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "Java"].map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-primary/8 px-4 py-1.5 text-sm font-semibold text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Projects">
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold">Student Management System</h3>
                <p className="text-sm text-muted-foreground">
                  Web application for managing student information and records.
                  Built with HTML, CSS and JavaScript.
                </p>
              </li>
              <li>
                <h3 className="font-bold">Symposium Website</h3>
                <p className="text-sm text-muted-foreground">
                  College symposium website displaying technical and
                  non-technical events. Built with HTML, CSS and JavaScript.
                </p>
              </li>
              <li>
                <h3 className="font-bold">Portfolio Website</h3>
                <p className="text-sm text-muted-foreground">
                  Personal portfolio showcasing skills, education and projects.
                  Built with HTML, CSS and JavaScript.
                </p>
              </li>
            </ul>
          </ResumeSection>
        </article>
      </div>
    </div>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 text-sm font-bold tracking-[0.15em] text-primary uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
