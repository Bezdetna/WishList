import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditListItems() {

    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    function isValidUrl(url) {
        return /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i.test(url);
    };

    useEffect(() => {
        fetch(`http://localhost:3000/items/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTitle(data.title)
                setImage(data.image)
                setPrice(data.price)
                setDescription(data.description)
            })
            .catch((error) => alert(`You have problem with ${error}`));

    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidUrl(image)) {
            alert('Please enter a valid URL.');
            return;
        };
        const editItemsList = { title, description, price, image }


        fetch(`http://localhost:3000/items/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editItemsList)
        })
            .then((res) => {
                navigate("/")
                alert(`You succses edit item!`);
            })
            .catch(error => {
                alert(`You have problem with ${error}`);
            });

    };
    return (
        <>
            <div className='container my-5'>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div className="m-3">
                        <label className="form-lable" htmlFor="title">Title:</label>
                        <input className="form-control" type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>

                    <div className="m-3">
                        <label className="form-lable" htmlFor="description">Description:</label>
                        <textarea className="form-control" type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="m-3">
                        <label className="form-lable" htmlFor="price">Price:</label>
                        <input className="form-control" type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div className="m-3">
                        <label className="form-lable" htmlFor="image">Image URL:</label>
                        <input className="form-control" type="url" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://example.com/image.jpg" required />
                        {image && !isValidUrl(image) && (
                            <span style={{ color: 'red' }}>Please enter a valid URL with .png, .jpg, .jpeg, .gif.</span>
                        )}
                    </div>
                    <div className="d-flex justify-content-sm-evenly">
                        <button className="btn btn-dark" type='submit'>Update</button>
                        <Link className="btn btn-danger" to="/">Close</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditListItems;