import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import React, { useEffect, useState } from "react";
import { spotifySearch } from "../api/spotify";
import { CardTrack } from "../components/Card/Card";
import CardAlbum from "../components/Card/cardAlbum";
import CardArtist from "../components/Card/cardArtist";

export  function Home() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState({
        type: "Todo",
        query: "",
    });
    const typeArr = ["Todo", "album", "artist", "track"];

    const search = async () => {
        if((searchQuery.query==="")){
            alert("Ingresa un termino")
            return;
        }
        const data = await spotifySearch(searchQuery.type, searchQuery.query);
        if(!data){
            alert("Error al solicitar los datos")
        }else {
            setData(data);
            console.log(data);
        }
       
    };

    return (
        <Grid container marginTop={10}>
            <Grid item xs={12}>
                <TextField
                    id="outlined-search"
                    label="Buscador"
                    type="search"
                    onChange={(e) =>
                        setSearchQuery((current) => ({ ...current, query: e.target.value }))
                    }
                />
                <FormControl>
                    <InputLabel   id="demo-simple-select-label">Filtro</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={searchQuery.type}
                        label="Filtro"
                        style={{minWidth: 120}}
                        onChange={(e) =>
                            setSearchQuery((current) => ({ ...current, type: e.target.value }))
                        }
                    >
                        {typeArr.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
               
                 style={{minWidth: 120,height:55,
                    backgroundColor: "#21b6ae",}}
                 variant="contained" 
                 onClick={search}>
                    Buscar
                </Button>
            </Grid>
            {/* <Grid item xs={6}>
               
            </Grid> */}
            
            <Grid
                container
                spacing={{ xs: 2, md: 4 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
                padding={10}
            >
                {data.tracks && data.tracks.items.map((track, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <CardTrack
                                name={track.name}
                                artist={track.artists[0].name}
                                image={track.album?.images[0]?.url}
                                url={track.external_urls?.spotify}
                            />
                        </Grid>
                    ))}
                {data.artists && data.artists.items.map((artist, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                        <CardArtist
                                name={artist.name}
                                followers={artist.followers.total}
                                image={artist.images[0]?.url}
                                url={artist.external_urls?.spotify}
                            />
                        </Grid>
                    ))}
                {data.albums && data.albums.items.map((album, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <CardAlbum
                             name={album.name}
                             artist={album.artists[0].name}
                             image={album.images[0]?.url}
                             url={album.uri}
                             
                            />
                         
                        </Grid>
                    ))}
            </Grid>
          
        </Grid>
    );
}
