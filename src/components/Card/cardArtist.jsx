import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';


export default function CardArtist({ name, image, followers }) {
  const theme = useTheme();
  return(
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      
      
      title={name}
      
    />
    <CardMedia
      component="img"
      height="194"
      image={image}
     
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       Seguidores:  {followers}
      </Typography>
    </CardContent>
    
    
    </Card>
  )
}
