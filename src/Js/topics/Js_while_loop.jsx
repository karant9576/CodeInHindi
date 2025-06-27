import { Box, Typography } from "@mui/material";

const Js_do_while_loop = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" , marginTop:"-1px",}}>
      <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        JavaScript While Loop
      </Typography>

      <Typography paragraph>
        Actually, किसी code block को repeatedly run करने का सबसे आसान तरीका looping है। JavaScript में अलग-अलग तरह के Looping Statements हैं:
      </Typography>

      <Typography>- while Statement</Typography>
      <Typography>- do while Statement</Typography>
     

      <Typography paragraph sx={{ mt: 2 }}>
        इस topic में हम **while loop** के बारे में पढ़ेंगे।
      </Typography>

      <Typography paragraph>
        While Loop simply nested statements को तब तक execute करता है जब तक condition false न हो जाए। इसे Entry Control Loop कहा जाता है क्योंकि पहले condition check होती है, फिर loop में entry होती है।
      </Typography>

      <Typography paragraph>
        JavaScript में While Loop वैसे ही काम करता है जैसे PHP, C या Java में करता है।
      </Typography>

      <Typography variant="subtitle1" gutterBottom  fontWeight="bold" color="secondary">
        Syntax:
      </Typography>
     <Box sx={{ background:'#8CCDEB' ,p: 2 ,borderRadius: 2, overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
        <code>
{`while(condition / expression){
  // write your logic
}`}
        </code>
      </pre>
</Box>
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }} color="secondary" fontWeight={'bold'}>
        JavaScript While Loop Example (1 to 10)
      </Typography>
      <Box sx={{ background:'#8CCDEB' ,p: 2 ,borderRadius: 2, overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
        <code>
{`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript While Loop</title>
</head>
<body>
  <script>
    let x = 1;
    while (x <= 10) {
      document.write(x + ", ");
      ++x;
    }
  </script>
</body>
</html>`}
        </code>
      </pre>
</Box>
      <Typography paragraph mt={2}>
        Explanation:
        <br />- एक variable x को 1 से initialize किया गया।
        <br />- फिर while loop में entry से पहले x की value check की जाती है।
        <br />- अगर value 10 से कम या बराबर है तो loop execute होता है और x को increment किया जाता है।
      </Typography>

      <Typography paragraph>
        <strong>Note:</strong> अगर loop body में केवल एक statement हो तो curly braces की जरूरत नहीं होती।
      </Typography>

      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }} color="secondary" fontWeight={'bold'}>
        Example Without Curly Braces:
      </Typography>
      <Box sx={{ background:'#8CCDEB' ,p: 2 ,borderRadius: 2, overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
        <code>
{`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript While Loop</title>
</head>
<body>
  <script>
    let x = 1;
    while (x <= 3)
      document.write(x++);
  </script>
</body>
</html>`}
        </code>
      </pre>
</Box>
      <Typography paragraph mt={2}>
        <strong>Important:</strong> While loop use करते समय यह ensure करें कि condition कभी न कभी false जरूर हो, नहीं तो infinite loop बन जाएगा और system hang हो सकता है।
      </Typography>

      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }} color="secondary" fontWeight={'bold'}>
        JavaScript Nested While Loop
      </Typography>
      <Typography paragraph>
        आप While Loop के अंदर भी एक और While Loop लिख सकते हैं। इसे Nested While Loop कहते हैं।
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Nested While Loop Example:
      </Typography>
     
     <Box sx={{ background:'#8CCDEB' ,p: 2 ,borderRadius: 2, overflowX:'auto' ,whiteSpace:'pre'}}>
     <pre>
        <code>
{`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Nested While Loop</title>
</head>
<body>
  <script>
    let x = 1;
    while(x <= 10) {
      let y = 1;
      document.write(y + " ");
      while(y < x) {
        y++;
        document.write(y + " ");
      }
      ++x;
      document.write("<br>");
    }
  </script>
</body>
</html>`}
        </code>
      </pre>
</Box> 
      <Typography paragraph mt={2}>
        <strong>Note:</strong> इस example में <code>&lt;br&gt;</code> का उपयोग line break के लिए किया गया है।
      </Typography>

      <Typography paragraph sx={{ mt: 2 }}>
        I hope अब आपको JavaScript में While Loop का use अच्छे से समझ में आ गया होगा।
      </Typography>
    </Box>
  );
};

export default Js_do_while_loop;
