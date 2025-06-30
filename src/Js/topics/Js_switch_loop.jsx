import { Box, Typography } from "@mui/material";

const Js_switch_loop = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Switch Statement
      </Typography>

      <Typography paragraph>
        JavaScript में <strong>switch</strong> statement, किसी matched expression के लिए block of code को run करता है। यह लगभग <strong>else-if</strong> की तरह काम करता है, लेकिन multiple conditions को handle करने का एक और structured तरीका प्रदान करता है।
      </Typography>

      <Typography paragraph>
        🔸 हर <code>case</code> expression को check करता है। जो match करता है, वही execute होता है।<br/>
        🔸 अगर कोई भी <code>case</code> match नहीं करता है, तो <code>default</code> block run होता है।<br/>
        🔸 <code>break</code> keyword case block के बाद जरूरी होता है, जिससे match होते ही loop terminate हो जाए।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🧩 Syntax
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // default code block
}`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example 1
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let x = "apple";
switch (x) {
  case "cake":
    document.write("x is cake");
    break;
  case "orange":
    document.write("x is orange");
    break;
  case "apple":
    document.write("x is apple");
    break;
  default:
    document.write("default case running");
}`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary" mt={2}>
        📌 Output:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}}>
        <Typography component="pre" sx={{ m: 0 }}>
{`x is apple`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        🔹 इस उदाहरण में जैसे ही <code>case "apple"</code> match होता है, उसका block run होता है और <code>break</code> के कारण execution वहीं रुक जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ⚠️ Without Break Example
      </Typography>
      <Box sx={{bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let x = "apple";
switch (x) {
  case "cake":
    document.write("x is cake");
    break;
  case "apple":
    document.write("x is apple <br>");
  case "orange":
    document.write("x is orange <br>");
  default:
    document.write("default case running");
}`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary" mt={2}>
        📌 Output:
      </Typography>
      <Box sx={{bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}}>
        <Typography component="pre" sx={{ m: 0 }}>
{`x is apple
x is orange
default case running`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        🔹 जब हम <code>break</code> नहीं लगाते, तो matched case के बाद के सभी statements sequentially run हो जाते हैं। इसे <strong>fall-through</strong> behavior कहते हैं।
      </Typography>

      <Typography paragraph>
        📌 <code>&lt;br&gt;</code> tag का उपयोग HTML में output को new line में दिखाने के लिए किया गया है।
      </Typography>
    </Box>
  );
};

export default Js_switch_loop;