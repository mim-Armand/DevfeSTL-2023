import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import devFestImg from '../img/devfest_img_01.jpg';
import devFestImgBg from '../img/devfest_img_bg_01.jpg';
import './Landing.css';


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
          <div className='devfestHeaderImg' style={{ backgroundImage: `url(${devFestImgBg})` }}>
            <img src={devFestImg} alt=""/>
          </div>
          <h1 className='devfestHeaderImgTxt'>Join us!</h1>
          <Grid className='joinCardsContainer' container spacing={2}>
            <Grid xs={6}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={devFestImg}
                  title="Join as an attendee"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Join as an attendee
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Join us to get to know your local community, network and learn about the latest and greatest technologies directly from your peers.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Join!</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={devFestImg}
                  title="Join as a speaker"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Join as a speaker!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Join as a speaker, share your expertise with your community and expand your network of the local experts!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Join!</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

          </Grid>
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
