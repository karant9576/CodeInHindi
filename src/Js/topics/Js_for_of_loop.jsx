import { Box, Typography } from "@mui/material";

const Js_for_of_loop = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", marginTop: "-1px"}}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript for of Loop
      </Typography>

      <Typography paragraph>
        पिछले topic में हमने <strong>for...in loop</strong> के बारे में पढ़ा था, जिसका उपयोग किसी object की <strong>property keys</strong> को iterate करने के लिए किया जाता है। जबकि <strong>for...of loop</strong> का उपयोग <strong>iterable objects</strong> (जैसे array, string, map, set) की <strong>values</strong> को iterate करने के लिए किया जाता है।
      </Typography>

      <Typography paragraph>
        यह loop built-in structures जैसे String, Array, Map, Set और user-defined iterables को भी support करता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔁 Syntax
      </Typography>
      <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}} >
{`for (const val of iterable) {
  // logic here
}`}
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔍 For...of vs For...in vs For Loop
      </Typography>
      <Typography paragraph>
        - <strong>for...of</strong>: iterable values को iterate करता है।
        <br />- <strong>for...in</strong>: object keys को iterate करता है।
        <br />- <strong>for loop</strong>: traditional counting logic पर आधारित होता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Iterate over String
      </Typography>
      <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }} >
{`let string = new String("Welcome");
for (let val of string) {
  document.write(\`value: \${val} <br>\`);
}`}
      </Typography>

      <Typography paragraph mt={2}>
        इस उदाहरण में string object को iterate किया गया है और हर character को individually print किया गया है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Iterate over Array
      </Typography>
      <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}} >
{`let array_var = [12, 34, 56, 'strin', true];
for (let val of array_var) {
  document.write(\`value: \${val} <br>\`);
}`}
      </Typography>

      <Typography paragraph mt={2}>
        इस उदाहरण में एक array को <code>for...of</code> loop के माध्यम से iterate किया गया है। Array में विभिन्न types की values store थीं जिन्हें sequentially access किया गया।
      </Typography>
    </Box>
  );
};

export default Js_for_of_loop;
