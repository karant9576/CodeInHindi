import { Box, Typography } from "@mui/material";

const Js_location_object = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Location Object
      </Typography>

      <Typography paragraph>
        JavaScript में <strong>location object</strong> का उपयोग current URL की जानकारी प्राप्त करने और
        page redirection या reload जैसे tasks करने के लिए किया जाता है।
      </Typography>

      <Typography paragraph>
        यह object <strong>window</strong> का हिस्सा होता है, इसलिए इसे <code>window.location</code> या सिर्फ <code>location</code> से access कर सकते हैं।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        📋 Location Object Properties
      </Typography>

      <Typography paragraph>
        नीचे location object की कुछ commonly used properties दी गई हैं:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><b>location.href</b>: पूरा URL return या set करता है।</li>
        <li><b>location.host</b>: Hostname और Port number दोनों को return करता है।</li>
        <li><b>location.hostname</b>: केवल hostname return करता है।</li>
        <li><b>location.port</b>: Port number set या get करता है।</li>
        <li><b>location.origin</b>: Protocol, hostname और port को एक साथ return करता है।</li>
        <li><b>location.search</b>: URL की query string return करता है।</li>
        <li><b>location.pathname</b>: Domain के बाद की path को return करता है।</li>
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        ✅ Example: Using location Object
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript location Object Example</title>
  </head>
  <body>
    <script type="text/javascript"> 
      // Create custom anchor element
      var url = document.createElement('a');
      url.href = 'https://www.codeinhindi.in:5173/js/javascript-navigator-object-in-hindi?subject=javaScript';

      document.write(\`location.protocol : \${url.protocol} <br>\`);
      document.write(\`location.href : \${url.href} <br>\`);
      document.write(\`location.host : \${url.host} <br>\`);
      document.write(\`location.hostname : \${url.hostname} <br>\`);
      document.write(\`location.port : \${url.port} <br>\`);
      document.write(\`location.origin : \${url.origin} <br>\`);
      document.write(\`location.search : \${url.search} <br>\`);
      document.write(\`location.pathname : \${url.pathname} <br>\`);
    </script> 
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        ऊपर दिए गए example में, <code>document.createElement('a')</code> method से एक custom link create किया गया है,
        जिससे अलग-अलग location properties को demonstrate किया जा सके।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        🔧 Location Object Methods
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>
          <b>location.reload()</b>: Current page को reload करता है।
        </li>
        <li>
          <b>location.assign(url)</b>: किसी नए URL पर redirect करता है और पुराने URL को history में save करता है।
        </li>
        <li>
          <b>location.replace(url)</b>: पुराने page को नए page से replace करता है (history में save नहीं करता)।
        </li>
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        🔄 assign() vs replace() Difference
      </Typography>

      <Typography paragraph>
        <strong>assign()</strong> method से redirect करने पर browser history में current page save हो जाता है,
        जिससे user <code>history.back()</code> से वापस आ सकता है।
        <br />
        जबकि <strong>replace()</strong> method से redirection करने पर current page history से हट जाता है और वापस नहीं जा सकते।
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔘 Example (with buttons)
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`window.location.reload();
window.location.assign('/js/javascript-screen-object-in-hindi');
window.location.replace('/js/javascript-history-object-in-hindi');`}
      </Box>

      <Typography paragraph>
        - Reload Button: Page reload करेगा।
        <br />
        - Assign Button: नई screen URL load करेगा और back करने पर वापसी संभव होगी।
        <br />
        - Replace Button: उसी URL को replace करेगा और back करने पर वापसी नहीं होगी।
      </Typography>

      <Typography paragraph fontStyle="italic">
        📌 <strong>Note:</strong> location object का व्यवहार browser और use-case के अनुसार थोड़ा भिन्न हो सकता है।
      </Typography>

      <Typography paragraph>
        I hope अब आप JavaScript के <strong>location object</strong> को अच्छे से समझ गए होंगे।
      </Typography>
    </Box>
  );
};

export default Js_location_object;
