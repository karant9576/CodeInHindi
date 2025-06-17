import { Box, Typography } from "@mui/material";

const CssMargin = () => {
  return (
    <Box sx={{ p: 2, width: "100%", maxWidth: 900, margin: "auto" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        CSS Margin
      </Typography>

      <Typography paragraph>
        <code>margin</code> किसी element के चारों ओर की खाली जगह को दर्शाता है। इस property की मदद से आप किसी भी element को अन्य elements से अलग कर सकते हैं।
      </Typography>

      <Typography paragraph color="secondary" gutterBottom>
        CSS में margin को control करने के लिए पाँच properties होती हैं:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>margin-top: ऊपर से space</li>
        <li>margin-right: दाएँ से space</li>
        <li>margin-bottom: नीचे से space</li>
        <li>margin-left: बाएँ से space</li>
        <li>margin: चारों ओर की margin एक साथ define करने के लिए shorthand</li>
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        Example: margin-top
      </Typography>
      <Box
        sx={{
          marginTop: "15px",
          border: "5px solid black",
          p: 1,
          mb: 2,
        }}
      >
        margin-top: 15px;
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        Example: margin-right
      </Typography>
      <Box
        sx={{
          marginRight: "15px",
          border: "5px solid black",
          p: 1,
          mb: 2,
        }}
      >
        margin-right: 15px;
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        Example: margin-bottom
      </Typography>
      <Box
        sx={{
          marginBottom: "15px",
          border: "5px solid black",
          p: 1,
          mb: 2,
        }}
      >
        margin-bottom: 15px;
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        Example: margin-left
      </Typography>
      <Box
        sx={{
          marginLeft: "15px",
          border: "5px solid black",
          p: 1,
          mb: 2,
        }}
      >
        margin-left: 15px;
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        Example: margin (shorthand)
      </Typography>
      <Typography paragraph>
        आप margin को shorthand में भी लिख सकते हैं, जिससे आप एक ही line में सभी चारों margins को define कर सकते हैं। यह syntax बहुत ही convenient है।
        </Typography>
        <Typography paragraph color="secondary" gutterBottom>
        Syntax:
        </Typography>
        <Typography paragraph  sx={{ bgcolor: "#8CCDEB", p: 1, borderRadius: 1 }}>
        <code>margin: top right bottom left;</code>
        </Typography>
        <Typography paragraph>
        यहाँ पर top, right, bottom, और left के लिए अलग-अलग values दी जा सकती हैं। अगर आप सभी चारों sides के लिए एक ही value देना चाहते हैं, तो आप केवल एक value दे सकते हैं।
        </Typography>
       


      <Box
        sx={{
          margin: "20px 5px 2px 15px",
          border: "5px solid black",
          p: 1,
          mb: 2,
        }}
      >
        margin: 20px 5px 2px 15px;
      </Box>
      <Box
        sx={{
          margin: "40px 0 0 30px",
          border: "5px solid black",
          p: 1,
          mb: 2,
        }}
      >
        margin: 40px 0 0 30px;
      </Box>
      <Box
        sx={{
          margin: "2px 30px 0 20px",
          border: "5px solid black",
          p: 1,
          mb: 2,
        }}
      >
        margin: 2px 30px 0 20px;
      </Box>
      <Box
        sx={{
          margin: "50px 50px 0 50px",
          border: "5px solid black",
          p: 1,
          mb: 2,
        }}
      >
        margin: 50px 50px 0 50px;
      </Box>

      <Typography paragraph>
        इन examples में border लगाया गया है ताकि margin clearly दिखाई दे। आप margin values को px, %, rem, आदि units में दे सकते हैं।
      </Typography>
    </Box>
  );
};

export default CssMargin;
