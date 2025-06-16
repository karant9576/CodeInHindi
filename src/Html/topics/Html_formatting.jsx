import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Html_formatting = () => {
  return (
    <Box sx={{  p: 2, width: "100%", maxWidth: "900px" }}>
      <Grid>
        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Typography variant="h4" gutterBottom color="primary">
            HTML Formatting 
          </Typography>

          <Typography variant="body1" gutterBottom>
            HTML Formatting एक प्रक्रिया है जिससे हम किसी टेक्स्ट को बेहतर{" "}
            <strong>दिखावट (look)</strong> और <strong>अनुभूति (feel)</strong>{" "}
            देने के लिए format करते हैं। HTML हमें यह क्षमता देता है कि हम{" "}
            <strong>CSS के बिना</strong> भी टेक्स्ट को format कर सकते हैं।
          </Typography>

          <Typography variant="h6" gutterBottom>
            सामान्य HTML Formatting Tags:
          </Typography>
          <Typography component="ul" sx={{ pl: 3 }}>
            <li>&lt;b&gt; - टेक्स्ट को Bold करता है</li>
            <li>&lt;strong&gt; - महत्वपूर्ण टेक्स्ट</li>
            <li>&lt;i&gt; - टेक्स्ट को Italic करता है</li>
            <li>&lt;em&gt; - ज़ोर देने वाला टेक्स्ट</li>
            <li>&lt;mark&gt; - Highlight किया गया टेक्स्ट</li>
            <li>&lt;small&gt; - छोटा टेक्स्ट</li>
            <li>&lt;del&gt; - हटाया गया टेक्स्ट</li>
            <li>&lt;ins&gt; - जोड़ा गया नया टेक्स्ट</li>
            <li>&lt;sub&gt; - नीचे लिखा टेक्स्ट (Subscript)</li>
            <li>&lt;sup&gt; - ऊपर लिखा टेक्स्ट (Superscript)</li>
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            HTML Formatting के लाभ:
          </Typography>
          <Typography component="ul" sx={{ pl: 3 }}>
            <li>कंटेंट साफ़ और सुसंगत दिखता है।</li>
            <li>ऑटोमेटेड टेबल्स और डेटा व्यवस्थित होता है।</li>
            <li>टेक्स्ट visually आकर्षक बनता है।</li>
            <li>हेडिंग्स को आसानी से एडिट किया जा सकता है।</li>
            <li>डिज़ाइनर्स आसानी से स्टाइल का निर्णय ले सकते हैं।</li>
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            HTML Formatting का उदाहरण:
          </Typography>
          <Box
            sx={{
              background: "#8CCDEB",
              p: 2,
              borderRadius: 2,
              fontFamily: "monospace",
              whiteSpace: "pre",
              overflowX: "auto",
              fontSize: "14px",
            }}
          >
            {`<!DOCTYPE html>
<html>
<head>
  <title>Formatting Example</title>
</head>
<body>
  <div>
    यह <u>underline</u> टेक्स्ट है <br/>
    यह <b>bold</b> टेक्स्ट है <br/>
    यह <strong>महत्वपूर्ण</strong> टेक्स्ट है <br/>
    यह <i>italic</i> टेक्स्ट है <br/>
    यह <em>emphasized</em> टेक्स्ट है <br/>
    यह <mark>highlight</mark> किया गया शब्द है <br/>
    यह <small>छोटा</small> टेक्स्ट है <br/>
    यह <big>बड़ा</big> टेक्स्ट है <br/>
    यह <del>हटाया गया</del> टेक्स्ट है <br/>
    कृपया <ins>इसे</ins> जोड़ें <br/>
    H<sub>2</sub>O <br/>
    x<sup>2</sup> <br/>
  </div>
</body>
</html>`}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Html_formatting;
