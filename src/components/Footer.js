import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/icons/homelogo.svg";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#ff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" mb="20px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Keep Healthy, Made with React and MaterialUI
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
