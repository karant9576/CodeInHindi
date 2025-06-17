import { Box, Typography } from "@mui/material";

const CssFontFamily = () => {
  return (
    <Box sx={{ p: 2, width: "100%", maxWidth: 900, margin: "auto" }}>
      <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        CSS font-family
      </Typography>

      <Typography gutterBottom>
        किसी भी वेबसाइट के लिए font बहुत ही महत्वपूर्ण होता है। पढ़ने के अनुभव (reading experience) का एक बड़ा हिस्सा font-family पर निर्भर करता है, क्योंकि अलग-अलग fonts अलग-अलग तरीके से content को दिखाते हैं।
      </Typography>

      <Typography gutterBottom>
        <b>font-family</b> property का उपयोग करके हम किसी टेक्स्ट का font सेट करते हैं। इसमें हम एक या एक से अधिक font-family को define कर सकते हैं।
      </Typography>

        <Typography variant="h6" gutterBottom>
        छोटा सा Font-family Code:
      </Typography>
      <Box sx={{ background: "#8CCDEB", padding: "10px", marginBottom: 2, whiteSpace: "pre", overflowX: "auto", borderRadius: "10px" }}>
      <pre>{`
p {
  font-family: 'Arial', sans-serif;
}
      `}</pre>
        </Box>
      <Box sx={{ border: '1px solid #ccc', p: 2, my: 2 }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "24px" }}>
          यह एक छोटा सा Arial font-family example है।
        </p>
      </Box>
      
      <Typography variant="h6" gutterBottom color="secondary">
        CSS Generic Font Families:
      </Typography>

      <Box sx={{ ml: 2, mb: 2 }}>
        <ul>
          <li><b>serif</b> – हर अक्षर के किनारों पर छोटी decorative lines होती हैं।</li>
          <li><b>sans-serif</b> – साफ और modern look होता है, कोई edge lines नहीं होती।</li>
          <li><b>monospace</b> – हर अक्षर की चौड़ाई समान होती है।</li>
          <li><b>cursive</b> – handwritten style का font होता है।</li>
          <li><b>fantasy</b> – decorative और creative font होता है।</li>
        </ul>
      </Box>

      <Typography variant="h6" gutterBottom>
        CSS font-family Example:
      </Typography>
      <Box sx={{ border: '1px solid #ccc', p: 2, my: 1 }}>
        <p style={{ fontFamily: "cursive", fontSize: "24px" }}>This is font-family: cursive</p>
        <p style={{ fontFamily: "monospace", fontSize: "24px" }}>This is font-family: monospace</p>
        <p style={{ fontFamily: "sans-serif", fontSize: "24px" }}>This is font-family: sans-serif</p>
        <p style={{ fontFamily: "serif", fontSize: "24px" }}>This is font-family: serif</p>
        <p style={{ fontFamily: "fantasy", fontSize: "24px" }}>This is font-family: fantasy</p>
      </Box>

      <Typography variant="h6" gutterBottom>
        Multiple Font Families (Fallback):
      </Typography>
      <Box sx={{ border: '1px solid #ccc', p: 2, my: 1 }}>
        <h3 style={{ fontFamily: "'Courier New', Courier, monospace" }}>
          This is 'Courier New', Courier, monospace
        </h3>
        <h3 style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
          This is 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
        </h3>
        <h3 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          This is Arial, Helvetica, sans-serif
        </h3>
        <h3 style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
          This is Verdana, Geneva, Tahoma, sans-serif
        </h3>
        <h3 style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          This is 'Times New Roman', Times, serif
        </h3>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        Google Fonts का उपयोग:
      </Typography>
      <Typography gutterBottom>
        ऊपर दिए गए font-family examples के अलावा आप Google Fonts जैसे third-party fonts का भी उपयोग कर सकते हैं। इसके लिए:
      </Typography>
      <ul>
        <li>https://fonts.google.com पर जाएं।</li>
        <li>कोई भी font चुनें।</li>
        <li>CDN लिंक को कॉपी करें और अपने HTML के &lt;head&gt; में जोड़ें।</li>
        <li>फिर CSS में font-family के द्वारा उसे लागू करें।</li>
      </ul>
      <Typography variant="subtitle1"><b>Example:</b></Typography>
      <pre>{`<link href="https://fonts.googleapis.com/css2?family=Send+Flowers&display=swap" rel="stylesheet">`}</pre>
      <Box sx={{ border: '1px solid #ccc', p: 2, my: 2 }}>
        <h2 style={{ fontFamily: "'Send Flowers', cursive" }}>
          So this is how you can use Google Font using CDN.
        </h2>
      </Box>

     

      <Typography variant="subtitle1" gutterBottom color="secondary">
        निष्कर्ष:
      </Typography>
      <Typography>
        font-family property का उपयोग करके आप अपने text को पढ़ने में सुगम और सुंदर बना सकते हैं। यह आपकी वेबसाइट को प्रोफेशनल लुक देता है और user experience को बेहतर करता है।
      </Typography>
    </Box>
  );
};

export default CssFontFamily;
