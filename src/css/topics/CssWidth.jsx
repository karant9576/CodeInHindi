import { Box, Typography } from "@mui/material";

const CssWidth = () => {
  return (
    <Box sx={{ p: 2, width: "100%", maxWidth: 900, mx: "auto" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        CSS Width
      </Typography>

      <Typography paragraph>
        CSS में <code>width</code>, <code>min-width</code> और <code>max-width</code> properties की मदद से किसी HTML element की चौड़ाई निर्धारित की जाती है।
      </Typography>

      <Typography variant="h6" gutterBottom bgcolor={"#8CCDEB"} >
        Example: width: 100px
      </Typography>
      <Box
        sx={{
          width: "100px",
          backgroundColor: "#8CCDEB",
          border: "1px solid gray",
          p: 1,
          mb: 2,
        }}
      >
        element with 100px width
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        Width Value Types:
      </Typography>
      <Typography component="ul" sx={{ pl: 3 }}>
        <li><strong>auto:</strong> Default value, browser खुद width assign करता है।</li>
        <li><strong>%:</strong> Parent element के आधार पर percentage width, जैसे 50%, 100%।</li>
        <li><strong>length:</strong> px, cm जैसे units का प्रयोग कर width तय करना।</li>
        <li><strong>inherit:</strong> Parent element से width inherit करना।</li>
        <li><strong>initial:</strong> CSS की default initial value को assign करना।</li>
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        Various Width Examples:
      </Typography>

      <Box sx={{ backgroundColor: "violet", width: "150px", mb: 1, p: 1 }}>
        width: 150px
      </Box>
      <Box sx={{ backgroundColor: "hotpink", width: "5cm", mb: 1, p: 1 }}>
        width: 5cm
      </Box>
      <Box sx={{ backgroundColor: "darkblue", width: "50%", color: "white", mb: 1, p: 1 }}>
        width: 50%
      </Box>
      <Box sx={{ backgroundColor: "lightblue", width: "auto", mb: 1, p: 1 }}>
        width: auto
      </Box>
      <Box sx={{ backgroundColor: "lightgreen", width: "initial", mb: 1, p: 1 }}>
        width: initial
      </Box>
      <Box sx={{ backgroundColor: "gold", width: "inherit", mb: 2, p: 1 }}>
        width: inherit
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        CSS अन्य Width Properties:
      </Typography>

      <Typography variant="subtitle1" gutterBottom color="secondary">
        min-width:
      </Typography>
      <Typography paragraph>
        इस property से आप किसी element की minimum width तय करते हैं, जिससे यह width उससे कम नहीं हो सकती।
      </Typography>
      <Box
        sx={{
          minWidth: "200px",
          backgroundColor: "violet",
          p: 1,
          mb: 2,
        }}
      >
        element with min-width: 200px
      </Box>

      <Typography paragraph gutterBottom color="secondary">
        max-width:
      </Typography>
      <Typography paragraph>
        इस property से आप किसी element की maximum width तय करते हैं, जिससे वह width उस सीमा से ज़्यादा नहीं बढ़ती।
      </Typography>
      <Box
        sx={{
          maxWidth: "200px",
          backgroundColor: "hotpink",
          p: 1,
        }}
      >
        <Typography>element with max-width</Typography>
        <Typography>यह width 200px से ज्यादा नहीं जाएगी</Typography>
      </Box>
    </Box>
  );
};

export default CssWidth;
