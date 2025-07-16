import { Box, Typography, Divider } from '@mui/material';

const Html_form_element = () => {
  return (
    <Box sx={{p: 2,   maxWidth: 1000, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>
        📑 HTML Form Elements 
      </Typography>

      <Typography gutterBottom>
        पिछले topic में आपने <strong>Form</strong> के बारे में पढ़ा, इस topic में हम <strong>Form Inputs</strong> के बारे में पढ़ेंगे।
        HTML में अलग-अलग data inputs के लिए अलग-अलग तरह के <strong>Form Elements</strong> का उपयोग किया जाता है। नीचे कुछ commonly used form elements दिए गए हैं:
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>Form Elements और उनका Use</Typography>
      <Typography gutterBottom><strong>&lt;label&gt;</strong> — Input या select field को describe करने के लिए।</Typography>
      <Typography gutterBottom><strong>&lt;input&gt;</strong> — User से अलग-अलग data (text, number, date, email, radio, checkbox etc.) collect करने के लिए।</Typography>
      <Typography gutterBottom><strong>&lt;select&gt;</strong> — Predefined list से एक value चुनने के लिए।</Typography>
      <Typography gutterBottom><strong>&lt;option&gt;</strong> — Select tag के अंदर options define करने के लिए।</Typography>
      <Typography gutterBottom><strong>&lt;textarea&gt;</strong> — Long content/text input करने के लिए।</Typography>
      <Typography gutterBottom><strong>&lt;fieldset&gt;</strong> — Form fields को group करने के लिए।</Typography>
      <Typography gutterBottom><strong>&lt;legend&gt;</strong> — Fieldset group के लिए label दिखाने के लिए।</Typography>
      <Typography gutterBottom><strong>&lt;button&gt;</strong> — Form में clickable button बनाने के लिए।</Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>HTML Form Example</Typography>
      <Typography gutterBottom>File: <code>html_form_elements.html</code></Typography>

      <pre style={{ background: '#8CCDEB', padding: '10px', overflowX: 'auto' }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>HTML Table Example</title>
  </head>
  <body>
    <form>
      <fieldset>
        <legend>Personal Info:</legend>
        <label>Full Name:</label><br>
        <input type="text" name="fname" placeholder="Enter Your Full Name"><br><br>

        <label>Gender</label><br>
        <select name="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select><br><br>

        <label>About You</label><br>
        <textarea name="about_you" placeholder="Tell more about yourself" rows="4"></textarea><br>
      </fieldset> <br>

      <input type="submit" value="Submit">
    </form>
  </body>
</html>`}
      </pre>

      <Typography gutterBottom mt={2}>
        ऊपर दिए गए form में विभिन्न प्रकार के elements का उपयोग किया गया है जैसे कि <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code> आदि।
        इन्हें एक साथ group करने के लिए <code>&lt;fieldset&gt;</code> और <code>&lt;legend&gt;</code> का उपयोग किया गया है।
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>➕ कुछ और Important Input Types</Typography>
      <Typography gutterBottom><strong>type="email"</strong> — Email address input करने के लिए।</Typography>
      <Typography gutterBottom><strong>type="number"</strong> — Numeric value input करने के लिए।</Typography>
      <Typography gutterBottom><strong>type="date"</strong> — Date picker के लिए।</Typography>
      <Typography gutterBottom><strong>type="password"</strong> — Password छुपाने के लिए।</Typography>
      <Typography gutterBottom><strong>type="radio"</strong> — Multiple options में से एक select करने के लिए।</Typography>
      <Typography gutterBottom><strong>type="checkbox"</strong> — Multiple options को एक साथ चुनने के लिए।</Typography>

      <Typography gutterBottom><strong>placeholder</strong> — Input field के अंदर hint text देने के लिए।</Typography>
      <Typography gutterBottom><strong>required</strong> — Field को अनिवार्य बनाने के लिए।</Typography>
      <Typography gutterBottom><strong>readonly</strong> — User input को read-only बनाने के लिए।</Typography>
      <Typography gutterBottom><strong>disabled</strong> — Field को temporarily disable करने के लिए।</Typography>

      <Divider sx={{ my: 2 }} />

      <Typography>
        👆 इन सभी input types और attributes की मदद से आप बहुत ही powerful और interactive HTML forms बना सकते हैं।
        अगले topic में आप <strong>input type attributes</strong> को detail में पढ़ेंगे।
      </Typography>
    </Box>
  );
};

export default Html_form_element;
