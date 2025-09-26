import "./DashBoard.css";
import Card from "./Card.jsx";
function DashBoard2() {
    return (
        <div className="dashboard">
            <h1 style={{ fontFamily: "sans-serif", fontSize: "40px", marginLeft: "40px" }}>Hr Dashboard</h1>
            <div className="box1">
                Dashboard
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div style={{display:"flex", justifyContent:"center"}} className="cards">
                <Card text="USERS" image="https://cdn-icons-png.flaticon.com/512/709/709699.png" />
                <Card text="LEAVE" image="https://www.svgrepo.com/show/120898/exit.svg" />
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}} className="dashImages">
                <img style={{ marginTop: "15px",height:"320px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVC8mTCM9zPEsZAoa5YXWWjiSzb7IcNDFRqQ&s"></img>
                
            </div>
            <div className="dashFooter">
                <h2>Company Status & Employee details</h2>
                <button style={{ width: "100px", height: "30px", borderRadius: "15px", backgroundColor: "lightblue", textAlign: "center", fontWeight: "bold", border: "0.5px solid grey", cursor: "pointer" }}>Details</button>
            </div>
        </div>
    );

}
export default DashBoard2;