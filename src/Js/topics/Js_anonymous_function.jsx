import { Box, Typography } from "@mui/material";

const Js_anonymous_function = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Anonymous Function
      </Typography>

      <Typography paragraph>
        Anonymous Functions — जैसा कि नाम से ही पता चलता है — ऐसे functions होते हैं जिनका कोई नाम नहीं होता।  
        JavaScript में हम functions को नाम दिए बिना भी define कर सकते हैं, और उन्हें किसी variable में assign कर सकते हैं।
      </Typography>

      <Typography paragraph>
        जैसे हम किसी variable को value assign करते हैं, वैसे ही हम function को भी assign कर सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📘 Syntax
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`let test = function(param1, param2) {
  // your logic here
}`}
      </Box>

      <Typography paragraph>
        यह function parameterized भी हो सकता है, जैसे कि normal functions होते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Basic Anonymous Function
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Anonymous Function in JavaScript</title>
  </head>
  <body>
    <script type="text/javascript">
      let test = function() {
        document.write(\`First Name : \${arguments[0]} <br> Last Name : \${arguments[1]}\`);
      };

      // function call
      test('Karan', 'Thakur');
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Output:</strong><br />
        First Name : Karan<br />
        Last Name : Thakur
      </Typography>

      <Typography paragraph>
        Anonymous functions में भी आप external variables को access कर सकते हैं और variable length arguments को handle कर सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Accessing External Variable in Anonymous Function
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Anonymous Function with External Variable</title>
  </head>
  <body>
    <script type="text/javascript">
      let ex_var = 'A Variable';
      let test = function() {
        document.write(\`Full Name : \${arguments[0]} <br>\`);
        document.write(\`External Variable : \${ex_var}\`);
      };

      test('Karan Thakur');
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Output:</strong><br />
        Full Name : Karan Thakur<br />
        External Variable : A Variable
      </Typography>
    </Box>
  );
};

export default Js_anonymous_function;
