import React from 'react';

const agents = [
  {
    id: 1,
    name: 'John Doe',
    phone: '555-123-4567',
    email: 'john@example.com',
    photo: '/src/Pictures/modern-house.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '555-987-6543',
    email: 'jane@example.com',
    photo: '/src/Pictures/modern-house.png',
  },
];

const Agents = () => {
  return (
    <div style={styles.container}>
      <h1>Our Agents</h1>
      <div style={styles.agentList}>
        {agents.map((agent) => (
          <div key={agent.id} style={styles.agentCard}>
            <img src={agent.photo} alt={agent.name} style={styles.photo} />
            <h3>{agent.name}</h3>
            <p>Phone: {agent.phone}</p>
            <p>Email: {agent.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  agentList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    marginTop: '2rem',
  },
  agentCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    maxWidth: '200px',
    backgroundColor: '#fff',
  },
  photo: {
    width: '100%',
    borderRadius: '50%',
    marginBottom: '1rem',
  },
};

export default Agents;
