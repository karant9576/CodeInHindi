import React from "react";
import { Typography, Box } from "@mui/material";

const CssTextDecoration = () => {
  return (
    <Box sx={{ p: 2,  width: "100%", maxWidth: 900, margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        CSS Text Decoration (टेक्स्ट डेकोरेशन)
      </Typography>

      <Typography paragraph>
        <b>Text Decoration</b> का मतलब होता है किसी टेक्स्ट पर लाइन लगाना — जैसे नीचे रेखा (underline), ऊपर रेखा (overline), या टेक्स्ट के बीच से काटना (line-through)। इसके साथ हम रंग (color), शैली (style), और मोटाई (thickness) भी सेट कर सकते हैं।
      </Typography>

      <Typography paragraph>
        CSS में Text Decoration के लिए निम्नलिखित properties होती हैं:
      </Typography>
     <Box sx={{ml: 2,mb: 2}}>
      <ul>
        <li><b>text-decoration-line</b></li>
        <li><b>text-decoration-color</b></li>
        <li><b>text-decoration-style</b></li>
        <li><b>text-decoration-thickness</b></li>
        <li><b>text-decoration</b> (shorthand)</li>
      </ul>
     </Box>
      {/* ----------- text-decoration-line ----------- */}
      <Typography variant="h6" gutterBottom color="secondary">
        1. text-decoration-line
      </Typography>
      <Typography paragraph>
        यह प्रॉपर्टी तय करती है कि टेक्स्ट पर कौन सी लाइन दिखाई देगी। इसकी मुख्य वैल्यूज़ हैं: <i>underline, overline, line-through, none</i> आदि।
      </Typography>

      <Box sx={{ background: "#8CCDEB", p: 2, mb: 2, whiteSpace: "pre", overflowX: "auto" }}>
        <pre>
{`<p style="text-decoration-line: underline;">This is underline</p>
<p style="text-decoration-line: overline;">This is overline</p>
<p style="text-decoration-line: line-through;">This is line-through</p>`}
        </pre>
      </Box>

      <p style={{ textDecorationLine: "underline" }}>This is <b>underline</b></p>
      <p style={{ textDecorationLine: "overline" }}>This is <b>overline</b></p>
      <p style={{ textDecorationLine: "line-through" }}>This is <b>line-through</b></p>

      {/* ----------- text-decoration-color ----------- */}
      <Typography variant="h6" gutterBottom color="secondary">
        2. text-decoration-color
      </Typography>
      <Typography paragraph>
        इस प्रॉपर्टी से आप लाइन का रंग सेट कर सकते हैं।
      </Typography>

      <Box sx={{ background: "#8CCDEB", p: 2, mb: 2, whiteSpace: "pre", overflowX: "auto" }}>
        <pre>
{`<p style="text-decoration-line: underline; text-decoration-color: green;">Green underline</p>
<p style="text-decoration-line: overline; text-decoration-color: red;">Red overline</p>`}
        </pre>
      </Box>

      <p style={{ textDecorationLine: "underline", textDecorationColor: "green" }}>
        Green underline
      </p>
      <p style={{ textDecorationLine: "overline", textDecorationColor: "red" }}>
        Red overline
      </p>

      {/* ----------- text-decoration-style ----------- */}
      <Typography variant="h6" gutterBottom color="secondary">
        3. text-decoration-style
      </Typography>
      <Typography paragraph>
        इससे आप लाइन की स्टाइल सेट करते हैं। जैसे: <i>solid, double, dotted, dashed, wavy</i>।
      </Typography>

      <p style={{ textDecorationLine: "underline", textDecorationStyle: "double", textDecorationColor: "green" }}>
        Double underline
      </p>
      <p style={{ textDecorationLine: "underline", textDecorationStyle: "dotted", textDecorationColor: "red" }}>
        Dotted underline
      </p>
      <p style={{ textDecorationLine: "overline", textDecorationStyle: "wavy", textDecorationColor: "blue" }}>
        Wavy overline
      </p>

      {/* ----------- text-decoration-thickness ----------- */}
      <Typography variant="h6" gutterBottom color="secondary">
        4. text-decoration-thickness
      </Typography>
      <Typography paragraph>
        यह लाइन की मोटाई (thickness) सेट करने के लिए उपयोग होती है।
      </Typography>

      <p style={{ textDecoration: "underline green solid 2px" }}>
        Underline with 2px thickness
      </p>
      <p style={{ textDecoration: "underline red dashed 4px" }}>
        Underline with 4px thickness
      </p>
      <p style={{ textDecoration: "overline blue double 3px" }}>
        Overline with 3px thickness
      </p>

      {/* ----------- text-decoration (shorthand) ----------- */}
      <Typography variant="h6" gutterBottom color="secondary">
        5. text-decoration (Shorthand)
      </Typography>
      <Typography paragraph>
        यह shorthand प्रॉपर्टी है जिसमें आप सभी values एक साथ दे सकते हैं:
      </Typography>

      <Box sx={{ background: "#8CCDEB", p: 2, mb: 2, whiteSpace: "pre", overflowX: "auto" }}>
        <pre>
{`text-decoration: underline red double 2px;`}
        </pre>
      </Box>

      <p style={{ textDecoration: "underline green double 2px" }}>
        underline green double 2px
      </p>
      <p style={{ textDecoration: "overline orange dashed 3px" }}>
        overline orange dashed 3px
      </p>
      <p style={{ textDecoration: "line-through rebeccapurple wavy 2px" }}>
        line-through rebeccapurple wavy 2px
      </p>
    </Box>
  );
};

export default CssTextDecoration;
