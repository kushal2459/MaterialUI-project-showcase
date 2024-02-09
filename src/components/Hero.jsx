import React from 'react'

import Card from './Card';
import bg1 from "../img/bg1.png"

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

        <Typography variant="h4">
            Top Niagara Fall Tour
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={3}>
                    <Item>
                        <Card url={bg1}/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Card url={bg1}/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Card url={bg1}/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Card url={bg1}/>
                    </Item>
                </Grid>

            </Grid>
        </Box>

        <Typography variant="h4">
            Top Las Vegas Tour
        </Typography>

         <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={3}>
                    <Item>
                        <Card url={bg1}/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Card url={bg1}/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Card url={bg1}/>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                        <Card url={bg1}/>
                    </Item>
                </Grid>
                
            </Grid>
        </Box>

    </Box>
  )
}

export default Hero