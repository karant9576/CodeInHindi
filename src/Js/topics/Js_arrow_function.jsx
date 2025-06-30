import { Box, Typography } from "@mui/material";

const Js_arrow_function = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Arrow Function
      </Typography>

      <Typography paragraph>
        पिछले टॉपिक में आपने Anonymous Function के बारे में पढ़ा जो कि normal functions की तुलना में छोटा और सरल था।  
        JavaScript में ऐसा ही एक और और भी छोटा तरीका है function define करने का — जिसे **Arrow Function** कहा जाता है।
      </Typography>

      <Typography paragraph>
        Arrow Function को आमतौर पर short expressions को evaluate करने के लिए इस्तेमाल किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📘 Syntax
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`let test = () => expression;`}
      </Box>

      <Typography paragraph>
        Arrow Function में curly braces और <code>return</code> keyword की जरूरत नहीं होती है।  
        Expression अपने आप evaluate होकर return हो जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Single-line Arrow Function
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Arrow Function In Hindi</title>
  </head>
  <body>
    <script type="text/javascript">
      let test = () => "Hello Arrow !";
      document.write(test());
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Output:</strong><br />
        Hello Arrow !
      </Typography>

      <Typography paragraph>
        ⚠️ Arrow Function, Anonymous Function का ही short version है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔁 Multiline Arrow Function
      </Typography>

      <Typography paragraph>
        अगर एक से अधिक expression या statements हों, तो Arrow Function के body को curly braces <code>{`{}`}</code> में wrap करना होता है और manually <code>return</code> keyword लिखना होता है।
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Multiline Arrow Function</title>
  </head>
  <body>
    <script type="text/javascript">
      let test = (name, age, address) => {
        return \`Name : \${name} <br> Age : \${age} <br> Address : \${address}\`;
      };
      document.write(test("Karan Thakur", 20, "India"));
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Output:</strong><br />
        Name : Karan Thakur<br />
        Age : 20<br />
        Address : India
      </Typography>

      <Typography variant="h6" gutterBottom>
        🧠 Important Notes
      </Typography>

      <Typography paragraph>
        • यदि केवल एक ही parameter पास करना हो तो parentheses हटाए जा सकते हैं:  
        <code>let test = x => x + 90;</code>  
        <br />
        <code>test(10); // Output: 100</code>
      </Typography>

      <Typography paragraph>
        • Arrow Function को constructor की तरह <code>new</code> keyword से instantiate नहीं किया जा सकता है:  
        <br />
        <code>let obj = new test(); // ❌ TypeError</code>
      </Typography>

      <Typography paragraph>
        • Arrow Functions में <code>prototype</code> property नहीं होती:  
        <br />
        <code>console.log(test.prototype); // undefined</code>
      </Typography>
    </Box>
  );
};

export default Js_arrow_function;
