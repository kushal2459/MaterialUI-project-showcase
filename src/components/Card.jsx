import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';  

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, '& .MuiIcon-root':{ color:'blue' }, '&:hover':{backgroundColor : "blue",color:'white', transition: 'ease 1s', '& .MuiIcon-root':{ color:'white' }, '& .MuiButton-root':{ color:'white', transition:'ease 1s'}}  }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          <AccessTimeIcon /> Lizard
        </Typography>
        <Typography variant="subtitle2" component="h5">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='outlined' sx={{ color:'blue' }}>Share</Button>
        <Button size="small" variant='outlined' sx={{ color:'blue' }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
