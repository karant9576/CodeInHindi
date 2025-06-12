import { Box, Typography, Container, Divider } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          हमारे बारे में
        </Typography>
        <Divider sx={{ width: 100, mx: "auto", mb: 2, borderBottom: "3px solid #6c63ff" }} />
        <Typography variant="h6" color="text.secondary">
          CodeInHindi – जहां कोडिंग सीखना होता है आसान, आपकी अपनी भाषा में।
        </Typography>
      </Box>

      <Box>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
          CodeInHindi एक ऐसा प्लेटफ़ॉर्म है जहाँ आप विभिन्न प्रोग्रामिंग भाषाएँ जैसे HTML, CSS, JavaScript, React, Node.js, और Python को हिंदी में सरलता से सीख सकते हैं। हमारा लक्ष्य है कि टेक्नोलॉजी की दुनिया में हर कोई आगे बढ़े – चाहे वह छात्र हो, शिक्षक हो या कोई नया शुरुआत करने वाला।
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
          हम आपको आसान शब्दों में गहराई से समझाते हैं ताकि आप बिना डर के कोडिंग करना सीखें। हमारी हर ट्यूटोरियल इस तरह बनाई गई है कि वह बेसिक से एडवांस तक आपकी पूरी मदद करे।
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
          आप हमसे HTML, CSS, JavaScript, React, Bootstrap, Git, MongoDB जैसी टेक्नोलॉजीज़ सीख सकते हैं – और वह भी **पूरी तरह हिंदी में**। हमारा मानना है कि भाषा कभी भी सीखने में रुकावट नहीं बननी चाहिए।
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
          आइए, हमारे साथ जुड़िए और कोडिंग की दुनिया में आत्मनिर्भर बनिए।
        </Typography>

        <Typography variant="h6" fontWeight={600} mt={4}>
          🚀 CodeInHindi – "Coding सीखो, वो भी अपनी भाषा में!"
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
