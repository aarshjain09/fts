import React from 'react';
import './AboutUs.css'; // Create a CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About CollabSpace</h1>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At CollabSpace, our mission is to empower teams and individuals to
            collaborate seamlessly and achieve their goals together. We believe
            that effective communication and shared workspaces are essential for
            success in today's fast-paced world.  We strive to provide a
            user-friendly and feature-rich platform that fosters creativity,
            productivity, and innovation.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            CollabSpace was founded in [Year] by [Founders' Names] with a vision
            to create a centralized hub for all collaboration needs.  We
            started as a small team with a big idea, and we've grown into a
            thriving community of users who rely on our platform to connect,
            share ideas, and work together effectively.  We are constantly
            evolving and improving CollabSpace based on user feedback and the
            latest technological advancements.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Collaboration:</strong> We believe in the power of teamwork and shared purpose.</li>
            <li><strong>Innovation:</strong> We are committed to pushing the boundaries of what's possible in online collaboration.</li>
            <li><strong>User-centricity:</strong>  We prioritize the needs and feedback of our users.</li>
            <li><strong>Simplicity:</strong> We strive to create a platform that is easy to use and intuitive.</li>
            <li><strong>Excellence:</strong> We are dedicated to providing a high-quality experience for all our users.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? We'd love to hear from you!  Reach out to
            us at:
            <br />
            Email: <a href="mailto:info@collabspace.com">info@collabspace.com</a>
            <br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;