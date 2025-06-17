import { Box, Typography } from "@mui/material";

const CssAlignment = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 900, mx: "auto" }}>
      <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
        CSS Alignment
      </Typography>

      <Typography paragraph>
        CSS में alignment का मतलब होता है किसी HTML element के अंदर content किस तरह से दिखाई देगा। इसके लिए हम <code>text-align</code>, <code>text-align-last</code> और <code>vertical-align</code> जैसी properties का इस्तेमाल करते हैं।
      </Typography>

      {/* TEXT-ALIGN */}
      <Typography variant="h6" gutterBottom color="secondary">
        1. CSS <code>text-align</code>
      </Typography>
      <Typography paragraph>
        <code>text-align</code> property का उपयोग किसी element के अंदर टेक्स्ट को align करने के लिए किया जाता है।
      </Typography>
      <Typography component="ul" sx={{ pl: 3 }}>
        <li><strong>left:</strong> टेक्स्ट बाईं ओर दिखाई देता है।</li>
        <li><strong>center:</strong> टेक्स्ट सेंटर में आता है।</li>
        <li><strong>right:</strong> टेक्स्ट दाईं ओर दिखाई देता है।</li>
        <li><strong>justify:</strong> टेक्स्ट की हर लाइन बराबर चौड़ाई में बाँटी जाती है।</li>
      </Typography>

      {/* Text-align Examples */}
      <Typography variant="subtitle1" gutterBottom mt={2}>
        Examples:
      </Typography>
      <Box sx={{ textAlign: "left", border: "1px solid gray", p: 1, mb: 1 }}>
        Text align left
      </Box>
      <Box sx={{ textAlign: "center", border: "1px solid gray", p: 1, mb: 1 }}>
        Text align center
      </Box>
      <Box sx={{ textAlign: "right", border: "1px solid gray", p: 1, mb: 1 }}>
        Text align right
      </Box>
      <Box sx={{ textAlign: "justify", border: "1px solid gray", p: 1, mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
      </Box>

      {/* TEXT-ALIGN-LAST */}
      <Typography variant="h6" gutterBottom color="secondary">
        2. CSS <code>text-align-last</code>
      </Typography>
      <Typography paragraph>
        <code>text-align-last</code> property से किसी paragraph या element की आखिरी लाइन को align किया जाता है।
      </Typography>

      <Box sx={{ textAlignLast: "center", border: "1px solid #ccc", p: 1, mb: 1 }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar.
        </Typography>
      </Box>
      <Box sx={{ textAlignLast: "right", border: "1px solid #ccc", p: 1, mb: 1 }}>
        <Typography>
          Vestibulum volutpat tellus diam, consequat gravida libero rhoncus.
        </Typography>
      </Box>
      <Box sx={{ textAlignLast: "justify", border: "1px solid #ccc", p: 1, mb: 2 }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus.
        </Typography>
      </Box>

      {/* VERTICAL ALIGN */}
      <Typography variant="h6" gutterBottom color="secondary">
        3. CSS <code>vertical-align</code>
      </Typography>
      <Typography paragraph>
        यह property किसी inline या table-cell element को vertically align करने के लिए use होती है।
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><code>baseline</code>, <code>sub</code>, <code>super</code></li>
        <li><code>top</code>, <code>middle</code>, <code>bottom</code></li>
        <li><code>text-top</code>, <code>text-bottom</code>, <code>initial</code></li>
      </Typography>

      <Box sx={{ my: 2 }}>
        <Typography>Text with <b style={{ verticalAlign: "initial" }}>initial</b> alignment</Typography>
        <Typography>Text with <b style={{ verticalAlign: "sub" }}>sub</b> alignment</Typography>
        <Typography>Text with <b style={{ verticalAlign: "super" }}>super</b> alignment</Typography>
        <Typography>Text with <b style={{ verticalAlign: "top" }}>top</b> alignment</Typography>
        <Typography>Text with <b style={{ verticalAlign: "text-top" }}>text-top</b> alignment</Typography>
        <Typography>Text with <b style={{ verticalAlign: "middle" }}>middle</b> alignment</Typography>
        <Typography>Text with <b style={{ verticalAlign: "bottom" }}>bottom</b> alignment</Typography>
        <Typography>Text with <b style={{ verticalAlign: "text-bottom" }}>text-bottom</b> alignment</Typography>
      </Box>
    </Box>
  );
};

export default CssAlignment;
