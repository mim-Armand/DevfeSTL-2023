import React from "react";
import {
  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Stack, Typography
} from "@mui/material";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import devFestImg from '../img/devfest_img_01.jpg';
import devFestImgBg from '../img/devfest_img_bg_01.jpg';
import callToSpeak from '../img/callToSpeak.jpg';
import callToAttend from '../img/callToAttend.jpg';
import pckgFree from '../img/pckgFree.jpg';
import pckgPlat from '../img/pckgPlat.jpg';
import pckgGold from '../img/pckgGold.jpg';
import pckgSilv from '../img/pckgSilv.jpg';
import './Landing.css';
import {EmojiEventsTwoTone, MilitaryTechTwoTone} from "@mui/icons-material";


const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#353c43' : '#fff', ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function SponsorPckg(props) {
  const {image, title, text, icon} = props;
  return <Card
    className='spondorCards'
    display="flex"
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={`Sponsor DevFest with ${title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {icon} {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>;
}

const Landing = () => {
  return (<div>
      <br/>
      <br/>
      <br/>
      <Stack spacing={6}>
        <Item>
          <div className='devfestHeaderImg' style={{backgroundImage: `url(${devFestImgBg})`}}>
            <img src={devFestImg} alt=""/>
          </div>
          <h1 className='devfestHeaderImgTxt'>Join us!</h1>
          <Grid className='joinCardsContainer' container>
            <Grid>
              <Card onClick={() => {
                window.open('https://gdg.community.dev/gdg-st-louis/', '_blank', 'noopener,noreferrer');
              }}>
                <CardMedia
                  sx={{height: 140}}
                  image={callToAttend}
                  title="Join as an attendee"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Join as an attendee
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Join us to get to know your local community, network and learn about the latest and greatest
                    technologies directly from your peers.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Join!</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid>
              <Card>
                <CardMedia
                  sx={{height: 140}}
                  image={callToSpeak}
                  title="Join as a speaker"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Join as a speaker!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Join as a speaker, share your expertise with your community and expand your network of the local
                    experts!
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
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sponsor our DevFest!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Help us to build the future, for our community, for St. Louis, for US, and for the world!
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container spacing={2} minHeight={160}>
                <Grid display="flex" className='sponsorCardsContainer'>

                  <SponsorPckg
                    image={pckgPlat}
                    title='Platinum package.'
                    text='Limited only to two sponsors. This is the best package we have!'
                    icon={<EmojiEventsTwoTone className="pckgsIcon" fontSize="large" style={{color: 'cornflowerblue'}}/>}
                  />
                  <SponsorPckg
                    image={pckgGold}
                    title='Gold package.'
                    text='Limited only to five sponsors. This is the 2nd best package we have!'
                    icon={<EmojiEventsTwoTone className='pckgsIcon' fontSize="large" style={{color: 'gold'}}/>}
                  />
                  <SponsorPckg
                    image={pckgSilv}
                    title='Silver package.'
                    text='This is our budget friendly package for those who just want to help our community.'
                    icon={<EmojiEventsTwoTone className='pckgsIcon' fontSize="large" style={{color: 'silver'}}/>}
                  />
                  <SponsorPckg
                    image={pckgFree}
                    title='Start-ups package.'
                    text="Be featured for free, you can still help in anyway you'd like!"
                    icon={<MilitaryTechTwoTone className='pckgsIcon' fontSize="large" style={{color: 'aqua'}}/>}
                  />


                </Grid>
              </Grid>
            </CardActions>
          </Card>

        </Item>

      </Stack>
    </div>);
};

export default Landing;
