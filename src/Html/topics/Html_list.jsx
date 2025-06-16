import { Box, Typography } from '@mui/material';

const Html_list = () => {
  return (
    <Box sx={{ p: 2, maxWidth: "900px", mx: "auto" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        HTML List In Hindi
      </Typography>

      <Typography variant="body1" gutterBottom>
        HTML में list का उपयोग किसी जानकारी या data को क्रमबद्ध रूप में दिखाने के लिए किया जाता है। यह content को structured और readable बनाती है।
      </Typography>

      <Typography variant="h6" gutterBottom>
        HTML में तीन प्रकार की Lists होती हैं:
      </Typography>

      <ul style={{ paddingLeft: '1.2rem' }}>
        <li><strong>Ordered List (क्रमबद्ध सूची)</strong></li>
        <li><strong>Unordered List (अक्रमबद्ध सूची)</strong></li>
        <li><strong>Description List (विवरण सूची)</strong></li>
      </ul>

      {/* Ordered List */}
      <Typography variant="h5" gutterBottom>
        📌 HTML Ordered List
      </Typography>
      <Typography variant="body1" gutterBottom>
        Ordered List में items number के साथ क्रम में show होते हैं। इसके लिए <code>&lt;ol&gt;</code> और <code>&lt;li&gt;</code> टैग का उपयोग होता है।
      </Typography>
        <Typography variant="body2" gutterBottom>
            <code>&lt;li&gt;</code> टैग का उपयोग list item को define करने के लिए किया जाता है।
        </Typography>
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "monospace",
          p: 2,
          borderRadius: 2,
          mb: 2,
          whiteSpace: "pre-wrap"
        }}
      >
        {`<ol>
  <li>PHP</li>
  <li>Laravel</li>
  <li>JavaScript</li>
  <li>JQuery</li>
  <li>HTML</li>
</ol>`}
      </Box>

      <Typography variant="body2" gutterBottom>Output:</Typography>
      <ol>
        <li>PHP</li>
        <li>Laravel</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>HTML</li>
      </ol>

      {/* Unordered List */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        📌 HTML Unordered List
      </Typography>
      <Typography variant="body1" gutterBottom>
        Unordered List में items bullet के साथ दिखते हैं। इसके लिए <code>&lt;ul&gt;</code> और <code>&lt;li&gt;</code> टैग का उपयोग होता है।
      </Typography>

      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "monospace",
          p: 2,
          borderRadius: 2,
          mb: 2,
          whiteSpace: "pre-wrap"
        }}
      >
        {`<ul>
  <li>PHP</li>
  <li>Laravel</li>
  <li>JavaScript</li>
  <li>JQuery</li>
  <li>HTML</li>
</ul>`}
      </Box>

      <Typography variant="body2" gutterBottom>Output:</Typography>
      <ul>
        <li>PHP</li>
        <li>Laravel</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>HTML</li>
      </ul>

      {/* Description List */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        📌 HTML Description List
      </Typography>
      <Typography variant="body1" gutterBottom>
        Description List (या Definition List) का उपयोग किसी term और उसके बारे में छोटी definition देने के लिए किया जाता है।
      </Typography>

      <Typography variant="body2" gutterBottom>
        इसमें तीन टैग होते हैं:
      </Typography>
      <ul style={{ paddingLeft: '1.2rem' }}>
        <li><code>&lt;dl&gt;</code> – List container</li>
        <li><code>&lt;dt&gt;</code> – Term (Heading)</li>
        <li><code>&lt;dd&gt;</code> – Description of the term</li>
      </ul>

      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "monospace",
          p: 2,
          borderRadius: 2,
          mb: 2,
          whiteSpace: "pre-wrap"
        }}
      >
        {`<dl>
  <dt>PHP</dt>
  <dd>- An open-source, server-side scripting language.</dd>
  <dt>JavaScript</dt>
  <dd>- A client-side scripting language.</dd>
  <dt>jQuery</dt>
  <dd>- A JavaScript Library.</dd>
  <dt>HTML</dt>
  <dd>- Hyper Text Markup Language.</dd>
</dl>`}
      </Box>

      <Typography variant="body2" gutterBottom>Output:</Typography>
      <dl>
        <dt><strong>PHP</strong></dt>
        <dd>- An open-source, server-side scripting language.</dd>
        <dt><strong>JavaScript</strong></dt>
        <dd>- A client-side scripting language.</dd>
        <dt><strong>jQuery</strong></dt>
        <dd>- A JavaScript Library.</dd>
        <dt><strong>HTML</strong></dt>
        <dd>- Hyper Text Markup Language.</dd>
      </dl>
    </Box>
  );
};

export default Html_list;
