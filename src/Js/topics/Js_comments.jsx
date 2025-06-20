import { Box, Typography } from "@mui/material";

const Js_comments = () => {
  return (
    <Box sx={{ p: 2 , maxWidth: 1000, mx: "auto" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Comments
      </Typography>

      <Typography paragraph>
        Comment वह लाइन होती है जो कोड में लिखी जाती है लेकिन execute नहीं होती। इसका उपयोग यह बताने के लिए किया जाता है कि कोड में किस जगह क्या किया गया है। इससे भविष्य में कोड को पढ़ने या संशोधित करने में आसानी होती है।
      </Typography>

      <Typography paragraph color="secondary">
        JavaScript में दो प्रकार के comments होते हैं:
      </Typography>
        <Box ml={2}>
         ⁘ Single Line Comment<br/>
         ⁘ Multi Line Comment<br/>
        </Box>

      <Typography variant="h6" gutterBottom color="secondary" mt={2}>
        📝 Single Line Comments
      </Typography>

      <Typography paragraph>
        Single line comment को <code>//</code> से शुरू किया जाता है। यह एक ही लाइन को comment बनाता है।
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Example (comments.html):
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto', whiteSpace:'pre' }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Single Line Comment</title>
  </head>
  <body>
    <script>
      document.write('This is single line comment');
      // this is single line comment
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Output:</strong> This is single line comment
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🧾 Multi Line Comments
      </Typography>

      <Typography paragraph>
        Multi-line comments <code>/*</code> से शुरू होकर <code>*/</code> पर खत्म होते हैं। यह एक से अधिक लाइनों को comment करने के लिए उपयोग किया जाता है।
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Example (comments2.html):
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto', whiteSpace:'pre' }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Multi Line Comment</title>
  </head>
  <body>
    <script>
      document.write('This is multi line comment');
      /* this is 
         multi 
         line 
         comment */
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Output:</strong> This is multi line comment
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Why Use Comments?
      </Typography>

      <Typography paragraph>
        <Box >
         ⁘ Project को maintain और update करने में आसानी होती है।<br/>
         ⁘ दूसरे developers के लिए कोड समझने में सुविधा होती है।<br/>
         ⁘ Comments coding standards को दर्शाते हैं।<br/>
         ⁘ Code की readability और clarity बढ़ती है।<br/>
        </Box>
      </Typography>
    </Box>
  );
};

export default Js_comments;
