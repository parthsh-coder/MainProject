import "./Navbar.css"
import { NavLink } from "react-router-dom";
import Select1 from "./Select1.jsx";
import { useNavigate } from "react-router-dom";
function SideBar1() {
    let navigate = useNavigate();

    let handleClick = () => {
        navigate("/form");
    }
    let handleClic2 = () => {
        navigate("/");
    }
    return (
        <div className="Navbar">
            <h1 style={{ color: "white", textAlign: "center", fontSize: "23px", fontFamily: "sans-serif", marginTop: "24px" }}>SOCIALIGHT <i class="fa-regular fa-building"></i></h1>
            <ul>
                <br></br><br></br>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} id="items">Home</NavLink>
                <br></br><br></br>
                <NavLink to="/dashboard2" className={({ isActive }) => isActive ? "active-link" : ""} id="items">Dashboard</NavLink>
                <br></br><br></br>
                <Select1/>
            </ul>
            <br></br><br></br>
            <div className="btn">
                <button onClick={handleClick}>Logout</button>
            </div>
            <div className="second">
                <h4 style={{ color: "white" }}>More...</h4>
                <br></br>
                <div id="logo"><i class="fa-jelly-fill fa-regular fa-plus"></i></div>
                <br></br>
                <div id="logo1">
                    <img onClick={handleClic2} src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"></img>
                </div>
            </div>

        </div>
    );

}
export default SideBar1;