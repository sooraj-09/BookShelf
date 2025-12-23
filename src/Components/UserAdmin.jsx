import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const isAdmin = location.pathname.startsWith("/Admin");


  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);


  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete user: ${name}?`)) {
      fetch(`http://localhost:4000/users/${id}`, { method: "DELETE" })
        .then(() => {
          setUsers(users.filter(u => u.id !== id));
          alert("User removed successfully");
        });
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
      padding: '30px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#222', marginBottom: '30px' }}>
        Admin: User Management
      </h1>

      <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#007bff', color: 'white', textAlign: 'left' }}>
              <th style={cellStyle}>ID</th>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Email</th>
              <th style={cellStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={cellStyle}>{user.id}</td>
                <td style={cellStyle}>{user.firstName}</td>
                <td style={cellStyle}>{user.email}</td>
                <td style={cellStyle}>
                  <button  onClick={() => deleteUser(user.id, user.firstName)} style={deleteBtnStyle}>Delete User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && <p style={{ textAlign: 'center', padding: '20px' }}>No users found.</p>}
      </div>
    </div>
  );
};

// Internal Styles
const cellStyle = { padding: '15px', borderBottom: '1px solid #eee' };

const deleteBtnStyle = {
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600'
};

export default UserAdmin;