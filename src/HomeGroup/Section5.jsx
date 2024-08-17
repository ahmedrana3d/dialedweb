import { useEffect } from "react";
import { useAnimateText } from "../ScrollAnimations";


export const Section5 = () => {

  useAnimateText(".five-title")

  const isMobile = window.innerWidth <= 768;

  const teamMembers = [
    { name: "Idan Zeidman", title: "Co-CEO & Co-Founder" },
    { name: "Lorenzo Noya", title: "Co-CEO & Co-Founder" },
    { name: "Matvey Vasilyev", title: "COO & Co-Founder" },
    { name: "Rainer Ahi", title: "CTO" },
    { name: "Sardor Xujamov", title: "Visualization Expert" },
    { name: "Dara Taddeo", title: "Media Buying Lead" },
    { name: "Ahmed Farooq", title: "Head of Development" },
    { name: "Ismael Benmoussa", title: "Project Manager" },
    { name: "Brooke Judes", title: "Public Relations" },
  ];

  return (
    <section className="section five" >
      <div className="five-content">
        <div className="five-content-textbox">
          <h1 className="headline five-title" >A global network of talent</h1>
          <p className="description" >We've assembled a team of dedicated professionals from diverse backgrounds who share the same passion for your brand as you do.</p>
        </div>
        <div className="five-content-list">
          {teamMembers.map((member, index) => (
            <div className="five-content-item" key={index}>
              <div className="five-content-item-inside">
                <h1 className="five-content-item-text">{member.name}</h1>
              </div>
              <div className="five-content-item-inside">
                <h1 className="five-content-item-text">{member.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
