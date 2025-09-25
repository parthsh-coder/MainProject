import "./DashBoard.css";
import Card from "./Card.jsx";
function DashBoard() {
    return (
        <div className="dashboard">
            <h1 style={{ fontFamily: "sans-serif", fontSize: "40px", marginLeft: "40px" }}>Admin Dashboard</h1>
            <div className="box1">
                Dashboard
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="cards">
                <Card text="USERS" image="https://cdn-icons-png.flaticon.com/512/709/709699.png" />
                <Card text="DEPARTMENT" image="https://cdn-icons-png.flaticon.com/256/25/25694.png" />
                <Card text="NOTICE" image="https://cdn-icons-png.flaticon.com/512/666/666162.png" />
                <Card text="LEAVE" image="https://www.svgrepo.com/show/120898/exit.svg" />
            </div>
            <div className="dashImages">
                <img style={{ marginTop: "15px" }} src="https://www.edrawsoft.com/images/dashboard/pie-chart-hr-dashboard.png"></img>
                <img style={{marginLeft:"50px"}} src="https://www.edrawsoft.com/images/dashboard/hr-dashboard-bar-chart.png"></img>
                <img style={{height: "340px"}} src="https://www.slidegeeks.com/media/catalog/product/cache/560x315/E/m/Employee_Performance_Levels_Dashboard_Ppt_PowerPoint_Presentation_Slides_Design_Templates_PDF_Slide_1.jpg"></img>
            </div>
            <div className="dashFooter">
                <h2>Company Status & Employee details</h2>
                <button style={{ width: "100px", border: "none", height: "30px", borderRadius: "15px", backgroundColor: "lightblue", textAlign: "center", fontWeight: "bold", border: "0.5px solid grey",cursor:"pointer" }}>Details</button>
            </div>
        </div>
    );

}
export default DashBoard;