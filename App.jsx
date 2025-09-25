import Form from "./components/Form.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import DashBoard from "./components/DashBoard.jsx";
import "./App.css"
const router = createBrowserRouter([
  {
    path:"/",
    element:
    <div className="main">
      <Navbar/>
      <Home/>
    </div>

  },
  {
    path:"/form",
    element:
    <div className="main">
      <Navbar/>
      <Form/>
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
]);
function App(){
return(
  <div>
    <RouterProvider router={router}/>
  </div>
);

}
export default App