import React from "react";
import "../style/ProjectCard.css";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link &&
        link !== "#" && ( // Ensure link is not just a placeholder
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link btn btn-secondary" // Added general btn class for consistent styling
            aria-label={`View project: ${title}`} // Added aria-label for accessibility
          >
            View Project
          </a>
        )}
    </div>
  );
};

export default ProjectCard;
