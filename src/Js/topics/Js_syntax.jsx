import { Box, Typography } from "@mui/material";

const Js_syntax = () => {
  return (
    <Box sx={{ p: 2 ,  maxWidth: 1000, mx: "auto" , marginTop:"-1px",}}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Syntax
      </Typography>

      <Typography paragraph>
        Syntax का मतलब है नियमों का एक समूह, जिन्हें follow करके एक सही तरीके से structured program लिखा जाता है।
      </Typography>

      <Typography paragraph>
        JavaScript एक client-side dynamic language है, जिसका उपयोग HTML page पर events handle करने और content को modify करने के लिए किया जाता है। आप JavaScript को HTML में सीधे इस्तेमाल कर सकते हैं।
      </Typography>

      <Typography paragraph>
        JavaScript Code हमेशा <code>{`<script>...</script>`}</code> टैग के अंदर लिखा जाता है। इस script टैग को आप HTML के <code>{`<head>`}</code> या <code>{`<body>`}</code> में रख सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📄 Internal JavaScript Example:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 , overflowX: 'auto', whiteSpace: 'pre'}}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JS Syntax</title>
  </head>
  <body>
    <script type="text/javascript">
      document.write("Hello JavaScript");
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        ऊपर दिए गए example में <code>document</code> एक object है और <code>write()</code> एक function है, जिसका उपयोग output को दिखाने के लिए किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📁 External JavaScript
      </Typography>

      <Typography paragraph>
        यदि आप JavaScript को HTML से अलग रखना चाहते हैं, तो आप उसे एक अलग `.js` फाइल में लिख सकते हैं। इस फाइल को HTML में include करना ज़रूरी होता है।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 }}>
{`// File: test.js
document.write("Hello JS");`}
      </Typography>
      
      <Typography component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 , overflowX: 'auto', whiteSpace: 'pre',mt: 2 }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>External JavaScript</title>
  </head>
  <body>
    <script type="text/javascript" src="test.js"></script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2} >
        ⚠️ <strong>Note:</strong> JavaScript एक case-sensitive भाषा है। यानी <code>name</code> और <code>Name</code> दो अलग-अलग variables माने जाएंगे।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔐 JavaScript "use strict"
      </Typography>

      <Typography paragraph lineHeight={1.6}>
        JavaScript में by default कुछ modification disable होते हैं जिन्हे आप 'use strict' directive के through enable कर सकते हैं।
        JavaScript में कुछ modifications को restrict करने के लिए `"use strict"` directive का उपयोग किया जाता है। इसे string के रूप में script के सबसे ऊपर लिखा जाता है।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1,overflowX: 'auto', whiteSpace: 'pre' }}>
{`<script type="text/javascript">
  'use strict';
  document.write("Hello JavaScript");
</script>`}
      </Typography>

      <Typography paragraph mt={2}>
        यदि आप strict mode में काम कर रहे हैं और कोई error करते हैं (जैसे semicolon न लगाना), तो browser आपको error दिखाएगा। 
        <strong>Note:</strong> `"use strict"` हमेशा script के top पर होना चाहिए।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🧪 Developer Console
      </Typography>

      <Typography paragraph>
        JavaScript code में अगर कोई error आती है तो वह browser के developer console में दिखाई देती है। Console का उपयोग हम debugging के लिए करते हैं।
      </Typography>

      <Typography paragraph>
        <strong>Console खोलने के लिए:</strong>
        <ul>
          <li>Windows: F12 या Right-click → Inspect → Console</li>
          <li>Mac: cmd + opt + J</li>
        </ul>
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ❌ Error Example:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX: 'auto', whiteSpace: 'pre'}}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JS Syntax Error</title>
  </head>
  <body>
    <script>
      document.write(x); // x is not defined, will throw error
    </script>
  </body>
</html>`}
      </Typography>

    </Box>
  );
};

export default Js_syntax;
