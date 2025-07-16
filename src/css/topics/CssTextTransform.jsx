import React from "react";
import { Typography, Box } from "@mui/material";

const CssTextTransform = () => {
  return (
    <Box sx={{ p: 2 ,width:'100%', maxWidth: 900, margin: "auto" }}>
      <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        CSS Text-Transform
      </Typography>

      <Typography paragraph>
        <b>text-transform</b> property का उपयोग टेक्स्ट को छोटे अक्षर (lowercase), बड़े अक्षर (uppercase), या हर शब्द के पहले अक्षर को capital करने के लिए किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        text-transform की मुख्य values:
      </Typography>
     <Box sx={{ ml: 2, mb: 2 }}>
      <ul>
        <li><b>none</b> – टेक्स्ट जैसा होता है वैसा ही दिखता है, कोई परिवर्तन नहीं होता।</li>
        <li><b>capitalize</b> – हर शब्द का पहला अक्षर capital हो जाता है।</li>
        <li><b>uppercase</b> – सभी अक्षर capital (बड़े अक्षर) में बदल जाते हैं।</li>
        <li><b>lowercase</b> – सभी अक्षर small (छोटे अक्षर) में बदल जाते हैं।</li>
        <li><b>initial</b> – यह ब्राउज़र की डिफ़ॉल्ट वैल्यू को सेट करता है।</li>
        <li><b>inherit</b> – यह parent element से value inherit करता है।</li>
      </ul>
     </Box>
      <Typography variant="h6" gutterBottom>
        CSS Syntax:
      </Typography>

      <Box sx={{ background: "#8CCDEB", padding: "10px", marginBottom: 2, whiteSpace: "pre" , overflowX: "auto", borderRadius: "10px"  }}>
        <code>
          {`element {
  text-transform: none | capitalize | uppercase | lowercase | initial | inherit;
}`}
        </code>
      </Box>

      <Typography variant="h6" gutterBottom>
        उदाहरण (Examples):
      </Typography>
      <Box sx={{ mb: 2 }}>
      <p style={{ textTransform: "none" }}>
        text-transform: <b>none;</b> example
      </p>
      <p style={{ textTransform: "capitalize" }}>
        text-transform: <b>capitalize;</b> example
      </p>
      <p style={{ textTransform: "uppercase" }}>
        text-transform: <b>uppercase;</b> example
      </p>
      <p style={{ textTransform: "lowercase" }}>
        text-transform: <b>lowercase;</b> EXAMPLE
      </p>
      <p style={{ textTransform: "initial" }}>
        text-transform: <b>initial;</b> example
      </p>
      <p style={{ textTransform: "uppercase" }}>
        <span style={{ textTransform: "inherit" }}>
          text-transform: <b>inherit;</b> example
        </span>
      </p>
     </Box>
      <Typography variant="h6" gutterBottom color="secondary">
        पूरा HTML Example:
      </Typography>

     {/* HTML Code Block */}
<Box sx={{ background: "#8CCDEB", padding: "10px", whiteSpace: "pre", overflowX: "auto", marginBottom: 2 , borderRadius: "10px" }}>
  <pre>
    {`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSS text-transform example</title>
  </head>
  <body>
    <p style="text-transform:none;">text-transform: <b>none;</b> example</p>
    <p style="text-transform:capitalize;">text-transform: <b>capitalize;</b> example</p>
    <p style="text-transform:uppercase;">text-transform: <b>uppercase;</b> example</p>
    <p style="text-transform:lowercase;">text-transform: <b>lowercase;</b> EXAMPLE</p>
    <p style="text-transform:initial;">text-transform: <b>initial;</b> example</p>
    <p style="text-transform:uppercase;">
      <span style="text-transform:inherit;">text-transform: <b>inherit;</b> example</span>
    </p>
  </body>
</html>`}
  </pre>
</Box>

{/* Output Preview */}
<Typography variant="h6" gutterBottom>
  Output:
</Typography>

<Box sx={{ border: "1px solid #ccc", padding: 2, borderRadius: 3, background: "#8CCDEB" }}>
  <p style={{ textTransform: "none" }}>
    text-transform: <b>none;</b> example
  </p>
  <p style={{ textTransform: "capitalize" }}>
    text-transform: <b>capitalize;</b> example
  </p>
  <p style={{ textTransform: "uppercase" }}>
    text-transform: <b>uppercase;</b> example
  </p>
  <p style={{ textTransform: "lowercase" }}>
    text-transform: <b>lowercase;</b> EXAMPLE
  </p>
  <p style={{ textTransform: "initial" }}>
    text-transform: <b>initial;</b> example
  </p>
  <p style={{ textTransform: "uppercase" }}>
    <span style={{ textTransform: "inherit" }}>
      text-transform: <b>inherit;</b> example
    </span>
  </p>
</Box>

    </Box>
  );
};

export default CssTextTransform;
