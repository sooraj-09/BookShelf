import React from 'react';

function About() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate { animation: fadeInUp 0.8s ease-out both; }
        `}
      </style>

      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '80px 20px',
        backgroundColor: '#f8f9fa',
        background: 'linear-gradient(rgba(0,123,255,0.05), rgba(0,123,255,0.05)), #ffffff'
      }}>
        <h1 className="animate" style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#007bff' }}>
          Our Story
        </h1>
        <p className="animate" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: '#555', animationDelay: '0.2s' }}>
          We started with a simple goal: to make reading and managing books accessible to everyone. 
          Today, we serve thousands of readers around the globe.
        </p>
      </section>

      {/* Mission & Values */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          <div className="animate" style={{ animationDelay: '0.4s' }}>
            <h2 style={{ color: '#007bff' }}>🚀 Our Mission</h2>
            <p>To organize the world's literature and make it universally accessible and useful for our community of readers and students.</p>
          </div>
          <div className="animate" style={{ animationDelay: '0.6s' }}>
            <h2 style={{ color: '#007bff' }}>💡 Our Vision</h2>
            <p>To become the leading digital library management system that bridges the gap between authors and readers through technology.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', margin: '0' }}>10k+</h2>
            <p style={{ margin: '5px 0' }}>Books Available</p>
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', margin: '0' }}>5k+</h2>
            <p style={{ margin: '5px 0' }}>Happy Users</p>
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', margin: '0' }}>24/7</h2>
            <p style={{ margin: '5px 0' }}>Digital Access</p>
          </div>
        </div>
      </section>

      {/* Footer-like Contact Prompt */}
      <section style={{ textAlign: 'center', padding: '60px 20px' }} className="animate" >
        <h3>Want to collaborate?</h3>
        <p>We are always looking for new partners and book lovers to join our journey.</p>
        <button style={{
          padding: '12px 30px',
          fontSize: '1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,123,255,0.3)'
        }}>
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default About;