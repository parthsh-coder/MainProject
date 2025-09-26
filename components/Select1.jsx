import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Select1.css";
export default function Select1() {
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <InputLabel id="Employees">Employees</InputLabel>     
        <Select
          labelId="Employees"
          id="Employees"
          value={role}
          label="Employees"
          onChange={handleChange}
          className="SelectBorder"  
        >
          <MenuItem value={0}></MenuItem>  
          <MenuItem value={10}>Hardik Sharma</MenuItem>
          <MenuItem value={20}>Parth Sharma</MenuItem>
          <MenuItem value={30}>Suresh Pal</MenuItem>
          <MenuItem value={40}>Arvind Sharma</MenuItem>
          <MenuItem value={50}>Anil Arora</MenuItem>
          <MenuItem value={60}>Kapil Saneja</MenuItem>
          <MenuItem value={70}>Sakshi</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}