import NavBar from './components/Nav/NavBar.jsx';
import DashboardWishList from './components/Page/DashboardWishList.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateListItem from './components/Page/CreateListItems.jsx';
import ViewListItems from './components/Page/ViewListItems.jsx'
import EditListItems from './components/Page/EditListItems.jsx';


function App() {

  return (
    <>
      <NavBar />
      <Routes >
        <Route path='/' element={<DashboardWishList />} />
        <Route path='/items/create' element={<CreateListItem />} />
        <Route path='/items/view/:id' element={<ViewListItems />} />
        <Route path='/items/edit/:id' element={<EditListItems />} />
      </Routes>

    </>
  )
}

{/* <button className='navbar-btn' onClick={handleOpenModal}>Add</button>
                    {isModalOpen && <Modal onClose={handleCloseModal} />} */}


export default App
