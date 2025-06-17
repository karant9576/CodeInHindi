import { Box, Typography } from '@mui/material';

const WhatIsCss = () => {
  return (
    <Box sx={{ p: 2,   maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>
        CSS क्या है?
      </Typography>

      <Typography paragraph>
        CSS की full form <strong>Cascading Style Sheets</strong> है। यह एक प्रकार की language है जिसकी help से हम अपनी Website की designing करते हैं।
      </Typography>

      <Typography paragraph>
        सरल भाषा में कहें तो CSS आपके browser को यह बताता है कि web page में मौजूद contents (जैसे text, image, video, paragraph, font, color, size, position आदि) को कैसे display करना है।
      </Typography>

      <Typography paragraph>
        जब हम सिर्फ HTML use करते हैं तो हमारा web page basic होता है। अगर हम font या background color बदलना चाहते हैं, तो वहाँ हमें CSS की ज़रूरत होती है।
      </Typography>

      <Typography paragraph>
        CSS को हमेशा HTML के साथ use किया जाता है। HTML content को define करता है और CSS उस content को style करता है।
      </Typography>

      <Typography variant="h6" gutterBottom fontWeight="bold" color='secondary'>
        📄 बिना CSS के Example:
      </Typography>

      <Typography>File: <code>test.html</code></Typography>
      <Box component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, overflowX: 'auto', borderRadius: 1,   }}>
        <code>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSS Example</title>
  </head>
  <body>
    <h3>Hello Learners</h3>
    <p>This is paragraph</p>
  </body>
</html>`}
        </code>
      </Box>

      <Typography paragraph>
        ऊपर दिए गए example को run करने पर आप देखेंगे कि सिर्फ text दिखाई देगा, कोई design नहीं होगी। अब इसी में CSS apply करके देखते हैं:
      </Typography>

      <Typography variant="h6" gutterBottom fontWeight="bold" color='secondary'>
        🎨 CSS Applied Example:
      </Typography>

      <Typography>File: <code>test.html</code></Typography>
      <Box component="pre" sx={{ bgcolor: '#8CCDEB', p: 2, overflowX: 'auto', borderRadius: 1 }}>
        <code>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSS Example</title>
    <style>
      /* Change page background color */
      body {
        background-color: black;
      }

      /* All h2 headings will be red */
      h2 {
        color: red;
      }

      /* Style for all paragraphs */
      p {
        font-family: verdana;
        font-size: 20px;
        color: green;
      }
    </style>
  </head>
  <body>
    <h2>Hello Learners</h2>
    <p>This is paragraph</p>
  </body>
</html>`}
        </code>
      </Box>

      <Typography paragraph>
        अब इस code को run करने पर आप देखेंगे कि page का background color black, heading red और paragraph green हो गया है।
      </Typography>

      <Typography paragraph>
        🔍 <strong>निष्कर्ष:</strong> CSS का मुख्य कार्य HTML elements को visually बेहतर और सुंदर बनाना है।
      </Typography>
    </Box>
  );
};

export default WhatIsCss;
