"use client";

import Link from "next/link";

export default function Team() {
  const teamMembers = [
    {
      name: "Arun Kumar J",
      role: "CEO & DIRECTOR",
      img: "/assets/images/team/14.jpg",
      link: "/teamheader",
    },
    {
      name: "Harshitha M",
      role: "CO-Founder",
      img: "/assets/images/team/12.jpg",
      link: "/teamheader1",
    },
  ];

  return (
    <section id="team" className="team padding-top padding-bottom bg-color">
      <div className="section-header section-header--max50 text-center">
        <h2 className="mb-10 mt-minus-5">
          Meet our <span>advisers</span>
        </h2>
        <p>
          Hey everyone, meet our amazing advisers! They're here to help and
          guide us.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10 d-flex">
              <div className="team-card w-100">
                <Link href={member.link} className="text-decoration-none">
                  {/* IMAGE */}
                  <div className="team-img">
                    <img src={member.img} alt={member.name} />
                  </div>

                  {/* TEXT BELOW IMAGE */}
                  <div className="team-content text-center">
                    <h6 className="mb-1">{member.name}</h6>
                    <p className="mb-0">{member.role}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
