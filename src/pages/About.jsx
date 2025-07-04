import React from "react";
import "../style/About.css";
import myPhoto from "../assets/my.jpg";

const About = () => {
  return (
    <div className="about-container section">
      {" "}
      {/* Added 'section' class for consistent padding */}
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        Hello! I'm Tushar Kalathiya, a web developer with a passion for creating
        interactive and user-friendly applications. I enjoy solving problems and
        learning new technologies.
      </p>
      {/* Consider adding an image of yourself here for a personal touch */}
      {<img src={myPhoto} alt="Tushar photo" className="about-photo" />}
      <h3 className="about-section-title">My Expertise</h3>{" "}
      <ul className="about-skills">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>HTML & CSS </li>
        <li>Node.js & Express.js</li>
        <li>Databases (MongoDB, MySQL)</li>
        {/* <li>Git & GitHub (Version Control)</li> */}
        {/* <li>Responsive Web Design</li> Highlighted a key skill */}
        {/* Add more skills relevant to your profile */}
      </ul>
      <h3 className="about-section-title">A Bit More About Me</h3>
      <p className="about-bio">
        {/* [Add a short bio about your education, experience, or interests here.] */}
        👋 Hello! I'm a passionate Information Technology undergraduate at VGEC,
        Ahmedabad, affiliated with Gujarat Technological University (GTU). With
        a strong focus on frontend development and UI/UX design, I love bringing
        clean, functional, and visually engaging digital experiences to life.
        <br />
        🛠️ My technical toolkit includes React, JavaScript, and a deep
        appreciation for typography and interface aesthetics. Whether I’m
        wireframing a layout or fine-tuning a component, I aim to make every
        interaction intuitive and visually satisfying.
        <br />
        🌿 When I’m not coding or designing, you’ll find me immersed in music,
        watching or playing cricket, or reconnecting with nature—all of which
        shape my creative energy and problem-solving mindset.
      </p>
    </div>
  );
};

export default About;
