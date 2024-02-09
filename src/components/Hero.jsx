import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from './Card';
import bg1 from "../img/bg1.png"

const Hero = () => {
  return (
    <Box>

        <Typography variant="h4">
            Top Niagara Fall Tour
        </Typography>

        <Box>
            <Card url={bg1}/>
        </Box>

        <Typography variant="h4">
            Top Las Vegas Tour
        </Typography>

        <Box>
            <Card />
        </Box>
    </Box>
  )
}

export default Hero