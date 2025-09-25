import "./SideBar.css";
import { NavLink } from "react-router-dom";
function SideBar (){

    return(
        <div className="SideBar">
            <h1 style={{color:"white",textAlign:"center"}}>HOME</h1>
                        <ul>
                            <br></br><br></br>
                            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} id="items">Home</NavLink>
                            <br></br><br></br>
                            <NavLink to="/form" className={({ isActive }) => isActive ? "active-link" : ""} id="items">Login</NavLink>
                            <br></br><br></br>
                         
            
            
                        </ul>
                        <div className="second">
                            <h4 style={{ color: "white" }}>More...</h4>
                            <br></br>
                            <div id="logo"><i class="fa-jelly-fill fa-regular fa-plus"></i></div>
                            <br></br>
                            <div id="logo1">
                                <img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"></img>
                            </div>
                        </div>
        </div>
    );
}
export default SideBar