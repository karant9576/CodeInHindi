import { Box, Typography } from "@mui/material";

const Js_data_types = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" , marginTop:"60px",}}>
      <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        JavaScript Data Types
      </Typography>

      <Typography paragraph>
        JavaScript एक <strong>dynamic type language</strong> है, यानी जब हम कोई variable define करते हैं,
        तो उसमें किस प्रकार की value होगी यह अलग से declare नहीं करना पड़ता।
        JavaScript Engine उसे अपने आप detect कर लेता है।
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" color="secondary">
        JavaScript में प्रमुख Data Types:
      </Typography>
      <Typography paragraph>
        • Number<br />
        • BigInt<br />
        • String<br />
        • Boolean<br />
        • Null<br />
        • Undefined<br />
        • Object
      </Typography>

      {/* Number */}
      <Typography variant="subtitle1" fontWeight="bold" color="secondary">JS Number</Typography>
      <Typography paragraph>
        JavaScript में integer और floating दोनों values को <strong>number</strong> type में treat किया जाता है।
      </Typography>
      <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2, overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
{`<script>
  let x = 10;
  let y = 10.78;
  document.write('type of x : ' + typeof x + ' and type of y : ' + typeof y);
</script>`}
      </pre>
      </Box>
      <Typography paragraph><strong>Output:</strong> type of x : number and type of y : number</Typography>

      {/* BigInt */}
      <Typography variant="subtitle1" fontWeight="bold" color="secondary">JS BigInt</Typography>
      <Typography paragraph>
        <strong>BigInt</strong> बहुत बड़ी संख्याओं को handle करने के लिए इस्तेमाल किया जाता है। इसके लिए हम value के बाद <code>n</code> लगाते हैं।
      </Typography>
      <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2 ,overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
{`<script>
  let x = 10n;
  document.write('type of x : ' + typeof x);
</script>`}
      </pre>
      </Box>
      <Typography paragraph mt={2}><strong>Output:</strong> type of x : bigint</Typography>

      {/* String */}
      <Typography variant="subtitle1" fontWeight="bold" color="secondary">JS String</Typography>
      <Typography paragraph>
        JavaScript में string को 3 तरह से define किया जा सकता है:
        <br />• Single Quotes: 'Hello'
        <br />• Double Quotes: "Hello"
        <br />• Backticks (Template Literals): `Hello`
      </Typography>
      <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2 ,overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
{`<script>
  let x = 'string';
  let y = "string";
  let z = \`string\`;
  let s = new String("MyString");
  document.write(typeof x);
  document.write('<br>' + typeof y);
  document.write('<br>' + typeof z);
  document.write('<br>' + typeof s);
</script>`}
      </pre>
      </Box>
      <Typography paragraph mt={2}><strong>Output:</strong><br />string<br />string<br />string<br />object</Typography>

      {/* Boolean */}
      <Typography variant="subtitle1" fontWeight="bold" color="secondary">JS Boolean</Typography>
      <Typography paragraph>
        Boolean type में केवल दो values होती हैं: <code>true</code> और <code>false</code>। ये अक्सर comparisons या conditions के साथ use होती हैं।
      </Typography>
      <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2 ,overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
{`<script>
  let x = true;
  let y = false;
  document.write(typeof x);
  document.write('<br>' + typeof y);
  document.write('<br>' + typeof (5 > 9));
</script>`}
      </pre>
      </Box>
      <Typography paragraph mt={2}><strong>Output:</strong><br />boolean<br />boolean<br />boolean</Typography>

      {/* Null */}
      <Typography variant="subtitle1" fontWeight="bold" color="secondary">JS Null</Typography>
      <Typography paragraph>
        <strong>null</strong> एक special value है जो कि "empty" या "no value" को दर्शाती है। लेकिन इसका typeof <strong>object</strong> return करता है (JavaScript की एक पुरानी गलती)।
      </Typography>
      <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2 ,overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
{`<script>
  let x = null;
  document.write('type of x : ' + typeof x);
</script>`}
      </pre>
      </Box>
      <Typography paragraph mt={2}><strong>Output:</strong> type of x : object</Typography>

      {/* Undefined */}
      <Typography variant="subtitle1" fontWeight="bold" color="secondary">JS Undefined</Typography>
      <Typography paragraph>
        जब किसी variable को declare किया गया हो लेकिन उसमें कोई value assign न की हो, तब उसकी value <strong>undefined</strong> होती है।
      </Typography>
     <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2 ,overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
{`<script>
  let x;
  document.write('type of x : ' + typeof x);
</script>`}
      </pre>
      </Box>
      <Typography paragraph mt={2}><strong>Output:</strong> type of x : undefined</Typography>

      {/* Object */}
      <Typography variant="subtitle1" fontWeight="bold" color="secondary">JS Object</Typography>
      <Typography paragraph>
        Object एक complex data type है जिसमें key-value pairs होती हैं। यह non-primitive type है जिसमें एक से अधिक value store की जा सकती है।
      </Typography>
     <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2 ,overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
{`<script>
  document.write('type of Math : ' + typeof Math);
</script>`}
      </pre>
      </Box>
      <Typography paragraph mt={2}><strong>Output:</strong> type of Math : object</Typography>
      <Typography fontStyle="italic">
        Note: Math एक predefined JavaScript object है जिसका उपयोग mathematical tasks के लिए किया जाता है।
      </Typography>
    </Box>
  );
};

export default Js_data_types;
