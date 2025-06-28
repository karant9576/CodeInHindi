import { Box, Typography } from "@mui/material";

const Js_array_functions = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: -1 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Array Functions
      </Typography>

      <Typography paragraph>
        JavaScript हमें कई सारे array functions provide कराती है जिनकी help से हम Array को create, update, merge और manipulate कर सकते हैं।
      </Typography>

      <Typography paragraph>
        कुछ महत्वपूर्ण array functions नीचे दिए गए हैं:
        <br />
             <ol>
  <li><code>Array.isArray()</code></li>
  <li><code>indexOf()</code></li>
  <li><code>map()</code></li>
  <li><code>sort()</code></li>
  <li><code>toString()</code></li>
  <li><code>push()</code></li>
  <li><code>unshift()</code></li>
  <li><code>pop()</code></li>
  <li><code>shift()</code></li>
</ol>
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Array.isArray()
      </Typography>
      <Typography paragraph>
        यह function चेक करता है कि दी गई value एक array है या नहीं।
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`Array.isArray([12, 45, 67]); // true
Array.isArray('string');      // false`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        🔍 indexOf()
      </Typography>
      <Typography paragraph>
        यह function array में किसी value की index return करता है, और अगर value नहीं है तो -1 return करता है।
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let arr = [23, 56, 'Rohit'];
arr.indexOf('Rohti');  // 2
arr.indexOf('rohit');  // -1`}        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        🔄 map()
      </Typography>
      <Typography paragraph>
        यह function array के हर एक element पर operation perform करने के लिए use होता है।
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let arr = [1, 2, 3];
let doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, 6]`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        🔢 sort()
      </Typography>
      <Typography paragraph>
        यह function array को alphabetically या numeric ascending order में sort करता है।
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let names = ['John', 'Mohit', 'Karan'];
names.sort(); // ['John', 'Mohit', 'Karan']`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        🔤 toString()
      </Typography>
      <Typography paragraph>
        यह function array को string में convert करता है और elements को comma से separate करता है।
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let arr = ['a', 'b', 'c'];
arr.toString(); // "a,b,c"`}
        </Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        ➕ push()
      </Typography>
      <Typography paragraph>
        यह function value को array के end में add करता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ⬅️ unshift()
      </Typography>
      <Typography paragraph>
        यह function value को array के start में add करता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ➖ pop()
      </Typography>
      <Typography paragraph>
        यह function array के last element को remove करता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ➖ shift()
      </Typography>
      <Typography paragraph>
        यह function array के first element को remove करता है।
      </Typography>

      <Typography paragraph>
        <strong>नोट:</strong> JavaScript में <code>length</code> एक property होती है जो array में मौजूद elements की संख्या return करती है।
      </Typography>
    </Box>
  );
};

export default Js_array_functions;
