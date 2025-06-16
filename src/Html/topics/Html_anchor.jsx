import { Box, Typography } from "@mui/material";

const Html_anchor = () => {
  return (
    <Box sx={{ p: 2 , width: "100%", maxWidth: "900px", }}>
      <Typography variant="h4" color="primary" gutterBottom>
        HTML Anchor (Hyperlink)
      </Typography>

      <Typography variant="body1" gutterBottom>
        HTML में <strong>anchor tag</strong> बहुत महत्वपूर्ण होता है। इसका उपयोग एक वेब पेज को दूसरे पेज या resource से लिंक करने के लिए किया जाता है।
      </Typography>

      <Typography variant="body1" gutterBottom>
        उदाहरण के लिए, हमारी वेबसाइट के लेफ्ट साइड में जो topics की लिस्ट या header में दिए गए course links होते हैं, वे सभी <strong>hyperlinks</strong> होते हैं, जिन पर क्लिक करने से हम किसी दूसरे पेज पर पहुँच जाते हैं।
      </Typography>

      <Typography variant="body1" gutterBottom>
        Anchor tag का syntax होता है:
      </Typography>

      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          p: 2,
          borderRadius: 2,
          fontFamily: "monospace",
          mb: 2,
          whiteSpace: "pre-wrap",
        }}
      >
        {`<a href="give your page path">Link Name</a>`}
      </Box>

      <Typography variant="body1" gutterBottom>
        <strong>उदाहरण:</strong>
      </Typography>

      <Box
        sx={{
          backgroundColor: "#8CCDEB",
          p: 2,
          borderRadius: 2,
          mb: 2,
          fontFamily: "monospace",
          whiteSpace: "pre",
          overflowX: "auto",
        }}
      >
        <Typography>{`<a href="./javascript-introduction-in-hindi">JavaScript Introduction In Hindi</a>`}</Typography>
        <Typography sx={{ mt: 1 }}><strong>Output:</strong> JavaScript Introduction In Hindi</Typography>
      </Box>

      <Typography variant="h6" gutterBottom color="primary">
        ❕ Important Note:
      </Typography>
      <Typography variant="body1" gutterBottom>
        अगर आप <code>href=""</code> खाली छोड़ देते हैं, तो वह link वर्तमान पेज (current page) को ही reload कर देगा।
      </Typography>

      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          p: 2,
          borderRadius: 2,
          fontFamily: "monospace",
          mb: 2,
          whiteSpace: "pre",
        }}
      >
        {`<a href="">Click Here</a>`}
      </Box>
      <Typography><strong>Output:</strong> Click Here</Typography>

      <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 3 }}>
        🎯 target Attribute
      </Typography>
      <Typography variant="body1" gutterBottom>
        यदि आप चाहते हैं कि लिंक एक <strong>नई टैब</strong> में खुले, तो <code>target="_blank"</code> का उपयोग करें।
      </Typography>

      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          p: 2,
          borderRadius: 2,
          fontFamily: "monospace",
          mb: 2,
          whiteSpace: "pre",
          overflowX: "auto",
        }}
      >
        {`<a href="./javascript-introduction-in-hindi" target="_blank">javascript-Introduction In Hindi</a>\n<a href="" target="_blank">Click Here</a>`}
      </Box>
      <Typography><strong>Output:</strong> jQuery Introduction In Hindi, Click Here (new tab)</Typography>

      <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 3 }}>
        🚫 Empty Link
      </Typography>
      <Typography variant="body1" gutterBottom>
        अगर आप <code>href="javascript:void()"</code> का उपयोग करते हैं, तो link एक <strong>empty link</strong> कहलाता है। इसपर क्लिक करने पर कोई क्रिया नहीं होती।
      </Typography>

      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          p: 2,
          borderRadius: 2,
          fontFamily: "monospace",
          whiteSpace: "pre",
          overflowX: "auto",
        }}
      >
        {`<a href="javascript:void()">Click Here</a>`}
      </Box>
    </Box>
  );
};

export default Html_anchor;
