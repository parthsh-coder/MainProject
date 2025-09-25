import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box>
      <FormControl>
        <InputLabel id="Role">Choose Your Role</InputLabel>
        <label htmlFor='role'></label>
        <Select
          labelId="Role"
          id="Role"
          value={role}
          label="Choose Your Role"
          onChange={handleChange}
          style={{width:"300px"}}
        >
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Hr</MenuItem>
          <MenuItem value={30}>Empolyee</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}