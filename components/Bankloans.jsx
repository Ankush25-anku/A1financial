"use client";
import Link from "next/link";

export default function Bankloans() {
  return (
    <section className="bank-section">
      {/* 🔥 HEADING */}
      <div className="bank-header">
        <h2>Banks & Loans</h2>
        <p>Explore top banks, NBFCs and loan services in one place</p>
      </div>

      <div className="bank-container bank-grid">
        {/* LEFT CATEGORY */}
        <div className="category-box">
          <h5>Categories</h5>
          <ul>
            <li className="active">Home Loans</li>
            <li>
              <Link href="/comparebanks">Compare Banks</Link>
            </li>
            <li>
              <Link href="/loanhelp">Loan Help</Link>
            </li>
          </ul>
        </div>

        {/* TOP BANKS */}
        {/* TOP BANKS */}
        <div className="bank-col">
          <h5>Top Banks</h5>
          <ul>
            <li>
              <img src="/banks/canara.png" alt="Canara" />
              <span>Canara Bank</span>
            </li>
            <li>
              <img src="/banks/bob.png" alt="BOB" />
              <span>Bank of Baroda</span>
            </li>
            <li>
              <img src="/banks/boi.png" alt="BOI" />
              <span>Bank of India</span>
            </li>
            <li>
              <img src="/banks/sbi.png" alt="SBI" />
              <span>SBI</span>
            </li>
          </ul>
        </div>

        {/* OTHER BANKS */}
        <div className="bank-col">
          <h5>Other Banks</h5>
          <ul>
            {/* OTHER BANKS */}
            <li>
              <img src="/banks/icici.png" alt="ICICI Bank" />
              <span>ICICI Bank</span>
            </li>

            <li>
              <img src="/banks/hdfc.png" alt="HDFC Bank" />
              <span>HDFC Bank</span>
            </li>

            <li>
              <img src="/banks/axis.png" alt="Axis Bank" />
              <span>Axis Bank</span>
            </li>
          </ul>
        </div>

        {/* NBFC */}
        <div className="bank-col">
          <h5>NBFC</h5>
          <ul>
            {/* NBFC */}
            <li>
              <img src="/banks/tata.png" alt="Tata Capital" />
              <span>Tata Capital</span>
            </li>

            <li>
              <img src="/banks/bajaj.png" alt="Bajaj Finserv" />
              <span>Bajaj Finserv</span>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="bank-col">
          <h5>Services</h5>
          <ul>
            <li>Loan Eligibility</li>
            <li>EMI Calculator</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bank-cta">
          <h4>Get Instant Loan Assistance</h4>
          <p>
            Get personalized assistance in securing best home loan deals from
            top banks.
          </p>
          <Link href="/contact">
            <button>Apply Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
