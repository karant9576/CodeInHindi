import { Box, Typography } from "@mui/material";

const CssBackground = () => {
  return (
    <Box sx={{ p: 2,  width: "100%", maxWidth: 900, margin: "auto" }}>
      <Typography variant="h6" gutterBottom fontWeight="bold" color='primary'>
        CSS Background Image
      </Typography>

      <Typography paragraph>
        CSS background properties का उपयोग किसी HTML element का background set करने के लिए किया जाता है। पिछले topic में आपने background color सीखा था, अब हम image background पर ध्यान देंगे।
      </Typography>

      <Typography paragraph color="secondary">CSS Background Properties:</Typography>
      <Typography component="ul" sx={{ pl: 3 }}>
        <li>background-color</li>
        <li>background-image</li>
        <li>background-repeat</li>
        <li>background-attachment</li>
        <li>background-position</li>
        <li>background (shorthand property)</li>
      </Typography>

      <Typography variant="subtitle1" gutterBottom color="secondary">CSS Background Color</Typography>
      <Typography paragraph>
        CSS में colors के लिए RGB, HEX, HSL, RGBA, HSLA आदि valid values का उपयोग किया जा सकता है:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 , overflowX: 'auto' ,whiteSpace: 'pre'}}>
      <pre>
        <code>{`body {
  background-color: powderblue;
}`}</code>
      </pre>
      </Box>

      <Typography variant="subtitle1" gutterBottom color="secondary">CSS Background Image</Typography>
      <Typography paragraph>
        background-image लगाने के लिए <code>url()</code> method का use होता है:
      </Typography>
       <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 , overflowX: 'auto' ,whiteSpace: 'pre'}}>
      <pre>
        <code>{`<style>
  body {
    background-image: url("/assets/test.jpg");
  }
</style>`}</code>
      </pre>
      </Box>
      <Typography paragraph>
        आप body के अलावा किसी भी HTML tag जैसे <code>div</code>, <code>p</code>, <code>h1</code> में भी background image set कर सकते हैं:
      </Typography>
 <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 , overflowX: 'auto' ,whiteSpace: 'pre'}}>
      <pre>
        <code>{`p {
  background-image: url("image.jpg");
}

h1 {
  background-image: url("paper.gif");
}

div {
  background-image: url("paper.gif");
}`}</code>
      </pre>
</Box>
      <Typography variant="subtitle1" gutterBottom color="secondary">CSS background-repeat</Typography>
      <Typography paragraph >
        अगर image repeat नहीं करनी हो तो:
      </Typography>
         <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2  , overflowX: 'auto' ,whiteSpace: 'pre'}}>
      <pre>
        <code>{`background-repeat: no-repeat;`}</code>
      </pre>
        </Box>
      <Typography paragraph>
        केवल horizontal direction में repeat:
      </Typography>
       <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2  , overflowX: 'auto' ,whiteSpace: 'pre'}}>
      <pre>
        <code>{`background-repeat: repeat-x;`}</code>
      </pre>
      </Box>
      <Typography paragraph>
        केवल vertical direction में repeat:
      </Typography>
       <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2  , overflowX: 'auto' ,whiteSpace: 'pre'}}>
      <pre>
        <code>{`background-repeat: repeat-y;`}</code>
      </pre>
  </Box>
      <Typography variant="subtitle1" gutterBottom color="secondary">CSS background-position</Typography>
      <Typography paragraph>
        किसी image की position सेट करने के लिए:
      </Typography>
       <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 , overflowX: 'auto' ,whiteSpace: 'pre'}}>
      <pre>
        <code>{`background-position: center;`}</code>
      </pre>
        </Box>
      <Typography paragraph>
        अन्य values:
      </Typography>
      <Typography component="ul" sx={{ pl: 3 }}>
        <li>left top</li>
        <li>right bottom</li>
        <li>center center</li>
        <li>right top</li>
        <li>center bottom</li>
      </Typography>

      <Typography variant="subtitle1" gutterBottom color="secondary">CSS background-attachment</Typography>
      <Typography paragraph>
        background image को scroll करने से रोकने या scrollable बनाने के लिए:
      </Typography>
         <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 , overflowX: 'auto' ,whiteSpace: 'pre'}}>
      <pre>
        <code>{`background-attachment: fixed;
background-attachment: scroll;`}</code>
      </pre>
        </Box>
      <Typography variant="subtitle1" gutterBottom>CSS background (Shorthand)</Typography>
      <Typography paragraph>
        आप एक ही line में सभी background properties define कर सकते हैं:
      </Typography>
       <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2  , overflowX: 'auto' ,whiteSpace: 'pre'}}>
      <pre>
        <code>{`body {
  background: hotpink url("/assets/test.jpg") no-repeat right top;
}`}</code>
      </pre>
      </Box>
    </Box>
  );
};

export default CssBackground;
