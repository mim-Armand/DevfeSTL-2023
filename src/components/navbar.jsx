import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DevFeSTLPeriodic from "./DevFeSTLPeriodic";

function HideOnScroll(props) {
  const {children, window} = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (<Slide appear={true} direction="down" in={!trigger}>
    {children}
  </Slide>);
}

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    window.open('https://gdg.community.dev/gdg-st-louis/', '_blank', 'noopener,noreferrer');
    setAnchorEl(null);
  };
  return (<Box sx={{flexGrow: 1}}>
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            aria-label='menu'
            sx={{mr: 2}}
            onClick={handleClick}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon/>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Register</MenuItem>
            <MenuItem onClick={handleClose}>Speakers</MenuItem>
            <MenuItem onClick={() => {
              window.open('#agenda-paper', 'self', 'noopener,noreferrer');
              setAnchorEl(null);
            }}>Agenda</MenuItem>
          </Menu>
          <DevFeSTLPeriodic number="12" text="Dev" title='Develop'/>
          <DevFeSTLPeriodic number="09" text="Fe" title='Strong'/>
          <DevFeSTLPeriodic number="2023" text="STL" title='St. Louis'/>
          <Typography variant='h7' component='div' sx={{flexGrow: 1}} >
            DevFest 2023 - <small>St. Louis chapter.</small>
          </Typography>
          <a href="https://gdg.community.dev/gdg-st-louis/" target='_blank'>
            <Button>Register Now!</Button>
          </a>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  </Box>);
};

export default Navbar;
