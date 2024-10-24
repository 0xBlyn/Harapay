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
      bio: "A leader in project management and UI/UX development, with 5+ years experience.",
      image: "/images/fredrick.jpg"
    },
    {
      name: "BLYN",
      role: "Frontend Developer",
      bio: "A skilled developer that focuses on building user friendly applications",
      image: "/images/hakan.jpeg"
    },
    // {
    //   name: "KYLER",
    //   role: "WEB3 ENGINEER",
    //   bio: "A specialist in smart contract development, security, and backend support, with deep knowledge of blockchain infrastructure.",
    //   image: "/images/kyler.jpg"
    // },
    {
      name: "DARREN",
      role: "Financial Analyst",
      bio: "Expert in finance, economics, automation, and analysis.",
      image: "/images/darren.jpg"
    },
    {
      name: "HAKAN",
      role: "Backend Developer",
      bio: "Backend developer, focused on the integration of backend technologies.",
      image: "/images/hakan.jpg"
    }
  ]
};

const Team: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <h2 className="text-4xl font-bold text-center mb-2">{teamData.title}</h2>
        <p  className="text-center text-b mb-7 max-w-3xl mx-auto text-gray-500">{teamData.description}</p>
        
        <div className={styles.teamGrid}>
          {teamData.members.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.memberImage}>
                <Image 
                  src={member.image} 
                  alt={`${member.name}'s profile picture`}
                  width={280}
                  height={160}
                               />
              </div>
              <div className='px-4 pb-5 '>
                <h3 className='text-lg font-semibold'>{member.name}</h3>
                <p className='text-base '>{member.role}</p>
                <p className='text-sm text-gray-500 pt-5'>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
