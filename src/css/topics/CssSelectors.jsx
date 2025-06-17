import { Box, Typography } from "@mui/material";

const CssSelectors = () => {
  return (
    <Box sx={{ p: 2, width: "100%", maxWidth: 900,  }}>
        <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>CSS Selectors क्या है ?</Typography>
      <Typography variant="h6" gutterBottom>
        CSS में Selectors, HTML elements होते हैं जिनके ऊपर हम style apply करते हैं। जिस तरह JavaScript में selectors होते हैं, उसी तरह CSS में भी होते हैं।
      </Typography>

      <Typography paragraph>
        Web page में style apply करने के लिए Selector का use किया जाता है। यह elements और अन्य organized words का एक pattern है जो browser को उस element पर define की गई design/style apply करके दिखाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">CSS Selectors के प्रकार:</Typography>
      <Typography paragraph gutterBottom  ml ={4}>
        
         <ul>
          <li>Element / Tag Selector</li>
          <li>ID Selector</li>
          <li>Class Selector</li>
          <li>Universal Selector</li>
          <li>Group Selector</li>
          <li>Attribute Selector</li>
        </ul>
      </Typography>

      {/* Element Selector */}
      <Typography variant="subtitle1" gutterBottom color="secondary">1. Element / Tag Selector</Typography>
      <Typography paragraph>
        इसमें हम सीधे HTML elements के नाम से style apply करते हैं।
      </Typography>
      <Box sx={{ backgroundColor: "#8CCDEB", padding: 2, borderRadius: 1, marginBottom: 2,  overflowX: "auto", whiteSpace: "pre" }}>

      
      <pre>{`<!DOCTYPE html>
<html>
  <head>
    <style>
      body { background-color: black; }
      h2 { color: red; }
    </style>
  </head>
  <body>
    <h2>CSS Element Tag Selector</h2>
  </body>
</html>`}</pre>
</Box>
      {/* ID Selector */}
      <Typography variant="subtitle1" gutterBottom color="secondary">2. ID Selector</Typography>
      <Typography paragraph>
        ID के द्वारा uniquely किसी element को select किया जाता है। इसके लिए `#idname` का उपयोग किया जाता है। <br />
         `#` का उपयोग ID selector के लिए किया जाता है। ID selector का उपयोग तब किया जाता है जब हमें किसी specific element को style करना हो।
      </Typography>
      <Box sx={{ backgroundColor: "#8CCDEB", padding: 2, borderRadius: 1, marginBottom: 2  ,  overflowX: "auto", whiteSpace: "pre" }}>
      <pre>{`<h2 id="myheading">CSS ID Selector</h2>

<style>
  #myheading { color: red; }
</style>`}</pre>
        </Box>

      {/* Class Selector */}
      <Typography variant="subtitle1" gutterBottom color="secondary">3. Class Selector</Typography>
      <Typography paragraph>
        Class द्वारा group of elements को select किया जाता है। इसके लिए `.classname` का उपयोग होता है।<br />
        `.` का उपयोग class selector के लिए किया जाता है। Class selector का उपयोग तब किया जाता है जब हमें एक से अधिक elements को style करना हो।
      </Typography>
        <Box sx={{ backgroundColor: "#8CCDEB", padding: 2, borderRadius: 1, marginBottom: 2  ,  overflowX: "auto", whiteSpace: "pre" }}> 
      <pre>{`<h2 class="myclass">CSS Class Selector</h2>

<style>
  .myclass { color: red; }
</style>`}</pre>
        </Box>
      {/* Universal Selector */}
      <Typography variant="subtitle1" gutterBottom color="secondary">4. Universal Selector</Typography>
      <Typography paragraph>
        यह सभी elements को target करता है और `*` का use होता है।
      </Typography>
      <Box sx={{ backgroundColor: "#8CCDEB", padding: 2, borderRadius: 1, marginBottom: 2 ,  overflowX: "auto", whiteSpace: "pre" }}>
      <pre>{`<style>
  * { color: blue; font-weight: bolder; }
</style>`}</pre>
        </Box>
      {/* Group Selector */}
      <Typography variant="subtitle1" gutterBottom color="secondary">5. Group Selector</Typography>
      <Typography paragraph>
        एक से अधिक selectors को एक साथ target करने के लिए comma का use होता है।
      </Typography>
     <Box sx={{ backgroundColor: "#8CCDEB", padding: 2, borderRadius: 1, marginBottom: 2  ,  overflowX: "auto", whiteSpace: "pre" }}>
      <pre>{`<style>
  #myID, .myclass, span {
    color: blue;
    font-weight: bolder;
  }
</style>`}</pre>
        </Box>
      {/* Attribute Selector */}
      <Typography variant="subtitle1" gutterBottom color="secondary">6. Attribute Selector</Typography>
      <Typography paragraph>
        किसी element के attribute के आधार पर उसे select करने के लिए यह selector उपयोग होता है।
      </Typography>
      <Box sx={{ backgroundColor: "#8CCDEB", padding: 2, borderRadius: 1, marginBottom: 2 ,  overflowX: "auto", whiteSpace: "pre" }}>
      <pre>{`<h2 test="attribute">Test Attribute</h2>

<style>
  h2[test='attribute'] {
    color: red;
  }
</style>`}</pre>
    </Box>
        <Typography paragraph>
            CSS selectors का उपयोग करके हम HTML elements को style कर सकते हैं। यह selectors हमें flexibility और control देते हैं कि हम किस element पर style apply करना चाहते हैं।
        </Typography>
        <Typography variant="h6" gutterBottom color="secondary">निष्कर्ष:</Typography>
        <Typography paragraph>
            CSS selectors का सही उपयोग करके हम अपने web pages को visually appealing और user-friendly बना सकते हैं। यह selectors हमें HTML elements को आसानी से target करने की सुविधा देते हैं।
        </Typography>

    </Box>
  );
};

export default CssSelectors;
