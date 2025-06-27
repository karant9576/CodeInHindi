import { Box, Typography } from "@mui/material";

const Js_if_else = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", marginTop: "-1px" }}>
      <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        JavaScript If Else
      </Typography>

      <Typography paragraph>
        JavaScript If Else conditions के according किसी Code Of Block को रन करने
        के लिए use होता है। मतलब जब हमें Condition true होने पर कोई दूसरा code
        run करना हो और condition गलत होने पर कुछ और, तब हम If Else का use करते
        हैं।
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" color="secondary">
        JavaScript में If Else की Forms:
      </Typography>
      <Typography>- If Statement</Typography>
      <Typography>- If Else Statement</Typography>
      <Typography>- If Else If Statement</Typography>

      <Typography variant="subtitle1" fontWeight="bold" color="secondary">
        JavaScript If Statement
      </Typography>
      <Typography paragraph>
        If statement सबसे basic decision making statement है, जिसमें किसी
        particular condition के true होने पर ही block of code रन होता है।
      </Typography>

      <Typography variant="body2" gutterBottom>
        Example (File: if.html)
      </Typography>
      <Box
        sx={{
          background: "#8CCDEB",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
        }}
      >
        <pre>
          <code>
            {`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript If Statement</title>
</head>
<body>
  <script>
    let age = 19;
    if(age >= 18) {
      document.write('You are eligible to vote');
    }
  </script>
</body>
</html>`}
          </code>
        </pre>
      </Box>
      <Typography mt={2}>Output: You are eligible to vote</Typography>

      {/* <Typography paragraph sx={{ mt: 2 }}>
        JavaScript में empty string, 0, false, null, undefined, और empty array
        हमेशा false माने जाते हैं। जबकि non-empty string, object, array (जिसमें
        value हो), और defined variables true माने जाते हैं।
      </Typography> */}

      <Typography variant="subtitle1" fontWeight="bold" color="secondary" mt={3}>
        JavaScript If Else
      </Typography>
      <Typography paragraph>
        जब हमें condition true होने पर कुछ code और गलत होने पर दूसरा code run
        करना हो, तब हम If Else का use करते हैं।
      </Typography>

      <Typography variant="body2" gutterBottom>
        Example (File: ifelse.html)
      </Typography>
      <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2, overflowX:'auto' ,whiteSpace:'pre'}}>
        <pre>
          <code>
            {`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript If Else Statement</title>
</head>
<body>
  <script>
    let age = 12;
    if(age >= 18) {
      document.write('You are eligible to vote');
    } else {
      document.write('You are not eligible to vote');
    }
  </script>
</body>
</html>`}
          </code>
        </pre>
      </Box>

      <Typography mt={2}>Output: You are not eligible to vote</Typography>

      <Typography variant="subtitle1" fontWeight="bold" color="secondary" mt={2}>
        JavaScript If Else If
      </Typography>
      <Typography paragraph>
        जब multiple conditions के according block of code run करवाना हो, तब If
        Else If Statement का use किया जाता है।
      </Typography>

      <Typography variant="body2" gutterBottom>
        Example (File: ifelseif.html)
      </Typography>
      <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2, overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
        <code>
          {`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript If Else If Statement</title>
</head>
<body>
  <script>
    let marks = 86;
    if(marks >= 90) {
      document.write('Grade : A+');
    } else if(marks >= 80) {
      document.write('Grade : A');
    } else if(marks >= 70) {
      document.write('Grade : B');
    } else {
      document.write('Grade : C');
    }
  </script>
</body>
</html>`}
        </code>
      </pre>
</Box>
      <Typography mt={2}>Output: Grade : A</Typography>

      <Typography paragraph sx={{ mt: 2 }} >
        <strong >Note:</strong> <br />- <code>else if</code> में `else` और `if`
        के बीच space जरूरी है, इसे `elseif` नहीं लिख सकते।
        <br />
        - आप if या else के अंदर भी nested if else लिख सकते हैं।
        <br />- JavaScript case-sensitive language है, इसलिए `if` और `else` को
        small letters में ही लिखें।
      </Typography>
    </Box>
  );
};

export default Js_if_else;
