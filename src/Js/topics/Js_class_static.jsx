import { Box, Typography } from "@mui/material";

const Js_class_static = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" ,mt:'-1px' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Class Static Properties & Methods
      </Typography>

      <Typography paragraph mt={2}>
        पिछले टॉपिक में आपने Class और Prototype के बारे में पढ़ा। JavaScript में किसी भी Class के दो प्रकार के members हो सकते हैं:
        <strong> Static </strong> और <strong> Non-Static </strong>।
      </Typography>

      <Typography paragraph>
        Non-static members को हम बिना किसी keyword के define करते हैं और उन्हें class के object से access करते हैं:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 }}>
{`class User {
  name = "Shyam Lal";
  hello() {
    return \`Hello! \${this.name}\`;
  }
}

const user = new User();
console.log(user.name);     // Shyam Lal
console.log(user.hello());  // Hello! Shyam Lal`}
      </Typography>

      <Typography paragraph mt={2}>
        ऊपर दिए गए example में आप देख सकते हैं कि non-static members को access करने के लिए object बनाना जरूरी होता है।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 Static Properties and Methods
      </Typography>

      <Typography paragraph>
        <strong>Static members</strong> वो होते हैं जिन्हें <code>static</code> keyword के साथ define किया जाता है और ये Class के object से नहीं बल्कि <strong>directly class name</strong> से access होते हैं।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 , overflowX:'auto'}}>
{`class MyClass {
  static staticProperty = "I am a static property";
  static staticMethod() {
    return "I am a static method";
  }
}

console.log(MyClass.staticProperty);
console.log(MyClass.staticMethod());`}
      </Typography>

      <Typography paragraph mt={2}>
        यदि आप object से static members को access करने की कोशिश करेंगे, तो:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto' }}>
{`let obj = new MyClass();

console.log(obj.staticProperty); // undefined
obj.staticMethod();              // ❌ Uncaught TypeError`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary" mt={2}>
        ❌ You cannot access <code>this</code> inside static methods
      </Typography>

      <Typography paragraph>
        Static methods में <code>this</code> का मतलब current object नहीं होता, इसलिए आप non-static properties को access नहीं कर सकते:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 , overflowX:'auto'}}>
{`class User {
  user_name = "Shyam Lal";

  static sayHi() {
    console.log(\`Hi \${this.user_name}\`);
  }
}

User.sayHi(); // Output: Hi undefined`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary" mt={2}>
        ✅ Static method में class instance pass करें
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1  ,overflowX:'auto'}}>
{`class User {
  user_name = "Shyam Lal";
  getAddress() {
    return "UP, India";
  }

  static sayHi(obj) {
    console.log(\`Hi \${obj.user_name} from \${obj.getAddress()}.\`);
  }
}

const user = new User();
User.sayHi(user);  // Output: Hi Shyam Lal from UP, India`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary" mt={2}>
        ✅ Static Method के अंदर Static Members Access करना
      </Typography>

      <Typography paragraph>
        Static method के अंदर आप class name का उपयोग करके static members को access कर सकते हैं:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto' }}>
{`class User {
  static user_name = "Shyam Lal";
  static getAddress() {
    return "UP, India";
  }

  static sayHi() {
    console.log(\`Hi \${User.user_name} from \${User.getAddress()}.\`);
  }
}

User.sayHi();  // Output: Hi Shyam Lal from UP, India`}
      </Typography>

      <Typography mt={3}>
        🔚 <strong>Conclusion:</strong> Static properties और methods उन situations में useful होते हैं जहां कोई functionality class से जुड़ी होती है — न कि किसी specific object instance से।
      </Typography>
    </Box>
  );
};

export default Js_class_static;
