import React from 'react'
import styles from '@/styles/Team.module.css'
import Image from 'next/image'

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
}

type TeamProps = {
  title: string;
  description: string;
  members: TeamMember[];
}

const teamData: TeamProps = {
  title: "Our Team",
  description: "Our team consists of industry experts passionate about blockchain, fintech, and technological advancement",
  members: [
    {
      name: "FREDRICK",
      role: "Project Manager",
      bio: "A leader in project management and UI/UX development, with 5+ years in the crypto space and a background in hosting blockchain events.",
      image: "/images/fredrick.jpg"
    },
    {
      name: "BLYN",
      role: "Frontend Developer",
      bio: "A skilled front-end developer with extensive experience using frontend technologies.",
      image: "/images/blyn.jpg"
    },
    {
      name: "KYLER",
      role: "WEB3 ENGINEER",
      bio: "A specialist in smart contract development, security, and backend support, with deep knowledge of blockchain infrastructure.",
      image: "/images/kyler.jpg"
    },
    {
      name: "DARREN",
      role: "Financial Analyst",
      bio: "Expert in finance, economics, automation, and analysis, bringing a unique blend of technical and financial acumen.",
      image: "/images/darren.jpg"
    },
    {
      name: "HAKAN",
      role: "Backend Developer",
      bio: "Backend developer, focused on the smooth integration of backend technology into everyday applications.",
      image: "/images/hakan.jpg"
    }
  ]
};

const Team: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{teamData.title}</h2>
        <p className={styles.sectionDescription}>{teamData.description}</p>
        
        <div className={styles.teamGrid}>
          {teamData.members.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image 
                  src={member.image} 
                  alt={`${member.name}'s profile picture`}
                  width={120}
                  height={120}
                  objectFit="cover"
                />
              </div>
              <div className={styles.memberContent}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
