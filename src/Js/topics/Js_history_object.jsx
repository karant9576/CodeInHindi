import { Box, Typography } from "@mui/material";

const Js_history_object = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript History Object
      </Typography>

      <Typography paragraph>
        `history` object, browser के उन URLs की list को represent करता है जिन्हें user ने visit किया है। इसकी मदद से हम previous या next page पर आसानी से जा सकते हैं।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        📌 Properties and Methods of History Object
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>length</li>
        <li>back()</li>
        <li>forward()</li>
        <li>go()</li>
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        🔢 history.length
      </Typography>

      <Typography paragraph>
        यह property बताती है कि user ने कितने URLs visit किए हैं। यह एक integer value return करती है।
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<script type="text/javascript">
  console.log(\`history : \${window.history.length}\`);
  console.log(\`history : \${history.length}\`);
</script>`}
      </Box>

      <Typography paragraph>
        चूंकि `history` object, `window` object का ही हिस्सा है, इसलिए इसे `window.history` और `history` दोनों तरह से access कर सकते हैं।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        🔙 history.back()
      </Typography>

      <Typography paragraph>
        इस method का use पिछले page पर वापस जाने के लिए किया जाता है।
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`history.back();`}
      </Box>

      <Typography paragraph fontStyle="italic">
        ❕ Note: यदि history stack में कोई previous URL नहीं है, तो यह method काम नहीं करेगा।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        🔜 history.forward()
      </Typography>

      <Typography paragraph>
        यह method user को next page पर ले जाती है, बिल्कुल back() के उल्टा।
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`window.history.forward();`}
      </Box>

      <Typography paragraph>
        यह तब ही काम करेगा जब history stack में कोई next page URL मौजूद हो।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        ↔️ history.go()
      </Typography>

      <Typography paragraph>
        यह method हमें history stack में किसी भी specific page (forward या backward) पर jump करने की सुविधा देता है।
      </Typography>

      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`window.history.go(-1); // previous page
window.history.go(1);  // next page
window.history.go(0);  // refresh current page`}
      </Box>

      <Typography paragraph>
        `go()` method में:
        <br />- Negative value → पिछला page  
        <br />- Positive value → अगला page  
        <br />- 0 या empty → current page refresh हो जाता है
      </Typography>

      <Typography fontWeight="bold">Example:</Typography>
      <Box component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<button onclick="window.history.go();">Refresh</button>`}
      </Box>

      <Typography paragraph>
        इस button पर click करने से current page refresh हो जाएगा।
      </Typography>
    </Box>
  );
};

export default Js_history_object;
