import { Box, Typography, List, ListItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Htmlinfo = () => {
  const navigate = useNavigate();

  const htmlTopics = [
    { label: "HTML Introduction In Hindi", path: "introduction" },
    { label: "HTML Tags In Hindi", path: "tags" },
    { label: "HTML Meta Tags In Hindi", path: "meta-tags" },
    { label: "HTML Elements In Hindi", path: "elements" },
    { label: "HTML Attributes In Hindi", path: "attributes" },
    { label: "HTML Formatting In Hindi", path: "formatting" },
    { label: "HTML Heading In Hindi", path: "headings" },
    { label: "HTML Anchor In Hindi", path: "anchor" },
    { label: "HTML Image In Hindi", path: "image" },
    { label: "HTML List In Hindi", path: "list" },
    { label: "HTML Table In Hindi", path: "table" },
    { label: "HTML Form In Hindi", path: "form" },
    { label: "HTML Form Elements In Hindi", path: "form-elements" },
    { label: "HTML Form Input Types In Hindi", path: "input-types" },
    { label: "HTML iframe In Hindi", path: "iframe" },
    { label: "HTML Audio In Hindi", path: "audio" },
    { label: "HTML Video In Hindi", path: "video" },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 4 }}>
      <Typography variant="h4" gutterBottom>Learn HTML</Typography>
      <Typography variant="body1" gutterBottom>
        यहाँ HTML के कुछ महत्वपूर्ण टॉपिक्स की सूची दी गई है जिन्हें आपको बुनियादी ज्ञान में माहिर होने के लिए पढ़ना चाहिए।
      </Typography>

      <List>
        {htmlTopics.map((topic, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                fontWeight: 500,
              }}
              onClick={() => navigate(`/html/${topic.path}`)}
            >
              {topic.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Htmlinfo;
