import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Tips for First-Time Home Buyers',
    date: '2024-05-01',
    excerpt: 'Buying your first home can be exciting and overwhelming. Here are some tips to help you get started...',
  },
  {
    id: 2,
    title: 'How to Increase Your Property Value',
    date: '2024-04-15',
    excerpt: 'Simple renovations and upgrades can significantly increase the value of your property. Learn more here...',
  },
];

const Blog = () => {
  return (
    <div style={styles.container}>
      <h1>Blog</h1>
      <div style={styles.posts}>
        {blogPosts.map((post) => (
          <div key={post.id} style={styles.post}>
            <h2>{post.title}</h2>
            <p style={styles.date}>{post.date}</p>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  posts: {
    marginTop: '2rem',
  },
  post: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '1rem',
    marginBottom: '1rem',
  },
  date: {
    color: '#888',
    fontSize: '0.9rem',
  },
};

export default Blog;
