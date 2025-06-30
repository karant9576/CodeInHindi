import { Box, Typography } from "@mui/material";

const Js_exception_handling = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Exception Handling
      </Typography>

      <Typography paragraph>
        <strong>Exception Handling</strong> का उपयोग program में आयी unwanted errors को handle करने के लिए किया जाता है। ये errors अक्सर program execution को रोक देती हैं। हालांकि program का terminate होना error के type पर depend करता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📌 What is Exception?
      </Typography>
      <Typography paragraph>
        <strong>Exceptions</strong> कुछ unwanted events होती हैं जो program के execution के दौरान आती हैं और उसे disrupt करती हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🧩 JavaScript Types Of Errors
      </Typography>
      <ul>
        <li>Syntax Errors</li>
        <li>Run Time Errors</li>
        <li>Logical Errors</li>
      </ul>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Syntax Error Example
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`<script type="text/javascript">
  let x = "apple";
  document.write(x;
  // Uncaught SyntaxError: missing ) after argument list
</script>`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        ऊपर दिए गए उदाहरण में <code>)</code> नहीं होने के कारण <strong>SyntaxError</strong> आया।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Run Time Error Example
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`<script type="text/javascript">
  myfun();
  // Uncaught ReferenceError: myfun is not defined
</script>`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        Undefined function को call करने पर <strong>ReferenceError</strong> आता है, जो runtime error होता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Logical Error Example
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}}>
        <Typography component="pre" sx={{ m: 0 }}>
{`<script type="text/javascript">
  while(true) {
    document.write("Hello");
  }
  document.write("it will never print");
</script>`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        Endless loop एक <strong>Logical Error</strong> है जो desirable output नहीं देता।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ⚙️ How JavaScript Handles Runtime Errors?
      </Typography>
      <Typography paragraph>
        जब runtime error आती है, JavaScript एक <strong>Error Object</strong> बनाता है। इसमें दो मुख्य properties होती हैं:
      </Typography>
      <ul>
        <li><strong>name</strong> – error का type बताता है।</li>
        <li><strong>message</strong> – error का description देता है।</li>
      </ul>

      <Typography paragraph>
        इन errors को handle करने के लिए JavaScript में निम्न statements होते हैं:
      </Typography>
      <ul>
        <li><strong>try...catch</strong></li>
        <li><strong>try...catch...finally</strong></li>
        <li><strong>throw</strong></li>
      </ul>

      <Typography paragraph>
        हम इन सभी को अगली topics में detail में समझेंगे।
      </Typography>
    </Box>
  );
};

export default Js_exception_handling;