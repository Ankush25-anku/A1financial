"use client";

import { Phone, Mail, Send } from "lucide-react";

export default function ContactHero2() {
  return (
    <section className="contact2-hero">
      <div className="contact2-container">
        {/* LEFT */}
        <div className="contact2-left">
          <p className="contact2-breadcrumb">🏠 Home › Contact Us</p>

          <span className="contact2-tag">GET IN TOUCH</span>

          <h1>
            Talk to Our <br />
            <span>Expert Team</span>
          </h1>

          <p className="contact2-subtext">
            3 offices across India & UAE. Real advisors, real answers — we
            respond within 2 hours.
          </p>

          {/* CONTACT CARDS */}
          <div className="contact2-box">
            <div className="contact2-icon">
              <Phone size={18} />
            </div>
            <div>
              <p>CALL US NOW</p>
              <h4>+91 72046 98847</h4>
            </div>
          </div>

          <div className="contact2-box">
            <div className="contact2-icon">
              <Mail size={18} />
            </div>
            <div>
              <p>EMAIL US</p>
              <h4>info@specticalasset.com</h4>
            </div>
          </div>

          {/* STATS */}
          <div className="contact2-stats">
            <div>
              <h3>500+</h3>
              <p>HAPPY CLIENTS</p>
            </div>
            <div>
              <h3>3</h3>
              <p>OFFICES</p>
            </div>
            <div>
              <h3>2 Hrs</h3>
              <p>RESPONSE TIME</p>
            </div>
            <div>
              <h3>15+</h3>
              <p>BANK PARTNERS</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>FREE CONSULTATION</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact2-form">
          <div className="contact2-form-header">
            <Send size={18} />
            <div>
              <h4>Send Us a Message</h4>
              <p>We reply within 2 business hours · info@specticalasset.com</p>
            </div>
          </div>

          <div className="contact2-form-body">
            <div className="contact2-grid">
              <input placeholder="Your full name" />
              <input placeholder="+91 or +971" />
              <input placeholder="your@email.com" />
              <select>
                <option>Select office</option>
              </select>
            </div>

            <select className="contact2-full">
              <option>Select subject</option>
            </select>

            <textarea placeholder="Tell us how we can help you..." />

            <button className="contact2-btn">
              <Send size={16} /> Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
