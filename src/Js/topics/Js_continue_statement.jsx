import { Box, Typography } from "@mui/material";

const Js_continue_statement = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Continue Statement
      </Typography>

      <Typography paragraph>
        JavaScript में <strong>continue</strong> का उपयोग किसी condition के अनुसार <strong>current loop iteration</strong> को skip करने के लिए किया जाता है। इसके बाद loop अगली iteration से शुरू होता है।
      </Typography>

      <Typography paragraph>
        🔸 <code>continue</code> statement loop को terminate नहीं करता है, यह सिर्फ current iteration को skip करता है।
      </Typography>

      <Typography paragraph>
        🔸 <strong>while loop</strong> में continue condition पर वापस जाता है।
      </Typography>

      <Typography paragraph>
        🔸 <strong>for / for-in / for-of</strong> loop में यह updated iteration पर jump करता है।
      </Typography>

      <Typography paragraph>
        🔸 <strong>if-else</strong> में यह सिर्फ उस block को छोड़ देता है जिसमें यह लिखा गया हो।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔁 Syntax
      </Typography>
      <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}} >
{`continue [label];`}
      </Typography>

      <Typography paragraph mt={2}>
        <code>label</code> optional होता है और यह उस loop को refer करता है जिसे skip करना हो। Default रूप से यह current loop को skip करता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Continue without Label
      </Typography>
      <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }} >
{`let x;
for (x = 1; x <= 5; x++) {
  if (x === 3) {
    continue;
  }
  document.write(\`\${x} <br>\`);
}`}
      </Typography>

      <Typography paragraph mt={2}>
        जब <code>x === 3</code> होता है, तो loop उस iteration को skip करता है और next iteration से शुरू होता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📌 Output:
      </Typography>
      <Typography  sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}}>
{`1
2
4
5`}
      </Typography>

      <Typography paragraph mt={2}>
        ⚠️ JavaScript में <code>continue</code> PHP की तरह नहीं है जहाँ केवल integer values दिए जाते हैं। JavaScript में आप labeled loops के साथ meaningful label name दे सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Continue with Label
      </Typography>
      <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }} >
{`let x;
forloop_label:
for (x = 1; x <= 5; x++) {
  if (x === 3) {
    continue forloop_label;
  }
  document.write(\`\${x} <br>\`);
}`}
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📌 Output:
      </Typography>
      <Typography  sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}}>
{`1
2
4
5`}
      </Typography>

      <Typography paragraph mt={2}>
        इस उदाहरण में <code>forloop_label</code> नाम के label का उपयोग loop को पहचानने और <code>x === 3</code> पर उस loop की current iteration को skip करने के लिए किया गया है।
      </Typography>
    </Box>
  );
};

export default Js_continue_statement;
