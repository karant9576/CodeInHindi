import { Box, Typography } from "@mui/material";

const Js_navigator_object = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Navigator Object
      </Typography>

      <Typography paragraph>
        JavaScript में <strong>window.navigator</strong> object का उपयोग browser detection के लिए किया जाता है। इसकी help से हम browser की जानकारी प्राप्त कर सकते हैं जैसे:
        browser name, version, user agent आदि।
      </Typography>

      <Typography paragraph>
        जैसा कि आपने पहले पढ़ा है, <strong>window object</strong> की सभी properties और methods को आप सीधे access कर सकते हैं — <code>window.navigator</code> या <code>navigator</code> के ज़रिए।
      </Typography>

      <Typography paragraph>
        🔒 <strong>Note:</strong> <code>navigator</code> एक read-only property है, इसलिए इसकी values को change नहीं किया जा सकता।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        📋 Navigator Object Properties & Methods
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><b>navigator.appName</b>: Browser App का नाम return करता है।</li>
        <li><b>navigator.appVersion</b>: Browser का current version देता है।</li>
        <li><b>navigator.buildID</b>: Web browser का build number return करता है।</li>
        <li><b>navigator.geolocation</b>: Geolocation API से interact करने के लिए object देता है।</li>
        <li><b>navigator.language</b>: Browser की default भाषा (e.g., en-US)।</li>
        <li><b>navigator.languages</b>: Preferred languages की array return करता है।</li>
        <li><b>navigator.onLine</b>: Device internet से connected है या नहीं, यह बताता है।</li>
        <li><b>navigator.oscpu</b>: OS और CPU की जानकारी देता है।</li>
        <li><b>navigator.permissions</b>: Permissions API से interact करता है (जैसे camera access)।</li>
        <li><b>navigator.platform</b>: जिस platform पर browser चल रहा है, उसकी जानकारी देता है।</li>
        <li><b>navigator.userAgent</b>: Browser की पूरी technical जानकारी देता है।</li>
        <li><b>navigator.vibrate()</b>: यदि supported हो तो device vibrate करता है।</li>
      </Typography>

      <Typography paragraph>
        इसके अलावा भी navigator object की कई अन्य properties और methods होती हैं, जिन्हें आप console में <code>console.log(navigator)</code> से देख सकते हैं।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        ✅ Example: navigator object in use
      </Typography>

      <Typography paragraph>
        नीचे दिए गए example में navigator की विभिन्न properties को HTML में display किया गया है:
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript navigator Object Example</title>
  </head>
  <body>
    <script type="text/javascript"> 
      document.write(\`<h4>It's all about you !</h4>\`);
      document.write(\`Your Browser Name : \${navigator.appName} <br>\`);
      document.write(\`Your Browser Version : \${navigator.appVersion} <br>\`);
      document.write(\`Browser BuildID : \${navigator.buildID} <br>\`);
      document.write(\`Browser Default Language : \${navigator.language} <br>\`);
      document.write(\`Browser Preferred Language : \${navigator.languages} <br>\`);
      document.write(\`Online Status : \${navigator.onLine} <br>\`);
      document.write(\`System OS & CPU : \${navigator.oscpu} <br>\`);
      document.write(\`Platform Info : \${navigator.platform} <br>\`);
      document.write(\`userAgent : \${navigator.userAgent}\`);
    </script>
  </body>
</html>`}
      </Box>

      <Typography variant="body1" fontWeight="bold" gutterBottom>
        🔎 Output (Example):
      </Typography>

      <Typography paragraph>
        - Browser Name: Netscape  
        - Browser Version: 5.0 (Windows)  
        - Build ID: 20181001000000  
        - Default Language: en-US  
        - Preferred Language: en-US, en  
        - Online Status: true  
        - OS/CPU: Windows NT 10.0; Win64; x64  
        - Platform: Win32  
        - userAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:83.0) Gecko/20100101 Firefox/83.0
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        📳 Device Vibrate Example (If supported)
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<button onclick="navigator.vibrate(1000)">Click to Vibrate</button>`}
      </Box>

      <Typography paragraph>
        इस button पर click करने पर device vibrate होगा — अगर system vibration support करता है।
      </Typography>

      <Typography paragraph fontStyle="italic">
        🔔 <strong>Note:</strong> System, Platform और Browser के हिसाब से navigator object की values अलग-अलग हो सकती हैं।
      </Typography>
    </Box>
  );
};

export default Js_navigator_object;
