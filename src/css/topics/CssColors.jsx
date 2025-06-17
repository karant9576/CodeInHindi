import { Box, Typography } from "@mui/material";

const CssColors = () => {
  return (
    <Box sx={{ p: 2  , width: "100%", maxWidth: 900, margin: "auto" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>
        CSS में Colors कैसे Use करें?
      </Typography>

      <Typography paragraph>
        पिछले topic में आपने CSS में Selectors के बारे में पढ़ा और समझा। इस topic में हम सीखेंगे कि किसी text के लिए font color या background color कैसे apply करें।
      </Typography>

      <Typography paragraph>
        CSS में colors के लिए आप RGB, HEX, HSL, RGBA, HSLA जैसे formats या direct color names का इस्तेमाल कर सकते हैं।
      </Typography>

      <Typography variant="subtitle1" gutterBottom color="secondary">
        कुछ Common Color Names:
      </Typography>
      <Typography paragraph>
        indigo, yellow, green, red, goldenrod, greenyellow, rebeccapurple, royalblue, black, rosybrown, violet,
        lawngreen, lightcoral, lightgreen, orange, lightseagreen, blue, tomato, teal, pink, peru, darkorchid,
        forestgreen, gold, hotpink, khaki, chartreuse, silver, aqua, powderblue
      </Typography>

      <Typography variant="subtitle1" gutterBottom color="secondary">
        CSS Color Formats और उनका अंतर:
      </Typography>

      <Typography paragraph>
        <strong>• Decimal Color:</strong> <br />
        Decimal में आप 0 से 255 तक की value assign करते हैं। जैसे: <code>#234</code>
      </Typography>

      <Typography paragraph>
        <strong>• Hexa-Decimal Color:</strong> <br />
        इसमें 6-digit hexadecimal value use होती है (0-9 और a-f)। जैसे: <code>#2a3b4c</code>
      </Typography>

      <Typography   paragraph>
        <strong>• RGB Color:</strong> <br />
        Format: <code>rgb(123,234,211)</code>
      </Typography>

      <Typography paragraph>
        <strong>• RGBA Color:</strong> <br />
        Opacity शामिल होती है (0.1 से 1 तक)। जैसे: <code>rgba(123,234,211, 0.3)</code>
      </Typography>

      <Typography paragraph>
        <strong>• HSL Color:</strong> <br />
        Hue, Saturation और Lightness: <code>hsl(120, 77%, 38%)</code>
      </Typography>

      <Typography paragraph>
        <strong>• HSLA Color:</strong> <br />
        HSL के साथ Opacity भी: <code>hsla(64, 81%, 49%, 0.1)</code>
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        CSS Text Color Example:
      </Typography>
      <Typography component="pre" sx={{ backgroundColor: "#8CCDEB", p: 1, borderRadius: 1, overflowX: "auto", whiteSpace: "pre" }}>
{`<h2 style="color: blue;">Put Direct Color Name</h2>
<h2 style="color: #199;">Decimal Color Name</h2>
<h2 style="color: #e93772;">Hexa Decimal Color</h2>
<h2 style="color: rgb(255, 99, 71);">RGB Color</h2>
<h2 style="color: rgba(166, 37, 184, 0.2);">RGBA Color</h2>
<h2 style="color: hsl(120, 77%, 38%);">HSL Color</h2>
<h2 style="color: hsla(64, 81%, 49%, 0.1)">HSLA Color</h2>`}
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        CSS Background Color Example:
      </Typography>
      <Typography component="pre" sx={{ backgroundColor: "#8CCDEB", p: 1, borderRadius: 1, overflowX: "auto"  , whiteSpace: "pre" }}>
{`<h2 style="background-color: blue;">Put Direct Color Name</h2>
<h2 style="background-color: #199;">Decimal Color Name</h2>
<h2 style="background-color: #e93772;">Hexa Decimal Color</h2>
<h2 style="background-color: rgb(255, 99, 71);">RGB Color</h2>
<h2 style="background-color: rgba(166, 37, 184, 0.2);">RGBA Color</h2>
<h2 style="background-color: hsl(120, 77%, 38%);">HSL Color</h2>
<h2 style="background-color: hsla(64, 81%, 49%, 0.1)">HSLA Color</h2>`}
      </Typography>
    </Box>
  );
};

export default CssColors;
