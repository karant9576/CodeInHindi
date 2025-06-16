import { Box, Card, CardContent, Typography, Divider, List, ListItem } from '@mui/material';

const Html_intro = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', }}>
      <Card >
        <CardContent>
          <Typography variant="h4" gutterBottom color="primary">
            HTML परिचय
          </Typography>

          <List variant="h6" color="text.secondary" gutterBottom>
            • HTML का पूरा नाम HyperText Markup Language है।<br />
            • यह वेब पेज के लिए एक मानक मार्कअप भाषा है।<br />
            • यह वेब पेज की संरचना को परिभाषित करता है।<br />
            • HyperText का मतलब है लिंक बनाना – क्लिक करने पर दूसरी पेज पर जाते हैं।<br />
            • Markup का मतलब है वेब पेज की संरचना बताना।
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default Html_intro;

