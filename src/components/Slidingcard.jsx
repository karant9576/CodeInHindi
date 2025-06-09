import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import mongoLogo from "../assets/mongoDB.webp"; 
 


const cardData = [
  {
    title: "HTML",
    description: "Make structure of the web with HTML.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    title: "CSS",
    description: "Style your website using CSS.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    title: "JavaScript",
    description: "Add interactivity using JavaScript.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    title: "React",
    description: "Build modern UIs with React.",
    image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    title: "Bootstrap",
    description: "Create responsive websites with Bootstrap.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  },
  {
    title: "Node.js",
    description: "Run JavaScript on the server side.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    title: "MongoDB",
    description: "Use NoSQL database for scalability.",
    image: mongoLogo, // Corrected image
  },
  {
    title: "Git",
    description: "Version control your code efficiently.",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
  },
  {
    title: "Python",
    description: "Write clean and powerful scripts.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    title: "MySQL",
    description: "Manage relational databases easily.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
  },
];

const SlidingCards = ({darkMode}) => {
  
  const chunkedCards = [];
  for (let i = 0; i < cardData.length; i += 5) {
    chunkedCards.push(cardData.slice(i, i + 5));
  }

  return (
    <Box sx={{ px: { xs: 2, md: 5 }, py: 6 }}>
      {chunkedCards.map((group, groupIndex) => (
        <Grid
          container
          key={groupIndex}
          spacing={4}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          {group.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={2.4}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  boxShadow: 3,
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-5px) scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: "contain", p: 2 }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#3f51b5", mb: 1 }}
                  >
                    Learn {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, fontSize: 13 , color: darkMode ? "#000" : "#000", }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#6c63ff",
                      color: "#fff",
                      textTransform: "none",
                      fontSize: 14,
                      "&:hover": {
                        backgroundColor: "#5a54d1",
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default SlidingCards;
