function Certificates() {
  return (
    <section className="section page">
      <h1>Certificate Verification</h1>

      <p>
        At Hu-Herb, we prioritize quality, authenticity, and customer trust. Our certifications reflect our commitment to food safety, compliance, and verified standards.
      </p>

      <div className="grid">

        {/* UDYAM */}
        <div className="info-card">
          <div className="cert-header">
          <img
            src="/certificates/msme-logo.png"
            alt="MSME"
            className="cert-logo"
          />
          <h2>UDYAM Certification</h2>
          </div>
          <p>Certificate Number: UDYAM-MH-17-0234401</p>
          <p>Status: Verified</p>

          <a
            href="/certificates/udyam-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              View Certificate
            </button>
          </a>
        </div>

         {/* IEC */}
        <div className="info-card">
          <div className="cert-header">
          <img
            src="/certificates/iec-logo.png"
            alt="IEC"
            className="cert-logo"
          />
          <h2>IEC Certification</h2>
          </div>
          <p>IEC Code: ARNPK5225B</p>
          <p>Status: Verified</p>

          <a
            href="/certificates/IEC.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              View Certificate
            </button>
          </a>
        </div>

        {/* GST */}
        {/*<div className="info-card">
          <h3>GST Certification</h3>

          <p>Certificate Number: 27ARNPK5225B1ZY</p>

          <a
            href="/certificates/gst-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">
              View Certificate
            </button>
          </a>
        </div>*/}

      </div>
    </section>
  );
}

export default Certificates;