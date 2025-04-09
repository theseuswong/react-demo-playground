import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import iPhoneFrameImage from "../../../assets/iPhone Frame.png";

interface MobileFrameProps {
  title: string;
  page: React.ReactElement;
}

function MobileFrame({ title, page }: MobileFrameProps) {
  return (
    <Stack justifyContent={"center"} alignItems="center" flexWrap={"wrap"} gap={2} width={"400px"} height={"max-content"}>
      <Typography color="white">{title}</Typography>
      {/* <Paper elevation={3} >
        <img
          src={browserFrameImage}
          loading="lazy"
          width={"100%"}
          height={"100%"}
        />
      </Paper> */}
      <Box sx={{ position: "relative", backgroundImage: `url(${iPhoneFrameImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <img
          src={iPhoneFrameImage}
          loading="lazy"
          style={{ opacity: 0, zIndex: -1 }}
          width={"100%"}
          height={"100%"}
        />
        <Container style={{
          position: "absolute",
          top: "16px", bottom: "16px",
          left: "12px",
          width: "94%",
          padding: 0, overflow: "hidden", zIndex: 1,
          borderRadius: "52px",
        }}>
          <Container style={{
            width: "100%",
            height: "100%",
            padding: 0, overflow: "hidden", zIndex: 1,
            borderRadius: "50px",
          }}>
            {page}
          </Container>
        </Container>
      </Box>
    </Stack>
  );
}

export default MobileFrame;
