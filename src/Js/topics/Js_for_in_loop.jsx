import { Box, Typography } from "@mui/material";

const Js_for_in_loop = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", marginTop: "-1px" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript for in Loop
      </Typography>

      <Typography paragraph>
        JavaScript में <strong>for...in loop</strong> का उपयोग उन <strong>objects</strong> को iterate करने के लिए होता है जिनमें data <strong>key: value</strong> pair में store होता है। इसका मुख्य उद्देश्य <strong>enumerable object properties</strong> को access करना होता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔁 Syntax
      </Typography>
      <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }} >
{`for (variable in object) {
  // logic here
}`}
      </Typography>

      <Typography paragraph mt={2}>
        - <strong>variable:</strong> यह हर iteration में object की key को represent करता है।<br />
        - <strong>object:</strong> वह actual object होता है जिस पर loop चलाया जा रहा है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ❓ Why use for...in?
      </Typography>
      <Typography paragraph>
        इसका मुख्य उपयोग object properties को iterate करने के लिए होता है। Arrays के लिए यह उपयुक्त नहीं है क्योंकि <strong>forEach</strong> या <strong>for...of</strong> loop ज्यादा बेहतर विकल्प होते हैं। साथ ही, यह debugging के लिए भी उपयोगी होता है ताकि आप object की properties देख सकें।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Iterate String
      </Typography>
      <Typography sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}} >
{`let string = "Welcome";
for (let index in string) {
  document.write(
    \`property: \${index} and value: \${string[index]} <br>\`
  );
}`}
      </Typography>

      <Typography paragraph mt={2}>
        यहाँ <code>backticks (``)</code> और <code>${'{variable}'}</code> का उपयोग करके string interpolation किया गया है। <code>&lt;br&gt;</code> का उपयोग line break के लिए किया गया है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🛠️ Modify Object Values using for...in
      </Typography>
      <Typography sx={{bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}} >
{`let object = {
  name: 'Karan Thakur',
  age: 20,
  designation: 'Web Developer'
};

document.write("Before Change: <br>");
for (let property in object) {
  document.write(
    \`property: \${property} and value: \${object[property]} <br>\`
  );
}

document.write("After Change: <br>");
for (let property in object) {
  if (property === 'age') object[property] = 30;
  document.write(
    \`property: \${property} and value: \${object[property]} <br>\`
  );
}`}
      </Typography>

      <Typography paragraph mt={2}>
        इस उदाहरण में हमने object की <code>age</code> property को modify किया। इसी तरह आप <strong>arrays</strong> की values को भी update कर सकते हैं।
      </Typography>
    </Box>
  );
};

export default Js_for_in_loop;
