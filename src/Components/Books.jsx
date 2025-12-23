import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Book = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [kitab, setKitab] = useState([]);
  const isAdmin = location.pathname.startsWith("/Admin");

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then(res => res.json())
      .then(data => setKitab(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  function f1(id) {
    if (isAdmin) {
      navigate(`/Admin/readbook/${id}`);
    } else {
      navigate(`/User/readbook/${id}`);
    }
  }

  function deleteBook(id, title) {
    let confirmDelete = window.confirm(`Do you want to delete "${title}"?`);
    if (confirmDelete) {
      fetch(`http://localhost:4000/books/${id}`, { method: "DELETE" })
        .then(() => {
          alert("Book deleted successfully");
          setKitab(kitab.filter(book => book.id !== id));
        })
        .catch(err => console.error("Delete error:", err));
    }
  }

  // Partitioned Styles Object
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '2.5rem',
      color: '#222',
      fontWeight: 'bold',
      textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
    },
    bookList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    bookCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    },
    bookCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
    },
    bookImage: {
      borderRadius: '12px',
      marginBottom: '15px',
      boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    bookImageHover: {
      transform: 'scale(1.05)'
    },
    bookTitle: {
      fontSize: '1.2rem',
      marginBottom: '10px',
      color: '#222',
      fontWeight: 'bold',
      lineHeight: '1.3'
    },
    bookDetail: {
      margin: '5px 0',
      color: '#555',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    bookDescription: {
      marginTop: '10px',
      marginBottom: '15px',
      color: '#666',
      fontSize: '0.85rem',
      maxHeight: '80px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: '1.4'
    },
    buttonContainer: {
      display: 'flex',
      gap: '10px',
      marginTop: 'auto',
      width: '100%',
      paddingTop: '15px'
    },
    readButton: {
      flex: 1,
      padding: '12px 10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '0.9rem',
      boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
      transition: 'all 0.3s ease'
    },
    readButtonHover: {
      backgroundColor: '#0056b3',
      boxShadow: '0 6px 18px rgba(0,123,255,0.4)'
    },
    deleteButton: {
      flex: 1,
      padding: '12px 10px',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '0.9rem',
      boxShadow: '0 4px 12px rgba(220,53,69,0.3)',
      transition: 'all 0.3s ease'
    },
    deleteButtonHover: {
      backgroundColor: '#c82333',
      boxShadow: '0 6px 18px rgba(220,53,69,0.4)'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Books Collection</h1>
      <div className="book-list" style={styles.bookList}>
        {kitab.map((ele) => (
          <div
            key={ele.id}
            className="book-card"
            style={styles.bookCard}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.bookCardHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.bookCard)}
          >
            <img
              src={ele.thumbnailUrl}
              alt={ele.title}
              width="160"
              height="200"
              style={styles.bookImage}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.bookImageHover)}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.bookImage)}
            />
            <h3 style={styles.bookTitle}>{ele.title}</h3>
            <p style={styles.bookDetail}>
              <strong>Authors:</strong> {ele.authors?.toString() || 'N/A'}
            </p>
            <p style={styles.bookDetail}>
              <strong>Categories:</strong> {ele.categories?.toString() || 'N/A'}
            </p>
            <p style={styles.bookDetail}>
              <strong>Page Count:</strong> {ele.pageCount || 'N/A'}
            </p>
            <p style={styles.bookDescription}>
              {ele.shortDescription || 'No description available.'}
            </p>
            <div style={styles.buttonContainer}>
              <button
                onClick={() => f1(ele.id)}
                style={styles.readButton}
                onMouseEnter={(e) => Object.assign(e.target.style, styles.readButtonHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.readButton)}
              >READ BOOK
              </button>
              {isAdmin && (
                <button onClick={() => deleteBook(ele.id, ele.title)}
                  style={styles.deleteButton}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.deleteButtonHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, styles.deleteButton)}
                >
                  DELETE BOOK
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
