import { useState } from 'react';
import "./Form.css";
import TextField from '@mui/material/TextField';
import RoleSelect from "./Select.jsx";
import Button from '@mui/material/Button';
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import { useNavigate } from 'react-router-dom';
import DashBoard from './DashBoard.jsx';

function Form() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [role, setRole] = useState('');

    let navigate = useNavigate();

    let handleClick = () => {
        navigate("/");
    }


    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (role === '') {
            console.log("Validation failed: Role is required.");
            return;
        }

        if (username.trim() === '') {
            setUsernameError(true);
            console.log("Validation failed: Username is required.");
            return;
        }
        if (role === "admin") {
            return navigate("/dashboard");
        }
        if (role === "hr") {
            return navigate("/dashboard2");
        }
        if (role === "employee") {
            return navigate("/dashboard3");
        }

        setUsernameError(false);
        console.log("Form submitted!");
        setIsSubmitted(true);
        handleClick();
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        if (usernameError) {
            setUsernameError(false);
        }

    };

    return (
        <>
            {isSubmitted ? (
                <div>
                    <Navbar />
                    <Home />
                </div>
            ) : (
                <div className="Box">
                    <h1 id='star' style={{ color: "black", textAlign: "center", fontSize: "40px", fontFamily: "sans-serif" }}>SOCIALIGHT <i class="fa-regular fa-building"></i></h1>
                    <div className="form">
                        <h2 style={{ fontFamily: "serif", fontSize: "35px", marginBottom: "50px" }}>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                id="username"
                                label="Username"
                                variant="outlined"
                                style={{ width: "300px" }}
                                value={username}
                                onChange={handleUsernameChange}
                                error={usernameError}
                                helperText={usernameError ? "Username is required" : ""}
                            />
                            <br></br>
                            <br></br>
                            <RoleSelect role={role} onRoleChange={handleRoleChange} />
                            <br></br>

                            {role === 'admin' && (
                                <h2 className='styles'>Admin Login</h2>

                            )}

                            {role === 'hr' && (
                                <h2 className='styles'>Hr Login</h2>
                            )}

                            {role === 'employee' && (
                                <h2 className='styles'>Employee Login</h2>
                            )}

                            <br></br>
                            <Button
                                variant="contained"
                                type="submit"
                                style={{ marginLeft: "115px" }}
                            >
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Form;