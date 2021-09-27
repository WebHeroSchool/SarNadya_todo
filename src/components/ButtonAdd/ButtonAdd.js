import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const ButtonAdd = () => {

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default ButtonAdd;
