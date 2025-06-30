import { Box, Typography } from "@mui/material";

const Js_object = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" ,mt:'-1px'}}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Objects
      </Typography>

      <Typography paragraph>
        Objects real-world entities होते हैं जैसे – Car, Bike, Human आदि। JavaScript में भी, बाकी languages की तरह, हम Objects को define कर सकते हैं।
      </Typography>

      <Typography paragraph>
        जैसे किसी भी real-world entity की कुछ properties (विशेषताएं) और कुछ behavior (व्यवहार) होते हैं, वैसे ही programming में हम उन्हें variables और methods के ज़रिए represent करते हैं।
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="secondary">
        🏍️ Bike Object – Example:
      </Typography>

      <Typography component="div" sx={{ ml: 2 }}>
        <ul>
          <li><strong>Properties:</strong> name, weight, color, max_speed</li>
          <li><strong>Methods:</strong> start(), drive(), brake(), stop()</li>
        </ul>
      </Typography>

      <Typography paragraph>
        JavaScript में Objects बहुत important हैं, क्योंकि कुछ primitives को छोड़कर बाकी सारी values Objects ही होती हैं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🧩 Primitive Values क्या होती हैं?
      </Typography>
      <Typography paragraph>
        Primitive values वो होती हैं जिनकी कोई properties या methods नहीं होतीं।
        JavaScript में 5 primitive types हैं:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>string</li>
        <li>number</li>
        <li>boolean</li>
        <li>null</li>
        <li>undefined</li>
      </Typography>

      <Typography paragraph color="warning.main">
        ⚠️ Primitive values immutable होती हैं – यानि इनकी actual value change नहीं होती।  
        <br />
        जैसे: <code>let x = 10;</code> → यहाँ <code>x</code> की value बदल सकती है, लेकिन 10 (primitive) को modify नहीं किया जा सकता।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        📌 In JavaScript, almost "everything" is an object:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><code>new Boolean()</code>, <code>new Number()</code>, <code>new String()</code> → Objects</li>
        <li><code>Date</code>, <code>Math</code>, <code>RegExp</code>, <code>Array</code>, <code>Function</code> → all are objects</li>
      </Typography>

      <Typography paragraph mt={2}>
        Primitive variables सिर्फ single value contain करते हैं:<br />
        <code>let x = 10;</code>
      </Typography>

      <Typography paragraph>
        जबकि Objects में multiple values store की जा सकती हैं – key:value pair में:
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        ✅ JavaScript में Objects mutable होते हैं
      </Typography>
      <Typography paragraph>
        आप कभी भी Object में नई property add कर सकते हैं, या existing value को update कर सकते हैं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        🔹 Object Define करने के तरीके
      </Typography>

      <Typography paragraph>
        JavaScript में Object define करने के दो मुख्य तरीके हैं:
      </Typography>

      <Typography component="ol" sx={{ pl: 3 }}>
        <li>Using curly braces <code>{`{}`}</code></li>
        <li>Using <code>new Object()</code> constructor</li>
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="secondary">
        🔧 Example using both methods:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`// Method 1: Using curly braces
let bike = {
  name: "TVS Apache",
  weight: "150kg",
  color: "White",
  max_speed: "110 to 160 km/h",
  start: function () {
    return "Bike start";
  }
};

// Method 2: Using new Object()
let bike = new Object();
bike.name = "TVS Apache";
bike.weight = "150kg";
bike.color = "White";
bike.max_speed = "110 to 160 km/h";
bike.start = function () {
  return "Bike start";
};`}
      </Typography>

      <Typography paragraph color="error" mt={2}>
        ⚠️ ध्यान दें: कभी भी predefined Objects जैसे <code>String</code>, <code>Math</code>, <code>Array</code> को manually new keyword से create न करें — यह अच्छी practice नहीं है।
      </Typography>
    </Box>
  );
};

export default Js_object;
