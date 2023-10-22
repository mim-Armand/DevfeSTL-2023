import React from "react";
import {Stack} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#353c43' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Landing = () => {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <Stack spacing={6}>
        <Item>
          <h1>Join us!</h1>
          <ul>
            <li>As an atendee</li>
            <li>As a speaker</li>
          </ul>
        </Item>
        <Item>
          <h1>Sponsor us!</h1>
          <ul>
            <li>Platinum package ( 1 available )</li>
            <li>Gold package ( 3 available )</li>
            <li>Silver package ( 30 available )</li>
            <li>Featured Start-ups ( for free! )</li>
          </ul>
        </Item>
        <Item>
          <h1>Call for Speakers:</h1>
          Share your experties with your comunity!
        </Item>
      </Stack>
    </div>
  );
};

export default Landing;
