import { Box, Typography } from "@mui/material";

const Js_parameterized_function = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Parameterized Function
      </Typography>

      <Typography paragraph>
        पिछले topic में आपने पढ़ा कि JavaScript में functions कैसे define और call/invoke किए जाते हैं,
        लेकिन वो simple functions थे जो static result return करते थे। इस topic में हम
        <strong> Parameterized Function </strong> के बारे में जानेंगे, जिनकी मदद से हम dynamic values पास करके flexible output पा सकते हैं।
      </Typography>

      <Typography paragraph>
        Parameterized Function वे functions होते हैं जो parameters को accept करते हैं। इन्हें define करते समय हम parameters specify करते हैं, 
        ताकि call करते समय हम उनकी जगह arguments पास कर सकें। Parameters function के अंदर variables की तरह behave करते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📘 Syntax
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`function function_name(param1, param2, param3) {
  // your logic
  return value; // optional
}`}
      </Box>

      <Typography paragraph>
        <strong>Note:</strong> Technically देखा जाए तो <strong>Parameters</strong> और <strong>Arguments</strong> अलग होते हैं।  
        Parameters वे variables हैं जो function define करते समय दिए जाते हैं,  
        जबकि Arguments वे actual values हैं जो function call करते समय pass की जाती हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Basic Parameterized Function
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Parameterized Function</title>
  </head>
  <body>
    <script type="text/javascript">
      function add(num1, num2, num3) {
        return num1 + num2 + num3;
      }
      document.write(\`Addition of 23, 56, 67 is: \${add(23, 56, 67)}\`);
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Output:</strong><br />
        Addition of 23, 56, 67 is: 146
      </Typography>

      <Typography paragraph>
        <strong>Note:</strong> Backticks (<code>` `</code>) और <code>${"{expression}"}</code> का उपयोग करके हम string के अंदर values को embed कर सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ⚙️ JavaScript Default Parameters
      </Typography>

      <Typography paragraph>
        JavaScript में हम function define करते समय parameters की default value भी assign कर सकते हैं।  
        यदि function call करते समय कोई argument पास नहीं किया गया, तो default value का उपयोग होगा।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📘 Syntax: Default Parameters
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`function my_fun(param = 'default value') {
  // your logic
}`}
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Default Parameterized Function
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Default Parameter</title>
  </head>
  <body>
    <script type="text/javascript">
      function param_fun(param = 'Default Value') {
        document.write(param + '<br>');  
      }
      param_fun(); // without argument
      param_fun('Passed Value'); // with argument
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Output:</strong><br />
        Default Value<br />
        Passed Value
      </Typography>
    </Box>
  );
};

export default Js_parameterized_function;
