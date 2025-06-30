import { Box, Typography } from "@mui/material";

const Js_date = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Date Object
      </Typography>

      <Typography paragraph>
        ❕ <strong>Today:</strong><br />
        {new Date().toString()}
      </Typography>

      <Typography paragraph>
        JavaScript में current date और time को प्राप्त करने के लिए <code>Date()</code> class का object बनाया जाता है, जो कि एक complete date-time string return करता है।
        JavaScript browser का time zone automatically use करता है।
      </Typography>

      <Typography variant="h6" gutterBottom>
        📌 Basic Example: <code>new Date()</code>
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <body>
    <script>
      let today = new Date();
      document.write(today);
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        <code>new Date()</code> default रूप से current date & time को return करता है।
        <br />
        आप चाहे तो <code>today.toString()</code> का भी use कर सकते हैं:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<script>
  let today = new Date();
  document.write(today.toString());
</script>`}
      </Typography>

      <Typography variant="h6" gutterBottom>
        🛠️ Create Custom Date
      </Typography>
      <Typography paragraph>
        आप <code>Date()</code> constructor में custom value pass करके specific date भी बना सकते हैं:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)`}
      </Typography>

      <Typography variant="h6" gutterBottom>
        ✅ Example: Create Date & Use Methods
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <body>
    <script>
      var d = new Date(2029, 11, 24, 10, 33, 30);
      document.write(d.getFullYear() + "<br>");
      document.write(d.getMonth() + "<br>");
      document.write(d.getDate() + "<br>");
      document.write(d.getHours() + "<br>");
      document.write(d.getMinutes() + "<br>");
      document.write(d.getSeconds() + "<br>");
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        ⚠️ ध्यान दें कि <code>getSeonds()</code> एक typo है — सही method है: <code>getSeconds()</code>
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔹 Static Methods (Without creating object)
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><strong>Date.now()</strong>: current time को milliseconds में return करता है</li>
        <li><strong>Date.parse()</strong>: date string को milliseconds में convert करता है (from Jan 1, 1970 UTC)</li>
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔸 Instance Methods (Need object)
      </Typography>

      <Typography variant="subtitle1" gutterBottom fontWeight="bold">
        Get Methods:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><code>getFullYear()</code> – 4-digit year</li>
        <li><code>getMonth()</code> – month (0–11)</li>
        <li><code>getDate()</code> – day of the month (1–31)</li>
        <li><code>getDay()</code> – day of the week (0–6)</li>
        <li><code>getHours()</code> – hours (0–23)</li>
        <li><code>getMinutes()</code> – minutes (0–59)</li>
        <li><code>getSeconds()</code> – seconds (0–59)</li>
      </Typography>

      <Typography variant="subtitle1" gutterBottom fontWeight="bold">
        Set Methods:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><code>setFullYear()</code> – set year</li>
        <li><code>setMonth()</code> – set month</li>
        <li><code>setDate()</code> – set day of the month</li>
        <li><code>setHours()</code> – set hours</li>
        <li><code>setMinutes()</code> – set minutes</li>
        <li><code>setSeconds()</code> – set seconds</li>
      </Typography>

      <Typography paragraph fontStyle="italic" mt={2}>
        अब आप JavaScript में Date object से current date & time लेना, custom date बनाना और उसे manipulate करना अच्छे से समझ चुके होंगे।
      </Typography>
    </Box>
  );
};

export default Js_date;
