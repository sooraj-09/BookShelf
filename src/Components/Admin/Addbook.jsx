import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Addbook = () => {
  const navigate = useNavigate();

  // Using refs to collect data
  let id = useRef();
  let title = useRef();
  let pageCount = useRef();
  let date = useRef();
  let authors = useRef();
  let shortDescription = useRef();
  let status = useRef();
  let thumbnail = useRef();

  let handlebook = (e) => {
    e.preventDefault(); // Prevents page refresh

    let newbook = {
      id: id.current.value,
      title: title.current.value,
      pageCount: parseInt(pageCount.current.value), // Convert string to number
      publishedDate: { $date: new Date(date.current.value).toISOString() }, // Match JSON structure
      authors: [authors.current.value], // Convert string to Array
      shortDescription: shortDescription.current.value,
      status: status.current.value,
      thumbnailUrl: thumbnail.current.value
    };

    fetch("http://localhost:4000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newbook)
    })
    .then((res) => {
      if (res.ok) {
        alert("Book Added Successfully");
        navigate("/Admin/Books");
      } else {
        alert("Failed to add book");
      }
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      alert("Error connecting to server");
    });
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
      }}>Add New Book</h2>
      <form onSubmit={handlebook} style={{
        display: "grid",
        gap: "10px",
        width: "100%",
        maxWidth: "450px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        flex: 1,
        overflowY: "auto" // Allows scrolling within form if needed, but minimized
      }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="id" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Book ID</label>
          <input
            id="id"
            type="text"
            ref={id}
            placeholder="Enter Book ID"
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
          <label htmlFor="title" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Title</label>
          <input
            id="title"
            type="text"
            ref={title}
            placeholder="Enter Title"
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
          <label htmlFor="pageCount" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Page Count</label>
          <input
            id="pageCount"
            type="number"
            ref={pageCount}
            placeholder="Enter Page Count"
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
          <label htmlFor="authors" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Author Name</label>
          <input
            id="authors"
            type="text"
            ref={authors}
            placeholder="Enter Author Name"
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
          <label htmlFor="thumbnail" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Thumbnail URL</label>
          <input
            id="thumbnail"
            type="text"
            ref={thumbnail}
            placeholder="Enter Thumbnail URL"
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
          <label htmlFor="shortDescription" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Short Description</label>
          <textarea
            id="shortDescription"
            ref={shortDescription}
            placeholder="Enter Short Description"
            required
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "0.9rem",
              outline: "none",
              resize: "vertical",
              minHeight: "60px",
              transition: "border-color 0.3s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#007bff"}
            onBlur={(e) => e.target.style.borderColor = "#ccc"}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="status" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Status</label>
          <select
            id="status"
            ref={status}
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
          >
            <option value="PUBLISH">Publish</option>
            <option value="MEAP">Meap</option>
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="date" style={{ marginBottom: "3px", fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>Published Date</label>
          <input
            id="date"
            type="date"
            ref={date}
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
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "0.9rem",
          fontWeight: "bold",
          transition: "background-color 0.3s",
          marginTop: "5px"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Addbook;