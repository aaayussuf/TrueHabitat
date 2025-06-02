import React, { useState } from 'react';

const VerificationForms = ({ onVerify }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);

  const handleSendCode = (e) => {
    e.preventDefault();
    // Simulate sending code
    setStep(2);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    onVerify(code);
  };

  return (
    <div style={styles.container}>
      {step === 1 && (
        <form onSubmit={handleSendCode} style={styles.form}>
          <label style={styles.label}>
            Enter your email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <button type="submit" style={styles.button}>Send Verification Code</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleVerifyCode} style={styles.form}>
          <label style={styles.label}>
            Enter verification code:
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <button type="submit" style={styles.button}>Verify</button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '1rem auto',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.75rem',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.25rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '1rem',
    padding: '0.75rem',
    backgroundColor: '#004d40',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default VerificationForms;
