import { Box, Typography } from "@mui/material";

const Js_dom_event_listener = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: "-1px" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Event Listeners
      </Typography>

      <Typography paragraph>
        पिछले टॉपिक्स में आपने JavaScript Events और उनके Handling के बारे में पढ़ा। इस टॉपिक में आप <strong>Event Listeners</strong> के बारे में जानेंगे।
      </Typography>

      <Typography paragraph>
        Event Listeners का उपयोग किसी selected element में event को <strong>Attach</strong> या <strong>Detach</strong> करने के लिए किया जाता है। यानी हम किसी element पर एक से अधिक events भी जोड़ सकते हैं और उन्हें ज़रूरत पड़ने पर हटा भी सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔹 Event Listener के लिए मुख्य Methods
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><code>addEventListener()</code> – Event को attach करता है</li>
        <li><code>removeEventListener()</code> – Event को detach करता है</li>
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔸 <code>addEventListener()</code> Syntax
      </Typography>

      <Typography paragraph>
        <code>addEventListener()</code> method का इस्तेमाल किसी भी HTML element में एक event assign करने के लिए किया जाता है।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`selected_element.addEventListener(event_name, callback_function, useCapture);`}
      </Typography>

      <Typography component="ul" sx={{ pl: 3 ,mt:2}}>
        <li><strong>event_name</strong>: (required) Event का नाम (जैसे <code>"click"</code>, <code>"mouseover"</code>), बिना <code>on</code> prefix के</li>
        <li><strong>callback_function</strong>: (required) वह function जो event के trigger होने पर call होगा</li>
        <li><strong>useCapture</strong>: (optional) Boolean value indicating event bubbling या capturing (advanced use)</li>
      </Typography>

      <Typography variant="h6" gutterBottom mt={2}>
        ✅ Example: <code>addEventListener</code>
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <body>
    <button class="change_bg">You Clicked 0 Times</button>  
    <script type="text/javascript">
      let button_elem = document.getElementsByClassName('change_bg')[0];
      let number = 0;
      button_elem.addEventListener('click', function () {
        button_elem.innerText = \`You Clicked \${++number} Times\`;
      });
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        इस उदाहरण में <code>addEventListener()</code> के माध्यम से एक <code>click</code> event attach किया गया है, जो हर बार बटन click होने पर count बढ़ाता है।
      </Typography>

      <Typography variant="h6" gutterBottom>
        🔸 <code>removeEventListener()</code>
      </Typography>

      <Typography paragraph>
        <code>removeEventListener()</code> method किसी event को remove करने के लिए प्रयोग होती है। यह तभी काम करती है जब event को add करते समय reference function का use किया गया हो (anonymous function नहीं)।
      </Typography>

      <Typography variant="h6" gutterBottom>
        ✅ Example: <code>removeEventListener</code>
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
  <body>
    <button id="add_listener">You Clicked 0 Times</button> 
    <script type="text/javascript">
      let add_listener_btn = document.getElementById('add_listener');
      let number = 0;

      function handleClick() {
        number++;
        if (number <= 5) {
          add_listener_btn.innerText = \`You Clicked \${number} Times\`;
        } else {
          add_listener_btn.removeEventListener('click', handleClick);
        }
      }

      add_listener_btn.addEventListener('click', handleClick);
    </script>
  </body>
</html>`}
      </Typography>

      <Typography paragraph mt={2}>
        इस उदाहरण में जैसे ही user 5 से ज़्यादा बार click करता है, <code>click</code> event listener को हटा दिया जाता है। ध्यान दें कि <code>removeEventListener()</code> तभी काम करेगा जब आपने event listener को named function के साथ add किया हो।
      </Typography>

      <Typography variant="h6" gutterBottom color="error">
        ❕ Important Notes
      </Typography>
      <Typography component="ul" sx={{ pl: 3 }}>
        <li><strong>Anonymous functions</strong> को <code>removeEventListener()</code> से remove नहीं किया जा सकता है क्योंकि वे memory में unique नहीं होते।</li>
        <li>Ensure करें कि event assign और remove करने का code element के render होने के बाद run हो, नहीं तो error आएगी।</li>
      </Typography>

      <Typography paragraph fontStyle="italic" mt={2}>
        अब आप समझ चुके होंगे कि <strong>JavaScript में events को add और remove करने के लिए event listeners</strong> कैसे काम करते हैं। आगे आप इन्हें React या अन्य frameworks में भी use कर सकते हैं।
      </Typography>
    </Box>
  );
};

export default Js_dom_event_listener;
