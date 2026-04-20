import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import fav from "../assets/newfav.png";
const Footer = () => {
  const navigate = useNavigate();
  const pages = ["Home", "About", "Blog",];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#010a2aff",
        color: "#fff",
        py: { xs: 4, sm: 6 },
        mt: 10,
      }}
    >
         {/* <Box
          component="img"
          src={fav}
          
          sx={{
            width: 190,
            height: 190,
            display: "flex-wrap",
            mx: "auto",
           ml: { xs: 0, sm: 2, md: 9 },
          
            
          }}
        /> */}
      <Container maxWidth="lg">
        
        <Grid container spacing={4} sx={{ml:{ xs: 1, sm: 6, md: 15 }}}>
          {/* About */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{display: "inline",}}>
              CodeinHindi
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Learn coding the easy way, in your own language. <br />
              Join us to explore HTML, CSS, JavaScript and more!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {pages.map((text) => {
                let path = "/";

                if (text === "Home") path = "/";
                else if (text === "About") path = "/about";
                else if (text === "Blog") path = "/blog";
                

                return (
                  <Link
                    key={text}
                    underline="hover"
                    color="inherit"
                    sx={{
                      transition: "color 0.2s",
                      cursor: "pointer",
                      "&:hover": { color: "#6c63ff" },
                      fontSize: "1rem",
                    }}
                    onClick={() => navigate(path)}
                  >
                    {text}
                  </Link>
                );
              })}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Email: support@codeinhindi.com
            </Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>
              Location: India
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Line */}
        <Box sx={{ textAlign: "center", pt: 5 }}>
          <Typography variant="body2" sx={{ color: "gray" }}>
            © {new Date().getFullYear()} CodeinHindi. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
