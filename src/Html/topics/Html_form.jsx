import { Box, Typography, Divider } from '@mui/material';

const Html_form = () => {
  return (
    <Box sx={{ p: 2, maxWidth: '900px', mx: 'auto' }}>
      <Typography variant="h4" color="primary" gutterBottom>
        📃 HTML Form
      </Typography>

      <Typography gutterBottom>
        HTML में Form बनाने के लिए <code>{'<form>'}</code> tag का use किया जाता है।
        Form की help से हम अलग-अलग तरह का user data (जैसे: name, age, address etc...) server पर processing के लिए भेज सकते हैं।
      </Typography>

      <Typography gutterBottom>
        मतलब जब हम web development करते हैं तो हमें कई तरह का data database में या किसी दूसरी process के लिए form की जरूरत पड़ती है।
      </Typography>

      <Typography gutterBottom>
        Form data handle करने के लिए server-side languages जैसे PHP, Java, Python आदि की जरूरत होती है।
        इनमें से PHP को आप हमारी website से पढ़ सकते हैं।
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom color='primary'>
        HTML {'<form>'} Tag
      </Typography>
      <Typography gutterBottom>
        जैसे table या list बनाने के लिए हम {'<table></table>'} tags का use करते हैं,
        वैसे ही किसी भी web page में form create करने के लिए <code>{'<form>'}</code> tag का use होता है।
        यह एक container होता है जिसमें सभी input fields (जैसे: input, textarea, checkbox आदि) होते हैं।
      </Typography>

      <Typography gutterBottom>Form tag के कुछ important attributes होते हैं:</Typography>

      <Typography variant="h6" gutterBottom color='primary'>
        HTML Form Syntax
      </Typography>
      <pre style={{ background: '#8CCDEB', padding: '10px', overflowX: 'auto', whiteSpace: 'pre' }}>
{`<form action="path" method="get/post">
  ...your other fields
</form>`}
</pre>


      <Typography variant="h6" gutterBottom color='primary'>
        Form Attributes
      </Typography>
      <Typography gutterBottom>HTML में कुछ useful form attributes:</Typography>

      <Typography>
        <strong>1. action:</strong> Form submit होने के बाद data कहाँ जाएगा, ये define करता है।
      </Typography>
      <Typography>
        <strong>2. method:</strong> Data send करने का तरीका: <code>get</code> या <code>post</code> (default होता है get)।
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom color='primary'>
        HTML Form Example
      </Typography>

      <Typography gutterBottom>
        File: <code>html_form.html</code>
      </Typography>
<pre style={{ background: '#8CCDEB', padding: '10px', overflowX: 'auto', whiteSpace: 'pre' }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>HTML Form Example</title>
  </head>
  <body>
    <form action="location" method="post">
      <label>First Name</label>
      <input type="text" name="fname" placeholder="Enter Your First Name">

      <label>Last Name</label>
      <input type="text" name="lname" placeholder="Enter Your Last Name">

      <button type="submit">Submit</button>
    </form>
  </body>
</html>`}
</pre>


      <Typography variant="h6" mt={3} gutterBottom>
        🔽 Output:
      </Typography>

      <Box
        component="form"
        action="location"
        method="post"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 2,
          border: '1px solid #ccc',
          borderRadius: 1,
          mt: 1,
          backgroundColor: '#f9f9f9',
        }}
      >
        <label>First Name</label>
        <input type="text" name="fname" placeholder="Enter Your First Name" />

        <label>Last Name</label>
        <input type="text" name="lname" placeholder="Enter Your Last Name" />

        <button type="submit">Submit</button>
      </Box>

      <Typography gutterBottom mt={4}>
        ऊपर के example में <code>{'<label>'}</code> का use input fields को label करने के लिए और <code>{'<input>'}</code> का use user से data collect करने के लिए किया गया है।
        Input का type "text" है यानी user text डाल सकता है।
      </Typography>
    </Box>
  );
};

export default Html_form;
