import "./Navbar.css"
import { NavLink } from "react-router-dom";
import Select1 from "./Select1.jsx";
function Navbar() {
    
    return (
        <div className="Navbar">
            <h1 style={{ color: "white", textAlign: "center" }}>ADMIN</h1>
            <ul>
                <br></br><br></br>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} id="items">Home</NavLink>
                <br></br><br></br>
                <NavLink to="/form" className={({ isActive }) => isActive ? "active-link" : ""} id="items">Login</NavLink>
                <br></br><br></br>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : ""} id="items">Dashboard</NavLink>
                <br></br><br></br>
                <Select1 />


            </ul>
            <div className="second">
                <h4 style={{ color: "white" }}>More...</h4>
                <br></br>
                <div id="logo"><i class="fa-jelly-fill fa-regular fa-plus"></i></div>
                <br></br>
                <div id="logo">A</div>
            </div>

        </div>
    );

}
export default Navbar;