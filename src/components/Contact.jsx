export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is where we would handle the form submission.');
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}