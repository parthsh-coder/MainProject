import Form from "./components/Form.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import DashBoard from "./components/DashBoard.jsx";
import "./App.css"
import DashBoard2 from "./components/Dashboard2.jsx";
import SideBar1 from "./components/SideBar1.jsx";
import SideBar2 from "./components/SideBar2.jsx";
import DashBoard3 from "./components/Dashboard3.jsx";
const router = createBrowserRouter([
  {
    path:"/form",
    element:
    <div className="main">
      <Form/>
    </div>
  },
  {
    path:"/",
    element:
    <div className="main">
      <Navbar/>
      <Home/>
    </div>

  },
  {
    path:"/dashboard",
    element:
    <div className="main">
      <Navbar/>
      <DashBoard/>
    </div>
  }
  ,
  {
    path:"/dashboard2",
    element:
    <div className="main">
      <SideBar1/>
      <DashBoard2/>
    </div>
  },
    {
    path:"/dashboard3",
    element:
    <div className="main">
      <SideBar2/>
      <DashBoard3/>
    </div>
  }
]);
function App(){
return(
  <div>
    <RouterProvider router={router}/>
  </div>
);

}
export default App