import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    let path=useLocation();
    console.log(path);
    let x=path.pathname.startsWith("/Admin")
    console.log(x);
    return (
        <nav style={{
            display: 'flex',
            gap: '20px',
            backgroundColor: '#333',
            padding: '15px',
            color: 'white',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            animation: 'slideDown 0.5s ease-out'
        }}>
          <style>
            {`
              @keyframes slideDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              a:hover {
                color: #ffd700 !important;
                transform: scale(1.1);
                transition: all 0.3s ease;
              }
            `}
          </style>
           {x ? (<>
           <NavLink to="/Admin/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</NavLink>
           <NavLink to="/Admin/About" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</NavLink>
           <NavLink to="/Admin/Books" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Books</NavLink>
           <NavLink to="/Admin/UserAdmin" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>User</NavLink>
           <NavLink to="/Admin/Adduser" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Add User</NavLink>
           <NavLink to="/Admin/Addbook" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Add Book</NavLink>
           <NavLink to="/" style={{ color: 'white', textDecoration: 'none', marginLeft: 'auto', fontWeight: 'bold' }}>LogOut</NavLink>
           </>):(<>
          <NavLink to="/User/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</NavLink>
          <NavLink to="/User/About" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</NavLink>
          <NavLink to="/User/Books" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Books</NavLink>
          <NavLink to="/User/Cart" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Cart</NavLink>
          <NavLink to="/" style={{ color: 'white', textDecoration: 'none', marginLeft: 'auto', fontWeight: 'bold' }}>LogOut</NavLink>

           </>)}
        </nav>
    )
}

export default Navbar