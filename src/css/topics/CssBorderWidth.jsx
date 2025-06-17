import { Box, Typography } from "@mui/material";

const CssBorderWidth = () => {
  return (
    <Box sx={{ p: 2, width: '100%', maxWidth: 900, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        CSS Border Width
      </Typography>

      <Typography paragraph>
        <code>border-width</code> property का उपयोग करके आप किसी भी element के border की मोटाई (width) को control कर सकते हैं।
      </Typography>

      <Typography paragraph color="secondary" gutterBottom>
        Syntax:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 , overflow: 'auto', whiteSpace: 'pre' }}>
        <pre>
          <code>{`p {
  border-style: solid;
  border-width: 5px;
}`}</code>
        </pre>
      </Box>

      <Typography paragraph color="secondary" gutterBottom>
        CSS Border Width Example
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 , overflow: 'auto', whiteSpace: 'pre' }}>
        <pre>
          <code>{`<p style="border-style:groove; border-width:5px;">
  border width example
</p>`}</code>
        </pre>
      </Box>

      <Box
        sx={{
          borderStyle: 'groove',
          borderWidth: 5,
          borderColor: 'black',
          p: 2,
          mb: 3,
          backgroundColor: '#8CCDEB',
        }}
      >
        border width example
      </Box>

      <Typography paragraph color="secondary" gutterBottom>
        Specify Border Width for Each Side
      </Typography>
      <Typography paragraph>
        आप हर एक side (top, right, bottom, left) के लिए अलग-अलग border-width define कर सकते हैं:
      </Typography>

      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2 , overflow: 'auto', whiteSpace: 'pre' }}>
        <pre>
          <code>{`p {
  border-style: style;
  border-width: top right bottom left;
}`}</code>
        </pre>
      </Box>

      <Typography variant="subtitle2" gutterBottom>
        Example:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1, mb: 2  , overflow: 'auto', whiteSpace: 'pre' }}>
        <pre>
          <code>{`#p1 {
  border-style: groove;
  border-width: 10px 5px 2px 1px;
}

#p2 {
  border-style: solid;
  border-width: 10px 5px 2px 1px;
}

#p3 {
  border-style: dashed;
  border-width: 10px 5px 2px 1px;
}`}</code>
        </pre>
      </Box>

      {/* Live Examples */}
      <Box
        sx={{
          borderStyle: 'groove',
          borderWidth: '10px 5px 2px 1px',
          borderColor: 'black',
          p: 2,
          mb: 2,
          backgroundColor: '#8CCDEB',
        }}
      >
        border width example (groove)
      </Box>
      <Box
        sx={{
          borderStyle: 'solid',
          borderWidth: '10px 5px 2px 1px',
          borderColor: 'black',
          p: 2,
          mb: 2,
          backgroundColor: '#8CCDEB',
        }}
      >
        border width example (solid)
      </Box>
      <Box
        sx={{
          borderStyle: 'dashed',
          borderWidth: '10px 5px 2px 1px',
          borderColor: 'black',
          p: 2,
          mb: 2,
          backgroundColor: '#8CCDEB',
        }}
      >
        border width example (dashed)
      </Box>

      <Typography paragraph>
        इस तरह से आप हर side के लिए अलग-अलग width सेट करके layout को और बेहतर बना सकते हैं।
      </Typography>
    </Box>
  );
};

export default CssBorderWidth;
