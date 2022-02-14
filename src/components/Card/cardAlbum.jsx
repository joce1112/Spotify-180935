import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardAlbum({ name, image,artist,url}) {
  const theme = useTheme();
  return(
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={image}
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Artista:{artist}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
   
    <Button size="small" color="primary">
        Abrir en spotify
      </Button>

      
    </CardActions>
  </Card>
  
  )
}
