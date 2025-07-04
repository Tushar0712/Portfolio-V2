import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../style/Projects.css";

const projects = [
  {
    title: "StudyBuddy - Complete UI Design for a Student Productivity App",
    description:
      "Designed the full UI in Figma for a mobile app that empowers students to plan, focus, and collaborate effortlessly. From initial wireframes to high-fidelity mockups, I developed a clean, responsive, and intuitive interface that prioritizes usability and distraction-free learning through a student-first design system.",
    link: "https://www.figma.com/design/mwHL6gNdWAX1FXzF4KtqVL/Study-App?node-id=43-5&t=QNy18mypbSxFpGGb-1", // Replace with actual link
  },
  {
    title: "Portfolio Website V2",
    description:
      "Developed a responsive and visually appealing personal portfolio website to showcase projects and skills. Tech: React, CSS Modules, JavaScript .",
    link: "https://yourliveportfolio.com", // Replace with actual live link
  },
  {
    title: "WanderHue - Mood Board for a Travel Experience App",
    description:
      "Created a rich visual concept in Figma for a travel app that reflects the serenity and spirit of exploration. The mood board combines earthy color palettes, minimalist typography, and scenic photography to inspire wanderlust and emotional connection. It lays the creative foundation for a calm yet adventurous user experience.",
    link: "https://www.figma.com/design/SZvZj8RhvKK81sbVDCpHtf/mood-Board-Travel-App?node-id=0-1&t=QNy18mypbSxFpGGb-1",
  },
  // {
  //   title: "Recipe Finder",
  //   description:
  //     "An application that allows users to search for recipes using an external API. Features include filtering and bookmarking. Tech: HTML, CSS, JavaScript (Vanilla).",
  //   link: "https://github.com/yourusername/recipe-finder",
  // },
];

const Projects = () => {
  return (
    <div className="projects-container section">
      {" "}
      {/* Added 'section' class */}
      <h2 className="projects-title text-center">My Recent Work</h2>{" "}
      {/* Added text-center class for title */}
      <div className="projects-list">
        {/* Using actual project data now */}
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
