import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiArrowUpRight, FiFileText, FiMail } from "react-icons/fi";

import { getAllPosts } from "@/lib/blog";
import BentoCard from "./components/BentoCard";
import EducationCard from "./components/EducationCard";
import ExperienceTimeline from "./components/ExperienceTimeline";
import PostList from "./components/PostList";
import ProjectCard from "./components/ProjectCard";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import Tag from "./components/Tag";
import {
  education,
  experience,
  projectArchiveHref,
  projects,
  resumeHref,
  skills,
  socials,
} from "./content";

const linkStyle =
  "text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <SiteHeader />

      <main
        id="main"
        className="mx-auto max-w-6xl px-4 pt-6 pb-16 sm:px-6 sm:pt-10"
      >
        <div id="top" className="bento scroll-mt-24">
          {/* Hero */}
          <section className="area-hero relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white/70 via-white/20 to-transparent"
            />
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Tyler Arista
              </h1>
              <p className="mt-3 text-lg font-medium text-ink sm:text-xl">
                Applications Engineer{" "}
                <span className="text-muted">@Steelcase</span>
              </p>
              <p className="mt-3 max-w-md text-muted">
                Building software, solving problems, and creating tools that
                make work easier.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {[
                {
                  href: socials.github,
                  label: "GitHub",
                  icon: FaGithub,
                  external: true,
                },
                {
                  href: socials.linkedin,
                  label: "LinkedIn",
                  icon: FaLinkedin,
                  external: true,
                },
                {
                  href: socials.email,
                  label: "Email",
                  icon: FiMail,
                  external: false,
                },
              ].map(({ href, label, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent-soft"
                  >
                    <Icon aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition-colors hover:border-zinc-300 hover:bg-zinc-300"
                >
                  <FiFileText aria-hidden="true" />
                  Resume
                </a>
              </li>
            </ul>
          </section>

          {/* About */}
          <BentoCard id="about" label="About" className="area-about">
            <div className="space-y-4 text-[15px] leading-7 text-ink/90 sm:text-base">
              <p>
                Hi, my name is Tyler &#38; I&#39;m an Applications Engineer who
                enjoys building software, solving problems, and creating tools
                that make work easier. Today I&#39;m the go-to technical contact
                for SAP Transportation Management at Steelcase, where I debug
                production issues, keep integrations between systems talking
                &#38; build solutions with C#/.NET, SQL, ABAP &#38; TypeScript.
              </p>
              <p>
                My interest in tech really grew during my freshman year of
                college. For my final project in my &#39;Intro to Computing&#39;
                class, I built a brick breaker game inspired by one I used to
                play as a kid on my dad&#39;s BlackBerry. To this day, it
                remains one of the projects I&#39;m most proud of &#38; showed
                me how much I enjoy building through code.
              </p>
              <p>
                What excites me most about technology is the chance to solve
                meaningful problems across industries. I&#39;ve contributed to
                projects in healthcare, dealer-facing software, enterprise
                logistics &#38; cybersecurity. Going forward, I&#39;m especially
                interested in software &#38; applications engineering, sports
                data &#38; analytics, and AI, including AI governance &#38;
                making sure AI is built and used responsibly.
              </p>
              <p>
                Outside of work, I enjoy running, cooking, traveling &#38;
                keeping up with the Chicago Cubs &#38; Bears.
              </p>
            </div>
          </BentoCard>

          {/* Experience */}
          <BentoCard id="experience" label="Experience" className="area-exp">
            <ExperienceTimeline {...experience} />
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center gap-1 text-sm font-medium ${linkStyle}`}
            >
              View Full Resume
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </BentoCard>

          {/* Projects */}
          <section
            id="projects"
            aria-labelledby="projects-heading"
            className="area-proj min-w-0 scroll-mt-24 pt-4 md:pt-6"
          >
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
              <h2
                id="projects-heading"
                className="flex items-center gap-2 font-mono text-xs font-medium tracking-[0.18em] text-muted uppercase"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-[2px] bg-accent"
                />
                Projects
              </h2>
              <a
                href={projectArchiveHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-sm font-medium ${linkStyle}`}
              >
                View Full Project Archive
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          {/* Blog */}
          <BentoCard id="blog" label="Blog" className="area-blog">
            <PostList posts={latestPosts} />
            <Link
              href="/blog"
              className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${linkStyle}`}
            >
              All posts
              <FiArrowRight aria-hidden="true" />
            </Link>
          </BentoCard>

          {/* Education */}
          <BentoCard id="education" label="Education" className="area-edu">
            <EducationCard
              image={education.logo}
              school={education.school}
              degree={education.degree}
              coursework={education.coursework}
            />
          </BentoCard>

          {/* Skills */}
          <BentoCard id="skills" label="Skills" className="area-skills">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {skills.map(({ group, items }) => (
                <div key={group} className="min-w-0">
                  <dt className="mb-2 text-xs font-medium text-muted">
                    {group}
                  </dt>
                  <dd>
                    <ul className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </BentoCard>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
