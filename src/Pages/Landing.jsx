import React from "react";
import {
  Badge, BottomNavigation, BottomNavigationAction,
  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Stack, Typography
} from "@mui/material";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import devFestImg from '../img/devfest_img_01.jpg';
import devFestImgBg from '../img/devfest_img_bg_01.jpg';
import atendeeBadge from '../img/DF23-DevBadge-Participant.png'
import speakerBadge from '../img/DF23-DevBadge-Speaker.png'
import callToSpeak from '../img/callToSpeak.jpg';
import callToAttend from '../img/callToAttend.jpg';
import pckgFree from '../img/pckgFree.jpg';
import pckgPlat from '../img/pckgPlat.jpg';
import pckgGold from '../img/pckgGold.jpg';
import pckgSilv from '../img/pckgSilv.jpg';
import './Landing.css';
import {Diversity3, EmojiEventsTwoTone, LinkedIn, LocalActivity, MilitaryTechTwoTone} from "@mui/icons-material";


const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#353c43' : '#fff', ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function SponsorPckg(props) {
  const {image, title, text, icon, limit} = props;
  return <Card
    className='spondorCards'
    display="flex"
    variant='outlined'
    onClick={()=>{
      openUrl('https://forms.gle/VcH1gSdFk9caaU3c9');

    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="99"
        image={image}
        alt={`Sponsor DevFest with ${title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Badge
            className="pckgsIcon"
            badgeContent={limit}
            title='limit'
            color='secondary'
          >{icon}</Badge> {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>;
}

const openUserDevprofile = () => {
  openUrl('https://developers.google.com/profile/u/')
}
const openUrl = (url='https://gdg.community.dev/gdg-st-louis/', target='_blank') => {
  window.open(url, target, 'noopener,noreferrer');
}

const Landing = () => {
  let videoId = 'tHGA_DNDHUE';
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
          <h2 className='devfestHeaderImgTxt2'>Get and a badge to share on your resume!</h2>
          <h2 className='devfestHeaderImgDate'>12 . 09 . 2023</h2>
          <Grid
                container justifyContent="space-evenly"
                direction="row"
                alignItems="stretch"
          >
            <Grid>
              <Card onClick={() => {
                openUrl('https://gdg.community.dev/gdg-st-louis/');
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


                      <img src={atendeeBadge} width='150px'
                           onClick={openUserDevprofile}
                      />


                      <Typography variant="body2" color="text.secondary" align='left'>
                        <ul>
                          <li>Join us to get to know your local community, network and learn about the latest and greatest
                            technologies directly from your peers.</li>
                          <li>Get an <Link onClick={openUserDevprofile}>official paticipation badge</Link> from Google and add it to your collection.</li>
                        </ul>
                      </Typography>


                </CardContent>
                <CardActions>
                  <Button size="small">Join!</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid>
              <Card onClick={()=>{
                openUrl('https://gdg.community.dev/gdg-st-louis/')
              }}>
                <CardMedia
                  sx={{height: 140}}
                  image={callToSpeak}
                  title="Join as a speaker"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Join as a speaker!
                  </Typography>
                  <img src={speakerBadge} width='150px'
                       onClick={openUserDevprofile}
                  />
                  <Typography variant="body2" color="text.secondary"  align='left'>
                    <ul>
                      <li>Join as a speaker, share your expertise with your community and expand your network of the local
                        experts!</li>
                      <li>Get an <Link onClick={openUserDevprofile}>official Speaker badge</Link> from Google and add it to your resume.</li>
                    </ul>
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
                    limit={3}
                    image={pckgPlat}
                    title='Platinum package.'
                    text='The premium level of sponsorship with maximum exposure and benefits tailored for industry leaders.'
                    icon={<EmojiEventsTwoTone fontSize="large" style={{color: 'cornflowerblue'}}/>}
                  />
                  <SponsorPckg
                    limit={5}
                    image={pckgGold}
                    title='Gold package.'
                    text='Limited only to five sponsors. This is the 2nd best package we have!'
                    icon={<EmojiEventsTwoTone className='pckgsIcon' fontSize="large" style={{color: 'gold'}}/>}
                  />
                  <SponsorPckg
                    limit={12}
                    image={pckgSilv}
                    title='Silver package.'
                    text='This is our budget friendly package for those who just want to help our community.'
                    icon={<EmojiEventsTwoTone className='pckgsIcon' fontSize="large" style={{color: 'silver'}}/>}
                  />
                  <SponsorPckg
                    limit={15}
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

        <Item>
          <iframe
            // id="ytplayer"
            // className=''
            // type="text/html"
            width="100%"
            height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://devfestl.com&controls=0&rel=1`}
            frameBorder="0"
          ></iframe>
          Event will also be livestreamed
        </Item>

        <Item>
          <BottomNavigation>
            <BottomNavigationAction
            label='LinkedIn'
            icon={<LinkedIn />}
            onClick={ ()=>openUrl('https://www.linkedin.com/groups/14350032/')}
            />
            <BottomNavigationAction
              label='Join us'
              icon={<Diversity3 />}
              onClick={ ()=>openUrl('https://gdg.community.dev/gdg-st-louis/')}
            />
            <BottomNavigationAction
              label='Event Page'
              icon={<LocalActivity />}
              onClick={ ()=>openUrl('https://gdg.community.dev/events/details/google-gdg-st-louis-presents-devfest-2023-st-louis/')}
            />
          </BottomNavigation>
        </Item>

      </Stack>
    </div>);
};

export default Landing;
