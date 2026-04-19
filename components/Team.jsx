"use client";

import Link from "next/link";

export default function Team() {
  const teamMembers = [
    {
      name: "Arun Kumar J",
      role: "CEO & DIRECTOR",
      img: "/assets/images/team/11.jpg",
    },

    {
      name: "Harshitha M",
      role: "",
      img: "/assets/images/team/12.jpg",
    },

    {
      name: "Albert Flores",
      role: "Development Specialist",
      img: "/assets/images/team/4.png",
    },
    {
      name: "Darrell Steward",
      role: "Growth Strategist",
      img: "/assets/images/team/5.png",
    },
    {
      name: "Wade Warren",
      role: "Trade Consultant",
      img: "/assets/images/team/6.png",
    },
    {
      name: "Cody Fisher",
      role: "HR Consultant",
      img: "/assets/images/team/7.png",
    },
    {
      name: "Bessie Cooper",
      role: "Financial Advisor",
      img: "/assets/images/team/8.png",
    },
  ];

  return (
 <section
  id="team"
  className="team padding-top padding-bottom bg-color"
>
      {/* HEADER */}
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
          <div className="row g-4 align-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <div
                  className="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration={800 + index * 100} // stagger animation
                >
                  <div className="team__item-inner team__item-inner--shape">
                    {/* IMAGE */}
                    <div className="team__item-thumb team__item-thumb--style1">
                      <img src={member.img} alt={member.name} />
                    </div>

                    {/* CONTENT */}
                    <div className="team__item-content team__item-content--style1">
                      <div className="team__item-author team__item-author--style1">
                        <div className="team__item-authorinfo">
                          <h6 className="mb-1">
                            <Link
                              href="/team-details"
                              className="stretched-link"
                            >
                              {member.name}
                            </Link>
                          </h6>

                          <p className="mb-0">{member.role || "\u00A0"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* BUTTON */}
            <div className="text-center">
              <Link
                href="/team"
                className="trk-btn trk-btn--border trk-btn--primary mt-25"
              >
                View more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
