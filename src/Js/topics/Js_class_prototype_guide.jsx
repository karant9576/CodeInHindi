import { Box, Typography } from "@mui/material";

const Js_class_prototype_guide = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" ,mt:'-1px' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Class और Prototype का उपयोग
      </Typography>

      <Typography paragraph>
        JavaScript में जैसे हम Function Constructor के साथ <strong>prototype</strong> का उपयोग करते हैं, वैसे ही <strong>Class</strong> के साथ भी prototype का उपयोग कर सकते हैं। इससे हम class में <strong>dynamically properties और methods</strong> को जोड़ सकते हैं जो सभी instances के लिए accessible होते हैं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 Class Prototype Example
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto' }}>
{`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a sound.\`);
  }
}

const animal = new Animal("Generic Animal");
animal.speak(); // Output: Generic Animal makes a sound.

// Add method using prototype
Animal.prototype.move = function(distance) {
  console.log(\`\${this.name} moves \${distance} meters.\`);
};

animal.move(10); // Output: Generic Animal moves 10 meters.`}
      </Typography>

      <Typography paragraph mt={2}>
        ⚠️ ध्यान दें: आप instance (जैसे <code>animal</code>) पर prototype add नहीं कर सकते। ये केवल constructor function या class पर ही add किया जा सकता है:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`animal.prototype.move = function() {} // ❌ Error: animal.prototype is undefined`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom mt={2} color="secondary">
        🔹 Add Properties Using Prototype
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`class User {}

const user = new User();

console.log(user.first_name); // undefined

// Add properties via prototype
User.prototype.first_name = "John";
User.prototype.last_name = "Doe";

// Add method
User.prototype.printName = function() {
  console.log(\`Hey ! \${this.first_name} \${this.last_name}\`);
};

user.printName(); // Output: Hey ! John Doe`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom mt={2} color="secondary">
        ⚠️ Arrow Function Warning
      </Typography>

      <Typography paragraph>
        Arrow functions में <code>this</code> lexical होता है, इसलिए इन्हें prototype methods में इस्तेमाल नहीं करना चाहिए:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto' }}>
{`User.prototype.printAddress = () => {
  console.log(\`Address: \${this.userAddress}\`);
};

user.printAddress(); // Output: Address: undefined`}
      </Typography>

      <Typography paragraph mt={2}>
        इसका कारण यह है कि arrow functions <code>this</code> को अपने surrounding lexical context से inherit करते हैं — वो current object को refer नहीं करता।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔸 Why is Prototype Important?
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>Prototype का उपयोग करके आप किसी class को बिना दोबारा define किए methods जोड़ सकते हैं।</li>
        <li>यह सभी object instances में shared रहता है, memory-efficient होता है।</li>
        <li>डायनामिक behavior add करने के लिए ideal तरीका है।</li>
      </Typography>

      <Typography mt={2}>
        ⭐ <strong>Conclusion:</strong> अब आप समझ चुके होंगे कि JavaScript में Class Prototypes का use कैसे किया जाता है, और क्यों यह powerful feature है।
      </Typography>
    </Box>
  );
};

export default Js_class_prototype_guide;
