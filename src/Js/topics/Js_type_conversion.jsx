import { Box, Typography } from "@mui/material";

const Js_type_conversion = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", marginTop:"60px", }}>
      <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        JavaScript Type Conversion
      </Typography>

      <Typography paragraph>
        <strong>Type Conversion</strong> एक process है जिसमें किसी value को एक type से दूसरे type में convert किया जाता है। इसे <strong>Type Casting</strong> भी कहते हैं।
        JavaScript एक <em>dynamic type language</em> है, इसका मतलब यह है कि किसी variable को declare करते समय उसका type specify करना जरूरी नहीं होता, JavaScript Engine value को अपने आप पहचान लेता है।
      </Typography>

      {/* String Type Conversion */}
      <Typography variant="subtitle1" fontWeight="bold" color="secondary">
        1. String Type Conversion
      </Typography>
      <Typography paragraph>
        किसी number, boolean या null value को string में convert करने के लिए <code>String()</code> function का use किया जाता है।
      </Typography>
      <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2,overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
{`<script>
  let x = 12;
  document.write('Now type of x : ' + typeof String(x));
  let y = true;
  document.write('<br>Now type of y : ' + typeof String(y));
  let z = null;
  document.write('<br>Now type of z : ' + typeof String(z));
</script>`}
      </pre>
      </Box>
      <Typography paragraph mt={2}>
        <strong>Output:</strong><br />
        Now type of x : string<br />
        Now type of y : string<br />
        Now type of z : string
      </Typography>

      {/* Number Type Conversion */}
      <Typography variant="subtitle1" fontWeight="bold" color="secondary">
        2. Number Type Conversion
      </Typography>
      <Typography paragraph>
        किसी string या null value को number में convert करने के लिए <code>Number()</code> function का use किया जाता है।
      </Typography>
      <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2,overflowX:'auto' ,whiteSpace:'pre'}}>
      <pre>
{`<script>
  let x = '12';
  document.write('Now type of x : ' + typeof Number(x));
  let y = "10";
  document.write('<br>Now type of y : ' + typeof Number(y));
  let z = null;
  document.write('<br>Now type of z : ' + typeof Number(z));
</script>`}
      </pre>
      </Box>
      <Typography paragraph mt={2}>
        <strong>Output:</strong><br />
        Now type of x : number<br />
        Now type of y : number<br />
        Now type of z : number
      </Typography>

      {/* Boolean Type Conversion */}
      <Typography variant="subtitle1" fontWeight="bold" color="secondary">
        3. Boolean Type Conversion
      </Typography>
      <Typography paragraph>
        किसी value को boolean में convert करने के लिए <code>Boolean()</code> function का use करते हैं।
        JavaScript में कुछ values को "falsy" माना जाता है:
      </Typography>
      <Typography>
        <strong>Falsy Values:</strong> <code>""</code>, <code>0</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>, <code>false</code><br />
        <strong>Truthy Values:</strong> Non-empty strings, arrays, objects, true, numbers other than 0
      </Typography>
     <Box sx={{background:'#8CCDEB' ,p: 2 ,borderRadius: 2,overflowX:'auto' ,whiteSpace:'pre',mt:1}}>
      <pre>
{`<script>
  document.write('Boolean("True") : ' + Boolean("True"));
  document.write('<br>Boolean("mystring") : ' + Boolean("mystring"));
  document.write('<br>Boolean("0") : ' + Boolean("0"));
  document.write('<br>Boolean("") : ' + Boolean(""));
  document.write('<br>Boolean(null) : ' + Boolean(null));
  document.write('<br>Boolean(0) : ' + Boolean(0));
  let x;
  document.write('<br>Boolean(undefined) : ' + Boolean(x));
</script>`}
      </pre>
      </Box>
      <Typography paragraph mt={2}>
        <strong>Output:</strong><br />
        Boolean("True") : true<br />
        Boolean("mystring") : true<br />
        Boolean("0") : true<br />
        Boolean("") : false<br />
        Boolean(null) : false<br />
        Boolean(0) : false<br />
        Boolean(undefined) : false
      </Typography>
    </Box>
  );
};

export default Js_type_conversion;
