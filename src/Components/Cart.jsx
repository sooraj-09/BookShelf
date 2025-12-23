import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Cart() {
    const { id } = useParams();
    let navigate = useNavigate();
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = () => {
        fetch("http://localhost:4000/cart")
            .then((res) => res.json())
            .then((resData) => {
                setData(resData);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setLoading(false);
            });
    };

    function RemoveFromCart(id, name) {
        let y = window.confirm(`Do you want to delete ${name}?`);
        if (y) {
            fetch(`http://localhost:4000/cart/${id}`, { method: "DELETE" })
                .then(() => {
                    alert("Book got deleted");
                    setData(data.filter(item => item.id !== id));
                });
        } else {
            alert("Not Deleted");
        }
    }

    if (loading) {
        return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Loading.......</h1>;
    }

    return (
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ textAlign: 'center', color: '#333', flex: 1 }}>Shopping Cart</h2>
                <button onClick={() => navigate('/User/books')} style={{padding: '10px 20px', backgroundColor: '#28a745',
                                                                         color: 'white',  border: 'none',  borderRadius: '5px',
                                                                         cursor: 'pointer',fontWeight: 'bold',transition: 'background-color 0.3s'
                    }} >Add Book</button>
            </div>
            
            {data.length > 0 ? (
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginTop: '20px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff'
                }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                            <th style={tableHeaderStyle}>Image</th>
                            <th style={tableHeaderStyle}>Book Title</th>
                            <th style={tableHeaderStyle}>Book ID</th>
                            <th style={tableHeaderStyle}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((ele) => (
                            <tr key={ele.id} style={{ borderBottom: '1px solid #eee', textAlign: 'center' }}>
                                <td style={tableDataStyle}>
                                    <img src={ele.cartimage} alt={ele.carttitle} style={{ width: "60px", borderRadius: "4px" }} /> </td>
                                <td style={{ ...tableDataStyle, fontWeight: 'bold' }}>{ele.carttitle}</td>
                                <td style={tableDataStyle}>{ele.cartid}</td>
                                <td style={tableDataStyle}>
                                <button onClick={() => RemoveFromCart(ele.id, ele.carttitle)} style={deleteBtnStyle}> Remove</button>
                               
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>Your cart is empty</h1>
                    <button onClick={() => navigate('/User/books')} style={{ padding: '10px 20px', cursor: 'pointer' }}>Go Shopping</button>
                </div>
            )}
        </div>
    );
}

const tableHeaderStyle = {
    padding: '15px',
    textAlign: 'center',
    color: '#495057',
    fontWeight: '600'
};

const tableDataStyle = {
    padding: '12px',
    verticalAlign: 'middle'
};

const deleteBtnStyle = {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s'
};