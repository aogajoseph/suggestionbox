import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, textAlign: "right", bgcolor: "primary.text", color: "grey" }}>
      <Typography variant="body2">
        <Link href="/privacy-policy" color="inherit" underline="hover">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/terms-of-service" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
