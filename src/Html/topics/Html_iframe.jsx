import { Box, Typography } from "@mui/material";

const Html_iframe = () => {
  return (
    <Box sx={{ p: 2, maxWidth: '950px', margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        HTML iframe 
      </Typography>

      <Typography paragraph>
        HTML में <strong>&lt;iframe&gt;</strong> tag का उपयोग किसी वेब पेज के
        अंदर दूसरे वेब पेज को दिखाने के लिए किया जाता है। यानी एक nested webpage
        को show करने के लिए इसका प्रयोग होता है।
      </Typography>

      <Typography variant="h6" gutterBottom>
        HTML iframe Attributes:
      </Typography>

      <Typography paragraph>
        <strong>1. src Attribute:</strong> <br />
        <code>src</code> attribute <strong>&lt;iframe&gt;</strong> का सबसे
        महत्वपूर्ण हिस्सा है, जिसमें हम उस page का URL देते हैं जिसे हम iframe
        में दिखाना चाहते हैं।
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
          mb: 2,
        }}
      >
        {`<iframe src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59040.605109044074!2d82.62669924863276!3d22.352200799999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a278f289041cd47%3A0xa2fb5ca19f054357!2sShri%20Shyam%20Mandir!5e0!3m2!1sen!2sin!4v1750070356466!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"></iframe>`}
      </Box>

      <Typography paragraph>
        ऊपर दिए गए उदाहरण में एक Google map पेज का path दिया गया है, जो
        iframe के अंदर पूरी तरह लोड होकर दिखाई देगा।
      </Typography>

      <Typography paragraph>
        <strong>2. style Attribute:</strong> <br />
        style attribute का उपयोग CSS स्टाइल लागू करने के लिए किया जाता है। यह एक
        universal attribute है जिसे किसी भी HTML element में प्रयोग किया जा सकता
        है।
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
          mb: 2,
        }}
      >
        {`<iframe src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59040.605109044074!2d82.62669924863276!3d22.352200799999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a278f289041cd47%3A0xa2fb5ca19f054357!2sShri%20Shyam%20Mandir!5e0!3m2!1sen!2sin!4v1750070356466!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>" style="border:none;width:250px;height:200px"></iframe>`}
      </Box>

      <Typography paragraph>
        ध्यान दें कि आप <strong>&lt;iframe&gt;</strong> में <code>width</code>{" "}
        और <code>height</code> attributes का भी उपयोग कर सकते हैं, जैसे कि हम{" "}
        <strong>&lt;img&gt;</strong> tag में करते हैं।
      </Typography>
    </Box>
  );
};

export default Html_iframe;
