import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import './DevFeSTLPeriodic.css';




const DevFeSTLPeriodic = ({ number = "--", text = "STL", title = 'DevFext-23' }) => {
  const firstLetter = text.charAt(0);
  const remainingText = text.slice(1);
  return (
    <div>
      <Box
        className='periodicElementBox'
      >
        <Stack title={title}>
          <small>{number}</small>
          <Typography variant='h5' >
            {firstLetter}<span>{remainingText}</span>
          </Typography>
        </Stack>

      </Box>
    </div>
  );
};

export default DevFeSTLPeriodic;
