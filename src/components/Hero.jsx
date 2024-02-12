import React from 'react'

import Card from './Card';
import bg1 from "../img/bg1.png"
import bg2 from "../img/bg2.png"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));  

const Hero = () => {
  return (
    <Box>

        <Box sx={{ marginY:'40px' }}>
        <Typography variant="h4" sx={{marginBottom:'20px'}}>
            Top Niagara Fall Tour
        </Typography>

        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={5} sx={{justifyContent:'center', alignItems:'center'}}>

                <Grid item xs={6} md={3}>
                
                        <Card url={bg1}/>
                   
                </Grid>
                <Grid item xs={6} md={3}>
                   
                        <Card url={bg2}/>
                   
                </Grid>
                <Grid item xs={6} md={3}>
                    
                        <Card url={bg1}/>
                    
                </Grid>
                <Grid item xs={6} md={3}>
                  
                        <Card url={bg2}/>
                    
                </Grid>

            </Grid>
        </Box>
        </Box>
        
        <Box sx={{ marginY:'40px' }}>
        <Typography variant="h4" sx={{marginBottom:'20px'}}>
            Top Las Vegas Tour
        </Typography>

         <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>

                <Grid item xs={3}>
                    
                        <Card url={bg1}/>
                    
                </Grid>
                <Grid item xs={3}>
                    
                        <Card url={bg2}/>
                    
                </Grid>
                <Grid item xs={3}>
                   
                        <Card url={bg1}/>
                    
                </Grid>
                <Grid item xs={3}>
                   
                        <Card url={bg2}/>
                    
                </Grid>
                
            </Grid>
        </Box>
        </Box>
        

    </Box>
  )
}

export default Hero