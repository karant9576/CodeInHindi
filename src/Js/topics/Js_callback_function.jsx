import { Box, Typography } from "@mui/material";

const Js_callback_function = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Callback Function
      </Typography>

      <Typography paragraph>
        Callback Functions वे functions होते हैं जिन्हें किसी दूसरे function में **as an argument** pass किया जाता है।
        और जिस function में callback pass किया गया हो, उसे **Higher-Order Function** कहते हैं।
      </Typography>

      <Typography paragraph>
        JavaScript में Functions को first-class objects कहा जाता है, इसलिए इन्हें variable में assign किया जा सकता है,
        arguments की तरह पास किया जा सकता है, और return भी किया जा सकता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔍 Need of Callback Function in JS
      </Typography>

      <Typography paragraph>
        JavaScript एक synchronous scripting language है — code top-down तरीके से execute होता है।  
        लेकिन कुछ operations जैसे <code>setTimeout()</code>, <code>fetch()</code>, या <code>await</code> asynchronous होते हैं।
        ऐसे में आगे का code पहले execute हो जाता है जिससे unexpected behavior या errors आ सकती हैं।
      </Typography>

      <Typography paragraph>
        Callback functions asynchronous execution को control करने में मदद करते हैं। ये ensure करते हैं कि जब तक एक काम पूरा ना हो, अगला task ना चले।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Callback Function Example
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Callback Function</title>
  </head>
  <body>
    <script type="text/javascript">
      function print_name(name) {
        document.write(\`Your full name is : \${name}\`);
      }

      function enter_name(callback) {
        let name = prompt('Enter your full name.');
        callback(name);
      }

      enter_name(print_name);
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Explanation:</strong>  
        यहाँ <code>print_name()</code> को <code>enter_name()</code> में callback की तरह pass किया गया है।  
        <code>prompt()</code> ब्राउज़र में input लेने के लिए यूज़ किया गया है।  
        जब तक input नहीं मिलेगा, callback run नहीं होगा।
      </Typography>

      <Typography variant="body1" paragraph>
        आप callback को directly भी define कर सकते हैं:
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`enter_name(function(name) {
  document.write(\`Your full name is : \${name}\`);
});`}
      </Box>

      <Typography paragraph>
        इसे <strong>Synchronous Callback</strong> कहा जाता है क्योंकि execution sequential होता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ⚙️ Asynchronous Callback Example
      </Typography>

      <Typography paragraph>
        Asynchronous callbacks तब use होते हैं जब कोई task time लेता है और हम बाकी का code block नहीं करना चाहते।
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JS Asynchronous Callback Example</title>
  </head>
  <body>
    <script type="text/javascript">
      setTimeout(function() {
        console.log('Run after 1 second');
      }, 1000);
      
      console.log('Normal Code');
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Console Output:</strong><br />
        Normal Code<br />
        Run after 1 second
      </Typography>

      <Typography paragraph>
        <strong>Note:</strong>  
        <code>setTimeout()</code> एक callback function को delay के साथ execute करता है।  
        Time हमेशा milliseconds में define किया जाता है (e.g., 1000ms = 1 second)।
      </Typography>
    </Box>
  );
};

export default Js_callback_function;
