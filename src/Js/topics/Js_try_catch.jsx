import { Box, Typography } from "@mui/material";

const Js_try_catch = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript try...catch Statement
      </Typography>

      <Typography paragraph>
        JavaScript में <strong>try...catch</strong> का उपयोग runtime errors (exceptions) को handle करने के लिए किया जाता है, ताकि program बिना terminate हुए smoothly execute हो सके।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📌 Syntax:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`try {
  // Code that may throw error
} catch(error) {
  // Code to handle the error
}`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        जब try block में कोई runtime error आती है, JavaScript एक <strong>Error Object</strong> बनाता है और उसे catch block में pass करता है। इस object में मुख्यतः दो properties होती हैं:
      </Typography>
      <ul>
        <li><strong>name</strong>: Error का नाम (जैसे ReferenceError)</li>
        <li><strong>message</strong>: Error का message (जैसे variable is not defined)</li>
      </ul>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`<script type="text/javascript">
  try {
    document.write(blah); // undefined variable
  } catch (error) {
    document.write("Error Name: " + error.name + "<br>");
    document.write("Error Message: " + error.message);
  }
</script>`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        इस example में undefined variable <code>blah</code> को access करने से ReferenceError आया जिसे catch block ने handle कर लिया।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ❌ Limitations:
      </Typography>
      <Typography paragraph>
        try...catch केवल <strong>runtime errors</strong> को handle करता है, <strong>syntax errors</strong> और <strong>logical errors</strong> को नहीं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ⏱️ try...catch is Synchronous
      </Typography>
      <Typography paragraph>
        try...catch asynchronous functions (जैसे setTimeout) में सीधे काम नहीं करता क्योंकि जब तक error आती है, JavaScript try block को छोड़ चुकी होती है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ❌ Wrong Usage:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`try {
  setTimeout(function() {
    anyvariable; // error
  }, 1000);
} catch (err) {
  alert("This will not work");
}`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Correct Usage:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`setTimeout(function() {
  try {
    anyvariable; // error
  } catch (err) {
    document.write(err);
  }
}, 1000);`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        Asynchronous errors को handle करने के लिए <strong>try...catch</strong> को asynchronous function के अंदर use करना होता है।
      </Typography>
    </Box>
  );
};

export default Js_try_catch;
