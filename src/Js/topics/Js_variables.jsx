import { Box, Typography } from "@mui/material";

const Js_variables = () => {
  return (
    <Box
  sx={{ p: 2,  maxWidth: 1000, mx: "auto" , marginTop:"-1px",}}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Variables
      </Typography>

      <Typography paragraph>
        Variable एक नाम होता है जो memory location को दिया जाता है, ताकि हम उसमें कोई value store कर सकें।
        इसे हम named storage भी कह सकते हैं। JavaScript में variables का उपयोग किसी भी प्रकार की value को store करने के लिए किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📌 JavaScript में Variable Declaration
      </Typography>

      <Typography paragraph>
        JavaScript में variables मुख्यतः तीन तरीकों से declare किए जा सकते हैं:
        <Box>
          ⁘ <code>var</code> <br/>
          ⁘ <code>let</code> <br/>
          ⁘ <code>const</code> (Constant Variable) <br/>
        </Box>
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1  , overflowX:'auto', whiteSpace:'pre'}}>
{`var name = "Karan Thakur";
let age = 23;
var address = "732 Bihar India ";`}
      </Typography>

      <Typography paragraph mt={2}>
        JavaScript में variable declare करते समय किसी type को explicitly define करने की ज़रूरत नहीं होती, जैसे कि C या Java में करनी पड़ती है।
        Variable जिस प्रकार की value receive करता है, JavaScript उस type को अपने आप पहचान लेती है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔍 Example: Data Types & typeof Operator
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 , overflowX:'auto', whiteSpace:'pre'}}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Variables</title>
  </head>
  <body>
    <script>
      let str = 'String Value';
      let num = 78;
      let num2 = 78.89;
      let bool = true;
      document.write(typeof str + '<br>');
      document.write(typeof num + '<br>');
      document.write(typeof num2 + '<br>');
      document.write(typeof bool + '<br>');
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Output:</strong><br />
        string<br />
        number<br />
        number<br />
        boolean
      </Typography>

      <Typography paragraph>
        <strong>Note:</strong> <code>typeof</code> एक reserved keyword है जिसका उपयोग variable के type को जानने के लिए किया जाता है।
        <code>{`<br>`}</code> का प्रयोग line break के लिए होता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔄 var vs let का अंतर
      </Typography>

      <Typography paragraph>
        - <code>var</code> से declare किए गए variables global scope में होते हैं और <code>window</code> object से access किए जा सकते हैं।<br />
        - <code>let</code> से declare किए गए variables block scope में होते हैं और <code>window</code> object से access नहीं होते।<br />
        - <code>var</code> variables को re-declare किया जा सकता है, जबकि <code>let</code> variables को दोबारा declare नहीं किया जा सकता।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto', whiteSpace:'pre' }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Variables</title>
  </head>
  <body>
    <script>
      var x = 10;
      let y = 20;
      document.write(window.x); // fine
      document.write(window.y); // undefined

      // redeclare
      var x = 30;
      let y = 40; // ❌ Error: redeclaration
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Output:</strong> Uncaught SyntaxError: redeclaration of let y<br />
        <strong>Note:</strong> पहले ही <code>y</code> declare हो चुका है, इसलिए दोबारा declare करने पर error आता है।
      </Typography>

      <Typography variant="h6" gutterBottom>
        ✅ JavaScript Variable Naming Rules
      </Typography>

      <Typography paragraph>
        - Variable का नाम किसी reserved keyword से नहीं होना चाहिए<br />
        - नाम किसी number से start नहीं होना चाहिए<br />
        - नाम meaningful और readable होना चाहिए<br />
        - JavaScript में variables case-sensitive होते हैं<br />
        - Underscore (_) का उपयोग विशेष कार्यों के लिए किया जाता है, इसलिए उसे शुरुआत में न रखें
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔒 Constant Variables (const)
      </Typography>

      <Typography paragraph>
        Constant variables को <code>const</code> keyword से define किया जाता है। इनकी value change नहीं की जा सकती।
        अगर आप <code>const</code> variable को दुबारा assign करेंगे तो error आएगी।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto', whiteSpace:'pre' }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Constants</title>
  </head>
  <body>
    <script>
      const x = 'Some Value';
      x = 'New Value'; // ❌ Error
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Output:</strong> Uncaught TypeError: invalid assignment to const 'x'
      </Typography>
    </Box>
  );
};

export default Js_variables;
