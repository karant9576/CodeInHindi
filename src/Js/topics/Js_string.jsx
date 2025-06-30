import { Box, Typography } from "@mui/material";

const Js_string = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", marginTop: "-1px" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript String
      </Typography>

      <Typography paragraph>
        JavaScript में string एक object है जिसका use किसी single या series of characters को represent करने के लिए किया जाता है।
      </Typography>

      <Typography paragraph>
        JavaScript में string दो तरह से define की जा सकती है:
        <Box sx={{ pl: 2 }}>
          ⁘ Using Literal <br />
          ⁘ Using String Object
        </Box>
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔤 JavaScript String Literal
      </Typography>

      <Typography paragraph>
        JavaScript में Literal का use करके तीन तरह से string define कर सकते हैं:
        <Box sx={{ pl: 2 }}>
          ⁘ Single Quoted String - 'string' <br />
          ⁘ Double Quoted String - "string" <br />
          ⁘ Backticks - `string`
        </Box>
      </Typography>

      <Typography paragraph>
        Single और Double Quoted Strings लगभग एक जैसे होते हैं, लेकिन Backticks (`) में हम <code>{'${...}'}</code> के द्वारा expressions embed कर सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🧪 Example: String Literal
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto", whiteSpace: "pre" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript String In Hindi</title>
  </head>
  <body>
    <script>
      document.write("double quoted string <br>");
      document.write("'single quoted string' inside double quoted string <br>");
      document.write('single quoted string <br>');
      document.write('"double quoted string" inside single quoted string <br>');
      document.write(\`backticks string <br>\`);
      document.write(\`expression inside backticks : \${45+90}\`);
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Output:</strong><br />
        double quoted string<br />
        'single quoted string' inside double quoted string<br />
        single quoted string<br />
        "double quoted string" inside single quoted string<br />
        backticks string<br />
        expression inside backticks : 135
      </Typography>

      <Typography paragraph>
        <strong>Note:</strong> <code>{`<br>`}</code> का उपयोग new line के लिए किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🧱 JavaScript String Object
      </Typography>

      <Typography paragraph>
        JavaScript में हम <code>String</code> class का object बनाकर भी string define कर सकते हैं। हालांकि दोनों तरीकों का व्यवहार लगभग समान होता है, परंतु type में फर्क होता है:
        <Box sx={{ pl: 2 }}>
          ⁘ Literal द्वारा बनी string का type होता है: <strong>string</strong><br />
          ⁘ Object द्वारा बनी string का type होता है: <strong>object</strong>
        </Box>
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔍 Example: String Object
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto", whiteSpace: "pre" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript String Object In Hindi</title>
  </head>
  <body>
    <script>
      let str_var = new String("string object");
      let str_var2 = "string literal";
      document.write(str_var + \` type : \${typeof str_var} <br>\`);
      document.write(str_var2 + \` type : \${typeof str_var2}\`);
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Output:</strong><br />
        string object type : object<br />
        string literal type : string
      </Typography>

      <Typography paragraph>
        आप Object string में भी double, single, या backtick quotes use कर सकते हैं:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto", whiteSpace: "pre" }}>
{`<script>
  new String(\`Expression : \${56+6}\`);
  new String("double quoted string object");
  new String('single quoted string object');
</script>`}
      </Typography>
    </Box>
  );
};

export default Js_string;
