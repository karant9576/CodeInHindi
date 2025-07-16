import { Box, Typography, List, ListItem, Divider, Grid } from "@mui/material";

const Html_attributes = () => {
  return (
    <Box sx={{ p: 2,   maxWidth: 1000, margin: 'auto' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>
            HTML Attributes
          </Typography>

          <Typography variant="body1" gutterBottom>
            HTML Attributes (विशेषताएँ) HTML टैग्स को और अधिक जानकारी देने के
            लिए उपयोग होते हैं। ये हमेशा स्टार्ट टैग में होते हैं और अक्सर{" "}
            <code>name="value"</code> के रूप में लिखे जाते हैं।
          </Typography>

          <Typography variant="body1" gutterBottom>
            ✅ HTML की हर टैग में attribute हो सकता है। <br />
            ✅ ये ब्राउज़र को बताते हैं कि उस टैग को कैसे behave करना है। <br />
            ✅ ये styling, linking, identification और behavior कंट्रोल करने में
            मदद करते हैं।
          </Typography>

          <Typography variant="h6" gutterBottom>
            कुछ सामान्य HTML Attributes:
          </Typography>
          <List dense>
            <ListItem>
              🔹class: एक या अधिक CSS क्लास नाम प्रदान करता है।
            </ListItem>
            <ListItem>🔹id: किसी टैग के लिए एक यूनिक पहचान देता है।</ListItem>
            <ListItem>🔹style: इनलाइन CSS स्टाइल प्रदान करता है।</ListItem>
            <ListItem>
              🔹title: टैग पर माउस ले जाने पर जानकारी दिखाता है।
            </ListItem>
            <ListItem>🔹href: लिंक के लिए URL निर्धारित करता है।</ListItem>
          </List>

          <Typography variant="h6" gutterBottom>
            उदाहरण:
          </Typography>
          <Box sx={codeBoxStyle}
          >
            {`<a href="https://example.com" class="my-link" title="Visit Example">Click Here</a>`}
          </Box>

          <Typography variant="body1" gutterBottom>
            इस उदाहरण में:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li>
              <code>href</code>: लिंक का पता तय करता है।
            </li>
            <li>
              <code>class</code>: CSS स्टाइल देने के लिए क्लास नाम सेट करता है।
            </li>
            <li>
              <code>title</code>: माउस ले जाने पर जानकारी देता है।
            </li>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom color="primary">
            HTML Attributes के प्रकार और उदाहरण (हिंदी में)
          </Typography>

          <Typography variant="body1" gutterBottom>
            नीचे कुछ महत्वपूर्ण attributes और उनके उपयोग बताए गए हैं:
          </Typography>

          {attributeBlock(
            "🔸 href attribute:",
            "यह किसी लिंक का URL सेट करता है:",
            `<a href="/php">Learn PHP</a>`
          )}
          {attributeBlock(
            "🔸 src, width, height attribute:",
            "यह image के source, width और height को सेट करता है:",
            `<img src="/assets/favicon.png" width="500" height="600">`
          )}
          {attributeBlock(
            "🔸 alt attribute:",
            "यह image के ना दिखने पर alternate text देता है:",
            `<img src="any_random_img.jpg" alt="It's a random image">`
          )}
          {attributeBlock(
            "🔸 style attribute:",
            "यह किसी टैग को inline CSS देता है:",
            `<p style="color:red;">This is a red paragraph.</p>`
          )}
          {attributeBlock(
            "🔸 lang attribute:",
            "यह HTML document की language define करता है:",
            `<!DOCTYPE html>\n<html lang="en">\n  <body>\n   ...\n  </body>\n</html>`
          )}
          {attributeBlock(
            "🔸 title attribute:",
            "यह element पर hover करने पर जानकारी दिखाता है:",
            `<p title="You will see this on mouse over.">simple paragraph</p>`
          )}
          {attributeBlock(
            "🔸 class attribute:",
            "यह एक या एक से अधिक class नाम assign करता है:",
            `<p class="highlight">This is a paragraph.</p>\n<div class="box highlight">Some content</div>`
          )}
          {attributeBlock(
            "🔸 id attribute:",
            "यह element को uniquely पहचानने के लिए होता है:",
            `<p id="my_info">It's all about me.</p>`
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

const codeBoxStyle = {
  background: "#8CCDEB",
  p: 2,
  borderRadius: 2,
  mb: 2,
  fontFamily: "monospace",
  whiteSpace: "pre",
  overflowX: "auto",
  fontSize: { xs: "14px", md: "16px" },
 
};

// Helper to render blocks
const attributeBlock = (title, desc, code) => (
  <>
    <Typography variant="subtitle1" gutterBottom>
      <strong>{title}</strong>
    </Typography>
    <Typography variant="body2" gutterBottom>
      {desc}
    </Typography>
    <Box sx={codeBoxStyle}>{code}</Box>
  </>
);

export default Html_attributes;
