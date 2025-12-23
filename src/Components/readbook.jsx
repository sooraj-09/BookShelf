import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Readbook = () => {
    let para = useParams();
    let [wishbook, setWishbook] = useState({});
    let loc = useLocation();
    let move = useNavigate();
    let currentPath = loc.pathname.startsWith("/Admin");

    useEffect(() => {
        fetch(`http://localhost:4000/books/${para.id}`)
            .then(res => res.json())
            .then(data => setWishbook(data))
            .catch(err => console.error("Error:", err));
    }, [para.id]);

    function f1() {
        if (currentPath) {
            move("/Admin/books");
        } else {
            move("/User/books");
        }
    }

    function addtocart() {
        // Create the object using the state 'wishbook' directly
        let booktocart = {
            cartid: wishbook.id,
            cartimage: wishbook.thumbnailUrl,
            carttitle: wishbook.title
        };

        fetch("http://localhost:4000/cart/", {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // Crucial: tell the server you're sending JSON
            body: JSON.stringify(booktocart)
        })
        .then(() => {
            alert("Book Added");
            if (currentPath) {
                move("/Admin/cart");
            } else {
                move("/User/cart");
            }
        })
        .catch(err => console.error("Error adding to cart:", err));
    }

    return (
        <div style={{ padding: '20px' }}>
            <center>
                <h1>{wishbook.title}</h1>
                <img src={wishbook.thumbnailUrl} alt={wishbook.title} width="200" style={{ borderRadius: '8px', marginBottom: '15px' }} />
                <p style={{ maxWidth: '600px' }}>{wishbook.shortDescription || wishbook.description}</p>
                
                <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button onClick={f1} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                        Back to Books
                    </button>
                    <button onClick={addtocart} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        ADD TO CART
                    </button>
                </div>
            </center>
        </div>
    );
};

export default Readbook;