"use client";

export default function Comparebanks1() {
  const banks = [
    {
      name: "State bank of india",
      logo: "/banks/sbi.png",
      sector: "PUBLIC SECTOR",
      rating: "4/5",
      rate: "7.2%",
      ltv: "90%",
      loan: "₹20 Cr",
      processing: "2-5 Working Days",
      branches: "50,000+",
      hq: "Mumbai, Maharashtra",
      features: [
        "Lowest Interest Rate from 7.2% p.a.",
        "Loan Approval in 7 Working Days",
        "22,500+ Branches Across India",
      ],
    },
    {
      name: "Bank of India",
      logo: "/banks/boi.png",
      sector: "PUBLIC SECTOR",
      rating: "4.3/5",
      rate: "7.1%",
      ltv: "85%",
      loan: "₹20 Cr",
      processing: "3-5 Working Days",
      branches: "5,000+",
      hq: "Mumbai, Maharashtra",
      features: [
        "Interest Rates Starting from 7.1% p.a.",
        "Loan Approval within 5–10 Working Days",
        "5,000+ Branches Across India",
      ],
    },
    {
      name: "Axis Bank",
      logo: "/banks/axis.png",
      sector: "PRIVATE SECTOR",
      rating: "4.4/5",
      rate: "7.3%",
      ltv: "85%",
      loan: "₹20 Cr",
      processing: "3-7 Working Days",
      branches: "4,900+",
      hq: "Mumbai, Maharashtra",
      features: [
        "Interest Rates Starting from 7.3% p.a.",
        "Quick Loan Approval within 3–7 Working Days",
        "4,900+ Branches Across India",
      ],
    },

    /* 🔥 NEW 3 BANKS */

    {
      name: "HDFC Bank",
      logo: "/banks/hdfc.png",
      sector: "PRIVATE SECTOR",
      rating: "4.4/5",
      rate: "7.15%",
      ltv: "90%",
      loan: "₹20 Cr",
      processing: "3-6 Working Days",
      branches: "9,500+",
      hq: "Mumbai, India",
      features: [
        "Interest Rates Starting from 7.15% p.a.",
        "Fast Loan Approval within 3–7 Working Days",
        "9,500+ Branches Across India",
      ],
    },
    {
      name: "Bank of Baroda",
      logo: "/banks/bob.png",
      sector: "PUBLIC SECTOR",
      rating: "4.5/5",
      rate: "7.25%",
      ltv: "85%",
      loan: "₹20 Cr",
      processing: "3-7 Working Days",
      branches: "8,000+",
      hq: "Vadodara, Gujarat",
      features: [
        "Interest Rates Starting from 7.25% p.a.",
        "Loan Approval within 5–10 Working Days",
        "8,000+ Branches Across India",
      ],
    },
    {
      name: "Canara Bank",
      logo: "/banks/canara.png",
      sector: "PUBLIC SECTOR",
      rating: "4.5/5",
      rate: "7.15%",
      ltv: "75%",
      loan: "₹20 Cr",
      processing: "3-7 Working Days",
      branches: "9,000+",
      hq: "Bengaluru, Karnataka, India",
      features: [
        "Interest Rates Starting from 7.30% p.a.",
        "Loan Approval within 5–10 Working Days",
        "9,000+ Branches Across India",
      ],
    },

    {
      name: "ICICI Bank",
      logo: "/banks/icici.png",
      sector: "PRIVATE SECTOR",
      rating: "4.5/5",
      rate: "7.30%",
      ltv: "80%",
      loan: "₹20 Cr",
      processing: "3-7 Working Days",
      branches: "5,200+",
      hq: "Mumbai, Maharashtra",
      features: [
        "Interest Rates Starting from 7.30% p.a.",
        "Fast Loan Approval within 3–5 Working Days",
        "5,200+ Branches Across India",
      ],
    },
    {
      name: "Bajaj Finserv",
      logo: "/banks/bajaj.png",
      sector: "NBFC",
      rating: "4.4/5",
      rate: "7.15%",
      ltv: "90%",
      loan: "₹20 Cr",
      processing: "3-7 Working Days",
      branches: "3,700+",
      hq: "Pune, Maharashtra, India",
      features: [
        "Interest Rates Starting from 7.15% p.a.",
        "Fast Loan Approval within 2–5 Working Days",
        "Strong Pan India Presence",
      ],
    },
    {
      name: "Tata Capital",
      logo: "/banks/tata.png",
      sector: "NBFC",
      rating: "4.5/5",
      rate: "7.25%",
      ltv: "88%",
      loan: "₹2 Cr",
      processing: "3-5 Working Days",
      branches: "160+",
      hq: "Mumbai, Maharashtra, India",
      features: [
        "Interest Rates Starting from 7.25% p.a.",
        "Quick Loan Approval within 3–5 Working Days",
        "Strong Pan India Presence",
      ],
    },
  ];
  return (
    <section className="compare-section">
      {/* FILTER TABS */}
      <div className="compare-tabs">
        <button className="active">
          All Banks <span>9</span>
        </button>
        <button>
          Public Sector <span>4</span>
        </button>
        <button>
          Private Sector <span>3</span>
        </button>
        <button>
          NBFC <span>2</span>
        </button>
        <p>Showing 9 banks</p>
      </div>

      {/* HEADING */}
      <div className="compare-title">
        <h3>All Banks & Loan Providers</h3>
        <p>Click any card to view details, EMI calculator & loan offers</p>
      </div>

      {/* CARDS */}
      <div className="compare-grid">
        {banks.map((bank, i) => (
          <div className="bank-card" key={i}>
            {/* TOP */}
            <div className="card-top">
              <img src={bank.logo} alt="" />
              <div>
                <h4>{bank.name}</h4>
                <span className="badge">{bank.sector}</span>
                <p className="rating">⭐ {bank.rating}</p>
              </div>
            </div>

            {/* RATE BAR */}
            <div className="rate-bar">
              <div>
                <p>INTEREST RATE</p>
                <h3>{bank.rate}</h3>
              </div>
              <div>
                <p>MAX LTV</p>
                <h3>{bank.ltv}</h3>
              </div>
            </div>

            {/* DETAILS */}
            <div className="card-details">
              <div>
                <p>MAX LOAN</p>
                <h5>{bank.loan}</h5>
              </div>
              <div>
                <p>PROCESSING</p>
                <h5>{bank.processing}</h5>
              </div>
              <div>
                <p>BRANCHES</p>
                <h5>{bank.branches}</h5>
              </div>
              <div>
                <p>HEADQUARTERS</p>
                <h5>{bank.hq}</h5>
              </div>
            </div>

            {/* FEATURES */}
            <ul className="features">
              {bank.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button className="view-btn">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
}
