import "./DashBoard.css";
import Card from "./Card.jsx";
function DashBoard3() {
    return (
        <div className="dashboard">
            <h1 style={{ fontFamily: "sans-serif", fontSize: "40px", marginLeft: "40px" }}>Employee Dashboard</h1>
            <div className="box1">
                Dashboard
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div style={{display:"flex", justifyContent:"center"}} className="cards">
                <Card text="LEAVE" image="https://www.svgrepo.com/show/120898/exit.svg" />
            </div>
            <div className="dashImages">
                <img style={{ marginTop: "15px", height:"330px" }} src="https://info.ehl.edu/hubfs/employee-performance-improvement.jpeg"></img>
                <img style={{height:"330px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVPYNyVC7lpyb_Vm0nyD7PPp5Uc_nrC0G7A&s"></img>
                <img style={{height:"320px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXcz1TQ4f1sesB9t8ZDxg5LIDmg-wlQ4lpBw&s"></img>
            </div>
            <div className="dashFooter">
                <h2>Projects</h2>
                <h2>Salary</h2>
                <button style={{ width: "100px", height: "30px", borderRadius: "15px", backgroundColor: "lightblue", textAlign: "center", fontWeight: "bold", border: "0.5px solid grey", cursor: "pointer" }}>Details</button>
            </div>
        </div>
    );

}
export default DashBoard3;