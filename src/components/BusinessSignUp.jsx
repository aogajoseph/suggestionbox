import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Paper } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BusinessSignUp = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.businessName) tempErrors.businessName = "Business/Organization Name is required";
    if (!formData.email.includes("@")) tempErrors.email = "Valid email is required";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Business Registered:", formData);
      // Proceed with registration logic (API call, Firebase, etc.)
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      
      {/* Main content area */}
      <Box flexGrow={1} display="flex" alignItems="center" justifyContent="center">
        <Container maxWidth="sm">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h5" gutterBottom align="center">
              Create a Business Account
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Business/Organization Name"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                error={!!errors.businessName}
                helperText={errors.businessName}
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
              <Button variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2 }}>
                Create Account
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default BusinessSignUp;
