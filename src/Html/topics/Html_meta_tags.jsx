import {
  Box,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Html_meta_tags = () => {
  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <Typography variant="h4" gutterBottom color="primary">
            HTML मेटा टैग्स
          </Typography>

          <Typography variant="body1" gutterBottom>
            • मेटा टैग्स HTML डॉक्यूमेंट के <strong>&lt;head&gt;</strong> सेक्शन में होते हैं।<br />
            • ये ब्राउज़र और सर्च इंजन को महत्वपूर्ण जानकारी प्रदान करते हैं।
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            उदाहरण:
          </Typography>
          <Box
            sx={{
              background: "#000",
              color: "#fff",
              p: 2,
              borderRadius: 2,
              fontFamily: "monospace",
              fontSize: "16px",
              whiteSpace: "pre",
              overflowX: "auto",
              mb: 2,
            }}
          >
            {`<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<meta name='description' content='यह एक उदाहरण है'>`}
          </Box>

          <Typography variant="body1" gutterBottom>
            इस उदाहरण में:<br />
            • <strong>charset</strong>: डॉक्यूमेंट के लिए UTF-8 एन्कोडिंग सेट करता है।<br />
            • <strong>viewport</strong>: मोबाइल पर सही व्यू के लिए सेट करता है।<br />
            • <strong>description</strong>: पेज का विवरण प्रदान करता है जो सर्च इंजन में दिखता है।
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom color="primary">
            मेटा टैग्स के प्रकार
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText
                primary="🔹 charset - कैरेक्टर एन्कोडिंग सेट करता है"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="🔹 viewport - मोबाइल डिवाइस के दृश्य क्षेत्र को सेट करता है"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="🔹 description - पेज का संक्षिप्त विवरण"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="🔹 keywords - पेज से संबंधित कीवर्ड्स"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="🔹 author - पेज लेखक का नाम" />
            </ListItem>
          </List>

          <Typography variant="body1" gutterBottom>
            मेटा टैग्स का उपयोग <strong>SEO</strong> (Search Engine Optimization) में पेज की जानकारी सर्च इंजन को सही से समझाने के लिए किया जाता है।
          </Typography>

          <Typography variant="body1" gutterBottom>
            Meta tags HTML डॉक्यूमेंट के मेटाडेटा को डिफाइन करते हैं। ये टैग्स <strong>&lt;head&gt;</strong> सेक्शन में होते हैं और निम्नलिखित के लिए उपयोग होते हैं:
            <Box component="ul" sx={{ pl: 3, mt: 1 }}>
              <li>कैरेक्टर सेट</li>
              <li>डिस्क्रिप्शन</li>
              <li>कीवर्ड्स</li>
              <li>ऑथर</li>
            </Box>
            ये टैग्स पेज पर सीधे दिखते नहीं हैं पर ब्राउज़र, सर्च इंजन और वेब सेवाओं द्वारा उपयोग किए जाते हैं।
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom color="primary">
            Complete Example:
          </Typography>

          <Box
            sx={{
              background: "#000",
              color: "#fff",
              p: 2,
              borderRadius: 2,
              fontFamily: "monospace",
              fontSize: "16px",
              whiteSpace: "pre",
              overflowX: "auto",
              mb: 2,
            }}
          >
{`<!DOCTYPE html>
<html>
  <head>
    <title>Example for Meta Tag</title>
    <meta name="keywords" content="PHP tutorials, Laravel tutorials, JavaScript tutorials">
    <meta name="description" content="Learn PHP, Laravel, JavaScript, jQuery Tutorials In Hindi">
    <meta name="author" content=" Karan Thakur">
  </head>
  <body>
    Welcome to CodeInHindi.in<br>
    You are learning about HTML Meta Tags
  </body>
</html>`}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Html_meta_tags;
