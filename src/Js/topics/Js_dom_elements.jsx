import { Box, Typography } from "@mui/material";

const Js_dom_elements = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" ,mt:'-1px'}}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript DOM Elements Access
      </Typography>

      <Typography paragraph>
        जैसा कि आपने पिछले Topic में DOM (Document Object Model) के बारे में पढ़ा और समझा कि JavaScript की मदद से हम आसानी से Document को manipulate कर सकते हैं। इस टॉपिक में आप सीखेंगे कि HTML elements को DOM के माध्यम से कैसे select और access किया जाता है।
      </Typography>

      <Typography paragraph>
        JavaScript में किसी element पर action लेने से पहले, उसे select करना ज़रूरी होता है, ठीक वैसे ही जैसे CSS में styling करने से पहले element को select किया जाता है।
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        📌 DOM में Elements को Access करने के तरीके
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>Select Element by ID</li>
        <li>Select Elements by Class Name</li>
        <li>Select Elements by Tag Name</li>
        <li>Query Selectors</li>
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔹 <code>getElementById</code>
      </Typography>
      <Typography paragraph>
        <code>document.getElementById(id)</code> method एक unique ID वाले element को return करता है। क्योंकि ID unique होती है, यह हमेशा एक single element ही return करता है।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<p id="mypara">This is a simple paragraph</p>
<script type="text/javascript">
  let mypara = document.getElementById('mypara');
  console.log(mypara);
</script>`}
      </Typography>

      <Typography paragraph mt={2}>
        उपरोक्त code में selected paragraph की सभी properties और methods को console में देखा जा सकता है। <strong>innerHTML</strong> और <strong>innerText</strong> सबसे commonly used properties हैं जिन्हें अगले topics में विस्तार से पढ़ेंगे।
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔹 <code>getElementsByClassName</code>
      </Typography>
      <Typography paragraph>
        यह method एक दी गई class के सारे matching elements को NodeList के रूप में return करता है, जो कि array जैसी होती है।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<p class="testClass">This is first paragraph</p>
<p class="testClass">This is second paragraph</p>
<div class="testClass">This is third paragraph</div>

<script type="text/javascript">
  let elements = document.getElementsByClassName('testClass');
  console.log(elements);
  // elements[0], elements[1] ... से access कर सकते हैं
</script>`}
      </Typography>

      <Typography variant="h6" gutterBottom mt={2}>
        🔹 <code>getElementsByTagName</code>
      </Typography>
      <Typography paragraph>
        यह method HTML tag name के अनुसार elements को select करती है और एक NodeList return करती है।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<script type="text/javascript">
  let p_elements = document.getElementsByTagName('p');
  let div_elements = document.getElementsByTagName('div');
  let a_elements = document.getElementsByTagName('a');
  let img_elements = document.getElementsByTagName('img');
</script>`}
      </Typography>

      <Typography variant="h6" gutterBottom mt={2}>
        🔹 <code>querySelector</code> और <code>querySelectorAll</code>
      </Typography>
      <Typography paragraph>
        CSS की तरह selectors का इस्तेमाल करके elements को select करने के लिए इन methods का use किया जाता है।
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><code>querySelector</code> - पहला matched element return करता है</li>
        <li><code>querySelectorAll</code> - सभी matched elements की NodeList return करता है</li>
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<script type="text/javascript">
  let p_element = document.querySelector('p');
  let class_element = document.querySelector('.myClass');
  let p_elements = document.querySelectorAll('p');
  let class_elements = document.querySelectorAll('.myClass');
</script>`}
      </Typography>

      <Typography paragraph mt={2}>
        इसके अलावा भी DOM elements को access करने के और भी तरीके हैं, जिन्हें आप console में experiments करके समझ सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="success.main">
        ✅ Summary
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><code>getElementById</code> – unique ID से element select करता है</li>
        <li><code>getElementsByClassName</code> – class name से multiple elements</li>
        <li><code>getElementsByTagName</code> – tag name से multiple elements</li>
        <li><code>querySelector</code> – CSS की तरह first matched element</li>
        <li><code>querySelectorAll</code> – CSS selector से सभी matched elements</li>
      </Typography>

      <Typography paragraph fontStyle="italic">
        I hope अब आप अच्छे से समझ चुके होंगे कि JavaScript में DOM Elements को कैसे access किया जाता है।
      </Typography>
    </Box>
  );
};

export default Js_dom_elements;
