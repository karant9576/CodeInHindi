import { Box, Typography } from "@mui/material";

const CssPadding = () => {
  return (
    <Box sx={{ p: 2, width: "100%", maxWidth: 900, margin: "auto" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        CSS Padding
      </Typography>

      <Typography paragraph>
        <code>padding</code> किसी element के अंदर की खाली जगह होती है। यह space content और border के बीच में होती है।
        Padding को हम चारों दिशाओं (top, right, bottom, left) से control कर सकते हैं।
      </Typography>

      <Typography paragraph color="secondary" gutterBottom>
        CSS में padding के लिए निम्न properties होती हैं:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>padding-top: ऊपर से padding</li>
        <li>padding-right: दाएं से padding</li>
        <li>padding-bottom: नीचे से padding</li>
        <li>padding-left: बाएं से padding</li>
        <li>padding: shorthand जिससे सभी directions को एक साथ define कर सकते हैं</li>
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        Simple Padding Example
      </Typography>
      <Box
        sx={{
          padding: "10px",
          border: "2px solid black",
          mb: 2,
        }}
      >
        padding: 10px; inside the element
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        Difference between <code>margin</code> and <code>padding</code>
      </Typography>
      <Typography paragraph>
        <strong>margin</strong> किसी element के चारों ओर space देता है, जबकि <strong>padding</strong> element के अंदर content और border के बीच space देता है।
      </Typography>
      <Box sx={{ border: "2px solid black", margin: "10px", mb: 1, p: 1 }}>
        margin: 10px; around the element
      </Box>
      <Box sx={{ border: "2px solid black", padding: "10px", mb: 2 }}>
        padding: 10px; inside the element
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        Example: padding-top
      </Typography>
      <Box
        sx={{
          paddingTop: "15px",
          border: "5px solid black",
          mb: 2,
        }}
      >
        padding-top: 15px;
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        Example: padding-right
      </Typography>
      <Box
        sx={{
          paddingRight: "15px",
          border: "5px solid black",
          mb: 2,
        }}
      >
        padding-right: 15px;
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        Example: padding-bottom
      </Typography>
      <Box
        sx={{
          paddingBottom: "15px",
          border: "5px solid black",
          mb: 2,
        }}
      >
        padding-bottom: 15px;
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        Example: padding-left
      </Typography>
      <Box
        sx={{
          paddingLeft: "15px",
          border: "5px solid black",
          mb: 2,
        }}
      >
        padding-left: 15px;
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        Shorthand Padding Examples
      </Typography>

      <Box
        sx={{
          padding: "20px 5px 2px 15px",
          border: "5px solid black",
          mb: 2,
        }}
      >
        padding: 20px 5px 2px 15px;
      </Box>
      <Box
        sx={{
          padding: "40px 0 0 30px",
          border: "5px solid black",
          mb: 2,
        }}
      >
        padding: 40px 0 0 30px;
      </Box>
      <Box
        sx={{
          padding: "2px 30px 0 20px",
          border: "5px solid black",
          mb: 2,
        }}
      >
        padding: 2px 30px 0 20px;
      </Box>
      <Box
        sx={{
          padding: "50px 50px 0 50px",
          border: "5px solid black",
          mb: 2,
        }}
      >
        padding: 50px 50px 0 50px;
      </Box>

      <Typography paragraph>
        Padding की values को <code>px</code>, <code>em</code>, <code>%</code> या अन्य valid units में define किया जा सकता है।
      </Typography>
    </Box>
  );
};

export default CssPadding;
