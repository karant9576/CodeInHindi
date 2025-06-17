import { Box, Typography } from "@mui/material";

const CssHeight = () => {
  return (
    <Box sx={{ p: 2, width: "100%", maxWidth: 900, mx: "auto" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        CSS Height
      </Typography>

      <Typography paragraph>
        CSS में <code>height</code> property की मदद से हम किसी HTML element की ऊँचाई (height) को निर्धारित कर सकते हैं।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        Example: height: 60px
      </Typography>
      <Box
        sx={{
          height: "60px",
          border: "2px solid violet",
          mb: 2,
          p: 1,
        }}
      >
        element with 60px height
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        Height की Value Types:
      </Typography>
      <Typography component="ul" sx={{ pl: 3 }}>
        <li>
          <strong>auto:</strong> default value होती है जो browser द्वारा निर्धारित होती है।
        </li>
        <li>
          <strong>length:</strong> px, cm आदि में height specify की जाती है, जैसे: 60px, 5cm।
        </li>
        <li>
          <strong>%:</strong> parent element की height का percentage, जैसे: 50%।
        </li>
        <li>
          <strong>inherit:</strong> parent की height को inherit करता है।
        </li>
        <li>
          <strong>initial:</strong> CSS default initial value apply करता है।
        </li>
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        Various Height Examples:
      </Typography>

      <Box
        sx={{
          backgroundColor: "violet",
          height: "60px",
          mb: 1,
          p: 1,
        }}
      >
        height: 60px
      </Box>

      <Box
        sx={{
          backgroundColor: "hotpink",
          height: "5cm",
          mb: 1,
          p: 1,
        }}
      >
        height: 5cm
      </Box>

      <Box
        sx={{
          backgroundColor: "lightblue",
          height: "auto",
          mb: 1,
          p: 1,
        }}
      >
        height: auto
      </Box>

      <Box
        sx={{
          backgroundColor: "lightgreen",
          height: "initial",
          mb: 1,
          p: 1,
        }}
      >
        height: initial
      </Box>

      <Box
        sx={{
          backgroundColor: "gold",
          height: "inherit",
          mb: 2,
          p: 1,
        }}
      >
        height: inherit
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        Other CSS Height Properties:
      </Typography>

      <Typography paragraph>
        CSS में <strong>min-height</strong> और <strong>max-height</strong> properties का उपयोग किसी element की minimum और maximum height तय करने के लिए किया जाता है।
      </Typography>

      <Typography variant="subtitle1" gutterBottom color="secondary">
        min-height:
      </Typography>
      <Typography paragraph>
        Element की कम से कम height को fix करता है। इससे नीचे height नहीं जा सकती, चाहे content कम हो।
      </Typography>
      <Box
        sx={{
          minHeight: "60px",
          backgroundColor: "violet",
          mb: 2,
          p: 1,
        }}
      >
        element with min-height
      </Box>

      <Typography variant="subtitle1" gutterBottom color="secondary">
        max-height:
      </Typography>
      <Typography paragraph>
        Element की अधिकतम height को fix करता है। इससे अधिक height नहीं बढ़ सकती, चाहे content overflow हो जाए।
      </Typography>
      <Box
        sx={{
          maxHeight: "60px",
          overflow: "auto",
          backgroundColor: "hotpink",
          p: 1,
        }}
      >
        <Typography>element with max-height</Typography>
        <Typography>element with max-height</Typography>
        <Typography>element with max-height</Typography>
      </Box>
    </Box>
  );
};

export default CssHeight;
