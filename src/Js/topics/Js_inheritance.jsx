import { Box, Typography } from "@mui/material";

const Js_inheritance = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" , mt:'-1px'}}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Inheritance
      </Typography>

      <Typography paragraph>
        किसी भी Object Oriented Programming (OOP) में <strong>Inheritance</strong> एक बहुत ही important concept होता है।
        जब किसी class की properties या behavior को दूसरी class में extend किया जाता है, तो इसे inheritance कहते हैं।
      </Typography>

      <Typography paragraph>
        जिस class को extend किया जाता है उसे <strong>Parent/Base Class</strong> और जो class extend करती है उसे <strong>Child/Derived Class</strong> कहा जाता है। JavaScript में inheritance के लिए <code>extends</code> और <code>super()</code> का उपयोग होता है।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 JS Inheritance Example
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`class A {
  prop_name = "property of class A";
  methodA() {
    return "method of class A";
  }
}

class B extends A {}

const inst = new B();
console.log(inst.prop_name);
console.log(inst.methodA());`}
      </Typography>

      <Typography paragraph>
        Output:
        <br />
        <code>property of class A</code>
        <br />
        <code>method of class A</code>
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 Access Parent Members in Child Class
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`class A {
  myproperty = "property of class A";
  method_a() {
    return "method of class A";
  }
}

class B extends A {
  show() {
    console.log(this.myproperty);
    console.log(this.method_a());
  }
}`}
      </Typography>

      <Typography paragraph>
        यहाँ <code>this</code> का उपयोग करके parent class की properties और methods को child class में access किया गया है।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 <code>super</code> Keyword
      </Typography>

      <Typography paragraph>
        <code>super</code> का उपयोग parent class के constructor या methods को call करने के लिए किया जाता है।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto' }}>
{`class A {
  constructor() {
    console.log("Parent class constructor.");
  }

  method_a() {
    return "method of class A";
  }
}

class B extends A {
  constructor() {
    super(); // call parent constructor
    console.log("Child class constructor.");
  }

  show() {
    console.log(super.method_a());
  }
}

const inst = new B();
inst.show();`}
      </Typography>

      <Typography paragraph mt={2}>
        Output:
        <br />
        <code>Parent class constructor.</code><br />
        <code>Child class constructor.</code><br />
        <code>method of class A</code>
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 Access Static Members of Parent Class
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto' }}>
{`class A {
  static myproperty = "static property of class A";
  static method_a() {
    return "static method of class A";
  }
}

class B extends A {
  show_A() {
    console.log(B.myproperty);
    console.log(B.method_a());
  }

  show_B() {
    console.log(A.myproperty);
    console.log(A.method_a());
  }
}

const inst = new B();
inst.show_A();
inst.show_B();`}
      </Typography>

      <Typography paragraph mt={2}>
        आप देख सकते हैं कि static members को child class के माध्यम से भी access किया जा सकता है, या directly parent class के नाम से भी।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔸 Important Notes:
      </Typography>
      <ul>
        <li>Static methods के अंदर <code>this</code> और <code>super</code> उपलब्ध नहीं होते।</li>
        <li>Non-static method में आप <code>this</code>, <code>super</code> या class name का उपयोग कर सकते हैं।</li>
        <li>Parent class का constructor call करने के लिए <code>super()</code> ज़रूरी है, खासकर जब आप child class में constructor define करते हैं।</li>
      </ul>

      <Typography mt={3}>
        🔚 <strong>Conclusion:</strong> JavaScript में Inheritance के ज़रिए आप code reuse और OOP concepts को implement कर सकते हैं। Class extend करके आप powerful और structured architecture बना सकते हैं।
      </Typography>
    </Box>
  );
};

export default Js_inheritance;
