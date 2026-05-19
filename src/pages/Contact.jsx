function Contact() {
  return (
    <section className="section page">
      <h1>Get in Touch</h1>
      <p>Have questions about our products, partnerships, or distribution? Our team is here to assist you. Reach out to us and we’ll get back to you as soon as possible.</p>

      <div className="contact-details">
        <p>We welcome business inquiries, product-related questions, and partnership opportunities from customers worldwide.</p><br/>
        <p>
          <b>Email</b>
          <div className="contact-link">
          <a href="mailto:huherbglobaldist@gmail.com?subject=Inquiry%20About%20HuHerb%20Products">
            huherbglobaldist@gmail.com
          </a>
           </div>
        </p>
       
        <br/>
         <p>
            <b>WhatsApp</b>
            <div className="contact-link">
            <a
              href="https://wa.me/919967296890?text=Hello%20HuHerb,%20I%20want%20to%20know%20more%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 9967296890
            </a>
            </div>
          </p>
          <br/>
        <p><b>Location:</b> Maharashtra, India</p>
      </div>
    </section>
  );
}

export default Contact;