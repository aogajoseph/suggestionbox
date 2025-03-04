import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PersonalSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.email.includes("@")) tempErrors.email = "Valid email is required";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />

      {/* Main content area */}
      <Box flexGrow={1} display="flex" alignItems="center" justifyContent="center">
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Create a Personal Account
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Last Name (Optional)"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                margin="normal"
              />
              <Box textAlign="center" mt={2}>
                <Button variant="contained" color="primary" type="submit">
                  Create Account
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default PersonalSignUp;
