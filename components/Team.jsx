"use client";

import Link from "next/link";

export default function Team() {
  const teamMembers = [
    {
      name: "Arun Kumar J",
      role: "CEO & DIRECTOR",
      img: "/assets/images/team/11.jpg",
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
        <div className="team__wrapper">
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div
                  className="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration={800 + index * 100}
                >
                  <Link
                    href={member.link}
                    className="d-block text-decoration-none"
                  >
                    <div className="team__item-inner team__item-inner--shape">
                      <div className="team__item-thumb team__item-thumb--style1">
                        <img src={member.img} alt={member.name} />
                      </div>

                      <div className="team__item-content team__item-content--style1">
                        <div className="team__item-author team__item-author--style1">
                          <div className="team__item-authorinfo">
                            <h6 className="mb-1">{member.name}</h6>

                            <p className="mb-0">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
