import React from 'react';
import PageTransition from '../components/pagetransition';
import './profile.css';

const Profile = () => {
  const teamMembers = [
    { id: 1, name: "Karen Natalie", github: "github.com/karenatalie", project: "kosong", image: "/images/karen pict.jpeg" },
    { id: 2, name: "Naladevanka", github: "user2", project: "Desain UI/UX", image: "/images/p2.jpg" },
    { id: 3, name: "Muhammad Akhya Fajar", github: "user3", project: "Integrasi API", image: "/images/p3.jpg" },
    { id: 4, name: "Teman 3", github: "user4", project: "Animasi Motion", image: "/images/p4.jpg" },
    { id: 5, name: "Teman 4", github: "user5", project: "Quality Assurance", image: "/images/p5.jpg" }
  ];

  return (
    <PageTransition>
      <div className="profile-page">
        
        {/* --- HEADER --- */}
        <header className="profile-header">
          <h1>Our Creative Team</h1>
          <p>hi guys</p>
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
          <p>&copy; 2026 MyDevApp Team. Made with ❤️ and React.</p>
        </footer>

      </div>
    </PageTransition>
  );
};

export default Profile;