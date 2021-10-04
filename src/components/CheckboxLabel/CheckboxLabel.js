import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckboxLabel = ({isDone}) => {
  return (
    <div>
      <Checkbox {...label}
        checked={isDone}
      />
    </div>
  );
}

export default CheckboxLabel;
