import { Box, Typography } from "@mui/material";

const Js_innerhtml_innertext = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript innerText & innerHTML
      </Typography>

      <Typography paragraph>
        <strong>innerHTML</strong> और <strong>innerText</strong> ये दोनों Properties DOM (Document Object Model) manipulation के लिए बहुत ही महत्वपूर्ण हैं। इस टॉपिक में आप इन्हीं के बारे में विस्तार से पढ़ेंगे।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        🔹 innerText क्या है?
      </Typography>
      <Typography paragraph>
        <code>innerText</code> का उपयोग किसी selected element की text value को प्राप्त करने या उसमें नया text set करने के लिए किया जाता है।
      </Typography>
      <Typography paragraph>
        उदाहरण के लिए, अगर हमारे पास <code>{`<p><span>Para Text</span></p>`}</code> है और हम इसकी <code>innerText</code> लेते हैं तो हमें केवल "Para Text" मिलेगा।
      </Typography>

      <Typography variant="h6" gutterBottom>
        🧪 Example - innerText
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <body>
    <div id="mydiv">
      <p>Simple Paragraph <strong>Strong Text</strong></p>
    </div>
    <div class="result_div"></div>
    
    <script type="text/javascript"> 
      let div = document.getElementById('mydiv');
      let result_div = document.querySelector('.result_div');
      result_div.innerText = div.innerText;
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        Output: <strong>Simple Paragraph Strong Text</strong>
      </Typography>

      <Typography paragraph>
        आप देख सकते हैं कि innerText सिर्फ textual content को return करता है, HTML tags को ignore करता है।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom mt={2}>
        🔹 innerHTML क्या है?
      </Typography>
      <Typography paragraph>
        <code>innerHTML</code> selected element के अंदर के HTML content को tags सहित return करता है या उसमें नया HTML content set करता है।
      </Typography>
      <Typography paragraph>
        उदाहरण: अगर हमारे पास <code>{`<p><span>Para Text</span></p>`}</code> है और हम इसकी <code>innerHTML</code> निकालते हैं तो हमें मिलेगा - <code>{"<span>Para Text</span>"}</code>
      </Typography>

      <Typography variant="h6" gutterBottom>
        🧪 Example - innerHTML
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <body>
    <div id="mydiv">
      <p>Simple Paragraph <strong>Strong Text</strong></p>
    </div>
    <div class="result_div"></div>

    <script type="text/javascript"> 
      let div = document.getElementById('mydiv');
      let result_div = document.querySelector('.result_div');
      result_div.innerHTML = div.innerHTML;
      div.innerHTML = '<h3>This is new Value</h3>';
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        Output:
      </Typography>
      <Typography component="ul" sx={{ pl: 3 }}>
        <li><strong>result_div:</strong> Simple Paragraph <strong>Strong Text</strong></li>
        <li><strong>mydiv:</strong> This is new Value (updated <code>{`<h3>`}</code> element)</li>
      </Typography>

      <Typography variant="h6" gutterBottom color="success.main" mt={2}>
        ✅ Summary
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><strong>innerText:</strong> केवल text content को get/set करता है (HTML tags को ignore करता है)।</li>
        <li><strong>innerHTML:</strong> पूरे HTML content को tags सहित get/set करता है।</li>
      </Typography>

      <Typography paragraph fontStyle="italic">
        अब आप स्पष्ट रूप से समझ चुके होंगे कि <strong>innerText</strong> और <strong>innerHTML</strong> में क्या अंतर है और इनका प्रयोग कैसे किया जाता है।
      </Typography>
    </Box>
  );
};

export default Js_innerhtml_innertext;
