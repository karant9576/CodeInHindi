import { Box, Typography } from "@mui/material";

const Js_dom = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript DOM (Document Object Model)
      </Typography>

      <Typography paragraph>
        DOM (Document Object Model) एक <strong>web page का object-oriented representation</strong> होता है जिसे JavaScript जैसी scripting languages के द्वारा manipulate किया जा सकता है।
      </Typography>

      <Typography paragraph>
        आसान भाषा में कहें तो, यह web pages को <strong>Objects और Nodes</strong> के रूप में represent करता है। कोई भी HTML page एक <strong>document</strong> होता है, जो browser window या HTML source को represent करता है।
      </Typography>

      <Typography paragraph>
        DOM ही HTML का एक programming interface होता है जिससे programming languages (जैसे JavaScript) HTML elements से interact कर पाती हैं — उन्हें पढ़ सकती हैं, modify कर सकती हैं, delete कर सकती हैं या new elements insert कर सकती हैं।
      </Typography>

      <Typography paragraph>
        जब भी कोई web page load होता है, browser उस page के लिए DOM automatically create कर देता है। चूंकि DOM HTML को object और node के रूप में दर्शाता है, इसलिए हर HTML element एक object होता है और उसे programmatically access किया जा सकता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔧 JavaScript Document Object Model Structure
      </Typography>

      <Typography paragraph>
        जब HTML को object के रूप में देखा जाता है, तो प्रत्येक object की कुछ <strong>properties</strong> और <strong>methods</strong> होती हैं।
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>
          <strong>Properties</strong> का उपयोग किसी HTML element की जानकारी पाने या value set करने में किया जाता है।
        </li>
        <li>
          <strong>Methods</strong> का उपयोग किसी event या task को perform करने में किया जाता है जैसे कि कोई action trigger करना।
        </li>
      </Typography>

      <Typography paragraph>
        DOM JavaScript को HTML structure के साथ interact करने की क्षमता देता है, जिससे dynamic pages बनाए जा सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ JavaScript से DOM में Possible Manipulations
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>Document में नया HTML Element dynamically add कर सकते हैं।</li>
        <li>किसी existing element को document से remove किया जा सकता है।</li>
        <li>Element के inner text को modify किया जा सकता है।</li>
        <li>Element के attributes को add या update किया जा सकता है।</li>
        <li>Elements पर CSS styles dynamically apply की जा सकती हैं।</li>
        <li>Events जैसे <code>click</code>, <code>hover</code>, <code>keyup</code>, <code>change</code> आदि को handle किया जा सकता है।</li>
        <li>Custom events भी किसी भी HTML element पर bind किए जा सकते हैं।</li>
      </Typography>

      <Typography paragraph fontStyle="italic">
        DOM के माध्यम से हम Web Page को पूरी तरह से programmatically control कर सकते हैं।
      </Typography>
    </Box>
  );
};

export default Js_dom;
