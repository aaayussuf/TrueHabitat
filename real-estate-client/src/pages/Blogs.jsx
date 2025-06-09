import React from 'react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Checklist for Selling Your Home Faster',
      date: 'April 11, 2025',
      readTime: '6 min read'
    },
    {
      id: 2,
      title: 'Short-Term Rentals vs. Long-Term Leases: Which One\'s Right for You?',
      date: 'April 11, 2025',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Luxury Living Trends in 2025: What Buyers Really Want',
      date: 'April 11, 2025',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'How to Invest in Sustainable Real Estate for Long-Term Growth',
      date: 'April 11, 2025',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Top 5 Mistakes First-Time Homebuyers Should Avoid',
      date: 'April 11, 2025',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Understanding Property Valuation: Why Your Home Is Worth More Than You Think',
      date: 'April 11, 2025',
      readTime: '5 min read'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Real Estate Insights</h1>
        <p style={styles.subtitle}>Explore the Market. Learn from Experts. Make Smarter Moves.</p>
      </div>
      
      <div style={styles.blogGrid}>
        {blogPosts.map(post => (
          <div key={post.id} style={styles.blogCard}>
            <div style={styles.blogContent}>
              <h3 style={styles.blogTitle}>{post.title}</h3>
              <div style={styles.blogMeta}>
                <span>{post.date}</span>
                <span style={styles.readTime}>{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Get in Touch</h2>
        <p style={styles.contactSubtitle}>Let's Make Your Property Journey Effortless</p>
        <p style={styles.contactText}>
          Have questions or ready to take the next step? Whether you're looking to buy, rent, or invest, 
          our team is here to guide you every step of the way. Let's turn your property goals into reality.
        </p>
        
        <form style={styles.contactForm}>
          <div style={styles.formGroup}>
            <label htmlFor="first-name" style={styles.label}>First Name</label>
            <input type="text" id="first-name" style={styles.input} />
          </div>
          
          <div style={styles.formGroup}>
            <label htmlFor="last-name" style={styles.label}>Last Name</label>
            <input type="text" id="last-name" style={styles.input} />
          </div>
          
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input type="email" id="email" style={styles.input} />
          </div>
          
          <div style={styles.formGroup}>
            <label htmlFor="phone" style={styles.label}>Phone</label>
            <input type="tel" id="phone" style={styles.input} />
          </div>
          
          <div style={{...styles.formGroup, gridColumn: 'span 2'}}>
            <label htmlFor="help" style={styles.label}>What Can We Help You With?</label>
            <textarea id="help" style={styles.textarea}></textarea>
          </div>
          
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
        
        <div style={styles.divider}></div>
        
        <div style={styles.bookCall}>
          <a href="#" style={styles.bookCallLink}>Book a Call</a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: 1.6
  },
  header: {
    textAlign: 'center',
    padding: '60px 0 40px'
  },
  title: {
    fontSize: '36px',
    marginBottom: '10px',
    color: '#222'
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '40px'
  },
  blogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '60px'
  },
  blogCard: {
    border: '1px solid #eaeaea',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  blogCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
  },
  blogContent: {
    padding: '25px'
  },
  blogTitle: {
    fontSize: '20px',
    marginTop: 0,
    marginBottom: '15px',
    color: '#222'
  },
  blogMeta: {
    display: 'flex',
    alignItems: 'center',
    color: '#777',
    fontSize: '14px',
    marginBottom: '15px'
  },
  readTime: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '15px'
  },
  contactSection: {
    backgroundColor: '#f9f9f9',
    padding: '60px 0',
    textAlign: 'center'
  },
  contactTitle: {
    fontSize: '30px',
    marginBottom: '20px',
    color: '#222'
  },
  contactSubtitle: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#444'
  },
  contactText: {
    maxWidth: '700px',
    margin: '0 auto 30px',
    color: '#666'
  },
  contactForm: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    textAlign: 'left'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    height: '100px',
    resize: 'vertical'
  },
  submitButton: {
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '14px 28px',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    gridColumn: 'span 2',
    width: 'auto',
    margin: '0 auto'
  },
  divider: {
    height: '1px',
    backgroundColor: '#eee',
    margin: '40px 0'
  },
  bookCall: {
    textAlign: 'center',
    marginTop: '30px'
  },
  bookCallLink: {
    color: '#2c3e50',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '18px'
  }
};

export default Blogs;