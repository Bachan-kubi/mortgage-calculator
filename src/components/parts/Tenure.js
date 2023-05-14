import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Tenure ({data, setData}) {
  
  const handleChange = (e) => {
    setData({
        ...data, 
        loanTerm: e.target.value});
        
  };
  console.log(data);

  return (
    
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenures</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.loanTerm}
          defaultValue={5}
          label="Tenures"
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
  );
}