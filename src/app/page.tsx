'use client';

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useRef } from 'react'

import EducationCard from "./components/EducationCard";
// import JobCard from "./components/JobCard";
import SteelcaseJobCard from "./components/SteelcaseJobCard";
import ProjectCard from "./components/ProjectCard";
// import BlogCard from "./components/BlogCard";

export default function Home() {

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const blogRef = useRef<HTMLDivElement | null>(null);

  return (
    <div id="entirePage" className="grid grid-cols-2">
        <section className="ml-[15%] mr-[15%] p-[0] pt-[12%]  h-[24%] float-left box-border justify-items-center">
          <div className="intro">
            <h1 id="name" className="mt-[25px] text-[60px] text-center font-bold mb-[20px]">Tyler Arista</h1>
            <h3 className="text-center">Applications Engineer @Steelcase</h3>
          </div>
          <div className="flex flex-col mt-[20%] items-center">
            <a onClick={() => {
              aboutRef.current?.scrollIntoView(
                {behavior: "smooth"}
              );
            }}>About</a>
            <a onClick={() => {
              educationRef.current?.scrollIntoView(
                {behavior: "smooth"}
              );
            }}>Education</a>
            <a onClick={() => {
              experienceRef.current?.scrollIntoView(
                {behavior: "smooth"}
              );
            }}>Experience</a>
            <a onClick={() => {
              projectsRef.current?.scrollIntoView(
                {behavior:"smooth"}
              );
            }}>Projects</a>
            <a onClick={() => {
              blogRef.current?.scrollIntoView(
                {behavior:"smooth"}
              );
            }}>Blog</a>
          </div>
          <footer id="social" className="flex flex-row justify-center items-center mt-[45%] m-[15px] text-[30px]" style={{flex:"row"}}>
            <a href="https://github.com/tarista13" target="_blank" className="m-[15%]" style={{color:'white'}}><FaGithub/></a>
            <a href="https://www.linkedin.com/in/tyler-arista/" target="_blank" className="m-[15%]" style={{color:'white'}}><FaLinkedin/></a>
            <a href="https://www.instagram.com/t_arista13/" target="_blank" className="m-[15%]" style={{color:'white'}}><FaInstagram/></a>
            <a href="https://twitter.com/t_arista13" target="_blank" className="m-[15%]" style={{color:'white'}}><FaSquareXTwitter/></a>
            <a href="mailto:tylerarista@gmail.com" target="_blank" className="m-[15%]" style={{color:'white'}}><IoIosMail /></a>
          </footer>
      </section>
      <aside className="rounded-[5px] pl[12%] pr-[12%] float-right h-screen box-border overflow-y-auto">
        <div ref={aboutRef} id="about" className="m-[9%]">
          {/* <p>I’m a Computer Science graduate with a Minor in Data Science from Calvin University (May 2025), 
            currently working as an Applications Engineer Associate at Steelcase. I’m passionate about full-stack development, 
            data-driven solutions, and building technology that drives meaningful impact. My long-term career goal is to grow 
            into a software engineering role, where I can apply my skills to design and deliver innovative systems that make a 
            difference. My academic background includes courses in Data Structures, Algorithms, Software Engineering, Computer 
            Architecture, Artificial Intelligence, and Machine Learning. With hands-on experience in Python, C#, JavaScript, 
            and Agile methodologies, I’m a dedicated learner and problem-solver eager to continue developing my expertise in 
            modern software development practices.</p> */}
            <p>Hi, I&#39;m Tyler, a Computer Science graduate with a minor in Data Science from Calvin University
               and currently an Applications Engineer Associate at Steelcase.<br/>
              <br/>
               I&#39;m passionate about building modern, data-driven web applications that merge clean design
               with powerful functionality. I work primarily with React, Next.js, Django, and C#, creating tools
               that are intuitive, efficient, and impactful.<br/>
              <br/>
                I enjoy tackling complex problems, learning new technologies, and collaborating with others to turn 
                ideas into real, working solutions. My goal is to continue growing into a Software Engineering role
                where I can design and deliver systems that make a meaningful difference.
            </p>
        </div>
        <div ref={educationRef} id="education" className="">
          <h2>Education</h2>
          <EducationCard
            image="/Calvin_Knights.webp"
            alt="Calvin University Logo" 
            school="Calvin University"
            major="Computer Science | Data Science"
            relevantCourses="Web Development, Database Management, AI & Machine Learning, Predictive Analytics, Applied Data Analysis, Software Engineering"></EducationCard>
        </div>
        <div ref={experienceRef} id="experience" className="mt-[5%]">
          <h2>Experience</h2>
          <SteelcaseJobCard 
              company="Steelcase"
              location="Grand Rapids, MI"
              image="/steelcaseLogo.png"
              alt="Steelcase Logo"
              title_03="Applications Engineer Associate"
              jobtype_03="Full-time"
              year_03="June 2025 - Present"
              description_03="Contributing to enterprise software and system solutions, supporting business operation, and enhacing technical
              workflows while building experience toward long-term software engineering goals."
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
          {/* <div className="mt-[5px]">
            <JobCard
              title="Applications Enginner Associate" 
              company="Steelcase"
              image="/steelcaseLogo.png"
              alt="Steelcase Logo"
              year="June 2025 - Present" 
              description="Contributing to enterprise software and system solutions, supporting business operation, and enhacing technical
              workflows while building experience toward long-term software engineering goals."/>
          </div>
          <div className="mt-[15px]">
            <JobCard 
              title="Software Engineer Intern"
              company="Steelcase"
              alt="Steelcase Logo"
              image="/steelcaseLogo.png"
              year="May 2024 - June 2025"
              description="Collaborated on developing a new quoting application for customized products, improving frontend user
              experience and backend data management to streamline orders and strengthen product workflows."></JobCard>
          </div>
          <div className="">
            <JobCard 
              title="CyberSecurity Intern"
              company="Steelcase"
              image="/steelcaseLogo.png"
              alt="Steelcase Logo"
              year="May 2023 - Aug 2023"
              description="Implemented a new Password Protection standard for a company with 12,700 employees, reducing security breaches from
              compromised passwords. Collaborated with the AppSec engineer to review application vulnerabilities using Checkmarx."></JobCard>
          </div> */}
          <a href="./resume/Arista_Tyler(Post Grad May 2025).pdf" target="_blank" className="text-white">View Full Resume</a>
        </div>
        <div ref={projectsRef} id="projects" className="pb-[5%] mt-[5%]">
          <h1>Projects</h1>
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
              functionalities - mother-baby, OBGYN, and pediatrics." />
          </div>
          <div id="finance">
            <ProjectCard 
              link="https://github.com/tarista13/finance_dashboard"
              image="/financeDashboard.png"
              alt="Django Project"
              title="Personal Finance Dashboard" 
              projectType="Personal" 
              techStack="Next.js, Django Rest Frameworks, Plaid API" 
              description="A full-stack web app that helps users track spending, savings, and transactions in one place.
              Built with Django, Plaid API, and Recharts, it securely connects to bank accounts and visualizes
              income, expenses, and net worth through interactive charts." />
          </div>
          {/* <div id="baseball">
            <ProjectCard 
              link="#"
              image="/brickBreaker.png"
              alt="Baseball Project"
              title="Baseball Project" 
              projectType="Personal" 
              techStack="django" 
              description="shows off: web scraping, backend calculations, visualizations, etc" />
          </div> */}
          <div id="resume">
            <ProjectCard 
              link="https://github.com/tarista13/resume_analyzer"
              image="/resume_Analyzer.png"
              alt="Resume Analyzer Django Project"
              title="AI-Powered Resume Critic" 
              projectType="Personal" 
              techStack="Next.js, Gemini API" 
              description="An AI web app that analyzes resumes and provides feedback on clarity, structure, and job relevance.
              Built with React and google Gemini, it uses NLP and prompt engineering to generate tailored suggestions that improve 
              each." />
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
              the user to play a brick breaker game that implements a file-based leaderboard." />
          </div>
          <a href="">View Full Project Archieve</a>
        </div>
        {/* <div ref={blogRef} id="blog" className="">
          <h1>Blog</h1>
          <BlogCard
            title="Classifying MLB Hit Outcomes"
            description="Can we classify the outcome of a baseball hit based on the hit kinematics">
          </BlogCard>
          <BlogCard
            title="My journey as a baseball analyst -> data scientist"
            description="[...]">
          </BlogCard>
          <BlogCard
            title="2016 Cubs vs 2025 Cubs"
            description="[...]">
          </BlogCard>
          <Link href="/blog">View rest of blogs</Link>
        </div> */}
      </aside>
    </div>
  );
}
