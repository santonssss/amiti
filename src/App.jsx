import React from "react";
import "./App.css";
import Navbarr from "./Components/Navbarr.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner.jsx";
import { Typography } from "@mui/material";
import MyAudioPlayer from "./Components/AudioPlayer";
const App = () => {
  return (
    <div>
      <Navbarr />
      <Typography
        textAlign={"center"}
        sx={{
          fontSize: {
            lg: "40px",
            xs: "30px",
          },
          fontWeight: "700",
        }}
      >
        <span className="title">Темные аккорды, что бурлят внутри</span>
      </Typography>
      <Banner />
    </div>
  );
};

export default App;
