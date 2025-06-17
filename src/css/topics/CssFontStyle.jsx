import { Box, Typography } from "@mui/material";

const CssFontStyle = () => {
  return (
    <Box sx={{ p: 2, width: "100%", maxWidth: 900, margin: "auto" }}>
      <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        CSS Font Style, Weight और Variant
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        1. font-style:
      </Typography>
      <Typography gutterBottom>
        <b>font-style</b> property का उपयोग करके हम टेक्स्ट को अलग-अलग style में दिखा सकते हैं। इसके मुख्य तीन values होते हैं:
      </Typography>
      <ul>
        <li><b>normal</b>: सामान्य टेक्स्ट</li>
        <li><b>italic</b>: झुका हुआ टेक्स्ट (प्रायः quotes या emphasis के लिए उपयोग होता है)</li>
        <li><b>oblique</b>: italic जैसा दिखने वाला लेकिन कम झुका हुआ टेक्स्ट (कुछ ब्राउज़र में same होता है)</li>
      </ul>

      <Typography gutterBottom>
        यह property मुख्यतः stylistic बदलाव के लिए उपयोग होती है, जैसे कि किसी लेखक का नाम या foreign शब्दों को अलग दिखाना।
      </Typography>

      <Typography variant="subtitle1"><b>Example:</b></Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, my: 1 }}>
        <p style={{ fontStyle: "normal" }}>This is <b>normal</b> font style</p>
        <p style={{ fontStyle: "oblique" }}>This is <b>oblique</b> font style</p>
        <p style={{ fontStyle: "italic" }}>This is <b>italic</b> font style</p>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        2. font-weight:
      </Typography>
      <Typography gutterBottom>
        <b>font-weight</b> property टेक्स्ट की मोटाई (thickness) को निर्धारित करता है। इसके कुछ प्रमुख values:
      </Typography>
      <ul>
        <li><b>lighter</b>: parent से हल्का</li>
        <li><b>normal</b>: default weight (लगभग 400)</li>
        <li><b>bold</b>: मोटा टेक्स्ट (लगभग 700)</li>
        <li><b>bolder</b>: parent से मोटा</li>
        <li><b>number</b> (100 से 1000 तक): numerical weight जैसे 100 (बहुत पतला) से 900 (बहुत मोटा)</li>
        <li><b>initial</b>: default CSS value</li>
        <li><b>inherit</b>: parent element से value लेता है</li>
        <li><b>unset</b>: inherited या initial के अनुसार कार्य करता है</li>
      </ul>

      <Typography gutterBottom>
        इस property से headings, buttons, और important texts को visually highlight किया जा सकता है।
      </Typography>

      <Typography variant="subtitle1"><b>Example:</b></Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, my: 1, fontFamily: "sans-serif" }}>
        <p style={{ fontWeight: "normal" }}>normal property value</p>
        <p style={{ fontWeight: "lighter" }}>lighter property value</p>
        <p style={{ fontWeight: "bolder" }}>bolder property value</p>
        <p style={{ fontWeight: "bold" }}>bold property value</p>
        <p style={{ fontWeight: 1000 }}>number (1000) property value</p>
        <p style={{ fontWeight: "initial" }}>initial property value</p>
        <p style={{ fontWeight: "inherit" }}>inherit property value</p>
        <p style={{ fontWeight: "unset" }}>unset property value</p>
      </Box>

      <Typography variant="h6" gutterBottom color="secondary">
        3. font-variant:
      </Typography>
      <Typography gutterBottom>
        <b>font-variant</b> property का उपयोग small-caps fonts के लिए किया जाता है। यह typographic formatting के लिए खास तौर पर प्रयोग होता है।
      </Typography>
      <ul>
        <li><b>normal</b>: default appearance</li>
        <li><b>small-caps</b>: सभी lowercase अक्षर uppercase की तरह दिखते हैं लेकिन छोटे आकार में</li>
      </ul>

      <Typography gutterBottom>
        यह उन situations में उपयोगी होता है जहां subtle emphasis या traditional look देना होता है, जैसे कि headings या author names।
      </Typography>

      <Typography variant="subtitle1"><b>Example:</b></Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, my: 1 }}>
        <p style={{ fontVariant: "normal" }}>This is <b>normal</b> Font Variant</p>
        <p style={{ fontVariant: "small-caps" }}>This is <b>small-caps</b> Font Variant</p>
      </Box>

      <Typography variant="subtitle1" gutterBottom color="secondary">
        निष्कर्ष:
      </Typography>
      <Typography>
        font-style, font-weight और font-variant properties का सही उपयोग कर के आप अपने टेक्स्ट को और आकर्षक बना सकते हैं। इससे पढ़ने का अनुभव बेहतर होता है और आपकी वेबसाइट प्रोफेशनल लगती है। खासकर headings, emphasis points और titles को visually impactful बनाने के लिए ये properties बहुत उपयोगी होती हैं।
      </Typography>
    </Box>
  );
};

export default CssFontStyle;
