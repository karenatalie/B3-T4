import React from 'react';
import PageTransition from '../components/pagetransition';
import './profile.css';

const Profile = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: "Karen Natalie", 
      github: "karenatalie",
      project: "Build a Suppliers Dataset", 
      image: "/foto/karen_pict.jpeg"
    },
    { id: 2, name: "Naladevanka Dwilifia Annisa Punto",
      github: "eternalpeach",
      project: "Pocketfi", 
      image: "/foto/nala.jpeg"
    },
    { id: 3, name: "Izzaturahman", 
      github: "Izzaalvaro", 
      project: "Freepark UI UX", 
      image: "/foto/izza.jpeg" 
    },
    { id: 4, name: "Muhammad Akhya Fajar", 
      github: "akhyafajar", 
      project: "infoindo", 
      image: "/foto/p4.jpg" 
    },
    { id: 5, name: "Teman 4", github: "user5", project: "Quality Assurance", image: "/images/p5.jpg" }
  ];

  return (
    <PageTransition>
      <div className="profile-page">
        
        {/* --- HEADER --- */}
        <header className="profile-header">
          <h1>Our Creative Team</h1>
          <p>Come and meet the creative minds behind 🎠B3T4 Explore! </p>
          <p>We combine code, design and strategy to build amazing digital experiences</p>
        </header>

        {/* --- GRID 5 PROFILE --- */}
        <main className="profile-container">
          <div className="profile-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="member-card">
                <div className="img-box">
                  <img src={member.image} alt={member.name} onError={(e) => { e.target.src = "https://via.placeholder.com/150" }} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <a href={`https://github.com/${member.github}`} target="_blank" rel="noreferrer">@{member.github}</a>
                  <div className="project-box">
                    <span>Project Terakhir:</span>
                    <p>{member.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* --- FOOTER --- */}
        <footer className="profile-footer">
          <p>&copy; 2026 B3T4 Explore Team. Made with ❤️.</p>
        </footer>

      </div>
    </PageTransition>
  );
};

export default Profile;