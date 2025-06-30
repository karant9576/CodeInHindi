import { Box, Typography } from "@mui/material";

const Js_function = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Function
      </Typography>

      <Typography paragraph>
        Function एक reusable piece/block of code होता है जो कोई specific task perform करता है।
        एक बार define करने के बाद हम उसे script में कितनी भी बार use या call कर सकते हैं।
        JavaScript में 1000+ predefined useful functions होते हैं जिन्हें हम <strong>Built-in Functions</strong> कहते हैं।
        JavaScript में function एक object होता है।
      </Typography>

      <Typography paragraph>
        JavaScript हमें खुद के functions define करने की सुविधा भी देती है, जिन्हें <strong>User Defined Functions</strong> कहते हैं।
        Web page load होते समय कोई भी function अपने आप run नहीं होता जब तक कि उसे manually या event handler के माध्यम से call न किया जाए।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ⚠️ Important
      </Typography>
      <Typography paragraph>
        JavaScript में functions भी objects होते हैं। आप <code>new</code> keyword के माध्यम से function object (Arrow Function को छोड़कर) बना सकते हैं।
        Functions को variables में assign किया जा सकता है या किसी function के अंदर argument के रूप में pass किया जा सकता है जिसे <strong>Callback Function</strong> कहा जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📘 JS Function Declaration
      </Typography>
      <Typography paragraph>
        Function declaration को <strong>function definition</strong> या <strong>function statement</strong> भी कहते हैं।
        JavaScript में function define करने के लिए <code>function</code> keyword का उपयोग किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✏️ Syntax
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`function function_name() {
  // perform task here
  return something; // optional
}`}
      </Box>

      <Typography paragraph>
        - <strong>function_name</strong> कोई भी valid name हो सकता है जो string या underscore से शुरू हो।  
        - JavaScript में function का नाम numbers से start नहीं हो सकता।  
        - <code>return</code> statement optional है, इसका उपयोग output देने के लिए किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ JS Function Example (Without Return)
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Function In Hindi</title>
  </head>
  <body>
    <script type="text/javascript">
      function my_fun() {
        document.write(\`Hello JS ! this is my first function.\`);
      }
      my_fun();
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Output:</strong><br />
        Hello JS ! this is my first function.
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ℹ️ Function Tips
      </Typography>
      <Typography paragraph>
        - JavaScript में functions case-sensitive होते हैं। <code>myfun()</code> और <code>Myfun()</code> अलग-अलग माने जाएंगे।<br />
        - अगर आप same नाम से multiple functions define करते हैं, तो JavaScript हमेशा आखिरी वाले function को call करेगी।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔁 JS Function With Return Type
      </Typography>

      <Typography paragraph>
        अब एक ऐसा function देखें जो value return करता है।
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Function With Return</title>
  </head>
  <body>
    <script type="text/javascript">
      function my_fun() {
        return \`this is function with return type.\`;
      }
      document.write(my_fun());
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        <strong>Output:</strong><br />
        this is function with return type.
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🎯 JS Function Advantages
      </Typography>
      <Typography paragraph>
        - <strong>Code Re-usability:</strong> एक बार function बनाकर आप उसे कई बार use कर सकते हैं।<br />
        - <strong>Less Code:</strong> बार-बार एक जैसा code नहीं लिखना पड़ता जिससे code कम होता है।<br />
        - <strong>Reduce Coding Time:</strong> बार-बार वही logic न लिखने से time भी बचता है।<br />
        - <strong>Easy to Understand:</strong> Code modular और readable होता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🧩 Types of Functions in JavaScript
      </Typography>

      <Typography paragraph>
        JavaScript में functions के प्रकार:
        <Box sx={{ pl: 2 }}>
          ⁘ Parameterized Function<br />
          ⁘ Variable Length Argument Function<br />
          ⁘ Named Or Anonymous Function<br />
          ⁘ Arrow Function<br />
          ⁘ Callback Function<br />
          ⁘ Recursive Function
        </Box>
      </Typography>
    </Box>
  );
};

export default Js_function;
