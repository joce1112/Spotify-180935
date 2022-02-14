import axios from "axios";
import qs from "qs";
import Cookies from "universal-cookie";
import { Buffer } from "buffer";
const cookies = new Cookies();

const CLIENT_ID ='757e7d38e2184cdfbb353853aee73deb'
const SECRET_ID = "511e823865e64216a27122787bff0423";


const AUTH_TOKEN = Buffer(`${CLIENT_ID}:${SECRET_ID}`, "utf-8").toString(
    "base64"
  );
  
  export const getSpotifyToken = async() => {
    try {
  
        const token_url = "https://accounts.spotify.com/api/token";
        const data = qs.stringify({ grant_type: "client_credentials" });
  
        const response = await axios.post(token_url, data, {
            headers: {
                Authorization: `Basic ${AUTH_TOKEN}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
  
        cookies.set("token", response.data.access_token, { path: "/" });
    } catch (error) {
        console.log(error);
    }
  };

export const spotifySearch = async(type = "artist", query = "The Beatles") => {
    
    const access_token = getSpotifyToken(); 
    
    if (type === "Todo") {
        type = ["album", "artist", "track"];
    }
    const api_url = `https://api.spotify.com/v1/search?type=${type}&q=${query}&include_external=audio`;
    try {
        const response = await axios.get(api_url, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};