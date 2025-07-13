import { Typography, Box, Container, Grid } from "@mui/material";
import SlidingCards from "./Slidingcard"; // Adjust the import path as necessary
import heroImage from "../assets/logoc.png"; // <- Replace with the correct path (your uploaded image)

function Home() {
  return (
    <>
    <Container
  maxWidth="lg"
  sx={{
    mt: { xs: 8, md: 12 },
    px: { xs: 2, sm: 3, md: 4 , },
    overflowX: "hidden", // Prevent horizontal scroll
    mx: "auto",
    
  }}
>
  <Grid container spacing={4} alignItems="center">
    {/* Left Side Text */}
    <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" }, ml:{ xs: 0, sm: 19, md: 12 } }}>
      <Typography
        variant="subtitle2"
        color="#6c63ff"
        fontWeight={700}
        gutterBottom
        sx={{ ml: { xs: 0, md: 1 } }}
      >
        Learn code in Hindi
      </Typography>
      <Typography
        variant="h3"
        fontWeight={800}
        gutterBottom
        sx={{
          lineHeight: 1.2,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // responsive size
          display:"inline",
          ml:{xs:0, sm:"0px",md:"2px"},
          justifyContent:"center",
          alignItems:"center",
        }}
      >
        Coding, <br />
        sikhna huaa, <br />
        assan
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          mb: 3,
          maxWidth: { xs: "100%", sm: 400, md: 400, lg: 550, xl: 610 },
          mx: { xs: "auto", md: 0 },
          mt:2
        }}
      >
        Code  sikhna , Ab Rocket Science Nahi!<br/>
        Har Koi Banega Developer – Bas Thoda Sa Guidance!
      </Typography>
    </Grid>

    {/* Right Side Image */}
    <Grid item xs={12} md={6}>
      <Box
        component="img"
        src={heroImage}
        alt="Illustration"
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 400, md: 400, lg: 550, xl: 600 },
          mx: "auto",
          ml: { xs: 0, sm: 19, md: 0 },
          
         
        }}
      />
    </Grid>
       <SlidingCards  />
  </Grid>
</Container>

    </>
  );
}

export default Home;
