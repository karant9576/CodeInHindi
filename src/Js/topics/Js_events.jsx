import { Box, Typography } from "@mui/material";

const Js_events = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Events
      </Typography>

      <Typography paragraph>
        <strong>Event</strong> किसी भी हो रही Action के लिए एक signal होता है जिससे पता चलता है कि कोई विशेष क्रिया (action) perform की गई है। सरल शब्दों में, <strong>events</strong> वे actions या घटनाएँ होती हैं जो user interaction या browser द्वारा होती हैं।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        🔹 Event Examples
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>Page का browser में load होना</li>
        <li>Element पर mouse hover करना या हटाना</li>
        <li>Element को select करना</li>
        <li>Keyboard में कोई key press करना</li>
        <li>Input box में लिखना</li>
        <li>Select element से option select करना</li>
        <li>Form को submit करना</li>
      </Typography>

      <Typography paragraph>
        JavaScript में ऐसी बहुत सारी events होती हैं। नीचे कुछ common और frequently used events की सूची दी गई है:
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔸 Common JavaScript Events
      </Typography>

      {/* Responsive Table Wrapper */}
      <Box sx={{ overflowX: "auto", mt: 2 }}>
        <Box component="table" sx={{ minWidth: 450, borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#8CCDEB", textAlign: "left" }}>Event Name</th>
              <th style={{ border: "1px solid #ccc", padding: "8px", background: "#8CCDEB", textAlign: "left" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["onload", "जब browser में page load होता है"],
              ["onmouseover", "Element पर mouse hover करते समय"],
              ["onmouseout", "Mouse को element से हटाने पर"],
              ["onclick", "Element पर click करने पर"],
              ["onchange", "Select list में से option change करने पर"],
              ["onkeydown", "Keyboard में key press करते समय"],
              ["onkeypress", "Key press के बाद character इनपुट होते ही"],
              ["onkeyup", "Key को release करने पर"],
              ["onreset", "Form reset होने पर"],
              ["onsubmit", "Form submit करने पर"],
              ["onresize", "Window resize होने पर"],
              ["onscroll", "Page scroll करते समय"],
              ["onbeforeprint", "Page print dialog से पहले"],
              ["onafterprint", "Page print हो जाने के बाद"],
            ].map(([event, desc]) => (
              <tr key={event}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}><code>{event}</code></td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom color="error" mt={3}>
        ❕ Important Note
      </Typography>

      <Typography paragraph>
        Web Events, Core JavaScript language का हिस्सा नहीं हैं। ये <strong>Browser APIs</strong> का हिस्सा होती हैं जो कि browser के अंदर inbuilt आती हैं और JavaScript के साथ interaction को आसान बनाती हैं।
      </Typography>

      <Typography paragraph fontStyle="italic">
        आपने इस टॉपिक में JavaScript Events के बारे में जाना। अगले टॉपिक में आप इन्हीं events को JavaScript के माध्यम से handle करना सीखेंगे।
      </Typography>
    </Box>
  );
};

export default Js_events;
