import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import mongoLogo from "../assets/mongoDB.webp";

const cardData = [
  {
    title: "HTML",
    description: "Make structure of the web with HTML.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    path: "/html",
  },
  {
    title: "CSS",
    description: "Style your website using CSS.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    path: "/css",
  },
  {
    title: "JavaScript",
    description: "Add interactivity using JavaScript.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    path: "/javascript",
  },
  {
    title: "React",
    description: "Build modern UIs with React.",
    image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    path: "/react",
  },
  {
    title: "Bootstrap",
    description: "Create responsive websites with Bootstrap.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    path: "/bootstrap",
  },
  {
    title: "Node.js",
    description: "Run JavaScript on the server side.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    path: "/nodejs",
  },
  {
    title: "MongoDB",
    description: "Use NoSQL database for scalability.",
    image: mongoLogo,
    path: "/mongodb",
  },
  {
    title: "Git",
    description: "Version control your code efficiently.",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
    path: "/git",
  },
  {
    title: "Python",
    description: "Write clean and powerful scripts.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    path: "/python",
  },
  {
    title: "MySQL",
    description: "Manage relational databases easily.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    path: "/mysql",
  },
  {
    title: "MySQL",
    description: "Manage relational databases easily.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    path: "/mysql2",
  },
  {
    title: "MySQL",
    description: "Manage relational databases easily.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    path: "/mysql3",
  },
];

const SlidingCards = ({ darkMode }) => {
  const navigate = useNavigate(); // Add this

  return (
    <Box sx={{ px: { xs: 2, md: 5 }, py: 6 }}>
      <Grid container spacing={4} justifyContent="center" wrap="wrap">
        {cardData.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "80%",
                sm: "48%",
                md: "31%",
                lg: "20%",
                xl: "20%",
              },
              m: "0.5%",
            }}
          >
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover .card-image": {
                  transform: "translateY(-10px) rotate(360deg)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
                className="card-image"
                sx={{
                  objectFit: "contain",
                  p: 2,
                  transition: "transform 0.3s ease",
                }}
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
                  sx={{
                    mb: 2,
                    fontSize: 13,
                    color: darkMode ? "#000" : "#000",
                  }}
                >
                  {item.description}
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate(item.path)}
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
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default SlidingCards;
