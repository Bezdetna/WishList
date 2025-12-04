import "./NavBar.css";
import logo from "../img/present.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div className="nav w-100 bg-light shadow-sm">
                <nav className="navbar container navbar-expand-lg py-3 px-5 justify-content-between align-items-center w-100 nav-wrapper">
                    <img src={logo} className="logo" />
                    <Link to="/" className="navbar-brand mx-auto order-0 d-md-flex d-sm-none">
                        <h2 className="m-0 navbar-title" style={{ letterSpacing: "2px" }}>My Wish List</h2>
                    </Link>
                    <Link to="/items/create" className="link">
                        <div className="navbar-btn py-0 d-flex align-items-center">
                            <button className="btn">Add </button>
                            <i className="bi bi-plus-circle"></i>
                        </div>
                    </Link>
                </nav>
            </div>

        </>
    )
}