import { Box, Typography } from "@mui/material";

const Js_object_accessors = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt:'-1px' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Object Accessors (getters & setters)
      </Typography>

      <Typography paragraph>
        JavaScript में <strong>Accessors</strong> ऐसी properties होती हैं जो object methods की तरह काम करती हैं। इनका उपयोग किसी value को <code>get</code> या <code>set</code> करने के लिए किया जाता है।
        <br />
        - <strong>get</strong>: किसी value को read करने के लिए <br />
        - <strong>set</strong>: किसी value को assign करने के लिए
      </Typography>

      <Typography paragraph>
        Accessors को JavaScript में ECMAScript 5 (2009) में introduce किया गया था।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔧 Accessor Example:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`var person = {
  full_name: null,

  // Setter
  set set_name(name) {
    this.full_name = name;
  },

  // Getter
  get get_name() {
    return this.full_name;
  }
};

person.set_name = "Karan Thakur";
document.write(person.get_name);`}
      </Typography>

      <Typography paragraph mt={2}>
        ऊपर दिए गए उदाहरण में हमने <code>set_name</code> के ज़रिए value assign की और <code>get_name</code> से value प्राप्त की।
        Accessors को आप dot notation (जैसे: <code>person.get_name</code>) या bracket notation (जैसे: <code>person["get_name"]</code>) से access कर सकते हैं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        ⚖️ Method vs Getter/Setter
      </Typography>
      <Typography paragraph>
        <strong>Methods:</strong> function होते हैं जिन्हें execute करने के लिए parentheses <code>()</code> की जरूरत होती है।
        <br />
        <strong>Accessors:</strong> properties की तरह access किए जाते हैं, parentheses की आवश्यकता नहीं होती।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        ❌ Accessor Delete करना
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 }}>
{`delete person.set_name;
delete person.get_name;`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom mt={2}>
        ➕ defineProperty() से Accessor जोड़ना
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`var person = { full_name: null };

// Add setter
Object.defineProperty(person, 'set_name', {
  set: function(name) {
    this.full_name = name;
  }
});

// Add getter
Object.defineProperty(person, 'get_name', {
  get: function() {
    return this.full_name;
  }
});

person.set_name = "Karan Thakur";
document.write(person.get_name);`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom mt={2}>
        ✅ Accessors के फायदे
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>Simple syntax</li>
        <li>Objects को manage करना आसान</li>
        <li>Method और Property दोनों के लिए uniform interface</li>
        <li>Better data validation & encapsulation</li>
        <li>Readable & maintainable code</li>
      </Typography>
    </Box>
  );
};

export default Js_object_accessors;
