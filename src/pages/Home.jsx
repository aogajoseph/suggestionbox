import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Button, Paper, Grid, Modal } from "@mui/material";
import Logo from "../assets/logo.png";
import BackgroundImage from "../assets/background.jpg";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3, bgcolor: "rgba(255, 255, 255, 0.9)" }}>
          <Box mb={3} display="flex" flexDirection="column" alignItems="center">
            <img src={Logo} alt="Brand Logo" width={100} />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              Suggestions Box
            </Typography>
          </Box>

          <Typography variant="h6" color="textSecondary" gutterBottom>
            A safe and anonymous space to share thoughts and feedback.
          </Typography>

          <Grid container spacing={2} justifyContent="center" mt={3}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" component={Link} to="/signin">
                Sign In
              </Button>
            </Grid>
          </Grid>

          <Box mt={4}>
            <Typography variant="body2" color="textSecondary">
              <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
            </Typography>
          </Box>
        </Paper>
      </Container>

      {/* Sign Up Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" mb={2}>Choose Account Type</Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 }}
            component={Link}
            to="/signup/personal"
            onClick={handleClose}
          >
            Personal Account
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            component={Link}
            to="/signup/business"
            onClick={handleClose}
          >
            Business Account
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;
