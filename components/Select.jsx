import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RoleSelect({ role, onRoleChange }) { 
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
          onChange={onRoleChange} 
          style={{ width: "300px" }}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="hr">HR</MenuItem>
          <MenuItem value="employee">Employee</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}