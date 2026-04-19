"use client";

export default function CompareBanks() {
  return (
    <section className="compare-hero">
      <div className="compare-container">
        {/* BREADCRUMB */}
        <p className="breadcrumb">Home › Banks & Loans</p>

        {/* TAG */}
        <div className="tag">🏦 HOME LOAN PARTNERS</div>

        {/* HEADING */}
        <h1>
          Compare <span>Home Loan Rates</span>
          <br />
          from Top Banks in India
        </h1>

        {/* SUBTEXT */}
        <p className="subtext">
          9+ banks listed. Compare interest rates, LTV, eligibility and
          features. Apply through Spectical Asset Pvt Ltd — expert guidance,
          priority processing, zero charges.
        </p>

        {/* BUTTONS */}
        <div className="btn-group">
          <button className="primary-btn">🔍 Compare Banks</button>
          <button className="secondary-btn">📄 Check Eligibility</button>
        </div>

        {/* STATS */}
        <div className="stats">
          <div>
            <h2>9+</h2>
            <p>BANKS LISTED</p>
          </div>
          <div>
            <h2>7.1%</h2>
            <p>LOWEST RATE P.A.</p>
          </div>
          <div>
            <h2>90%</h2>
            <p>MAX LTV OFFERED</p>
          </div>
          <div>
            <h2>7</h2>
            <p>DAYS APPROVAL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
