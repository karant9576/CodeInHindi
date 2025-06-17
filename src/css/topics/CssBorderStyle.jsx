import { Box, Typography } from "@mui/material";

const CssBorderStyle = () => {
  const borderStyles = [
    "solid",
    "dotted",
    "dashed",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "hidden",
    "none",
  ];

  return (
    <Box sx={{ p: 2, width: '100%', maxWidth: 900, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>
        CSS Border Style
      </Typography>

      <Typography paragraph>
        CSS में <code>border-style</code> property का उपयोग किसी element के border को define करने के लिए किया जाता है। By default, border की width 3px होती है।
      </Typography>

      <Typography paragraph color="secondary" gutterBottom>
        Syntax:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 }}>
        <pre>
          <code>{`p {
  border-style: style_name;
}`}</code>
        </pre>
      </Box>

      <Typography paragraph color="secondary" gutterBottom>
        CSS Border Example
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2,  overflow: 'auto' , whiteSpace: 'pre'}}>
        <pre>
          <code>{`<p style="border-style:solid">CSS border Example </p>`}</code>
        </pre>
      </Box>

      <Typography paragraph color="secondary" gutterBottom>
        CSS Border Style Types
      </Typography>
      <Typography paragraph>
        Border-style property को हम width और color के साथ use करते हैं। CSS में निम्नलिखित border styles available हैं:
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2,  backgroundColor: '#fff', p: 2, borderRadius: 1 }}>
        {borderStyles.map((style) => (
          <Box
            key={style}
            sx={{
              border: `3px ${style} black`,
              padding: 1,
              minWidth: 120,
              textAlign: 'center',
              backgroundColor: '#8CCDEB',
                borderRadius: 1,
                boxShadow: 1,
                overflow: 'auto',
              whiteSpace: 'pre',
                margin: 'auto',
            }}
          >
            {style}
          </Box>
        ))}
      </Box>

      <Typography paragraph color="secondary" gutterBottom>
        Specify Border Style for Each Side
      </Typography>
      <Typography paragraph>
        आप चारों sides के लिए अलग-अलग border style define कर सकते हैं:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2  , overflow: 'auto', whiteSpace: 'pre' }}>
        <pre>
          <code>{`selector {
  border-style: top right bottom left;
}`}</code>
        </pre>
      </Box>

      <Typography variant="subtitle2">Example:</Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2  , overflow: 'auto', whiteSpace: 'pre' }}>
        <pre>
          <code>{`#p1 {
  border-style: solid groove dotted dashed;
}

#p2 {
  border-style: double outset inset none;
}`}</code>
        </pre>
      </Box>

      <Typography variant="subtitle2" gutterBottom>
        Live Example:
      </Typography>
      <Box
        sx={{
          borderStyle: 'solid groove dotted dashed',
          borderWidth: 3,
          borderColor: 'black',
          p: 2,
          mb: 2,
          backgroundColor: '#8CCDEB',
          whiteSpace:'pre',
          overflow:'auto'
        }}
      >
        border-style example (solid groove dotted dashed)
      </Box>
      <Box
        sx={{
          borderStyle: 'double outset inset none',
          borderWidth: 3,
          borderColor: 'black',
          p: 2,
          backgroundColor: '#8CCDEB',
          whiteSpace:'pre',
          overflow:'auto'
        }}
      >
        border-style example (double outset inset none)
      </Box>

      <Typography paragraph>
        इस उदाहरण में, पहले paragraph का border <strong>solid, groove, dotted, dashed</strong> style में है, जबकि दूसरे paragraph का border <strong>double, outset, inset, none</strong> style में है।
      </Typography>

      <Typography paragraph>
        CSS में border style को समझना और सही तरीके से apply करना बहुत महत्वपूर्ण है। इससे आपके web pages की appearance और usability दोनों में सुधार होता है।
      </Typography>
    </Box>
  );
};

export default CssBorderStyle;
