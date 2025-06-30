import { Box, Typography } from "@mui/material";

const Js_classes = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt:'-1px' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Classes
      </Typography>

      <Typography paragraph>
        हम जानते हैं कि JavaScript में functions को constructor की तरह भी इस्तेमाल किया जा सकता है – यानी function का object बनाकर उसमें properties और methods define की जाती हैं।
      </Typography>

      <Typography paragraph>
        लेकिन modern JavaScript में इससे भी बेहतर और advanced feature है – <strong>class</strong>, जो object-oriented programming को implement करने में काफी useful है।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 OOP (Object-Oriented Programming) क्या है?
      </Typography>

      <Typography paragraph>
        OOP एक programming approach है जो कि classes और objects पर आधारित होती है। इसमें हम real-world entities (जैसे Car, Employee, Student) को code में class और object के ज़रिए represent करते हैं।
      </Typography>

      <Typography paragraph>
        हालाँकि JavaScript एक <i>prototype-based</i> language है (Java/C++ की तरह class-based नहीं), लेकिन ES6 के बाद इसमें <code>class</code> keyword support किया गया जिससे हम OOP structure implement कर सकते हैं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 What is Class?
      </Typography>

      <Typography paragraph>
        Class किसी object का blueprint होती है।
        <br />
        <strong>Example:</strong> Car एक class है, और Maruti, BMW, Ford आदि उसके objects हैं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 Class Syntax
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`class YourClass {
  constructor() {
    // initialization code
  }

  method1() {}
  method2() {}
}

const obj = new YourClass();`}
      </Typography>

      <Typography paragraph mt={2}>
        <strong>Note:</strong> <code>constructor()</code> method अपने आप call हो जाता है जब class का object create होता है।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 Class Example
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(\`Hi \${this.name}\`);
  }
}

let user = new User("Babu Rao");
user.sayHi();`}
      </Typography>

      <Typography mt={2}><strong>Output:</strong> Hi Babu Rao</Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 Constructor Method
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>Class के अंदर constructor एक special method होता है।</li>
        <li>Object create करते ही constructor automatic call हो जाता है।</li>
        <li>इसका नाम हमेशा <code>constructor()</code> ही होना चाहिए।</li>
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto', mt:2}}>
{`class MyClass {
  constructor() {
    console.log("Object created");
  }
}

new MyClass();`}
      </Typography>

      <Typography mt={2}><strong>Output:</strong> Object created</Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary" >
        🔹 Important Notes
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li>JavaScript में class भी एक function ही होती है:</li>
        <li><code>console.log(typeof User); // "function"</code></li>
        <li>सभी class methods <code>prototype</code> पर store होते हैं।</li>
        <li>आप <code>User.prototype.methodName</code> से methods access कर सकते हैं।</li>
        <li><code>User === User.prototype.constructor // true</code></li>
      </Typography>

      <Typography paragraph>
        🔚 JavaScript classes आपको clean और reusable OOP structure provide करती हैं। आप आसानी से constructor और prototype के बिना, सिर्फ class syntax से objects और logic manage कर सकते हैं।
      </Typography>
    </Box>
  );
};

export default Js_classes;
