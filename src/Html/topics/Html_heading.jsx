import { Typography, Box, Divider } from "@mui/material";

const Html_heading = () => {
  return (
    <Box sx={{ p: 2,   maxWidth: 1000, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>
        HTML Heading
      </Typography>

      <Typography variant="body1" gutterBottom>
        HTML में heading या शीर्षक का उपयोग title या subtitle को web page में
        display करने के लिए किया जाता है। यह text को bold और बड़े font के साथ
        दिखाता है।
      </Typography>

      <Typography variant="body1" gutterBottom>
        HTML में 6 प्रकार की headings होती हैं, जिन्हें आप{" "}
        <code>&lt;h1&gt;</code> से <code>&lt;h6&gt;</code> तक लिख सकते हैं।
        इनमें सबसे main heading <code>&lt;h1&gt;</code> और सबसे छोटी heading{" "}
        <code>&lt;h6&gt;</code> होती है।
      </Typography>

      <Typography variant="body1" gutterBottom>
        🔹 Headings SEO में काफी important role play करती हैं, इसलिए हर एक web
        page में headings का use करें।
        <br />
        🔹 Web page के मुख्य title को <code>&lt;h1&gt;</code> में और बाकी
        subheadings को <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code> आदि में
        रखें।
      </Typography>

      <Typography variant="body1" gutterBottom color="error">
        ⚠️ नोट: Page में <code>&lt;h1&gt;</code> tag का उपयोग केवल एक बार करना
        ज्यादा अच्छा होता है।
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        HTML Heading Example:
      </Typography>

      <Box
        sx={{
          background: "#000",
          color: "#fff",
          p: 2,
          borderRadius: 2,
          fontFamily: "monospace",
          whiteSpace: "pre",
          overflowX: "auto",
          fontSize: "15px",
          mb: 2,
        }}
      >
        {`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>HTML Heading Example</title>
  </head>
  <body>
    <h1>Heading number 1</h1>  
    <h2>Heading number 2</h2>  
    <h3>Heading number 3</h3>  
    <h4>Heading number 4</h4>  
    <h5>Heading number 5</h5>  
    <h6>Heading number 6</h6> 
  </body>
</html>`}
      </Box>

      <Box
        sx={{
          background: "#8CCDEB",
          p: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="body1" gutterBottom>
          <strong>Output:</strong>
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", sm: "48px", md: "55px" },
            fontWeight: "bold",
          }}
        >
          Heading number 1
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "28px", sm: "38px", md: "45px" },
            fontWeight: "bold",
          }}
        >
          Heading number 2
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "24px", sm: "32px", md: "35px" },
            fontWeight: "bold",
          }}
        >
          Heading number 3
        </Typography>

        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "20px", sm: "25px" }, fontWeight: "bold" }}
        >
          Heading number 4
        </Typography>

        <Typography variant="h5" sx={{ fontSize: { xs: "18px", sm: "20px" } }}>
          Heading number 5
        </Typography>

        <Typography variant="h6" sx={{ fontSize: { xs: "16px", sm: "18px" } }}>
          Heading number 6
        </Typography>
      </Box>
    </Box>
  );
};

export default Html_heading;
