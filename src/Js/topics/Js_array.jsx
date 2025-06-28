import { Box, Typography } from "@mui/material";

const Js_array = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: -1 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Arrays
      </Typography>

      <Typography paragraph>
        JavaScript में <strong>Array</strong> का उपयोग एक ही variable में multiple values को store करने के लिए किया जाता है।
        यह हमें एक compact structure में अलग-अलग types की values को एक साथ manage करने की सुविधा देता है।
      </Typography>

      <Typography paragraph>
        JavaScript में Array declare करने के लिए हमें data type specify करने की जरूरत नहीं होती है (जैसे Java या C में होता है)।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📘 Syntax:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let array1 = ['value1', 'value2', 12, 54.7];
let array2 = new Array('value1', 'value2', 12, 54.7);`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        आप उपरोक्त में से कोई भी तरीका इस्तेमाल करके array define कर सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Array Declaration & Access
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`<script>
  let array_var = [12, 34.5, true, false, "string value"];
  document.write(array_var);
</script>`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        JavaScript में Array के values को access करने के लिए index (0 से शुरू) का इस्तेमाल किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔄 Traversing Arrays
      </Typography>
      <Typography paragraph>
        JavaScript में array को iterate करने के लिए आप <code>for</code>, <code>for...in</code>, <code>for...of</code>, और <code>while</code> loops का उपयोग कर सकते हैं।
      </Typography>

      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let array_var = [12, 34.5, true, false, "string value"];

// for loop
for (let i = 0; i < array_var.length; i++) {
  document.write("index " + i + ": " + array_var[i] + "<br>");
}

// for in loop
for (let index in array_var) {
  document.write("index " + index + ": " + array_var[index] + "<br>");
}

// for of loop
for (let value of array_var) {
  document.write(value + "<br>");
}

// while loop
let i = 0;
while (i < array_var.length) {
  document.write("index " + i + ": " + array_var[i] + "<br>");
  i++;
}`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary" mt={1}>
        📏 Array Length
      </Typography>
      <Typography paragraph>
        <strong>length</strong> property का उपयोग array में कितने items हैं ये जानने के लिए किया जाता है। आप manually भी array की length manipulate कर सकते हैं।
      </Typography>

      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let array_var = [];
array_var[0] = "first value";
array_var[1] = "other value";
array_var[20] = "another value";

// Output
console.log(array_var);
console.log("Length:", array_var.length);

// Change length
array_var.length = 90;
console.log("New Length:", array_var.length);`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        जब आप बीच के indexes को skip करते हैं, तो JavaScript उन्हें <em>empty</em> values से fill कर देती है। और आप <code>length</code> manually बढ़ाकर size भी control कर सकते हैं।
      </Typography>
    </Box>
  );
};

export default Js_array;
