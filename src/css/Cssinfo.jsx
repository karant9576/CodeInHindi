import { Box, Typography, List, ListItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CssInfo = () => {
  const navigate = useNavigate();

  const cssTopics = [
  // CSS Basics
  { label: "What is CSS ? CSS kya hai", path: "what-is-css" },
  { label: "CSS Syntax", path: "css-syntax" },
  { label: "How to add CSS ? CSS kaise use karen", path: "add-css" },
  { label: "CSS Selectors In Hindi : CSS selectors क्या है ?", path: "css-selectors" },
  { label: "CSS Colors In Hindi", path: "css-colors" },
  { label: "CSS Background Image", path: "css-background" },

  // CSS Borders
  { label: "CSS Border Style In Hindi", path: "css-border-style" },
  { label: "CSS Border Width In Hindi", path: "css-border-width" },
  { label: "CSS Border Color In Hindi", path: "css-border-color" },
  { label: "CSS Border In Hindi", path: "css-border" },

  // CSS Margin & Padding
  { label: "CSS margin in Hindi", path: "css-margin" },
  { label: "CSS padding in Hindi", path: "css-padding" },

  // Height & Width
  { label: "CSS height in Hindi", path: "css-height" },
  { label: "CSS width in Hindi", path: "css-width" },

  // CSS Text
  { label: "CSS alignment in Hindi", path: "css-alignment" },
  { label: "CSS text decoration in Hindi", path: "css-text-decoration" },
  { label: "CSS text-transform in Hindi", path: "css-text-transform" },
  { label: "CSS Text Spacing In Hindi", path: "css-text-spacing" },
  { label: "CSS text-shadow in Hindi", path: "css-text-shadow" },

  // CSS Font
  { label: "CSS font-family in Hindi", path: "css-font-family" },
  { label: "CSS font-style In Hindi", path: "css-font-style" },
  { label: "CSS font-size In Hindi", path: "css-font-size" },
  { label: "CSS Icons In Hindi", path: "css-icons" },
];


  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 4 }}>
      <Typography variant="h4" gutterBottom>Learn CSS</Typography>
      <Typography variant="body1" gutterBottom>
        यहाँ CSS के कुछ महत्वपूर्ण टॉपिक्स की सूची दी गई है जिन्हें आपको बुनियादी ज्ञान में माहिर होने के लिए पढ़ना चाहिए।
      </Typography>

      <List>
        {cssTopics.map((topic, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                fontWeight: 500,
              }}
              onClick={() => navigate(`/css/${topic.path}`)}
            >
              {topic.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CssInfo;
