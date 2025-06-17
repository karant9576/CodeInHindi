import { Box, Typography } from "@mui/material";

const CssTextShadow = () => {
  return (
    <Box sx={{ p: 2 , width: '100%', maxWidth: 900, margin: "auto" }}>
      <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        CSS text-shadow
      </Typography>
      <Typography gutterBottom>
        <b>text-shadow</b> property का use किसी text में shadow (छाया) apply करने के लिए किया जाता है। यह एक shorthand property है जो horizontal, vertical shadow, blur और color को define करती है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        text-shadow की मुख्य values:
      </Typography>
      <Box sx={{ ml: 2, mb: 2 }}>
        <ul>
          <li><b>horizontal offset</b> – shadow की horizontal दूरी।</li>
          <li><b>vertical offset</b> – shadow की vertical दूरी।</li>
          <li><b>blur radius</b> – shadow का blur effect।</li>
          <li><b>color</b> – shadow का रंग।</li>
        </ul>
      </Box>

      <Typography variant="h6" gutterBottom>
        CSS Syntax:
      </Typography>
      <Box sx={{ background: "#8CCDEB", padding: "10px", marginBottom: 2, whiteSpace: "pre" , overflowX: "auto", borderRadius: "10px"  }}>
        <code>
{`element {
  text-shadow: horizontal vertical [blur] color;
}`}
        </code>
      </Box>

      <Typography variant="h6" gutterBottom>
        उदाहरण (Examples):
      </Typography>
      <Typography gutterBottom>
        नीचे कुछ उदाहरण दिए गए हैं जो text-shadow property के विभिन्न उपयोग को दर्शाते हैं:
      </Typography>

      <Typography variant="subtitle1"><b>✅ Basic Shadow:</b></Typography>
      <Box sx={{ background: "#8CCDEB", p: 1, mb: 2, whiteSpace: "pre", overflowX: "auto" ,borderRadius: 2, }}>
      <pre>{`p {
  text-shadow: 3px 3px;
}`}</pre>
        </Box>
      <Box sx={{ border: '1px solid #ccc', p: 2, my: 1 }}>
        <p style={{ textShadow: "3px 3px", fontSize: "30px" }}>Basic Shadow</p>
      </Box>

      <Typography variant="subtitle1"><b>✅ Shadow With Color:</b></Typography>
      <Box sx={{ background: "#8CCDEB", p: 1, mb: 2, whiteSpace: "pre", overflowX: "auto" ,borderRadius: 2, }}>
      <pre>{`p {
  text-shadow: 3px 3px red;
}`}</pre>
        </Box>
      <Box sx={{ border: '1px solid #ccc', p: 2, my: 1 }}>
        <p style={{ textShadow: "3px 3px red", fontSize: "30px" }}>Red Shadow</p>
        <p style={{ textShadow: "3px 3px gold", fontSize: "30px" }}>Gold Shadow</p>
        <p style={{ textShadow: "3px 3px green", fontSize: "30px" }}>Green Shadow</p>
      </Box>

      <Typography variant="subtitle1"><b>✅ Shadow With Blur:</b></Typography>
        <Box sx={{ background: "#8CCDEB", p: 1, mb: 2, whiteSpace: "pre", overflowX: "auto" ,borderRadius: 2, }}>
      <pre>{`p {
  text-shadow: 3px 3px 5px red;
}`}</pre>
        </Box>
      <Box sx={{ border: '1px solid #ccc', p: 2, my: 1 }}>
        <p style={{ textShadow: "3px 3px 5px red", fontSize: "30px" }}>Blurred Red Shadow</p>
        <p style={{ textShadow: "3px 3px 5px gold", fontSize: "30px" }}>Blurred Gold Shadow</p>
        <p style={{ textShadow: "0px 0px 5px green", fontSize: "30px" }}>Blurred Green Shadow</p>
      </Box>

      <Typography variant="subtitle1"><b>✅ Multiple Shadows:</b></Typography>
        <Box sx={{ background: "#8CCDEB", p: 1, mb: 2, whiteSpace: "pre", overflowX: "auto" ,borderRadius: 2, }}>
      <pre>{`p {
  text-shadow: 5px 2px 2px red, 7px 2px 2px green;
}`}</pre>
        </Box>
      <Box sx={{ border: '1px solid #ccc', p: 2, my: 1 }}>
        <p style={{ textShadow: "5px 2px 2px red, 7px 2px 2px green", fontSize: "30px" }}>Multiple Shadows</p>
        <p style={{ textShadow: "5px 2px 2px blueviolet, 7px 2px 2px red", fontSize: "30px" }}>Multiple Shadows</p>
        <p style={{ textShadow: "5px 2px 2px gold, 7px 2px 2px green", fontSize: "30px" }}>Multiple Shadows</p>
      </Box>

      <Typography variant="subtitle1" gutterBottom color="secondary">
        CSS text-shadow property का उपयोग करके आप अपने text को visually appealing बना सकते हैं। यह property text को depth और dimension देती है, जिससे वह और भी आकर्षक लगता है।
      </Typography>
    </Box>
  );
};

export default CssTextShadow;
