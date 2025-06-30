import { Box, Typography } from "@mui/material";

const Js_var_length_arg_function = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Variable Length Argument Function
      </Typography>

      <Typography paragraph>
        पिछले topic में आपने JavaScript में Parameterized Functions के बारे में पढ़ा जहाँ parameters की संख्या fixed होती है। लेकिन अगर हमें यह न पता हो कि function call करते समय कितने arguments pass होंगे, तो JavaScript हमें यह flexibility देती है कि हम variable length arguments को भी handle कर सकें।
      </Typography>

      <Typography paragraph>
        JavaScript में variable number of arguments को handle करने के दो मुख्य तरीके होते हैं:
        <Box sx={{ pl: 2 }}>
          ⁘ <strong>Using <code>arguments</code> object</strong><br />
          ⁘ <strong>Using rest parameter syntax <code>...args</code></strong>
        </Box>
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📌 Using <code>arguments</code> Object
      </Typography>

      <Typography paragraph>
        JavaScript का <code>arguments</code> object एक <strong>array-like</strong> object होता है जो function में pass किए गए सभी arguments को store करता है।
        यह array की तरह behave करता है, लेकिन यह actual array नहीं होता (इसलिए <code>map()</code> या <code>forEach()</code> जैसे methods काम नहीं करते)।
      </Typography>

      <Typography variant="h6" gutterBottom>
        ✅ Example: Using <code>arguments</code> Object
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Variable Length Arguments - arguments object</title>
  </head>
  <body>
    <script type="text/javascript">
      function test_fun() {
        document.write(\`Total passed arguments : \${arguments.length} <br>\`);
        for (let index in arguments) {
          document.write(\`Index \${index} Value : \${arguments[index]} <br>\`);
        }
        document.write(\`First argument: \${arguments[0]} <br>\`);
      }

      test_fun(46767, 67, 678, 8, 8, 6532);
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Output:</strong><br />
        Total passed arguments : 6<br />
        Index 0 Value : 46767<br />
        Index 1 Value : 67<br />
        Index 2 Value : 678<br />
        Index 3 Value : 8<br />
        Index 4 Value : 8<br />
        Index 5 Value : 6532<br />
        First argument: 46767
      </Typography>

      <Typography paragraph>
        <strong>Note:</strong> Backticks (<code>` `</code>) के साथ <code>${"{expression}"}</code> का उपयोग करके हम string में expression embed कर सकते हैं। और <code>{"<br>"}</code> का उपयोग line break के लिए किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📌 Using <code>...args</code> (Rest Parameter)
      </Typography>

      <Typography paragraph>
        जब function definition में किसी parameter से पहले <code>...</code> लगाया जाता है, तो वह <strong>rest parameter</strong> कहलाता है।  
        यह सभी incoming arguments को एक array में collect कर लेता है और आपको उन्हें आसानी से handle करने की सुविधा देता है।
      </Typography>

      <Typography variant="h6" gutterBottom>
        ✅ Example: Using <code>...args</code>
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Variable Length Arguments - rest parameter</title>
  </head>
  <body>
    <script type="text/javascript">
      function test_fun(...args) {
        document.write(\`Total passed arguments : \${args.length} <br>\`);
        for (let index in args) {
          document.write(\`Index \${index} Value : \${args[index]} <br>\`);
        }
      }

      test_fun(46767, 67, 678, 8, 8, 6532);
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Output:</strong><br />
        Total passed arguments : 6<br />
        Index 0 Value : 46767<br />
        Index 1 Value : 67<br />
        Index 2 Value : 678<br />
        Index 3 Value : 8<br />
        Index 4 Value : 8<br />
        Index 5 Value : 6532
      </Typography>
    </Box>
  );
};

export default Js_var_length_arg_function;
