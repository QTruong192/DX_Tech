import React from "react";
import "./team.scss";
import linkedinIcon from "../../assets/images/linkedin.png";

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO and Founder",
    experience:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    img: "member1.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Director of Operations",
    experience:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    img: "member2.png",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    experience:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    img: "member3.png",
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "PPC Manager",
    experience:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    img: "member4.png",
  },
  {
    id: 5,
    name: "Brian Williams",
    role: "Social Media Specialist",
    experience:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    img: "member5.png",
  },
  {
    id: 6,
    name: "Sarah Kim",
    role: "Content Creator",
    experience:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    img: "member6.png",
  },
];

const Team = () => {
  return (
    <section className="box-container">
      <div className="title">
        <h2>Team</h2>
        <p>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="team-wrapper">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-header">
              <img
                className="avatar"
                src={require(`../../assets/images/${member.img}`)}
                alt={member.name}
              />
              <div className="content-holder">
                <img
                  className="linkedin-icon"
                  src={linkedinIcon}
                  alt="LinkedIn"
                />
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
              </div>
            </div>
            <p className="experience">{member.experience}</p>
          </div>
        ))}
      </div>
      <button className="see-all-btn">See all team</button>
    </section>
  );
};

export default Team;
