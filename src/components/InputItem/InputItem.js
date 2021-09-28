import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (
  <Box
    sx={{
      width: 240,
    }}
  >
    <TextField fullWidth label="Добавить задачу" id="fullWidth" />
  </Box>);

export default InputItem;
