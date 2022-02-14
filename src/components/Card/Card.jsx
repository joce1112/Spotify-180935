import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SpotifyPlayer from 'react-spotify-player';
export  function CardTrack({ name, artist, image, url }) {
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme2 = 'black'; // or 'white'
  return (
    <a style={{ textDecoration: "none", color: "black" }} href={url}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxHeight: 150,
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="body1">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {artist}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
            }}
          >
            
          </Box>
          <SpotifyPlayer
  uri={url}
  size={size}
  view={view}
  theme={theme2}
/>
        </Box>
        <CardMedia
          component="img"
          width={150}
          height={150}
          sx={{ width: 151 }}
          image={image}
     
        />
      </Card>
    </a>
  );
}