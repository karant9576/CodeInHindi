import { Box, Typography, List, ListItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Jsinfo = () => {
  const navigate = useNavigate();

  const jsTopics = [
    { label: "JavaScript Introduction In Hindi", path: "introduction" },
    { label: "JavaScript Syntax In Hindi", path: "syntax" },
    { label: "Variables and Data Types", path: "variables" },
    { label: "Functions and Scope", path: "functions" },
    { label: "Objects and Arrays", path: "objects-arrays" },
    { label: "DOM Manipulation", path: "dom" },
    { label: "Event Handling", path: "events" },
    { label: "Promises and Async/Await", path: "async" },
    { label: "ES6+ Features", path: "es6" },
    { label: "Modules and npm", path: "modules" },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 4 }}>
      <Typography variant="h4" gutterBottom>Learn JavaScript</Typography>
      <Typography variant="body1" gutterBottom>
        यहाँ JavaScript के कुछ महत्वपूर्ण टॉपिक्स दिए गए हैं जिन्हें सीखकर आप वेब डेवलपमेंट में महारत हासिल कर सकते हैं।
      </Typography>

      <List>
        {jsTopics.map((topic, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                fontWeight: 500,
              }}
            onClick={() => navigate(`/javascript/${topic.path}`)}
            >
              {topic.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Jsinfo;
