import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar/>
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color:"#fff"}}>
          Copyright FrontendTeam
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
