import { Box, Grid, Typography, Divider, List, ListItem } from '@mui/material';

const Html_intro = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        p: 2,
      }}
    >
      <Grid>
        <Typography variant="h4" gutterBottom color="primary">
          HTML परिचय
        </Typography>

        <List sx={{ pl: 2 }}>
          <Typography component="li">• HTML का पूरा नाम HyperText Markup Language है।</Typography>
          <Typography component="li">• यह वेब पेज के लिए एक मानक मार्कअप भाषा है।</Typography>
          <Typography component="li">• यह वेब पेज की संरचना को परिभाषित करता है।</Typography>
          <Typography component="li">• HyperText का मतलब है लिंक बनाना – क्लिक करने पर दूसरी पेज पर जाते हैं।</Typography>
          <Typography component="li">• Markup का मतलब है वेब पेज की संरचना बताना।</Typography>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom color="primary">
          इतिहास
        </Typography>

        <List>
          <ListItem>📅 1989 – टिम बर्नर्स-ली ने वर्ल्ड वाइड वेब का आविष्कार किया।</ListItem>
          <ListItem>🧠 वे एक कंप्यूटर वैज्ञानिक हैं, जन्म लंदन में हुआ।</ListItem>
          <ListItem>🌐 1991 – टिम बर्नर्स-ली ने HTML बनाया।</ListItem>
          <ListItem>
            🔬 उन्होंने 1989 में स्विट्ज़रलैंड के जिनेवा में European Research Organization (CERN) में काम करते हुए वेब विकसित किया, जिसे 1992 में लॉन्च किया गया।
          </ListItem>
          <ListItem>✅ 2017 – World Wide Web Consortium (W3C) द्वारा HTML 5.2 को आधिकारिक रूप से मान्यता मिली।</ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom color="primary">
          HTML का बेसिक कोड
        </Typography>

        <Box
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'monospace',
            p: 2,
            borderRadius: 2,
            whiteSpace: 'pre',
            overflowX: 'auto',
          }}
        >
          {`<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to HTML!</h1>
    <p>This is a simple HTML document.</p>
  </body>
</html>`}
        </Box>
      </Grid>
    </Box>
  );
};

export default Html_intro;
