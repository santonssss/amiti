import React from "react";
import AnimatedText from "../assets/UI/AnimatedText";
import { Container } from "react-bootstrap";
import { Box, Stack, Typography } from "@mui/material";
import Amet from "../assets/images/amet-s.png";
export default function Banner() {
  return (
    <Container>
      <Box
        height={"50vh"}
        display={"flex"}
        sx={{
          flexDirection: {
            lg: "row",
            xs: "column",
          },
        }}
      >
        <Box
          flex={1}
          display="flex"
          sx={{
            justifyContent: {
              lg: "flex-start",
              xs: "center",
            },
            mt: {
              lg: "0",
              xs: "2rem",
            },
          }}
          alignItems="center"
        >
          <AnimatedText
            content={
              "Добро пожаловать в мир музыки и ритмов, где аромат рэпа никогда не исчезает - я AmitiMax, и это моя музыкальная история!"
            }
          />
        </Box>
        <Box
          flex={1}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <img
            style={{
              height: "100%",
              width: "50%",
            }}
            src={Amet}
            alt="banner-foto"
            id="rotating-image"
          />
        </Box>
      </Box>
    </Container>
  );
}
