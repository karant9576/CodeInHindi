import { Box, Typography } from "@mui/material";

const Js_do_while_loop = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", marginTop: "-1px" }}>
      <Box>
        <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
          JavaScript Do While Loop
        </Typography>

        <Typography paragraph>
          पिछले Topic में आपने <strong>While Loop</strong> के बारे में पढ़ा। इस topic में आप <strong>Do While Loop</strong> के बारे में पढ़ेंगे —
          जैसा कि नाम से समझ आता है कि पहले कोई code of block run होता है और फिर condition check की जाती है।
        </Typography>

        <Typography paragraph>
          <strong>While Loop</strong> और <strong>Do While Loop</strong> में मुख्य अंतर यह है कि:
          <Box sx={{ ml: 2, my: 1 }}>
            ⁘ While loop में सबसे पहले condition check होती है और उसके बाद ही block execute होता है।<br />
            ⁘ Do while loop में पहले block execute होता है और फिर अंत में condition check होती है।
          </Box>
          इसका मतलब है कि <strong>Do While Loop</strong> एक बार minimum जरूर चलेगा, चाहे condition true हो या false।
        </Typography>

        <Typography variant="h6" gutterBottom color="secondary">
          🔁 Syntax
        </Typography>

        <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }} >
{`do {
  // code of block
} while (condition);`}
        </Typography>

        <Typography paragraph mt={2}>
          इस loop को <strong>Exit Control Loop</strong> भी कहा जाता है क्योंकि इसमें condition बाद में check होती है।
        </Typography>

        <Typography variant="h6" gutterBottom color="secondary">
          🔄 Example: Do While Loop
        </Typography>

        <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }} >
{`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Do While Loop</title>
</head>
<body>
  <script>
    let x = 1;
    do {
      document.write("It will run only once");
    } while(x >= 10);
  </script>
</body>
</html>`}
        </Typography>

        <Typography paragraph mt={2}>
          उपरोक्त example में आप देख सकते हैं कि block पहले चला फिर condition check हुई। चूंकि condition false थी, फिर भी block एक बार चला।
        </Typography>

        <Typography variant="h6" gutterBottom color="secondary">
          ❗ Important Notes
        </Typography>

        <Typography paragraph>
          ⁘ Do while loop का use तब किया जाता है जब हम चाहते हैं कि block of code कम से कम एक बार जरूर चले।<br />
          ⁘ अगर condition कभी false नहीं होती, तो यह loop infinite हो सकता है। इसलिए हमेशा termination condition रखें।
        </Typography>

        <Typography paragraph>
          उम्मीद है अब आपको JavaScript का Do While Loop अच्छे से समझ में आ गया होगा।
        </Typography>
      </Box>
    </Box>
  );
};

export default Js_do_while_loop;
