import { Box, Typography } from "@mui/material";

const Js_labeled_statement = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", marginTop: "-1px" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Labeled Statement
      </Typography>

      <Typography paragraph>
        JavaScript में <strong>labeled statement</strong> का उपयोग <code>break</code> और <code>continue</code> के साथ किया जाता है। यह किसी विशेष loop को पहचान देने के लिए use किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔁 Syntax
      </Typography>
      <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}} >
{`label_name:
  statement`}
      </Typography>

      <Typography paragraph mt={2}>
        <code>label_name</code> कोई भी meaningful नाम हो सकता है (सिर्फ JavaScript के reserved keywords नहीं होने चाहिए)। यह उस loop या block को दर्शाता है जिसे हम identify करना चाहते हैं।
      </Typography>

      <Typography paragraph>
        ⚠️ JavaScript में <code>goto</code> जैसा कोई statement नहीं है, इसलिए labeled statement का प्रयोग सिर्फ <code>break</code> या <code>continue</code> के साथ ही किया जा सकता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Labeled Statement with continue
      </Typography>
      <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}} >
{`let x;
mylabel:
for (x = 1; x <= 5; x++) {
  if (x === 3) {
    continue mylabel;
  }
  document.write(\`\${x} <br>\`);
}`}
      </Typography>

      <Typography paragraph mt={2}>
        इस उदाहरण में <code>mylabel</code> नाम का label एक <code>for loop</code> को दिया गया है। जब <code>x === 3</code> होता है, तो <code>continue</code> उस label को reference करता है और current iteration को skip करता है।
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
    </Box>
  );
};

export default Js_labeled_statement;
