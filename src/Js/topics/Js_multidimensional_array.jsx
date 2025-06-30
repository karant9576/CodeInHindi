import { Box, Typography } from "@mui/material";

const Js_multidimensional_array = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Multidimensional Arrays
      </Typography>

      <Typography paragraph>
        पिछले topics में आपने जो भी Array examples देखे थे वे सभी <strong>single dimensional arrays</strong> थे। इस topic में हम <strong>multidimensional arrays</strong> के बारे में पढ़ेंगे।
      </Typography>

      <Typography paragraph>
        <strong>Multidimensional Array</strong> का मतलब होता है - Array के अंदर एक और Array। JavaScript में हम nested arrays यानी multidimensional arrays create कर सकते हैं। इनमें हर एक index पर एक array assign होता है जिसमें आप अपनी आवश्यकता के अनुसार data store कर सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📘 Syntax:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let array1 = [
  [12, 20, 30, 40],
  [50, 60, 70, 80]
];

let array2 = new Array(
  new Array(12, 45, 67),
  new Array(56, 'string', 67)
);`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        आप अपनी आवश्यकता अनुसार एक array के अंदर कितने भी nested arrays बना सकते हैं। ऊपर दिया गया उदाहरण केवल दो dimensional array को दिखाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: Print Multidimensional Array
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`<script>
  let array1 = [
    [12, 20, 30, 40],
    [50, 60, 70, 80]
  ];
  document.write(array1);
</script>`}
        </Typography>
      </Box>
      <Typography paragraph mt={2}>
        ऊपर दिए गए उदाहरण में array को सीधे print करने पर वह flat (single line) में comma-separated values की तरह दिखाई देगा।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔄 Traversing Multidimensional Array
      </Typography>
      <Typography paragraph>
        आप nested loops की मदद से multidimensional array को iterate कर सकते हैं।
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`let array1 = [
  [12, 20, 30, 40],
  [50, 60, 70, 80]
];

for (let innerArr of array1) {
  for (let value of innerArr) {
    document.write(value + " , ");
  }
}`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        इसके अलावा आप direct index की मदद से भी specific values को access कर सकते हैं:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`array1[0][0]; // First array का पहला element
array1[0][1]; // First array का दूसरा element
array1[1][0]; // Second array का पहला element
array1[1][1]; // Second array का दूसरा element`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        <strong>नोट:</strong> जितनी गहराई तक array nested होगा, उतनी बार आपको indexing करनी होगी।
      </Typography>
    </Box>
  );
};

export default Js_multidimensional_array;
