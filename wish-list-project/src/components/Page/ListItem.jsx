export default function ListItem({ items, handleDelete, handleEdit, handleView }) {

    return (
        <div className='container list-items' >
            {items.map((item) => (
                <div key={(item.id)} className='list-item mb-4 border p-3 text-center d-flex flex-column align-items-center justify-content-evenly'>
                    <div >
                        <h3 className='list-item-title fw-bold '>{item.title}</h3>
                        <small className='list-item-price'>${item.price}</small>
                    </div>

                    <img src={item.image} alt={item.title} className='list-item-image w-50' />
                    <p className='list-item-description'>{item.description}</p>
                    <div className='list-icons d-flex gap-3 alight-center'>
                        <button className='btn list-icon' title='Edit' onClick={() => handleEdit(item.id)}>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                        <button className='btn list-icon' title='Delete' onClick={() => handleDelete(item.id)}>
                            <i className='bi bi-trash'></i>
                        </button>
                        <button className='btn list-icon' title='Details' onClick={() => handleView(item.id)}>
                            <i className="bi bi-eye"></i>
                        </button>
                    </div>
                </div>
            ))
            }
        </div>
    )
}