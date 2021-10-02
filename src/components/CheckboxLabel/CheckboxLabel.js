import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckboxLabel = ({value, isDone, onClickDone}) => {
  return (
    <div>
      <Checkbox {...label}
        checked={isDone}
        onClick={() => onClickDone(isDone)}
      />
    </div>
  );
}

export default CheckboxLabel;
