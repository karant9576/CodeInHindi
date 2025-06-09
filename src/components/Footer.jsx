import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        py: 6,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              CodeinHindi
            </Typography>
            <Typography variant="body2" color="gray">
              Learn coding the easy way, in your own language. <br/>
              Join us to explore HTML, CSS, JavaScript and more!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#" underline="hover" color="inherit">
                Home
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Courses
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Blog
              </Link>
              <Link href="#" underline="hover" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">Email: support@codeinhindi.com</Typography>
           
            <Typography variant="body2">Location: India</Typography>
          </Grid>
        </Grid>

        {/* Bottom Line */}
        <Box sx={{ textAlign: "center", pt: 5 }}>
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} CodeinHindi. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
