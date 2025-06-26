import { Box, Typography } from "@mui/material";

const Js_operators = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" , marginTop:"-1px", }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Operators
      </Typography>

      <Typography paragraph>
        Operator एक symbol होता है जो किसी operation को perform करने के लिए use किया जाता है।
        JavaScript में कई प्रकार के operators होते हैं:
        <br /><br />
        • Arithmetic Operators<br />
        • Assignment Operators<br />
        • Comparison Operators<br />
        • Increment/Decrement Operators<br />
        • Logical Operators<br />
        • Conditional (Ternary) Operator
      </Typography>

      {/* Arithmetic Operators */}
      <Typography variant="subtitle1" gutterBottom color="secondary">Arithmetic Operators</Typography>
      <Typography fontStyle="italic" mb={1}>
        ये operators गणनाएँ (जैसे जोड़, घटाव, गुणा, भाग) करने के लिए इस्तेमाल होते हैं।
      </Typography>
      <pre>
{`+  Addition         x + y
-  Subtraction      x - y
*  Multiplication   x * y
/  Division         x / y
%  Modulus          x % y
** Exponentiation   x ** y`}
      </pre>
      <Typography paragraph bgcolor={'#8CCDEB'} p={2} borderRadius={2} mt={2}>
        <strong>उदाहरण:</strong><br />
        <code>
          let a = 10, b = 2;<br />
          console.log(a + b); // 12<br />
          console.log(a * b); // 20<br />
          console.log(a ** b); // 100
        </code>
      </Typography>

      {/* Assignment Operators */}
      <Typography variant="subtitle1" gutterBottom color="secondary">Assignment Operators</Typography>
      <Typography fontStyle="italic" mb={1}>
        ये operators किसी variable को value assign करने और उसे modify करने के लिए उपयोग होते हैं।
      </Typography>
      <pre>
{`=   Assign             x = y
+=  Add & Assign        x += y
-=  Subtract & Assign   x -= y
*=  Multiply & Assign   x *= y
/=  Divide & Assign     x /= y
%=  Modulus & Assign    x %= y`}
      </pre>
      <Typography paragraph bgcolor={'#8CCDEB'} p={2} borderRadius={2} mt={2}>
        <strong>उदाहरण:</strong><br />
        <code>
          let x = 5;<br />
          x += 3; // x = 8<br />
          x *= 2; // x = 16
        </code>
      </Typography>

      {/* Comparison Operators */}
      <Typography variant="subtitle1" gutterBottom color="secondary">Comparison Operators</Typography>
      <Typography fontStyle="italic" mb={1}>
        ये दो values को compare करके true या false return करते हैं।
      </Typography>
      <pre>
{`==   Equal to (value)
===  Equal value & type
!=   Not equal (value)
!==  Not equal (value or type)
<    Less than
>    Greater than
<=   Less than or equal to
>=   Greater than or equal to`}
      </pre>
      <Typography paragraph bgcolor={'#8CCDEB'} p={2} borderRadius={2} mt={2}>
        <strong>उदाहरण:</strong><br />
        <code>
          let a = 5, b = '5';<br />
          console.log(a == b);  // true<br />
          console.log(a === b); // false
        </code>
      </Typography>

      {/* Increment / Decrement */}
      <Typography variant="subtitle1" gutterBottom color="secondary">Increment / Decrement Operators</Typography>
      <Typography fontStyle="italic" mb={1}>
        किसी variable के value को 1 से बढ़ाने या घटाने के लिए इन operators का प्रयोग किया जाता है।
      </Typography>
      <pre>
{`++x  Pre-Increment
x++  Post-Increment
--x  Pre-Decrement
x--  Post-Decrement`}
      </pre>
      <Typography paragraph bgcolor={'#8CCDEB'} p={2} borderRadius={2} mt={2}>
        <strong>उदाहरण:</strong><br />
        <code>
          let a = 5;<br />
          console.log(++a); // 6<br />
          console.log(a++); // 6<br />
          console.log(a);   // 7
        </code>
      </Typography>

      {/* Logical Operators */}
      <Typography variant="subtitle1" gutterBottom color="secondary">Logical Operators</Typography>
      <Typography fontStyle="italic" mb={1}>
        ये multiple conditions को check करने के लिए use होते हैं और boolean result return करते हैं।
      </Typography>
      <pre>
{`&&  And   (दोनों true होने पर true)
||  Or    (कोई एक true हो तो true)
!   Not   (true को false बनाता है)`}
      </pre>
      <Typography mt={2}>
        👉 अगर value true है तो ! उसे false बना देगा
        👉 अगर value false है तो ! उसे true बना देगा
      </Typography>
      <Typography paragraph bgcolor={'#8CCDEB'} p={2} borderRadius={2} mt={2}>
        <strong>उदाहरण:</strong><br />
        <code>
          let a = true, b = false;<br />
          console.log(a && b); // false<br />
          console.log(a || b); // true<br />
          console.log(!a);     // false
        </code>
      </Typography>

      {/* Conditional / Ternary */}
      <Typography variant="subtitle1" gutterBottom color="secondary">Conditional (Ternary) Operator</Typography>
      <Typography fontStyle="italic" mb={1}>
        ये shorthand if-else की तरह काम करता है — एक condition को check करता है और उसके अनुसार result return करता है।
      </Typography>
      <pre>
{`condition ? expr1 : expr2`}
      </pre>
      <Typography paragraph bgcolor={'#8CCDEB'} p={2} borderRadius={2} mt={2}>
        <strong>उदाहरण:</strong><br />
        <code>
          let age = 20;<br />
          let result = age &gt;= 18 ? "Eligible" : "Not eligible";<br />
          console.log(result); // "Eligible"
        </code>
      </Typography>
    </Box>
  );
};

export default Js_operators;
