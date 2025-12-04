import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './ViewListItems.css';
import useApi from '../UseApi';

function ViewListItems() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { items, isPending, error } = useApi(`http://localhost:3000/items/${id}`);

    const EditListItems = (id) => navigate(`/items/edit/${id}`);
    const DeleteListItems = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            fetch(`http://localhost:3000/items/${id}`, {
                method: 'DELETE',
            }).then(() => {
                navigate("/");
                alert("Delete successfully!")
                window.location.reload();
            }).catch(error => {
                alert(`Problem ${error.message}`);
            });
        }
    };

    return (
        <div className='details-section'>
            <div className='container'>

                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {items && (

                    <div className='details-item'>
                        <div className='details-info'>
                            <h2 className='details-title'>{items.title}</h2>
                            <img className='details-image' src={items.image} />
                            <div className='details-text'>
                                <p><strong>Price: </strong>${items.price}</p>
                                <p><strong>Description: </strong>{items.description}</p>
                            </div>
                        </div>
                        <div className='details-button mx-5'>
                            <button className='btn details-edit' title='Edit' onClick={() => EditListItems(items.id)}>Edit</button>
                            <button className='btn fw-bold details-delete' title='Delete' onClick={() => DeleteListItems(items.id)}>Delete</button>
                            <Link to='/' className='btn details-close'>Close</Link>
                        </div>

                    </div>
                )}

            </div>
        </div>
    )
}

export default ViewListItems