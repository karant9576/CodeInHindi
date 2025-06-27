import { Box, Typography } from "@mui/material";

const Js_for_loop = () => {
  return (
    <Box className="doc" sx={{p: 2, maxWidth: 1000, mx: "auto", marginTop: "-1px"   }}>
      <Box>
        <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
          JavaScript For Loop
        </Typography>

        <Typography paragraph>
          किसी code block को बार-बार run करने का सबसे आसान तरीका looping होता है। <strong>while</strong> या <strong>do while</strong> में हम 3 steps follow करते हैं:
        </Typography>

        <Box sx={{ ml: 2, mb: 2 }}>
          ⁘ Initialization <br />
          ⁘ Condition <br />
          ⁘ Increment / Decrement
        </Box>

        <Typography paragraph>
          जबकि इन तीनों को <strong>for loop</strong> में एक ही जगह define कर दिया जाता है, जिससे कोड छोटा और स्पष्ट बनता है।
        </Typography>

        <Typography paragraph>
          <strong>For Loop</strong> का उपयोग तब किया जाता है जब हमें पहले से पता हो कि loop कितनी बार चलेगा। यही इसका मुख्य अंतर है <strong>while</strong> loop की तुलना में।
        </Typography>

        <Typography variant="h6" gutterBottom color="secondary">
          🔁 Syntax
        </Typography>

        <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}} >
{`for(initialization ; condition ; increment / decrement) {
  // code block
}`}
        </Typography>

        <Typography paragraph mt={2}>
          For loop के तीन expressions इस तरह काम करते हैं:
        </Typography>

        <Box sx={{ ml: 2, mb: 2 }}>
          ⁘ <strong>Initialization:</strong> Loop शुरू होने से पहले एक बार execute होता है (e.g. <code>let x = 0</code>)<br />
          ⁘ <strong>Condition:</strong> हर iteration से पहले check होती है — true होने पर loop चलेगा<br />
          ⁘ <strong>Increment/Decrement:</strong> हर iteration के अंत में execute होता है<br />
        </Box>

        <Typography paragraph>
          तीसरा expression optional है — आप variable को loop block के अंदर भी बढ़ा/घटा सकते हैं।
        </Typography>

        <Typography variant="h6" gutterBottom color="secondary">
          📌 Example: Table of 5
        </Typography>

        <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }} >
{`let number = 5;
for(let x = 1; x <= 10; x++) {
  document.write(number + ' x ' + x + ' = ' + (x * number) + '<br>');
}`}
        </Typography>

        <Typography paragraph mt={2}>
          <strong>Output:</strong><br />
          5 x 1 = 5 <br />
          5 x 2 = 10 <br />
          5 x 3 = 15 <br />
          ...<br />
          5 x 10 = 50
        </Typography>

        <Typography variant="h6" gutterBottom color="secondary">
          📚 Example: Array Iteration
        </Typography>

        <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }} >
{`let array_var = [12, 234, 45];
for(let index = 0; index < array_var.length; index++) {
  document.write('Array Key: ' + index + ', Value: ' + array_var[index] + '<br>');
}`}
        </Typography>

        <Typography paragraph mt={2}>
          <strong>Output:</strong><br />
          Array Key: 0 , Value: 12 <br />
          Array Key: 1 , Value: 234 <br />
          Array Key: 2 , Value: 45
        </Typography>

        <Typography paragraph>
          इस example में <code>length</code> एक predefined JavaScript property है जिसका उपयोग Array, String आदि की length जानने में किया जाता है।
        </Typography>

        <Typography variant="h6" gutterBottom color="secondary">
          🔄 Nested For Loop
        </Typography>

        <Typography paragraph>
          जैसे हम nested if else या nested while loop यूज़ करते हैं, वैसे ही <strong>nested for loop</strong> भी बना सकते हैं।
        </Typography>

        <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }} >
{`for(let x = 1; x <= 5; x++) {
  for(let y = 1; y <= x; y++) {
    document.write(y + " ");
  }
  document.write("<br>");
}`}
        </Typography>

        <Typography paragraph mt={2}>
          <strong>Output:</strong><br />
          1 <br />
          1 2 <br />
          1 2 3 <br />
          1 2 3 4 <br />
          1 2 3 4 5
        </Typography>

        <Typography paragraph>
          इस तरह से आप <strong>JavaScript For Loop</strong> को structured तरीके से multiple scenarios में उपयोग कर सकते हैं।
        </Typography>
      </Box>
    </Box>
  );
};

export default Js_for_loop;
