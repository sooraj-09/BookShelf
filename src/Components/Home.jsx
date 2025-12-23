import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine if the user is an Admin based on the URL path
  const isAdmin = location.pathname.startsWith("/Admin");

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in { animation: fadeInUp 0.6s ease-out both; }
          .card-hover:hover { transform: translateY(-5px); box-shadow: 0 8px 15px rgba(0,0,0,0.1) !important; }
        `}
      </style>

      {/* Hero Header - Content changes based on Role */}
      <header style={{
        textAlign: 'center',
        padding: '60px 20px',
        background: isAdmin 
          ? 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)' // Admin Blue
          : 'linear-gradient(135deg, #28a745 0%, #1e7e34 100%)', // User Green
        color: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h1 className="fade-in" style={{ fontSize: '3rem', margin: '0 0 10px 0' }}>
          {isAdmin ? 'Welcome, Administrator' : 'Welcome to the Library'}
        </h1>
        <p className="fade-in" style={{ fontSize: '1.2rem', opacity: 0.9, animationDelay: '0.2s' }}>
          {isAdmin 
            ? 'Monitor your library system and manage resources in real-time.' 
            : 'Find your next favorite book and manage your reading list.'}
        </p>
      </header>

      {/* Quick Actions Grid */}
      <main style={{
        maxWidth: '1100px',
        margin: '-40px auto 40px',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        
        {/* Card 1: Books (Dynamic Path) */}
        <div 
          onClick={() => navigate(isAdmin ? '/Admin/Books' : '/User/Books')} 
          style={cardStyle} className="fade-in card-hover"
        >
          <div style={iconStyle}>📚</div>
          <h3>{isAdmin ? 'Manage Books' : 'Browse Books'}</h3>
          <p>{isAdmin ? 'Add, edit, or remove books.' : 'Explore our collection of digital books.'}</p>
        </div>

        {/* Card 2: Personal Action (Cart for User / Users for Admin) */}
        <div 
          onClick={() => navigate(isAdmin ? '/Admin/UserAdmin' : '/User/Cart')} 
          style={cardStyle} className="fade-in card-hover"
        >
          <div style={iconStyle}>{isAdmin ? '👥' : '🛒'}</div>
          <h3>{isAdmin ? 'User Management' : 'My Cart'}</h3>
          <p>{isAdmin ? 'Manage registered user accounts.' : 'View and checkout your selected books.'}</p>
        </div>

        {/* Card 3: Static About Section */}
        <div 
          onClick={() => navigate(isAdmin ? '/Admin/About' : '/User/About')} 
          style={cardStyle} className="fade-in card-hover"
        >
          <div style={iconStyle}>ℹ️</div>
          <h3>About Us</h3>
          <p>Learn more about our mission and the team.</p>
        </div>

      </main>

      <section style={{ textAlign: 'center', padding: '20px' }} className="fade-in">
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', display: 'inline-block', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h4 style={{ margin: '0', color: '#666' }}>Quick Tip</h4>
          <p style={{ margin: '5px 0 0', color: '#444' }}>
            {isAdmin 
              ? 'Update descriptions regularly to keep users informed.' 
              : 'Add books to your cart to save them for later!'}
          </p>
        </div>
      </section>
    </div>
  );
}

const cardStyle = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '12px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  animationDelay: '0.4s'
};

const iconStyle = { fontSize: '3rem', marginBottom: '15px' };

export default Home;