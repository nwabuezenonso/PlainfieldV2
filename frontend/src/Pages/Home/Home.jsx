import React from 'react';
// import images from '../../assets';
import { Typography, Box, Button } from '@mui/material';
import styled from '@emotion/styled';
import './Home.css'

const useStyles = styled(theme => ({
  hero_heading:{
    paddingTop: 250,
    padding: 140,
    color: 'white',
    width: 900,
    marginTop: 195
  }
}))

const Header = () => {
  const classes = useStyles();

  return (
    // Adding the Hero section
    <Box className='hero_background_img'>
      <div className='overlay'></div>
      <Box className={classes.hero_heading}>
        <Typography variant="h2" >THE ANGLICAN CHURCH OF THE MESSIAH</Typography>
      </Box>
      <Box className='hero_body'>
        <Typography variant='p'>Come join us at the Church of the Messiah where Jesus the Messiah will meet your needs.</Typography>
      </Box>
      <Button className='btn' variant="contained">worship with us</Button>
    </Box>
  )
}

export default Header