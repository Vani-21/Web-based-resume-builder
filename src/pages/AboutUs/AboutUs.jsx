import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 style={{fontSize:"35px"}}><b>About Us</b></h1>
      <p>We are a group of students trying to help others create their professional resumes and achieve their career goals.</p>
      <p>Our website offers a user-friendly and intuitive resume builder with customizable templates to help you stand out in the job market.</p>
      <p>Our mission is to empower job seekers with the tools and resources they need to succeed in their job search.</p>
      <p>Feel free to contact us if you have any questions or feedback.</p><br/>
      <h2 style={{fontSize:"30px"}}>Meet Our Team</h2>
      <div className="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member" />
        <h3 style={{fontSize:"20px"}}><b>Chhatrodiya Riya</b></h3>
        <p> (Role of Team Member)</p>
      </div>
      <div className="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member" />
        <h3 style={{fontSize:"20px"}}><b>Nayak Vani</b></h3>
        <p>(Role of Team Member)</p>
      </div>
      <div className="team-member">
        <img src="https://via.placeholder.com/150" alt="Team Member" />
        <h3 style={{fontSize:"20px"}}><b>Prof. Disha Panchal</b></h3>
        <p>(Mentor)</p>
      </div>
    </div>
  );
};

export default AboutUs;