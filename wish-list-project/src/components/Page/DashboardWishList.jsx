import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useApi from '../UseApi';
import ListItem from './ListItem';
import SortBy from '../filters/SortBy';

function DashboardWishList() {
    const navigate = useNavigate();
    const [sort, setSort] = useState('');

    const sortedUrl =
        sort === 'priceAsc' ? 'http://localhost:3000/items?_sort=price&_order=asc'
            : sort === 'priceDesc' ? 'http://localhost:3000/items?_sort=-price'
                : sort === 'dateAsc' ? 'http://localhost:3000/items?_sort=date'
                    : sort === 'dateDesc' ? 'http://localhost:3000/items?_sort=-date'
                        : 'http://localhost:3000/items';

    const { items, isPending, error } = useApi(sortedUrl);


    const ViewListItems = (id) => navigate(`/items/view/${id}`);
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
                alert(`Problem ${error}`)
            });
        }
    };

    return (
        <>

            <div className='container mt-5'>
                <div className='row'>
                    <SortBy sort={sort} setSort={setSort} />
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {items && <ListItem items={items} handleDelete={DeleteListItems} handleEdit={EditListItems} handleView={ViewListItems} />}
                </div>
            </div>

        </>
    )
}

export default DashboardWishList;