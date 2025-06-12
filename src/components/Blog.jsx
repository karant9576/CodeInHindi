import {
  Box,
  Typography,
  Container,
  Divider,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

const blogData = [
  {
    title: "HTML सीखना क्यों ज़रूरी है?",
    description:
      "HTML वेबसाइट की नींव है। इस ब्लॉग में जानें कि HTML क्या है, कैसे काम करता है और क्यों हर वेब डेवलपर को इसे आना चाहिए।",
  },
  {
    title: "CSS से वेबसाइट को स्टाइलिश कैसे बनाएं?",
    description:
      "CSS आपको आपकी वेबसाइट को सुंदर और responsive बनाने की शक्ति देता है। इस लेख में जानें CSS की बेसिक से एडवांस तक की जानकारी।",
  },
  {
    title: "JavaScript से वेबसाइट में जान डालें",
    description:
      "JavaScript के ज़रिए आप अपनी वेबसाइट में interaction ला सकते हैं। इस ब्लॉग में जानें JavaScript के महत्वपूर्ण fundamentals।",
  },
];

const Blog = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          📚 हमारा ब्लॉग
        </Typography>
        <Divider
          sx={{
            width: 100,
            mx: "auto",
            mb: 3,
            borderBottom: "4px solid #6c63ff",
            borderRadius: 5,
          }}
        />
        <Typography variant="h6" color="text.secondary">
          कोडिंग और तकनीकी ज्ञान अब आपकी भाषा हिंदी में – CodeInHindi ब्लॉग के साथ।
        </Typography>
      </Box>

      {/* Intro Paragraph */}
      <Box mb={6}>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
          <strong>CodeInHindi</strong> का ब्लॉग सेक्शन उन सभी उत्साही लोगों के लिए है जो
          <strong> कोडिंग, वेब डेवलपमेंट</strong> और <strong>आईटी क्षेत्र</strong> से जुड़ी जानकारी हिंदी में पाना चाहते हैं।
          हम हर हफ्ते लाते हैं:
          <ul>
            <li>लेटेस्ट टेक ट्रेंड्स</li>
            <li>इंटरव्यू की तैयारी के टिप्स</li>
            <li>डेली कोडिंग प्रैक्टिस गाइड</li>
            <li>प्रैक्टिकल प्रोजेक्ट्स</li>
          </ul>
          सीखना अब हुआ और भी आसान – <strong>आपकी भाषा में!</strong>
        </Typography>
      </Box>

      {/* Blog Cards */}
      <Grid container spacing={4}>
        {blogData.map((blog, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "16px",
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <ArticleIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ ml: 1, color: "#6c63ff" }}>
                  और पढ़ें →
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
