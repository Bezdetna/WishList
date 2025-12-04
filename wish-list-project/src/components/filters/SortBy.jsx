function SortBy({ sort, setSort }) {
    return (
        <div className='container mb-5'>
            <select
                className='form-select mb-3'
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="">Default</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="dateAsc">Date: Older</option>
                <option value="dateDesc">Date: Newest</option>
            </select>
        </div>
    );
}

export default SortBy;
