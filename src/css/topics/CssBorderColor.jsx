import { Box, Typography } from "@mui/material";

const BorderColor = () => {
  return (
    <Box sx={{ p: 2, width: '100%', maxWidth: 900, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        CSS Border Color
      </Typography>

      <Typography paragraph>
        <code>border-color</code> property का उपयोग करके आप किसी भी element के border का रंग (color) define कर सकते हैं।
      </Typography>

      <Typography paragraph color="secondary" gutterBottom>
        Syntax:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 }}>
        <pre>
          <code>{`p {
  border-style: outset;
  border-color: green;
}`}</code>
        </pre>
      </Box>

      <Typography paragraph color="secondary" gutterBottom>
        CSS Border Color Example
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 ,overflowX: 'auto',whiteSpace: 'pre'}}>
        <pre>
          <code>{`<p style="border-style:groove; border-width:10px; border-color:aqua;">
  border-color example
</p>`}</code>
        </pre>
      </Box>

      <Box
        sx={{
          borderStyle: 'groove',
          borderWidth: 10,
          borderColor: 'aqua',
          p: 2,
          mb: 3,
          backgroundColor: '#8CCDEB',
        }}
      >
        border-color example (aqua)
      </Box>

      <Typography paragraph color="secondary" gutterBottom>
        Specify Border Color for Each Side
      </Typography>

      <Typography paragraph>
        जैसे आप border-width को चारों ओर अलग-अलग set कर सकते हैं, वैसे ही आप border-color को भी top, right, bottom, और left के लिए अलग-अलग set कर सकते हैं।
      </Typography>

      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 ,overflowX: 'auto',whiteSpace: 'pre'}}>
        <pre>
          <code>{`selector {
  border-style: groove;
  border-width: 10px;
  border-color: top right bottom left;
}`}</code>
        </pre>
      </Box>

      <Typography variant="subtitle2" gutterBottom>
        Example:
      </Typography>

      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2, overflowX: 'auto',whiteSpace: 'pre' }}>
        <pre>
          <code>{`#p1 {
  border-style: groove;
  border-width: 10px;
  border-color: blue blueviolet lightskyblue lightsteelblue;
}

#p2 {
  border-style: solid;
  border-width: 10px;
  border-color: red lightcoral palevioletred hotpink;
}

#p3 {
  border-style: dashed;
  border-width: 10px;
  border-color: yellow yellowgreen goldenrod greenyellow;
}

#p4 {
  border-style: inset;
  border-width: 10px;
  border-color: green red blueviolet gold;
}`}</code>
        </pre>
      </Box>

      {/* Live Examples */}
      <Box
        sx={{
          borderStyle: 'groove',
          borderWidth: 10,
          borderColor: 'blue blueviolet lightskyblue lightsteelblue',
          p: 2,
          mb: 2,
          backgroundColor: '#8CCDEB',
        }}
      >
        border-color example (groove)
      </Box>
      <Box
        sx={{
          borderStyle: 'solid',
          borderWidth: 10,
          borderColor: 'red lightcoral palevioletred hotpink',
          p: 2,
          mb: 2,
          backgroundColor: '#8CCDEB',
        }}
      >
        border-color example (solid)
      </Box>
      <Box
        sx={{
          borderStyle: 'dashed',
          borderWidth: 10,
          borderColor: 'yellow yellowgreen goldenrod greenyellow',
          p: 2,
          mb: 2,
          backgroundColor: '#8CCDEB',
        }}
      >
        border-color example (dashed)
      </Box>
      <Box
        sx={{
          borderStyle: 'inset',
          borderWidth: 10,
          borderColor: 'green red blueviolet gold',
          p: 2,
          mb: 2,
          backgroundColor: '#8CCDEB',
        }}
      >
        border-color example (inset)
      </Box>

      <Typography paragraph>
        इन उदाहरणों में color names का उपयोग किया गया है, लेकिन आप चाहें तो RGB, HEX, HSL, RGBA, या HSLA जैसे किसी भी valid color format का उपयोग कर सकते हैं।
      </Typography>
    </Box>
  );
};

export default BorderColor;
