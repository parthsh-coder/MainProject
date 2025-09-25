import "./Form.css";
import TextField from '@mui/material/TextField';
import Select from "./Select.jsx";
import Button from '@mui/material/Button';
function Form() {

    return (
        <div className="Box">
            <div className="form">
                <h2 style={{ fontFamily:"serif",fontSize:"35px" ,marginBottom:"50px"}}>Login</h2>
                <form>
                    <TextField id="username" label="Username" variant="outlined" style={{ width: "300px" }} />
                    <br></br>
                    <br></br>
                    <Select />
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button variant="contained" style={{marginLeft:"100px"}}>Login</Button>

                </form>
            </div>
        </div>
    );
}
export default Form;