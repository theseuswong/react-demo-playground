import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import browserFrameImage from "../../../assets/Web Browser Frame.png";

interface WebBrowserFrameProps {
  title: string;
  page: React.ReactElement;
}

function WebBrowserFrame({ title, page }: WebBrowserFrameProps) {
  return (
    <Stack justifyContent={"center"} alignItems="center" flexWrap={"wrap"} gap={2} width={"100%"} height={"max-content"}>
      <Typography color="white">{title}</Typography>
      <Box sx={{ width: "100%", height: "100%", position: "relative", backgroundImage: `url(${browserFrameImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <img
          src={browserFrameImage}
          loading="lazy"
          style={{ opacity: 0, zIndex: -1 }}
          width={"100%"}
          height={"100%"}
        />
        <Container style={{
          position: "absolute",
          top: "0", left: "0", bottom: "5px",
          width: "100%", padding: 0, marginTop:'103px', overflow: "hidden", zIndex: 1
        }}>
          {page}
        </Container>
      </Box>
    </Stack>
  );
}

export default WebBrowserFrame;
