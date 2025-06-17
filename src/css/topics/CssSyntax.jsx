import { Box, Typography } from "@mui/material";

const CssSyntax = () => {
  return (
    <Box sx={{ p: 2 , width: '100%', maxWidth: 950, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>
        CSS Syntax क्या है?
      </Typography>

      <Typography paragraph>
        पिछले topic में आपने CSS के बारे में पढ़ा और समझा। इस topic में हम जानेंगे कि CSS का syntax क्या होता है और इसे कैसे use किया जाता है।
      </Typography>

      <Typography paragraph>
        <strong>Inline</strong> या <strong>Internal CSS</strong> के लिए हम CSS को <code>&lt;style&gt;</code> tag के अंदर define करते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom fontWeight="bold" color='secondary'>
        🎯 Basic CSS Syntax Example:
      </Typography>

      <Box component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, overflowX: 'auto', borderRadius: 1 }}>
        <code>
{`h1 {
  color: red;
}`}
        </code>
      </Box>

      <Typography variant="body1" gutterBottom fontWeight="bold">
        Explain:
      </Typography>
      <Typography paragraph>
        <strong>h1:</strong> यह एक <strong>selector</strong> है जो बताता है कि हम CSS किस HTML element पर apply कर रहे हैं। Selector कई प्रकार के हो सकते हैं जैसे element selector, class selector, ID selector आदि।
      </Typography>
      <Typography paragraph>
        <strong>color:</strong> यह CSS की एक property है जो बताती है कि हम किसी element का color set करना चाहते हैं।
      </Typography>
      <Typography paragraph>
        <strong>red:</strong> यह property की value है।
      </Typography>

      <Typography paragraph>
        आप चाहें तो एक से ज्यादा selectors को एक साथ style कर सकते हैं, और एक ही selector के लिए multiple properties भी define कर सकते हैं:
      </Typography>

      <Box component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, overflowX: 'auto', borderRadius: 1 }}>
        <code>
{`body, p {
  color: red;
  background-color: black;
}`}
        </code>
      </Box>

      <Typography variant="h6" gutterBottom fontWeight="bold" color='secondary'>
        📄 CSS Applied Example:
      </Typography>

      <Typography>File: <code>test.html</code></Typography>

      <Box component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, overflowX: 'auto', borderRadius: 1 }}>
        <code>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSS Example</title>
    <style>
      body {
        background-color: black;
      }

      h2 {
        color: red;
      }

      p {
        font-family: verdana;
        font-size: 20px;
        color: green;
      }
    </style>
  </head>
  <body>
    <h2>Hello Learners</h2>
    <p>This is paragraph</p>
  </body>
</html>`}
        </code>
      </Box>

      <Typography paragraph>
        अब जब आप इस example को run करेंगे, तो आपको दिखाई देगा कि CSS की help से background color, font style और text color सभी change हो गए हैं।
      </Typography>

      <Typography paragraph>
        <strong> निष्कर्ष:</strong> इस तरह से हम CSS syntax को समझ कर, उसे HTML elements पर apply करके web pages को सुंदर बना सकते हैं।
      </Typography>
    </Box>
  );
};

export default CssSyntax;
