import { Box, Typography } from "@mui/material";

const Js_try_catch_finally = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: -1 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript try...catch...finally
      </Typography>

      <Typography paragraph>
        पिछले topic में आपने JavaScript में <strong>try...catch</strong> के बारे में पढ़ा था, जहां हमने exceptions को handle किया। इस topic में हम <strong>finally</strong> block के बारे में जानेंगे।
      </Typography>

      <Typography paragraph>
        कई बार हमें ऐसा code लिखना होता है जो error आये या न आये, दोनों स्थिति में चले। ऐसी स्थिति में हम <strong>finally</strong> block का उपयोग करते हैं। यह block हमेशा try या catch के बाद run होता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📘 Syntax:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`try {
  // code
} catch(errorObj) {
  // error handling
} finally {
  // always executed
}`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary" sx={{ mt: 2 }}>
        ✅ Example 1: try...catch...finally
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`<script type="text/javascript">
  try {
    document.write(blah);
  } catch(ErrorObj) {
    document.write("Error Name: " + ErrorObj.name + "<br>");
    document.write("Error Message: " + ErrorObj.message + "<br>");
  } finally {
    document.write("it will run always");
  }
</script>`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        उपर दिए गए उदाहरण में error आने के बावजूद <strong>finally</strong> block run हुआ।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example 2: try...finally (without catch)
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`<script type="text/javascript">
  try {
    document.write("try block <br>");
  } finally {
    document.write("it will run always");
  }
</script>`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        इस case में भी error नहीं आने पर <strong>try</strong> और <strong>finally</strong> दोनों run होंगे, और अगर error आये तब भी <strong>finally</strong> block run होगा।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ❌ Invalid Syntaxes
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}}>
        <Typography component="pre" sx={{ m: 0 }}>
{`/* Invalid: catch without try */
catch(error) {
  // error
}

/* Invalid: try...finally...catch */
try {
  // code
} finally {
  // always runs
} catch(error) {
  // won't work
}`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        याद रखें, <strong>finally</strong> block हमेशा <strong>try</strong> या <strong>try...catch</strong> के बाद ही आता है। इसे अकेले या गलत क्रम में उपयोग करना syntax error देगा।
      </Typography>
    </Box>
  );
};

export default Js_try_catch_finally;
