"use client";
import { useState } from "react";

export default function EMIContent({ activeTab }) {
  const [loan, setLoan] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const [salary, setSalary] = useState(100000);
  const [existingEmi, setExistingEmi] = useState(10000);

  const [extraPay, setExtraPay] = useState(10000);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;

  const emi =
    (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const budget = (salary * 60 - existingEmi) * 100;

  const saveAmount = extraPay * 12 * years;

  return (
    <section className="emi-content-section">
      <div className="container">
        <h2 className="emi-heading">
          {activeTab === "emi" && "Calculate Your Monthly EMI"}
          {activeTab === "budget" && "Calculate Your Property Budget"}
          {activeTab === "prepayment" && "Plan Your Prepayments"}
        </h2>

        <div className="row g-4 mt-4">
          <div className="col-lg-7">
            <div className="emi-card">
              {activeTab === "emi" && (
                <>
                  <h5>Loan Details</h5>

                  <label>Loan Amount ₹ {loan.toLocaleString("en-IN")}</label>

                  <input
                    type="range"
                    min="500000"
                    max="50000000"
                    step="100000"
                    value={loan}
                    onChange={(e) => setLoan(Number(e.target.value))}
                  />

                  <label>Interest Rate {rate}%</label>

                  <input
                    type="range"
                    min="5"
                    max="15"
                    step=".1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                  />

                  <label>Tenure {years} Years</label>

                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                  />
                </>
              )}

              {activeTab === "budget" && (
                <>
                  <h5>Income Details</h5>

                  <label>
                    Monthly Salary ₹ {salary.toLocaleString("en-IN")}
                  </label>

                  <input
                    type="range"
                    min="20000"
                    max="500000"
                    step="5000"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                  />

                  <label>
                    Existing EMI ₹ {existingEmi.toLocaleString("en-IN")}
                  </label>

                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={existingEmi}
                    onChange={(e) => setExistingEmi(Number(e.target.value))}
                  />
                </>
              )}

              {activeTab === "prepayment" && (
                <>
                  <h5>Prepayment Strategy</h5>

                  <label>
                    Extra Monthly Payment ₹ {extraPay.toLocaleString("en-IN")}
                  </label>

                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={extraPay}
                    onChange={(e) => setExtraPay(Number(e.target.value))}
                  />
                </>
              )}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="emi-result-card">
              <h6>RESULT</h6>

              {activeTab === "emi" && (
                <h2>₹{Math.round(emi).toLocaleString("en-IN")}</h2>
              )}

              {activeTab === "budget" && (
                <h2>₹{Math.round(budget).toLocaleString("en-IN")}</h2>
              )}

              {activeTab === "prepayment" && (
                <h2>₹{Math.round(saveAmount).toLocaleString("en-IN")}</h2>
              )}

              <p>Updates dynamically based on inputs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
