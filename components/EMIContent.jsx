"use client";

export default function EMIContent({ activeTab }) {
  return (
    <section className="emi-content-section">
      <div className="container">
        <h2 className="emi-heading">
          {activeTab === "emi" && "Calculate Your Monthly EMI"}
          {activeTab === "budget" && "Calculate Your Property Budget"}
          {activeTab === "prepayment" && "Plan Your Prepayments"}
        </h2>

        <div className="row g-4 mt-4">
          {/* LEFT PANEL */}
          <div className="col-lg-7">
            <div className="emi-card">
              {activeTab === "emi" && (
                <>
                  <h5>Loan Details</h5>

                  <label>Loan Amount</label>
                  <input type="range" />

                  <label>Interest Rate</label>
                  <input type="range" />

                  <label>Loan Tenure</label>
                  <input type="range" />
                </>
              )}

              {activeTab === "budget" && (
                <>
                  <h5>Income Details</h5>

                  <label>Monthly Salary</label>
                  <input type="range" />

                  <label>Existing EMIs</label>
                  <input type="range" />
                </>
              )}

              {activeTab === "prepayment" && (
                <>
                  <h5>Prepayment Strategy</h5>

                  <label>Extra Payment</label>
                  <input type="range" />

                  <label>Frequency</label>
                  <input type="range" />
                </>
              )}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-lg-5">
            <div className="emi-result-card">
              <h6>MONTHLY RESULT</h6>

              {activeTab === "emi" && <h2>₹43K</h2>}
              {activeTab === "budget" && <h2>₹75L Budget</h2>}
              {activeTab === "prepayment" && <h2>Save ₹12L</h2>}

              <p>Dynamic values based on input</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
