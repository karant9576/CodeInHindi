import { Box, Typography } from "@mui/material";

const Js_string_functions = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: '-1px' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript String Functions
      </Typography>

      <Typography paragraph>
        JavaScript हमें कई सारे String functions provide कराती है जिनकी help से हम String को manipulate कर सकते हैं और बहुत से operations perform कर सकते हैं।
        हम जानते हैं कि JavaScript में किसी भी Object की सभी properties और methods को console में देखा जा सकता है। 
        तो String class का object बनाकर define की गई string के भी सभी useful properties और methods आसानी से देखे जा सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔍 Example: Inspecting String Object
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto", whiteSpace: "pre" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript String Functions In Hindi</title>
  </head>
  <body>
    <script type="text/javascript">
      let str_var = new String("Hello ! welcome in new learning world.");
      console.log(str_var);
    </script>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        Console में आपको उस String Object की पूरी list दिखेगी जिसमें कई सारे useful functions होते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📋 Commonly Used String Functions
      </Typography>

      <Typography paragraph>
        JavaScript में कुछ उपयोगी string functions इस प्रकार हैं:
        <Box sx={{ pl: 2 }}>
          ⁘ <code>charAt()</code><br />
          ⁘ <code>indexOf()</code><br />
          ⁘ <code>concat()</code><br />
          ⁘ <code>lastIndexOf()</code><br />
          ⁘ <code>replace()</code>
        </Box>
      </Typography>

      {/* charAt */}
      <Typography variant="h6" gutterBottom color="secondary">
        🔹 JavaScript <code>charAt()</code>
      </Typography>
      <Typography paragraph>
        यह function दिए गए index पर मौजूद character को return करता है। Index 0 से शुरू होती है।
      </Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto", whiteSpace: "pre" }}>
{`<script type="text/javascript">
  let str_var = "Hello ! welcome in new learning world."; 
  document.write(str_var.charAt(2));  // Output: 'l'
</script>`}
      </Box>

      {/* indexOf */}
      <Typography variant="h6" gutterBottom color="secondary">
        🔹 JavaScript <code>indexOf()</code>
      </Typography>
      <Typography paragraph>
        यह function किसी substring या character का सबसे पहला match मिलने पर उसका index number return करता है।
        अगर substring नहीं मिलती, तो <code>-1</code> return होता है।
      </Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto", whiteSpace: "pre" }}>
{`<script type="text/javascript">
  let str_var = "Hello ! welcome in new learning world.";
  document.write(str_var.indexOf('new'));  // Output: 19
</script>`}
      </Box>

      {/* concat */}
      <Typography variant="h6" gutterBottom color="secondary">
        🔹 JavaScript <code>concat()</code>
      </Typography>
      <Typography paragraph>
        इस function से दो strings को जोड़ने (concatenate) के लिए इस्तेमाल किया जाता है।
        हालांकि <code>+</code> ऑपरेटर से भी यही काम किया जा सकता है।
      </Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto", whiteSpace: "pre" }}>
{`<script type="text/javascript">
  let str_var1 = "Hello !";
  let str_var2 = " How are you?";
  document.write(str_var1.concat(str_var2));  // Hello ! How are you?
  document.write(str_var1 + str_var2);        // Hello ! How are you?
</script>`}
      </Box>

      {/* lastIndexOf */}
      <Typography variant="h6" gutterBottom color="secondary">
        🔹 JavaScript <code>lastIndexOf()</code>
      </Typography>
      <Typography paragraph>
        यह function किसी substring का आखिरी बार कहाँ मिला, उसका index देता है। अगर नहीं मिला तो <code>-1</code> return होता है।
      </Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto", whiteSpace: "pre" }}>
{`<script type="text/javascript">
  let str_var = "Hello ! welcome in new learning world.";
  document.write(str_var.lastIndexOf('r'));  // Output: 34
</script>`}
      </Box>

      {/* replace */}
      <Typography variant="h6" gutterBottom color="secondary">
        🔹 JavaScript <code>replace()</code>
      </Typography>
      <Typography paragraph>
        यह function किसी substring को खोज कर उसे किसी दूसरी substring से बदल देता है। अगर substring नहीं मिलती, तो कोई बदलाव नहीं होता।
      </Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto", whiteSpace: "pre" }}>
{`<script type="text/javascript">
  let str_var = "Hello ! welcome in new learning world.";
  document.write(str_var.replace('world', 'website')); 
  // Output: Hello ! welcome in new learning website.
</script>`}
      </Box>
      
    </Box>
  );
};

export default Js_string_functions;
