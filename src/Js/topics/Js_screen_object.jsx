import { Box, Typography } from "@mui/material";

const Js_screen_object = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Screen Object
      </Typography>

      <Typography paragraph>
        <strong>screen object</strong> current window के device (जैसे PC, Mobile, Tablet आदि) की screen से जुड़ी जानकारी देता है,
        जैसे width, height, और resolution.
      </Typography>

      <Typography paragraph>
        यह <strong>window object</strong> की एक property होती है, इसलिए इसे दो तरीकों से access कर सकते हैं:
        <br />
        - <code>window.screen.propertyName</code>  
        - <code>screen.propertyName</code>
      </Typography>

      <Typography paragraph>
        दोनों ही तरीकों से हमेशा current window की screen information ही मिलती है।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        🔍 screen Object को Console में देखना
      </Typography>

      <Typography paragraph>
        आप screen object को console में log करके इसकी सभी properties और values देख सकते हैं।
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript screen Object</title>
  </head>
  <body>
    <script type="text/javascript">
      console.log(screen);
    </script>
  </body>
</html>`}
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        📋 Important screen Object Properties
      </Typography>

      <Typography paragraph>
        नीचे कुछ commonly used screen object properties दी गई हैं:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>
          <strong>screen.width:</strong> taskbar सहित पूरी screen की width return करता है।
        </li>
        <li>
          <strong>screen.availWidth:</strong> taskbar को छोड़कर available screen width देता है।
        </li>
        <li>
          <strong>screen.height:</strong> taskbar सहित पूरी screen की height देता है।
        </li>
        <li>
          <strong>screen.availHeight:</strong> taskbar को छोड़कर available screen height return करता है।
        </li>
        <li>
          <strong>screen.pixelDepth:</strong> screen की color depth (जैसे 24-bit) बताता है।
        </li>
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        ✅ JavaScript Screen Object Example
      </Typography>

      <Typography paragraph>
        नीचे एक उदाहरण है जिसमें screen की अलग-अलग properties को print किया गया है:
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript screen Object Example</title>
  </head>
  <body>
    <script type="text/javascript">
      document.write(\`Screen width without taskbar: \${screen.availWidth} <br>\`);
      document.write(\`Screen full width: \${screen.width} <br>\`);
      document.write(\`Screen height without taskbar: \${screen.availHeight} <br>\`);
      document.write(\`Screen full height: \${screen.height} <br>\`);
      document.write(\`Screen resolution: \${screen.pixelDepth}\`);
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        इस example में:
        <br />- <code>`</code> (backticks) का उपयोग template string के लिए किया गया है।
        <br />- <code>${"{...}"}</code> के अंदर variables को directly inject किया गया है।
        <br />- <code>&lt;br&gt;</code> tag का use line break के लिए किया गया है।
      </Typography>

      <Typography paragraph>
        I hope अब आपको JavaScript में <strong>screen object</strong> की पूरी जानकारी मिल गई होगी।
      </Typography>
    </Box>
  );
};

export default Js_screen_object;
