import { Box, Typography } from "@mui/material";

const Js_recursive_function = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" ,mt:'-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Recursive Function
      </Typography>

      <Typography paragraph>
        JavaScript में भी, PHP, C, और C++ की तरह, हम्म recursive functions define कर सकते हैं।
        जब कोई function खुद को ही call करता है, तो उसे recursive function कहते हैं, और इस प्रक्रिया को recursion कहा जाता है।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        📌 Need of Recursive Function
      </Typography>

      <Typography paragraph>
        Recursive functions का use खासकर tree structures, directory structures या unknown-length data structures में किया जाता है,
        जहां हमें नहीं पता कि elements कितने nested हैं।
      </Typography>

      <Typography paragraph>
        इसके अलावा sorting, searching, और mathematical operations (जैसे factorial, Fibonacci series) में भी इनका उपयोग होता है।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        ✅ Basic Recursive Function Example
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <title>Recursive Function Example</title>
  </head>
  <body>
    <script type="text/javascript">
      function print_number(number) {
        document.write(number + ' , ');
        number++;
        if (number <= 100) {
          print_number(number);
        }
      }
      print_number(1);
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        यह function 1 से लेकर 100 तक के numbers को recursive तरीके से print करता है।  
        इसमें एक base condition दी गई है – अगर number 100 से ज़्यादा हो गया, तो function call होना बंद हो जाएगा।
      </Typography>

      <Typography variant="body1" fontWeight="bold" gutterBottom>
        🔎 Note:
      </Typography>
      <Typography paragraph>
        Recursive function का behavior loop की तरह ही होता है — जैसे for या while loop, पर recursive तरीके से।
        बिना condition के यह infinite recursion में चला जाएगा जिससे browser crash हो सकता है।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        🔢 Factorial using Recursive Function
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <title>Recursive Factorial</title>
  </head>
  <body>
    <script type="text/javascript">
      function fact(number) {
        if (number <= 1)
          return 1;
        else
          return number * fact(number - 1);
      }
      document.write(\`Factorial of entered number is : \${fact(5)}\`);
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        उपर example में, factorial निकालने के लिए recursive logic use किया गया है।  
        जब number 1 या उससे कम हो जाए, तब 1 return होता है — यही base condition है।  
        अन्यथाथा same function call होता रहता है।
      </Typography>

      <Typography variant="h6" color="error" gutterBottom>
        ⚠️ Disadvantages of Recursive Function
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>
          Recursive functions ज़्यादा memory और execution time consume करते हैं।
        </li>
        <li>
          अगर base condition ना हो या गलत हो, तो यह infinite recursion में चला जाता है।
        </li>
        <li>
          Iterative approaches (like loops) ज्यादातर cases में ज्यादा efficient होते हैं।
        </li>
      </Typography>
    </Box>
  );
};

export default Js_recursive_function;
