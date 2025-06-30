import { Box, Typography } from "@mui/material";

const Js_object_methods = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" ,mt:'-1px'}}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Object Methods
      </Typography>

      <Typography paragraph>
        जैसा कि आपने पिछले चैप्टर में पढ़ा, किसी real-world Object के behavior को methods के ज़रिए represent किया जाता है। JavaScript में methods वे actions होते हैं जो किसी Object द्वारा perform किए जाते हैं।
      </Typography>

      <Typography paragraph>
        Object methods भी Object की properties ही होती हैं — बस उनका value एक function होता है। आप methods को Object में dynamically add या remove भी कर सकते हैं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        🔧 JavaScript Object Method Example
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`var person = {
  first_name: "Karan",
  last_name: "Thakur",
  full_name: function() {
    return this.first_name + " " + this.last_name;
  }
};

document.write("Full Name: " + person.full_name());`}
      </Typography>

      <Typography paragraph mt={2}>
        🔹 यहाँ <code>this</code> keyword का उपयोग current object को reference करने के लिए किया गया है।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        📌 Note:
      </Typography>

      <Typography paragraph>
        Object methods भी functions ही होते हैं, जो properties के रूप में define किए जाते हैं। अगर आप method को parentheses <code>()</code> के बिना access करेंगे, तो आपको केवल function की definition मिलेगी, execute नहीं होगा।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`document.write(person.full_name);`}
      </Typography>

      <Typography paragraph mt={2}>
        Output:
        <code>function() &#123; return this.first_name + " " + this.last_name; &#125;</code>
      </Typography>

      <Typography color="warning.main" paragraph>
        ⚠️ जब Object में properties और methods दोनों हों, तो <code>for...in</code> loop से iterate करते समय methods पर parentheses लगाना पड़ता है, नहीं तो वे execute नहीं होंगे।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        ➕ Add Method to an Object
      </Typography>

      <Typography paragraph>
        Object में नया method add करना बहुत आसान है:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 }}>
{`person.get_age = function() {
  return 20;
};`}
      </Typography>

      <Typography paragraph mt={2}>
        अब <code>person.get_age()</code> को call करने पर यह 23 return करेगा।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        ❌ Delete Method from Object
      </Typography>

      <Typography paragraph>
        चूंकि methods भी properties ही होते हैं, इन्हे delete करने के लिए <code>delete</code> operator का use किया जाता है:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 }}>
{`delete person.get_age;`}
      </Typography>

      <Typography paragraph color="error" mt={2}>
        ⚠️ Delete करते समय parentheses <code>()</code> न लगाएं — <code>delete person.get_age();</code> से method delete नहीं होगा।
      </Typography>
    </Box>
  );
};

export default Js_object_methods;
