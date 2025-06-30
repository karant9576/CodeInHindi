import { Box, Typography } from "@mui/material";

const Js_date_format = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" , mt:'-1px'}}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Date Format
      </Typography>

      <Typography paragraph>
        JavaScript में हम Date format को आसानी से modify कर सकते हैं। आमतौर पर JavaScript में 3 प्रकार के date formats use होते हैं:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><strong>ISO Date:</strong> <code>2020-05-25</code> (The International Standard)</li>
        <li><strong>Short Date:</strong> <code>05/25/2020</code></li>
        <li><strong>Long Date:</strong> <code>May 25 2015</code> या <code>25 May 2020</code></li>
      </Typography>

      <Typography paragraph>
        By default, JavaScript date को full text string format में return करता है।
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        📄 JavaScript ISO Date Format
      </Typography>

      <Typography paragraph>
        ISO 8601 एक international date format standard है जो <code>YYYY-MM-DD</code> format में होता है। JavaScript इसे prefer करता है:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`let d = new Date("2021-05-30");
document.write(d);`}
      </Typography>

      <Typography paragraph mt={2}>
        Output (browser के timezone पर निर्भर करेगा):  
        <br />
        <code>Sun May 30 2021 05:30:00 GMT+0530 (India Standard Time)</code>
      </Typography>

      <Typography paragraph>
        आप सिर्फ year या month तक की date भी बना सकते हैं:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1,overflowX:'auto' }}>
{`document.write(new Date("2021-05"));
document.write(new Date("2021"));`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Output:</strong>
        <br />
        <code>Sat May 01 2021...</code>  
        <br />
        <code>Fri Jan 01 2021...</code>
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        📄 JavaScript Short Date
      </Typography>

      <Typography paragraph>
        Short date format होता है: <code>MM/DD/YYYY</code>
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`document.write(new Date("04/25/2021"));`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Output:</strong>
        <br />
        <code>Sun Apr 25 2021 00:00:00 GMT+0530</code>
      </Typography>

      <Typography paragraph color="error">
        ⚠️ ध्यान दें: <code>DD-MM-YYYY</code> और <code>YYYY/MM/DD</code> formats invalid हो सकते हैं। इनका उपयोग न करें।
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        📄 JavaScript Long Date
      </Typography>

      <Typography paragraph>
        Long date format आमतौर पर <code>MMM DD YYYY</code> होता है, लेकिन आप month और day का order बदल सकते हैं:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1,overflowX:'auto' }}>
{`new Date("May 25 2021");
new Date("25 May 2021");
new Date("January 25 2021");
new Date("Jan 25 2021");`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Output:</strong>
        <br />
        <code>Tue May 25 2021 00:00:00 GMT+0530</code>  
        <br />
        <code>Mon Jan 25 2021 00:00:00 GMT+0530</code>
      </Typography>
    </Box>
  );
};

export default Js_date_format;
