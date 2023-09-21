import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
function AnimatedText({ content }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < content.length) {
        setText((prevText) => prevText + content[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [content, index]);

  return (
    <Typography
      sx={{
        fontSize: {
          lg: "35px",
          xs: "25px",
        },
        textAlign: {
          lg: "start",
          xs: "center",
        },
        lineHeight: {
          lg: "46px",
          xs: "35px",
        },
      }}
    >
      <span className="banner__text">{text}</span>
    </Typography>
  );
}

export default AnimatedText;
