import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateListItem() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [image, setImage] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();


    function isValidUrl(url) {
        return /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i.test(url);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setIsPending(true);

        if (!isValidUrl(image)) {
            alert('Please enter a valid URL.');
            return;
        };

        const newWish = {
            title,
            description,
            price,
            image,
            date: new Date()
        };

        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWish)
        })
            .then((res) => {
                navigate('/')
            })
            .catch(error => {
                console.error('Error adding new wish:', error);
            });


    }

    return (
        <div className='container my-5'>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <div className="m-3">
                    <label className="form-lable" htmlFor="title">Title:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required />
                </div>

                <div className="m-3">
                    <label className="form-lable" htmlFor="description">Description:</label>
                    <textarea className="form-control" type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="m-3">
                    <label className="form-lable" htmlFor="price" step="0.01" min="0">Price:</label>
                    <input className="form-control" type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div className="m-3">
                    <label className="form-lable" htmlFor="image">Image URL:</label>
                    <input className="form-control" type="url" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://example.com/image.jpg" required />
                    {image && !isValidUrl(image) && (
                        <span style={{ color: 'red' }}>Please enter a valid URL with .png, .jpg, .jpeg, .gif.</span>
                    )}
                </div>


                {!isPending && <button className="btn btn-dark w-100" type='submit'>Add Wish</button>}
                {isPending && <button className="btn btn-dark w-100" type='submit'>Adding Wish...</button>}
                <Link to="/" className="btn btn-danger w-100">Close</Link>
            </form>
        </div>
    )

};