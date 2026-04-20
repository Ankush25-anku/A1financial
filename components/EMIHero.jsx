"use client";

export default function EMIHero({ activeTab, onTabChange }) {
  return (
    <section className="emi-hero">
      <div className="container text-center">
        <h1 className="emi-title">Home Loan EMI Calculator</h1>
      </div>

      <div className="emi-tabs">
        <button
          className={`emi-tab ${activeTab === "emi" ? "active" : ""}`}
          onClick={() => onTabChange("emi")}
        >
          📄 EMI Calculator
        </button>

        <button
          className={`emi-tab ${activeTab === "budget" ? "active" : ""}`}
          onClick={() => onTabChange("budget")}
        >
          🏠 Property Budget
        </button>

        <button
          className={`emi-tab ${activeTab === "prepayment" ? "active" : ""}`}
          onClick={() => onTabChange("prepayment")}
        >
          ⚡ Prepayment Planner
        </button>
      </div>
    </section>
  );
}
