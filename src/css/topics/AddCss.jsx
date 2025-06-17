import { Box, Typography } from '@mui/material';

const AddCss = () => {
  return (
    <Box sx={{ p: 2 , maxWidth: 900, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>
        CSS कैसे जोड़ें?
      </Typography>

      <Typography paragraph>
        CSS को HTML में जोड़ने के लिए तीन मुख्य तरीके होते हैं: Inline CSS, Internal CSS, और External CSS। आइए इन तीनों तरीकों को विस्तार से समझते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom fontWeight="bold" color='secondary'>
        1. Inline CSS
      </Typography>
      <Typography paragraph>
        Inline CSS का उपयोग HTML element के अंदर style attribute के माध्यम से किया जाता है। यह तरीका केवल उस specific element पर styles लागू करता है।
      </Typography>
      <Box component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, overflowX: 'auto', borderRadius: 1 }}>
        <code>
          {`<h1 style="color: red;">Hello World</h1>`}
        </code>
      </Box>

      <Typography variant="h6" gutterBottom fontWeight="bold" color='secondary'>
        2. Internal CSS
      </Typography>
      <Typography paragraph>
        Internal CSS को HTML document के head section में &lt;style&gt; tag के अंदर लिखा जाता है। यह styles पूरे document पर लागू होते हैं।
      </Typography>
      <Box component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, overflowX: 'auto', borderRadius: 1 }}>
        <code>
          {`<!DOCTYPE html> 
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Example</title>
            
  <style>
    body {
      background-color: black;
    } 
    h1 {
      color: red;
    }
    p {
      color: white;
    }
  </style>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a paragraph.</p>
</body> 
</html>`}
        </code>
      </Box>

      <Typography variant="h6" gutterBottom fontWeight="bold" color='secondary'>
        3. External CSS
      </Typography>
      <Typography paragraph>
        External CSS को एक अलग .css file में लिखा जाता है और उसे HTML document के head section में &lt;link&gt; tag के माध्यम से जोड़ा जाता है। यह तरीका सबसे अच्छा है क्योंकि इससे styles को अलग रखा जा सकता है और कई HTML pages पर reuse किया जा सकता है।
      </Typography>
      <Box component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, overflowX: 'auto', borderRadius: 1 }}>
        <code>
          {`<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <title>CSS Example</title>    
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a paragraph.</p> 
</body>
</html>`}
        </code>
      </Box>

      <Typography variant="h6" gutterBottom fontWeight="bold">
        styles.css
      </Typography>
      <Box component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, overflowX: 'auto', borderRadius: 1 }}>
        <code>
          {`body {  
  background-color: black;
}   
h1 {
  color: red;
}
p { 
  color: white; 
}`}
        </code>
      </Box>

      <Typography paragraph mt={3}>
        इन तीनों तरीकों में से, External CSS सबसे अधिक उपयोगी और प्रचलित है क्योंकि यह styles को अलग रखता है और उन्हें कई HTML pages पर reuse किया जा सकता है। Internal CSS का उपयोग तब किया जाता है जब styles केवल एक ही page पर लागू होनी हों, और Inline CSS का उपयोग तब किया जाता है जब किसी specific element को style करना हो।
      </Typography>

    </Box>
  );
};

export default AddCss;
