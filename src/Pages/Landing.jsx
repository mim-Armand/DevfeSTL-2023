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
import {
  Code,
  Diversity3,
  EmojiEventsTwoTone,
  LinkedIn,
  LocalActivity,
  MilitaryTechTwoTone,
  LunchDining, FreeBreakfast, FavoriteBorder
} from "@mui/icons-material";
import MapContainer from "../components/MapContainer";
import {
  Timeline,
  TimelineConnector, TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from "@mui/lab";


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

function EventItwm( props ) {
  const { time, title } = props;
  const color = props.color || 'primary';
  const icon = props.icon || null
  const outlined = props.outlined || 'outlined';
  const subtitle = props.sub || null;
  return <TimelineItem>
    <TimelineOppositeContent color="textSecondary">

        {time}

    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot variant={outlined} color={color}>

          {icon}

      </TimelineDot>
      <TimelineConnector/>
    </TimelineSeparator>
    <TimelineContent>
      <Typography  component="span">
        {title}
      </Typography>
      {subtitle}
    </TimelineContent>
  </TimelineItem>;
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
        <h2 className='devfestHeaderImgTxt2'>Get a badge to share on your resume!</h2>
        <h2 className='devfestHeaderImgDate'>12 . 09 . 2023</h2>

        <Item>
          <Paper id='agenda-paper'>
            <h2>Agenda:</h2>

            <Timeline>
              <EventItwm time='10:00AM' title='Registration / Breakfast' icon={<FreeBreakfast />} outlined='filled'/>
              <EventItwm time='10:20AM' title='Opening Remarks'/>
              <EventItwm
                time='10:30AM'
                title='Beyond Kanban and Scrum: Creating a Culture of Flow'
                sub={<Typography variant='h6'><a className='speakers-link' href="https://www.linkedin.com/in/thekevinwhite/" target="_blank">Kevin White</a></Typography>}/>
              <EventItwm time='11:15AM'
                         title='Sail the Seas of Code: Navigating the World of DevContainers'
                         sub={<Typography variant='h6'><a className='speakers-link' href="https://www.linkedin.com/in/3dots/" target="_blank">mim Armand</a></Typography>}/>
              <EventItwm time='12:00PM'
                         title='The Angular Renaissance: Key New Features in 2023'
                         sub={<Typography variant='h6'><a className='speakers-link' href="https://www.linkedin.com/in/lmfinney/" target="_blank">Lance Finney</a></Typography>}/>
              <EventItwm time='12:45PM' title='Lunch' icon={<LunchDining />} color='secondary' outlined='filled'/>
              <EventItwm time='1:30PM' title='The Seven Habits of the Somewhat Effective Self-Taught Programmer'
                         sub={<Typography variant='h6'><a className='speakers-link' href="https://www.linkedin.com/in/chris-turvey/" target="_blank">Chris Turvey</a></Typography>}/>
              <EventItwm time='2:20PM' title='On Device Generative AI: Building your own Dall-E in the browser, welcome WebGPU'
                         sub={<Typography variant='h6'><a className='speakers-link' href="https://www.linkedin.com/in/rabimba/" target="_blank">Rabimba Karanjai</a></Typography>}/>

              <EventItwm time='3:20PM' title='Opening Remarks for Online Attendees'/>
              <EventItwm time='3:30PM' title='The Fusion of Web Development and AI - (Remote)'
                         color='secondary'
                         sub={<Typography variant='h6'><a className='speakers-link' href="https://www.linkedin.com/in/balram-chavan/" target="_blank">Balram Chavan</a></Typography>}/>
              <EventItwm time='4:15PM' title='Serverless Computing: The Future of App Development is Here! - (Remote)'
                         color='secondary'
                         sub={<Typography variant='h6'><a className='speakers-link' href="https://www.linkedin.com/in/bkvicky21/" target="_blank">Vishal Kumar Bhagchandani</a></Typography>}/>
              <EventItwm time='4:30PM' title='What’s up with Android’s Back? - (Remote)'
                         color='secondary'
                         sub={<Typography variant='h6'><a className='speakers-link' href="" target="_blank">Nav Singh</a></Typography>}/>
              <EventItwm time='5:15PM' title='Locked Out of My Account, Again. - (Remote)'
                         color='secondary'
                         sub={<Typography variant='h6'><a className='speakers-link' href="https://www.linkedin.com/in/314uxholly/" target="_blank">Holly Schroeder</a></Typography>}/>

              <EventItwm time='6:00PM' title='Closing Remarks & Networking.'
                         outlined='filled'
                         color='secondary'/>


              <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                  6:30PM
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' color='error'>
                    <FavoriteBorder />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>See you next time!</TimelineContent>
              </TimelineItem>

            </Timeline>

          </Paper>

        </Item>

        <Grid
          // container justifyContent="space-evenly"
          // direction="row"
          alignItems="stretch"
          className='join-items'
        >
          <Grid>
            <Card onClick={() => {
              openUrl('https://gdg.community.dev/events/details/google-gdg-st-louis-presents-devfest-2023-st-louis/');
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
                     onClick={() => {
                       openUrl('https://gdg.community.dev/events/details/google-gdg-st-louis-presents-devfest-2023-st-louis/');
                     }}
                />


                <Typography variant="body2" color="text.secondary" align='left'>
                  <ul>
                    <li>Join us to get to know your local community, network and learn about the latest and greatest
                      technologies directly from your peers.
                    </li>
                    <li>Get an <Link onClick={openUserDevprofile}>official participation badge</Link> from Google and
                      add it to your collection.
                    </li>
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
            <Card onClick={() => {
              openUrl('https://www.papercall.io/devfestl')
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
                <Typography variant="body2" color="text.secondary" align='left'>
                  <ul>
                    <li>Join as a speaker, share your expertise with your community and expand your network of the local
                      experts!
                    </li>
                    <li>Get an <Link onClick={openUserDevprofile}>official Speaker badge</Link> from Google and add it
                      to your resume.
                    </li>
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

      <Item className='map-container-element'>
        <h2>Location: <a className='location-link' href="https://maps.app.goo.gl/5P4wbg8hHgn8M99t7" target="_blank"> SLU
          Center For Global Citizenship.</a></h2>
        <MapContainer/>
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
            icon={<LinkedIn/>}
            onClick={() => openUrl('https://www.linkedin.com/groups/14350032/')}
          />
          <BottomNavigationAction
            label='Join us'
            icon={<Diversity3/>}
            onClick={() => openUrl('https://gdg.community.dev/gdg-st-louis/')}
          />
          <BottomNavigationAction
            label='Event Page'
            icon={<LocalActivity/>}
            onClick={() => openUrl('https://gdg.community.dev/events/details/google-gdg-st-louis-presents-devfest-2023-st-louis/')}
          />
          <BottomNavigationAction
            label='By mim Armand'
            icon={<Code/>}
            onClick={() => openUrl('https://github.com/mim-Armand/DevfeSTL-2023')}
          />
        </BottomNavigation>
      </Item>

    </Stack>
  </div>);
};

export default Landing;
