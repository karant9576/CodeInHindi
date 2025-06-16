import { Box, Typography, Divider, Container } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
const Html_elements = () => {
  return (
    <Box sx={{ py: 3, px: { xs: 1, sm: 3 }, }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom color="primary">
          HTML एलिमेंट्स
        </Typography>

        <Typography variant="body1" gutterBottom>
          हम HTML elements को <strong>start tag</strong>, <strong>content</strong> और <strong>end tag</strong> से define करते हैं...
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>उदाहरण:</Typography>
        <Box component={Paper} sx={{ mb: 2, overflowX: 'auto' }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell><strong>Start Tag</strong></TableCell>
        <TableCell><strong>Content</strong></TableCell>
        <TableCell><strong>End Tag</strong></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>{'<p>'}</TableCell>
        <TableCell>This is paragraph.</TableCell>
        <TableCell>{'</p>'}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>{'<h1>'}</TableCell>
        <TableCell>This is heading.</TableCell>
        <TableCell>{'</h1>'}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>{'<div>'}</TableCell>
        <TableCell>This is division.</TableCell>
        <TableCell>{'</div>'}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</Box>

        <Typography variant="body1" gutterBottom>
          तो यहाँ <code>&lt;p&gt;</code> और <code>&lt;/p&gt;</code> एक HTML element है...
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom color="primary">
          HTML Tags और Elements में अंतर
        </Typography>

        <Typography variant="body1" gutterBottom>
          🔹 HTML Tag content को define करता है...<br />
          🔹 Tag में हम element को शुरू और खत्म कर सकते हैं...
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>HTML Elements Example:</Typography>
        <Box sx={codeBoxStyle}>
{`<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>`}
        </Box>

        <Box sx={outputBoxStyle}>
          <Typography variant="body1"><strong>Output:</strong></Typography>
          <Typography variant="h6">My First Heading</Typography>
          <Typography>My first paragraph.</Typography>
        </Box>

        <Typography variant="h6" gutterBottom>Nested Elements Example:</Typography>
        <Box sx={codeBoxStyle}>
{`<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>`}
        </Box>

        <Box sx={outputBoxStyle}>
          <Typography variant="body1"><strong>Output:</strong></Typography>
          <Typography variant="h6">My First Heading</Typography>
          <Typography>My first paragraph.</Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom color="primary">
          HTML Element के प्रकार
        </Typography>

        <Typography variant="body1" gutterBottom>
          🔹 void elements<br />
          🔹 template element<br />
          🔹 raw text elements<br />
          🔹 escapable raw text elements<br />
          🔹 foreign elements<br />
          🔹 normal elements
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom color="primary">
          HTML Block Elements
        </Typography>
        <Typography variant="body1" gutterBottom>
          Block elements हमेशा नई लाइन से शुरू होते हैं...
        </Typography>
        <Box sx={codeBoxStyle}>
{`<address>, <article>, <aside>, <blockquote>, <canvas>, <dd>, <div>, <dl>, <dt>, <fieldset>,
<figcaption>, <figure>, <footer>, <form>, <h1> - <h6>, <header>, <hr>, <li>, <main>,
<nav>, <noscript>, <p>, <pre>, <section>`}
        </Box>

        <Typography variant="h6" gutterBottom color="primary">
          HTML Inline Elements
        </Typography>
        <Typography variant="body1" gutterBottom>
          Inline elements नई लाइन से शुरू नहीं होते...
        </Typography>
        <Box sx={codeBoxStyle}>
{`<a>, <abbr>, <b>, <bdo>, <big>, <br>, <button>, <cite>, <code>, <dfn>, <em>, <i>, <img>,
<input>, <kbd>, <label>, <map>, <object>, <output>, <q>, <samp>, <script>, <select>,
<small>, <span>, <strong>, <sub>, <sup>`}
        </Box>

        <Typography variant="h6" gutterBottom>
          HTML Element Example:
        </Typography>
        <Box sx={codeBoxStyle}>
{`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Elements Example</title>
  </head>
  <body>
    <h5>h5 is a block element</h5>
    <header>header is a block element</header>
    <div>div is a block element</div>
    <blockquote>blockquote is a block element</blockquote>
    <pre>pre is a block element</pre>

    <span>span is an inline element</span>
    <big>Karan</big>
    <b>Thakur</b>
  </body>
</html>`}
        </Box>

        <Box sx={outputBoxStyle}>
          <Typography variant="body1"><strong>Output:</strong></Typography>
          <Typography variant="h5">h5 is a block element</Typography>
          <Typography>header is a block element</Typography>
          <Typography>div is a block element</Typography>
          <Typography>blockquote is a block element</Typography>
          <Typography>pre is a block element</Typography>
          <Typography component="span">span is an inline element </Typography>
          <Typography component="span" sx={{ fontSize: 'large', ml: 1 }}>Karan </Typography>
          <Typography component="span" sx={{ fontWeight: 'bold', ml: 1 }}>Thakur</Typography>
        </Box>
      </Container>
    </Box>
  );
};

const codeBoxStyle = {
  background: "#000",
  color: "#fff",
  p: 2,
  borderRadius: 2,
  fontFamily: "monospace",
  whiteSpace: "pre",
  mb: 2,
  fontSize: "16px",
  overflowX: "auto",
};

const outputBoxStyle = {
  background: "#8CCDEB",
  p: 2,
  borderRadius: 2,
  mb: 3,
   whiteSpace: "pre",
  overflowX: "auto",
};

export default Html_elements;
