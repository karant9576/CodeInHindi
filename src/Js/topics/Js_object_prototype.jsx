import { Box, Typography } from "@mui/material";

const Js_object_prototype = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" , mt:'-1px' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Object Prototype
      </Typography>

      <Typography paragraph>
        पिछले टॉपिक में आपने सीखा कि कैसे हम Object constructor में properties और methods जोड़ सकते हैं। लेकिन वहाँ methods को constructor function के अंदर add करने पर वो सिर्फ constructor से ही accessible होते थे, object instance से नहीं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        ❌ Constructor से Method Add करना (गलत तरीका)
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`function Person(first, last) {
  this.first_name = first;
  this.last_name = last;
}

// method constructor function पर add की
Person.full_name = function(){
  return "return function";
};

// यह काम करेगा
Person.full_name();

// लेकिन यह नहीं करेगा
let my_friend = new Person("Karan", "Thakur");
my_friend.full_name(); // ❌ Error`}
      </Typography>

      <Typography paragraph mt={2}>
        इसी तरह, अगर आप किसी एक object पर ही method define करते हैं, तो वह method सिर्फ उसी object के लिए होगा। दूसरे objects को वह method नहीं मिलेगा।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        ❌ Method केवल एक object के लिए (गलत तरीका)
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto' }}>
{`let my_friend1 = new Person("Karan", "Thakur");

my_friend1.full_name = function(){
  return this.first_name + " " + this.last_name;
};

my_friend1.full_name(); // ✅

let my_friend2 = new Person("Karandeep", "Singh");
my_friend2.full_name(); // ❌ Error`}
      </Typography>

      <Typography paragraph mt={2}>
        इस तरह की limitation से बचने के लिए, JavaScript में हम <strong>prototype</strong> का use करते हैं। Prototype से method add करने पर वह सभी objects में automatically available हो जाता है।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        ✅ Prototype के जरिए Method Add करना (सही तरीका)
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`function Person(first, last) {
  this.first_name = first;
  this.last_name = last;
}

// method को prototype पर define करें
Person.prototype.full_name = function() {
  return this.first_name + " " + this.last_name;
};

let my_friend1 = new Person("Karan", "Thakur");
document.writeln(my_friend1.full_name()); // ✅

let my_friend2 = new Person("Karandeep", "Singh");
document.writeln(my_friend2.full_name()); // ✅`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom mt={2} color="secondary">
        ℹ️ Prototype से Inheritance
      </Typography>
      <Typography paragraph>
        JavaScript में <code>prototype</code> एक ऐसी mechanism है जिससे objects एक-दूसरे से methods और properties को inherit करते हैं।
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><code>Date</code> objects inherit from <code>Date.prototype</code></li>
        <li><code>Array</code> objects inherit from <code>Array.prototype</code></li>
        <li>आपका custom object inherit करता है उसके constructor के <code>prototype</code> से</li>
      </Typography>

      <Typography paragraph>
        आप किसी object को console में print करके उसका prototype structure आसानी से देख सकते हैं।
      </Typography>

      <Typography variant="body2" color="textSecondary">
        🔑 Summary: Prototype के ज़रिए method define करने से आप DRY (Don't Repeat Yourself) principle को follow करते हैं और memory efficient code लिखते हैं।
      </Typography>
    </Box>
  );
};

export default Js_object_prototype;
