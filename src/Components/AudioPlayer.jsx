import { Box } from "@mui/material";
import React, { useState } from "react";
import AudioPlayer from "react-audio-player";

function MyAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box
      sx={{
        mt: {
          lg: "2rem",
          xs: "3rem",
        },
      }}
      display={"flex"}
      alignItems="center"
      justifyContent="center"
    >
      <AudioPlayer
        src="song.mp3"
        autoPlay={isPlaying}
        onPlay={togglePlay}
        onPause={togglePlay}
        controls
      />
      <button onClick={togglePlay}>
        {isPlaying ? "Пауза" : "Воспроизвести"}
      </button>
    </Box>
  );
}

export default MyAudioPlayer;
