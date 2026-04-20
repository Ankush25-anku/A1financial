"use client";

export default function QuickComparison() {
  const data = [
    {
      name: "State bank of india",
      logo: "/banks/sbi.png",
      sector: "Public Sector",
      rate: "7.2% p.a.",
      loan: "₹20 Cr",
      ltv: "90%",
      processing: "2-5 Working Days",
      rating: "4/5",
    },
    {
      name: "Bank of India",
      logo: "/banks/boi.png",
      sector: "Public Sector",
      rate: "7.1% p.a.",
      loan: "₹20 Cr",
      ltv: "85%",
      processing: "3-5 Working Days",
      rating: "4.3/5",
    },
    {
      name: "Axis Bank",
      logo: "/banks/axis.png",
      sector: "Private Sector",
      rate: "7.3% p.a.",
      loan: "₹20 Cr",
      ltv: "85%",
      processing: "3-7 Working Days",
      rating: "4.4/5",
    },
    {
      name: "HDFC Bank",
      logo: "/banks/hdfc.png",
      sector: "Private Sector",
      rate: "7.15% p.a.",
      loan: "₹20 Cr",
      ltv: "90%",
      processing: "3-6 Working Days",
      rating: "4.4/5",
    },
    {
      name: "Bank of Baroda",
      logo: "/banks/bob.png",
      sector: "Public Sector",
      rate: "7.25% p.a.",
      loan: "₹20 Cr",
      ltv: "85%",
      processing: "3-7 Working Days",
      rating: "4.5/5",
    },
    {
      name: "Canara Bank",
      logo: "/banks/canara.png",
      sector: "Public Sector",
      rate: "7.15% p.a.",
      loan: "₹20 Cr",
      ltv: "75%",
      processing: "3-7 Working Day",
      rating: "4.5/5",
    },
    {
      name: "ICICI Bank",
      logo: "/banks/icici.png",
      sector: "Private Sector",
      rate: "7.30% p.a.",
      loan: "₹20 Cr",
      ltv: "80%",
      processing: "3-7 Working Days",
      rating: "4.5/5",
    },
    {
      name: "Bajaj Finserv",
      logo: "/banks/bajaj.png",
      sector: "NBFC",
      rate: "7.15% p.a.",
      loan: "₹20 Cr",
      ltv: "90%",
      processing: "3-7 Working Days",
      rating: "4.4/5",
    },
    {
      name: "Tata Capital",
      logo: "/banks/tata.png",
      sector: "NBFC",
      rate: "7.25% p.a.",
      loan: "₹2 Cr",
      ltv: "88%",
      processing: "3-5 Working Days",
      rating: "4.5/5",
    },
  ];

  return (
    <section className="quick-section">
      {/* HEADER */}
      <div className="quick-header">
        <h3>Quick Rate Comparison</h3>
        <p>Compare all banks side by side</p>
      </div>

      {/* TABLE */}
      <div className="quick-table">
        <table>
          <thead>
            <tr>
              <th>BANK</th>
              <th>INTEREST RATE</th>
              <th>MAX LOAN</th>
              <th>MAX LTV</th>
              <th>PROCESSING</th>
              <th>RATING</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data.map((bank, i) => (
              <tr key={i}>
                <td className="bank-cell" data-label="Bank">
                  <img src={bank.logo} alt="" />
                  <div>
                    <h4>{bank.name}</h4>
                    <span>{bank.sector}</span>
                  </div>
                </td>

                <td data-label="Interest Rate">
                  <span className="rate-badge">{bank.rate}</span>
                </td>

                <td data-label="Max Loan">{bank.loan}</td>

                <td data-label="Max LTV">{bank.ltv}</td>

                <td data-label="Processing">{bank.processing}</td>

                <td data-label="Rating">⭐ {bank.rating}</td>

                <td className="apply-link" data-label="Action">
                  APPLY →
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
