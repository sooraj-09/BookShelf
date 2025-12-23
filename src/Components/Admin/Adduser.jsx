import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
  const navigate = useNavigate();

  let firstName = useRef();
  let lastName = useRef();
  let email = useRef();
  let phone = useRef();
  let address = useRef();
  let birthDate = useRef();

  let handleUser = (e) => {
    e.preventDefault();

    let newUser = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      phone: phone.current.value,
      address: address.current.value,
      birthDate: birthDate.current.value
    };

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
      .then(() => {
        alert("User Added Successfully");
        navigate("/Admin/UserAdmin");
      })
      .catch(err => console.error("Error:", err));
  };

  return (
    <div style={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f8f9fa",
      height: "100vh", // Ensures it fits in one page
      overflow: "hidden" // Prevents scrolling
    }}>
      <h2 style={{
        color: "#333",
        marginBottom: "15px",
        fontSize: "1.8rem",
        textAlign: "center"
      }}>Add New User</h2>
      <form onSubmit={handleUser} style={{
        display: "grid",
        gap: "10px",
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        flex: 1,
        overflowY: "auto" // Allows scrolling within form if needed, but minimized
      }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="firstName" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>First Name</label>
          <input
            id="firstName"
            type="text"
            ref={firstName}
            placeholder="Enter First Name"
            required
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.3s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="lastName" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Last Name</label>
          <input
            id="lastName"
            type="text"
            ref={lastName}
            placeholder="Enter Last Name"
            required
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.3s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Email</label>
          <input
            id="email"
            type="email"
            ref={email}
            placeholder="Enter Email"
            required
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.3s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="phone" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Phone Number</label>
          <input
            id="phone"
            type="tel"
            ref={phone}
            placeholder="Enter Phone Number"
            required
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.3s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="address" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Address</label>
          <input
            id="address"
            type="text"
            ref={address}
            placeholder="Enter Address"
            required
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.3s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="birthDate" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Birth Date</label>
          <input
            id="birthDate"
            type="date"
            ref={birthDate}
            required
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.3s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>
        
        <button type="submit" style={{
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "0.9rem",
          fontWeight: "bold",
          transition: "background-color 0.3s",
          marginTop: "5px"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Adduser;