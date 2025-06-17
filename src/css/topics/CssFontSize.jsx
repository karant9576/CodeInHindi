import { Box, Typography } from "@mui/material";

const CssFontSize = () => {
  return (
    <Box sx={{ p: 2, width: "100%", maxWidth: 900, margin: "auto" }}>
      <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        CSS Font Size
      </Typography>

      <Typography gutterBottom>
        जिस तरह से <b>font-family</b> और <b>font-style</b> किसी वेबसाइट के लिए महत्वपूर्ण होते हैं, ठीक उसी तरह से <b>font-size</b> भी यूज़र एक्सपीरियंस को बेहतर बनाता है। CSS में <b>font-size</b> प्रॉपर्टी का उपयोग करके हम टेक्स्ट का आकार सेट करते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        Syntax:
      </Typography>
      <Box sx={{ bgcolor: "#8CCDEB", p: 2, my: 1, fontFamily: "monospace" }}>
        element &#123;<br />
        &nbsp;&nbsp;font-size: 20px;<br />
        &#125;
      </Box>

      <Typography>
        नीचे एक उदाहरण दिया गया है जिसमें विभिन्न font-size को लागू किया गया है:
      </Typography>

      <Box sx={{ border: "1px solid #ccc", p: 2, my: 1 }}>
        <p style={{ fontSize: "40px" }}>Hello</p>
        <p style={{ fontSize: "30px" }}>And this is all about me.</p>
        <p style={{ fontSize: "20px" }}>And this is also about me :)</p>
      </Box>

      <Typography gutterBottom>
        हालांकि, font-size को px (pixels) में डिफाइन करना जरूरी नहीं है, आप इसे <b>percent (%)</b>, <b>em</b> या <b>rem</b> में भी सेट कर सकते हैं। आमतौर पर:
      </Typography>
    <Box sx={{ ml:2, mb: 2 }}>
      <ul>
        <li><b>1em</b> = 16px (parent के अनुसार)</li>
        <li><b>1rem</b> = 16px (root element के अनुसार)</li>
        <li><b>%</b> = relative to parent element’s font size</li>
      </ul>
     </Box>
      <Typography variant="h6" gutterBottom color="secondary">
        Relative Units Example:
      </Typography>

      <Box sx={{ border: "1px solid #ccc", p: 2, my: 1 }}>
        <p style={{ fontSize: "3rem" }}>Text with 3 rem size.</p>
        <p style={{ fontSize: "2em" }}>Text with 2 em size.</p>
        <p style={{ fontSize: "100%" }}>Text size with 100%.</p>
        <p style={{ fontSize: "50%" }}>Text size with 50%.</p>
      </Box>

      <Typography variant="subtitle1" gutterBottom color="secondary">
        निष्कर्ष:
      </Typography>
      <Typography>
        <b>font-size</b> का सही उपयोग वेबसाइट की रीडेबिलिटी और डिज़ाइन को बेहतर बनाता है। Absolute units जैसे px सीधा size सेट करते हैं, जबकि relative units जैसे em/rem या % responsive और flexible डिज़ाइन में मदद करते हैं।
      </Typography>
    </Box>
  );
};

export default CssFontSize;
