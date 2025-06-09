import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const languages = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"];

const Card = () => {
  return (
    <Box sx={{ overflowX: "auto", whiteSpace: "nowrap", p: 2 }}>
      {languages.map((lang, index) => (
        <Card
          key={index}
          sx={{
            display: "inline-block",
            width: 250,
            height: 160,
            mx: 1,
            backgroundColor: "#f5f5f5",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#6c63ff",
                mb: 2,
              }}
            >
              Learn {lang}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Kickstart your journey with {lang}.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Card;
