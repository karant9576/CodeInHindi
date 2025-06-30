import { Box, Typography } from "@mui/material";

const Js_events_handling = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Event Handling
      </Typography>

      <Typography paragraph>
        पिछले टॉपिक में आपने JavaScript में मौजूद various events के बारे में जाना। इस टॉपिक में आप सीखेंगे कि इन events को handle कैसे किया जाता है और उन्हें अपनी need के अनुसार कैसे use किया जाता है।
      </Typography>

      <Typography paragraph>
        किसी event को handle करने के लिए उस event पर एक <strong>handler</strong> assign किया जाता है। यह handler एक function होता है, जो event trigger होने पर execute होता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="error">
        ❕ Important
      </Typography>
      <Typography paragraph>
        Web Events, Core JavaScript का हिस्सा नहीं हैं, ये <strong>Browser APIs</strong> का हिस्सा होती हैं जो browser में inbuilt होती हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔹 Event Handle करने के तरीक़े
      </Typography>
      <Typography paragraph>
        Event को handle करने के कई तरीक़े होते हैं, जिनमें से कुछ मुख्य तरीके निम्नलिखित हैं:
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔸 1. HTML Attribute के द्वारा Event Handling
      </Typography>
      <Typography paragraph>
        इस method में events को HTML tags के अंदर एक attribute की तरह define किया जाता है।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <body>
    <button onclick="alert('You clicked')">click Event</button>  
    <button onmouseover="alert('Mouse over me')">mouseover</button>  
    <button onmouseout="alert('You just remove the mouse')">mouseout</button>
    <button onclick="alert(this.innerHTML)"><b>Get HTML</b></button> 
    <button onclick="alert(this.innerText)"><b>Get Only Text</b></button> 
    <button onclick="this.innerText='This is new value'">Click me to change</button> 
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        ऊपर के उदाहरण में <code>this</code> keyword का उपयोग करके current element को access किया गया है। ध्यान दें कि HTML attributes में event handler लिखते समय <strong>double quote के अंदर single quote</strong> का प्रयोग करें।
      </Typography>

      <Typography paragraph>
        यह तरीका छोटे tasks के लिए अच्छा है, लेकिन बड़े tasks के लिए बेहतर होगा कि आप JavaScript के अंदर function को define और call करें।
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔸 2. Function Call द्वारा Event Handling
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<button onclick="count(this)">You Clicked 0 Times</button>  
<script type="text/javascript">
  let number = 0;
  function count(element) {
    number++;
    element.innerText = \`You Clicked \${number} Times\`;
  }
</script>`}
      </Typography>

      <Typography paragraph mt={2}>
        इस उदाहरण में <code>onclick</code> event पर function call किया गया है और current element को argument के रूप में pass किया गया है, जिससे हम उसी element की properties को modify कर सकें।
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔸 3. DOM Property से Event Handler Assign करना
      </Typography>
      <Typography paragraph>
        HTML Attribute method पुराना तरीका माना जाता है। Modern projects में आप event handler को DOM properties के माध्यम से assign कर सकते हैं।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<button id="count_button">You Clicked 0 Times</button>  
<script type="text/javascript">
  let number = 0;
  count_button.onclick = function () {
    number++;
    count_button.innerText = \`You Clicked \${number} Times\`;
  }
</script>`}
      </Typography>

      <Typography paragraph mt={2}>
        ऊपर दिए गए उदाहरण में element की <code>id</code> से उसे directly select करके event handler assign किया गया है। इस तरह के functions को anonymous functions भी कहते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="error">
        ❕ Important
      </Typography>
      <Typography paragraph>
        DOM Property के ज़रिए event handler assign करते समय यह ध्यान रखना ज़रूरी है कि JavaScript code उस element के render हो जाने के बाद ही run हो, अन्यथा error आएगी।
      </Typography>

      <Typography paragraph>
        जबकि HTML attribute method में function तब ही call होता है जब कोई event होती है, इसलिए उसे element से पहले या बाद में कहीं भी define किया जा सकता है।
      </Typography>

      <Typography paragraph fontStyle="italic" mt={2}>
        उम्मीद है अब आप समझ गए होंगे कि JavaScript में events को कैसे handle किया जाता है। अगले steps में आप इन events को React या JS frameworks में कैसे handle किया जाता है, वह भी सीख सकते हैं।
      </Typography>
    </Box>
  );
};

export default Js_events_handling;
