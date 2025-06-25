import { Box, Typography } from '@mui/material';

const Js_intro = () => {
  return (
    <Box className="doc" sx={{ p: 2,  maxWidth: 1000, mx: "auto" , marginTop:"60px",}}>
    <Box >
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript introduction
      </Typography>

      <Typography paragraph>
        JavaScript एक object-based, interpreted, single-threaded, non-blocking scripting language है,
        जो lightweight और cross-platform होती है। यानी आप इसे किसी भी operating system
        (Windows, Mac, Linux आदि) पर आसानी से चला सकते हैं।
      </Typography>

      <Typography paragraph>
        यह एक compiled language नहीं है, बल्कि एक translated language है। JavaScript code को
        translate करने का काम JavaScript Translator करता है, जो browser में embedded होता है।
      </Typography>

      <Typography paragraph>
        JavaScript का उपयोग HTML के साथ मिलकर dynamic content generate करने के लिए भी किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔍 Important Concepts (Definition में आए शब्दों की व्याख्या)
      </Typography>

      <Typography paragraph>
        <strong>Cross Platform:</strong> इसका मतलब है कि JavaScript हर प्रकार के operating systems
        पर काम कर सकती है। एक ही code को आप बिना बदलाव के कहीं भी चला सकते हैं।
      </Typography>

      <Typography paragraph>
        <strong>Interpreted:</strong> JavaScript को compile नहीं करना पड़ता, यह browser में embedded
        translator के ज़रिए line-by-line translate होकर execute होती है।
      </Typography>

      <Typography paragraph>
        <strong>Single-Threaded:</strong> इसका मतलब है कि एक समय में एक ही operation process होता है।
      </Typography>

      <Typography paragraph>
        <strong>Non-blocking:</strong> इसका मतलब है कि यदि कोई statement wait कर रहा है, तो JavaScript उसे
        skip करके बाकी code execute कर देती है और बाद में उस statement को run करती है।
      </Typography>

      <Typography sx={{ bgcolor: '#8CCDEB', p: 1, borderRadius: 1 }} component="pre">
{`console.log("Start");

setTimeout(function() {
  console.log("Running...");
}, 1000);

console.log("End");`}
      </Typography>

      <Typography paragraph>
        <strong>Note:</strong> Java और JavaScript दोनों अलग-अलग languages हैं। इनके concepts, syntax और
        purpose बिल्कुल अलग हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🚀 JavaScript Engines
      </Typography>

      <Typography paragraph>
        JavaScript हर modern browser में supported है। Browsers JavaScript run करने के लिए एक
        embedded engine का उपयोग करते हैं जिसे JavaScript Engine या Virtual Machine कहते हैं।
      </Typography>

      <Typography paragraph>
        कुछ प्रमुख JavaScript engines:
        <Box  sx={{ ml: 2, mb: 2 }}>
          ⁘ <strong>Chrome, Opera, Edge:</strong> V8<br/>
          ⁘ <strong>Firefox:</strong> SpiderMonkey<br/>
          ⁘ <strong>Internet Explorer:</strong> Chakra<br/>
          ⁘ <strong>Safari:</strong> JavaScriptCore (Nitro/SquirrelFish)<br/>
        </Box>
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📜 JavaScript का इतिहास
      </Typography>

      <Typography paragraph>
        JavaScript को 1995 में Brendan Eich ने बनाया था। पहले इसका नाम LiveScript था, लेकिन 1997 में ECMA
        Standard बनने के बाद इसे JavaScript कहा गया।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ JavaScript क्या कर सकता है?
      </Typography>

      <Typography paragraph>
        JavaScript का उपयोग लगभग हर प्रकार की web development में होता है:
        <Box sx={{ ml: 2, mb: 2 }}>
         ⁘ Client-side validation <br />
         ⁘ Dynamic content generation<br />
         ⁘ Form/button events को control करना<br />
         ⁘ Dynamic search bar और suggestions बनाना<br />
         ⁘ Alert, confirm, prompt जैसे popups<br />
         ⁘ Real-time clock/time display<br />
         ⁘ Front-end UI development<br />
        </Box>
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ❌ JavaScript क्या नहीं कर सकता?
      </Typography>

      <Typography paragraph>
        JavaScript browser में लगभग सबकुछ कर सकती है, लेकिन ये OS-level files (जैसे read/write) को
        directly access नहीं कर सकती। Camera/microphone जैसी permissions भी user की अनुमति से ही मिलती हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔁 Important: Sync vs Async
      </Typography>

      <Typography paragraph>
        JavaScript एक synchronous और single-threaded language है। लेकिन async processing के लिए
        यह callback, promises, async/await जैसे tools उपलब्ध कराती है।
      </Typography>

      <Typography paragraph>
        आप JavaScript को और powerful बनाने के लिए jQuery, AngularJS जैसे frameworks या Node.js जैसे
        server-side environments का उपयोग कर सकते हैं।
      </Typography>

      {/* ✅ Summary Section */}
      <Typography variant="h6" gutterBottom mt={4} color="secondary">
        🔚 Summary
      </Typography>

      <Typography paragraph>
        JavaScript एक शक्तिशाली और बहुपरियोजनीय भाषा है जो वेब डेवलपमेंट के लगभग हर हिस्से में उपयोग होती है। यह user interaction, dynamic content, form validation और asynchronous operations जैसे कामों के लिए अनिवार्य बन गई है। इसका सिंपल सिंटैक्स, browser compatibility और extensive community इसे सीखने और इस्तेमाल करने में बहुत आसान बनाते हैं।
      </Typography>
    </Box>
    </Box>
  );
};

export default Js_intro;
