import { Box, Typography } from "@mui/material";

const Js_break_statement = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript break Statement
      </Typography>

      <Typography paragraph>
        JavaScript में <strong>break</strong> का उपयोग current loop (for, while, do-while, switch) या labeled block से बाहर निकलने के लिए किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔁 Syntax
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`break [label];`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        <code>label</code> एक optional parameter है जो parent loop/block को identify करता है जिससे break करना हो।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Basic break
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let x;
for(x = 1; x <= 5; x++) {
  if (x === 3) {
    break;
  }
  document.write(\`\${x} <br>\`);
}`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary" mt={2}>
        📌 Output:
      </Typography>
      <Box sx={{bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}}>
        <Typography component="pre" sx={{ m: 0 }}>
{`1
2`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        <strong>Note:</strong> जैसे ही <code>x === 3</code> होता है, loop तुरंत terminate हो जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: break with label
      </Typography>
      <Box sx={{bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`outer_loop:
for (let x = 1; x <= 5; x++) {
  for (let y = 1; y <= x; y++) {
    if (x === 3) {
      break outer_loop;
    }
    document.write(\`Inner Loop Value : \${y} <br>\`);
  }
  document.write(\`Outer Loop Value : \${x} <br>\`);
}`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary" mt={2}>
        📌 Output:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}}>
        <Typography component="pre" sx={{ m: 0 }}>
{`Inner Loop Value : 1
Outer Loop Value : 1
Inner Loop Value : 1
Inner Loop Value : 2
Outer Loop Value : 2`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        इस उदाहरण में जैसे ही <code>x === 3</code> हुआ, <code>outer_loop</code> से break हो गया और पूरे nested loop से बाहर निकल गए।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ⚠️ Invalid Label Use Example
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`/* It will work */
outer_block: {
  inner_block: {
    document.write('inner block');
    break outer_block;
    document.write('inner block 2'); // skip
  }
  document.write('outer block'); // skip
}

/* ❌ Error: label not found */
label1: {
  document.write('label 1');
  break label2;
}

label2: {
  document.write('label 2');
}`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        <strong>Note:</strong> break statement हमेशा उसी label के अंदर होना चाहिए जिसे वो refer कर रहा है। अन्यथा <code>SyntaxError</code> आएगा।
      </Typography>
    </Box>
  );
};

export default Js_break_statement;