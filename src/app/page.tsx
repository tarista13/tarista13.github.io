"use client";

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useRef } from "react";

import EducationCard from "./components/EducationCard";
// import JobCard from "./components/JobCard";
import SteelcaseJobCard from "./components/SteelcaseJobCard";
import ProjectCard from "./components/ProjectCard";
// import BlogCard from "./components/BlogCard";
//Comment

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  // const blogRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: HTMLDivElement | null) => {
    if (!section) {
      return;
    }

    const contentPane = document.getElementById("rightSection");

    if (
      contentPane &&
      getComputedStyle(contentPane).overflowY !== "visible" &&
      contentPane.scrollHeight > contentPane.clientHeight
    ) {
      const paneTop = contentPane.getBoundingClientRect().top;
      const sectionTop = section.getBoundingClientRect().top;

      contentPane.scrollTo({
        top: contentPane.scrollTop + sectionTop - paneTop,
        behavior: "smooth",
      });
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      id="entirePage"
      className="grid min-h-screen grid-cols-1 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)]"
    >
      <section
        id="leftSection"
        className="box-border flex flex-col items-center justify-center px-6 py-10 sm:min-h-screen sm:px-8 sm:py-12 lg:sticky lg:top-0 lg:px-12 lg:justify-start lg:pt-24 xl:pt-32"
      >
        <div className="intro w-full max-w-3xl">
          <h1
            id="name"
            className="mb-3 pt-3 text-left text-3xl font-black tracking-tight sm:text-3xl md:text-3xl lg:text-center xl:text-3xl"
          >
            Tyler Arista
          </h1>
          <h3 className="text-left text-base text-gray-200 sm:text-lg lg:text-center xl:text-xl">
            Applications Engineer @Steelcase
          </h3>
        </div>
        <div
          id="sections"
          className="mt-10 hidden flex-col items-center gap-3 sm:mt-14 sm:gap-4 md:flex"
        >
          <button
            onClick={() => {
              scrollToSection(aboutRef.current);
            }}
            className="cursor-pointer border-0 bg-transparent px-2 text-sm tracking-[0.2em] uppercase text-white transition hover:text-gray-200 sm:text-base md:text-lg"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection(educationRef.current);
            }}
            className="cursor-pointer border-0 bg-transparent px-2 text-sm tracking-[0.2em] uppercase text-white transition hover:text-gray-200 sm:text-base md:text-lg"
          >
            Education
          </button>
          <button
            onClick={() => {
              scrollToSection(experienceRef.current);
            }}
            className="cursor-pointer border-0 bg-transparent px-2 text-sm tracking-[0.2em] uppercase text-white transition hover:text-gray-200 sm:text-base md:text-lg"
          >
            Experience
          </button>
          <button
            onClick={() => {
              scrollToSection(projectsRef.current);
            }}
            className="cursor-pointer border-0 bg-transparent px-2 text-sm tracking-[0.2em] uppercase text-white transition hover:text-gray-200 sm:text-base md:text-lg"
          >
            Projects
          </button>
          {/* <button onClick={() => {
              blogRef.current?.scrollIntoView(
                {behavior:"smooth"}
              );
            }} className="cursor-pointer border-0 bg-transparent px-2 text-sm tracking-[0.2em] uppercase text-white transition hover:text-gray-200 sm:text-base md:text-lg">Blog</button> */}
        </div>
        <footer
          id="social"
          className="mt-5 flex w-full max-w-xl -translate-y-6 flex-row flex-wrap items-center justify-start gap-4 text-[30px] sm:mt-2 sm:-translate-y-6 sm:gap-5 sm:text-[34px] lg:mt-auto lg:w-auto lg:max-w-none lg:translate-y-0 lg:justify-center lg:pt-12 lg:pb-12 xl:pb-16 xl:text-[38px]"
        >
          <a
            href="https://github.com/tarista13"
            target="_blank"
            className="text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-arista/"
            target="_blank"
            className="text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/t_arista13/"
            target="_blank"
            className="text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/t_arista13"
            target="_blank"
            className="text-white"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="mailto:tylerarista@gmail.com"
            target="_blank"
            className="text-white"
          >
            <IoIosMail />
          </a>
        </footer>
      </section>
      <aside
        id="rightSection"
        className="box-border px-6 pt-2 pb-8 sm:px-8 sm:py-10 md:px-10 lg:h-screen lg:overflow-y-auto lg:px-[10%] lg:py-14 xl:px-[12%]"
      >
        <div
          ref={aboutRef}
          id="about"
          className="mx-auto max-w-4xl scroll-mt-8 text-sm leading-7 sm:text-base sm:leading-8 lg:mt-12 lg:scroll-mt-24 lg:px-1"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
          <p>
            Hi, my name is Tyler &#38; I&#39;m an Applications Engineer who
            enjoys solving problems, building software, and creating tools that
            make work easier.
          </p>
          <p>
            My interest in tech really grew during my freshman year of college.
            For my final project in my &#39;Intro to Computing&#39; class, I
            built a brick breaker game inspired by one I used to play as a kid
            on my dad&#39;s BlackBerry. To this day, it remains one of the
            projects I&#39;m most proud of &#38; showed me how much I enjoy
            building through code.
          </p>
          <p>
            What excites me most about technology is the opportunity to work
            across different industries &#38; solve meaningful problems.
            I&#39;ve had the chance to contribute to projects in healthcare,
            dealer-facing software, enterprise logistics systems &#38;
            cybersecurity.
          </p>
          {/* I&#39;ve learned that the best
            solutions come from listening carefully, asking the right questions,
            and communicating clearly across both technical &#38; non-technical teams. */}
          <p>
            Today, I enjoy learning how different organizations work,
            understanding their challenges, and using technology to create
            practical solutions that make a real impact.
          </p>
          <p>
            Outside of work, I enjoy running, cooking, listening to music,
            traveling &#38; keeping up with the Chicago Cubs &#38; Bears.
          </p>
        </div>
        <div
          ref={educationRef}
          id="education"
          className="mx-auto mt-12 max-w-4xl scroll-mt-8 lg:mt-16 lg:scroll-mt-24"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">Education</h2>
          <EducationCard
            image="/Calvin_Knights.webp"
            alt="Calvin University Logo"
            school="Calvin University"
            major="Computer Science | Data Science"
            relevantCourses="Web Development, Database Management, AI & Machine Learning, Predictive Analytics, Applied Data Analysis, Software Engineering"
          ></EducationCard>
        </div>
        <div
          ref={experienceRef}
          id="experience"
          className="mx-auto mt-12 max-w-4xl scroll-mt-8 lg:mt-16 lg:scroll-mt-24"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
          <SteelcaseJobCard
            company="Steelcase"
            location="Grand Rapids, MI"
            image="/steelcaseLogo.png"
            alt="Steelcase Logo"
            title_03="Applications Engineer Associate"
            jobtype_03="Full-time"
            year_03="June 2025 - Present"
            description_03="Contributed to a large-scale enterprise platform migration by authoring technical docuentation
              for custom enhancements, design end-to-end process and integration solutions, developing ABAP programs for SAP
              TM, and resolve production issues to maintain critical business operations."
            title_02="Software Engineer Intern"
            jobtype_02="Internship"
            year_02="May 2024 - June 2025"
            description_02="Collaborated on developing a new quoting application for customized products, improving frontend user
              experience and backend data management to streamline orders and strengthen product workflows."
            title_01="IT Security Intern"
            jobtype_01="Internship"
            year_01="May 2023 - Aug 2023"
            description_01="Implemented a new Password Protection standard for a company with 12,700 employees, reducing security breaches from
              compromised passwords. Collaborated with the AppSec engineer to review application vulnerabilities using Checkmarx."
          />
          <a
            href="./resume/Arista_Tyler(April 2026).pdf"
            target="_blank"
            className="inline-block text-sm text-white underline-offset-4 transition hover:underline sm:text-base"
          >
            View Full Resume
          </a>
        </div>
        <div
          ref={projectsRef}
          id="projects"
          className="mx-auto mt-12 max-w-4xl scroll-mt-8 pb-12 lg:mt-16 lg:scroll-mt-24 lg:pb-16"
        >
          <h1 className="text-2xl font-semibold sm:text-3xl">Projects</h1>
          <div id="emr">
            <ProjectCard
              link="https://calvin-emr.web.app/about-us"
              image="/calvinEMR.png"
              alt="Calvin EMR Project"
              title="Calvin Electronic Medical Record"
              projectType="Senior Project"
              techStack="Angular, TypeScript, Firebase"
              description="This is a web development project that utilizes Angular, NodeJS and Typescript. 
              The goals of the upcoming year will be to enhance the application with more assessment 
              functionalities - mother-baby, OBGYN, and pediatrics."
            />
          </div>
          <div id="finance">
            <ProjectCard
              link="https://github.com/tarista13/finance_dashboard"
              image="/financeDashboard.png"
              alt="Django Project"
              title="Personal Finance Dashboard"
              projectType="Personal"
              techStack="Next.js, Django, Plaid API"
              description="A full-stack web app that helps users track spending, savings, and transactions in one place.
              Built with Django, Plaid API, and Recharts, it securely connects to bank accounts and visualizes
              income, expenses, and net worth through interactive charts."
            />
          </div>
          <div id="brickBreaker">
            <ProjectCard
              link="https://github.com/tarista13/Brick-Breaker"
              image="/brickBreaker.png"
              alt="Bricker Breaker Application"
              title="Brick Breaker"
              projectType="CS108 Final Project"
              techStack="Python"
              description="Designed and implemented a Gui-based Python application that allows 
              the user to play a brick breaker game that implements a file-based leaderboard."
            />
          </div>
          <a
            href="https://github.com/tarista13?tab=repositories"
            className="inline-block text-sm text-white underline-offset-4 transition hover:underline sm:text-base"
          >
            View Full Project Archive
          </a>
        </div>
        {/* <div ref={blogRef} id="blog" className="">
          <h1>Blog</h1>
          <BlogCard
            title="Intro"
            description="Can we classify the outcome of a baseball hit based on the hit kinematics">
          </BlogCard>
          <a href="/blog">View rest of blogs</a>
        </div> */}
      </aside>
    </div>
  );
}
