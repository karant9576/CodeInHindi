import { Box, Typography, Divider } from '@mui/material';

const Html_Form_Input_Type = () => {
  return (
    <Box sx={{ p: 2,   maxWidth: 1000, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color='primary'>
        📝 HTML Form Input Types 
      </Typography>

      <Typography gutterBottom>
        <strong>&lt;input type="..."&gt;</strong> HTML का सबसे महत्वपूर्ण form element होता है। इसका उपयोग अलग-अलग प्रकार के डाटा (जैसे text, number, date, email, आदि) को user से collect करने के लिए किया जाता है।
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>📋 Common Input Types और उनका उपयोग:</Typography>
      <Typography><strong>text:</strong> Single-line text input के लिए</Typography>
      <Typography><strong>password:</strong> Password hide करने के लिए</Typography>
      <Typography><strong>email:</strong> Email address input के लिए</Typography>
      <Typography><strong>radio:</strong> Radio button – एक ही option select करने के लिए</Typography>
      <Typography><strong>checkbox:</strong> Checkbox – multiple options select करने के लिए</Typography>
      <Typography><strong>file:</strong> File upload करने के लिए</Typography>
      <Typography><strong>color:</strong> Color picker दिखाने के लिए</Typography>
      <Typography><strong>date:</strong> Date select करने के लिए</Typography>
      <Typography><strong>number:</strong> Numeric input के लिए</Typography>
      <Typography><strong>submit / reset:</strong> Form को submit या reset करने के लिए</Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>📌 Examples with Output:</Typography>

      <Typography gutterBottom><strong>🔹 Text Input:</strong></Typography>
     <pre style={{ background: "#8CCDEB", padding: "10px", overflowX: "auto", whiteSpace: "pre" }}>
{`<label>First Name</label>
<input type="text" name="fname" placeholder="Enter First Name">`}
</pre>

<Typography gutterBottom><strong>🔹 Email Input:</strong></Typography>
<pre style={{ background: "#8CCDEB", padding: "10px", overflowX: "auto", whiteSpace: "pre" }}>
{`<label>Your Email</label>
<input type="email" name="email" placeholder="Enter Email">`}
</pre>

<Typography gutterBottom><strong>🔹 Password Input:</strong></Typography>
<pre style={{ background: "#8CCDEB", padding: "10px", overflowX: "auto", whiteSpace: "pre" }}>
{`<label>Password</label>
<input type="password" name="password" placeholder="Enter Password">`}
</pre>

<Typography gutterBottom><strong>🔹 Radio Buttons:</strong></Typography>
<pre style={{ background: "#8CCDEB", padding: "10px", overflowX: "auto", whiteSpace: "pre" }}>
{`<label>Male</label>
<input type="radio" name="gender" value="Male">
<label>Female</label>
<input type="radio" name="gender" value="Female">`}
</pre>

<Typography gutterBottom><strong>🔹 Checkbox:</strong></Typography>
<pre style={{ background: "#8CCDEB", padding: "10px", overflowX: "auto", whiteSpace: "pre" }}>
{`<label>Your Hobbies</label><br>
<input type="checkbox" name="hobbies[]" value="Music"> Music
<input type="checkbox" name="hobbies[]" value="Movies"> Movies`}
</pre>

<Typography gutterBottom><strong>🔹 File Upload:</strong></Typography>
<pre style={{ background: "#8CCDEB", padding: "10px", overflowX: "auto", whiteSpace: "pre" }}>
{`<label>Upload Image</label>
<input type="file" name="profile_image">`}
</pre>

<Typography gutterBottom><strong>🔹 Color Picker:</strong></Typography>
<pre style={{ background: "#8CCDEB", padding: "10px", overflowX: "auto", whiteSpace: "pre" }}>
{`<label>Select Color</label>
<input type="color" name="fav_color">`}
</pre>

<Typography gutterBottom><strong>🔹 Number Input:</strong></Typography>
<pre style={{ background: "#8CCDEB", padding: "10px", overflowX: "auto", whiteSpace: "pre" }}>
{`<label>Your Age</label>
<input type="number" name="age" placeholder="Enter Your Age">`}
</pre>

<Typography gutterBottom><strong>🔹 Date Input:</strong></Typography>
<pre style={{ background: "#8CCDEB", padding: "10px", overflowX: "auto", whiteSpace: "pre" }}>
{`<label>Your DOB</label>
<input type="date" name="dob">`}
</pre>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>🧪 Complete Example:</Typography>
      <pre style={{ background: "#8CCDEB", padding: "10px", overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>HTML FORM Example</title>
  </head>
  <body>
    <form>
      <label>First Name:</label>
      <input type="text" name="fname" placeholder="Enter First Name"><br><br>

      <label>Last Name:</label>
      <input type="text" name="lname" placeholder="Enter Last Name"><br><br>

      <label>Your Email:</label>
      <input type="email" name="email" placeholder="Enter Email"><br><br>

      <label>Password:</label>
      <input type="password" name="password" placeholder="Enter Password"><br><br>

      <label>Gender:</label><br>
      <input type="radio" name="gender" value="Male"> Male
      <input type="radio" name="gender" value="Female"> Female
      <input type="radio" name="gender" value="Other"> Other<br><br>

      <label>Your Hobbies:</label><br>
      <input type="checkbox" name="hobbies[]" value="Music"> Music
      <input type="checkbox" name="hobbies[]" value="Movies"> Movies<br><br>

      <label>Upload Image:</label>
      <input type="file" name="profile_image"><br><br>

      <label>Your Age:</label>
      <input type="number" name="age" placeholder="Enter Your Age"><br><br>

      <label>Your DOB:</label>
      <input type="date" name="dob"><br><br>

      <input type="submit" value="Submit">
      <input type="reset" value="Reset">
    </form>
  </body>
</html>`}
      </pre>

      <Typography mt={2}>
        ☝️ इस तरह से आप अलग-अलग input types का उपयोग करके एक structured और interactive form बना सकते हैं।
      </Typography>

      
    </Box>
  );
};

export default Html_Form_Input_Type;
