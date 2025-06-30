import { Box, Typography } from "@mui/material";

const Js_window_object = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript Window Object
      </Typography>

      <Typography paragraph>
        Window Object, current browser window को represent करता है। यह browser द्वारा automatically create किया जाता है। 
        जब कई सारे tabs एक ही window में खुले हों, तो हर tab का अपना अलग window object होता है। JavaScript code उसी window पर काम करता है, जिसमें वह run हो रहा है।
      </Typography>

      <Typography paragraph>
        कुछ properties और methods (जैसे resizeTo() और innerHeight) पूरे window पर apply होते हैं। Window object का scope global होता है, 
        इसलिए इसकी properties और methods को बिना `window` keyword के भी access किया जा सकता है।
      </Typography>

      <Typography paragraph>
        ध्यान दें: window browser का object होता है, JavaScript का नहीं। जबकि String, Array, Math आदि JavaScript के objects होते हैं।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        📌 Common Window Methods
      </Typography>

      <Typography paragraph>
        Window object के कुछ commonly used methods नीचे दिए गए हैं:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>open()</li>
        <li>close()</li>
        <li>alert()</li>
        <li>confirm()</li>
        <li>prompt()</li>
        <li>setTimeout()</li>
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        ✅ window.open() Method
      </Typography>

      <Typography paragraph>
        नई window या tab खोलने के लिए `window.open()` method का उपयोग किया जाता है।
      </Typography>

      <Typography fontWeight="bold">Syntax:</Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`let myWindow = window.open(url, window_name, features);`}
      </Box>

      <Typography paragraph>
        - <b>url</b>: खोले जाने वाले page का path  
        - <b>window_name</b>: new window/tab का नाम  
        - <b>features</b>: नई window की width, height, आदि
      </Typography>

      <Typography fontWeight="bold">Example:</Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<script type="text/javascript">
  let mywindow = window.open("https://www.codeinhindi.in", "My window", "width=400,height=300");
</script>`}
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        ❌ window.close() Method
      </Typography>

      <Typography paragraph>
        `window.close()` function का उपयोग current window को बंद करने के लिए किया जाता है, लेकिन यह केवल उसी window पर काम करता है जिसे script द्वारा खोला गया हो।
      </Typography>

      <Typography fontWeight="bold">Syntax:</Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`window.close();`}
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        📢 alert(), confirm(), prompt() Methods
      </Typography>

      <Typography paragraph>
        ये तीनों methods dialog box show करते हैं जो आगे का code तब तक रोकते हैं जब तक user उसे close ना करे।
      </Typography>

      <Typography fontWeight="bold">alert() Example:</Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`alert("Thanks for displaying me!");`}
      </Box>

      <Typography fontWeight="bold">confirm() Example:</Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`if(confirm("Are you happy?")) {
  document.write("You are happy");
} else {
  document.write("You are not happy");
}`}
      </Box>

      <Typography fontWeight="bold">prompt() Example:</Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`let age = prompt("How old are you?", 20);
document.write(\`You are \${age} years old.\`);`}
      </Box>

      <Typography variant="h6" color="secondary" gutterBottom>
        ⏳ setTimeout() Method
      </Typography>

      <Typography paragraph>
        setTimeout() किसी function को delay के साथ run कराता है। Delay millisecond में होता है।
      </Typography>

      <Typography fontWeight="bold">Syntax:</Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`setTimeout(function, delay, ...args);`}
      </Box>

      <Typography fontWeight="bold">Example:</Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<script type="text/javascript">
  let my_window = window.open("https://www.codeinhindi.in", "My window", "width=400,height=300");

  setTimeout(function() {
    my_window.close();
  }, 10000); // Close after 10 seconds
</script>`}
      </Box>

      <Typography paragraph>
        उपर example में एक window खोली जाती है और उसे 10 seconds बाद बंद कर दिया जाता है।
      </Typography>
    </Box>
  );
};

export default Js_window_object;
