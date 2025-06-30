import { Box, Typography } from "@mui/material";

const Js_object_constructor = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto", mt:'-1px' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Object Constructor
      </Typography>

      <Typography paragraph>
        जैसा कि आप पहले पढ़ चुके हैं कि JavaScript में <strong>primitives को छोड़कर लगभग सब कुछ object होता है</strong>। अगर आप किसी function का type check करें, तो आप पाएँगे कि functions भी object होते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom fontWeight="bold">
        🔹 Function को Object की तरह प्रयोग करना
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`function myfun(){
  // code
}

// Console में देखें
console.log(new myfun());`}
      </Typography>

      <Typography paragraph mt={2}>
        ऐसे functions को आप as a <strong>constructor</strong> की तरह भी use कर सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom fontWeight="bold">
        🔸 JavaScript Object Constructor Example
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`function Person(first, last, age, address) {
  this.first_name = first;
  this.last_name = last;
  this.age = age;
  this.address = address;
}

let my_friend = new Person("Karan", "Thakur", 20, "India");
let my_friend2 = new Person("Karandeep", "Singh", 20, "India");

document.writeln("Full Name :" + my_friend.first_name + " " + my_friend.last_name);
document.writeln("Age :" + my_friend.age);
document.writeln("Address :" + my_friend.address);`}
      </Typography>

      <Typography variant="body2" color="textSecondary" mt={1}>
        Output: <br />
        Full Name: Karan Thakur <br />
        Age: 20 <br />
        Address: India
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom mt={2}>
        🔑 this Keyword
      </Typography>
      <Typography paragraph>
        <code>this</code> keyword current object को represent करता है। ऊपर example में <code>this.first_name</code> का मतलब है कि यह current object की <code>first_name</code> property को assign कर रहा है।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        ➕ Object में Property Add करना
      </Typography>
      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 }}>
{`let my_friend = new Person("Karan", "Thakur", 20, "India");

// नई property add करें
my_friend.eye = "Black";

// existing property update करें
my_friend.age = 20;`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom mt={2}>
        🔧 Constructor में Property Add करना
      </Typography>
      <Typography paragraph>
        अगर आप constructor में direct property add करना चाहते हैं (बिना instance के), तो आप इसे function के नाम से ही जोड़ सकते हैं। लेकिन ध्यान दें कि इस property को आप instance object से access नहीं कर पाएँगे।
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 }}>
{`// Constructor में property जोड़ना
Person.eye = "black";

// Access via constructor function
console.log(Person.eye); // ✅

// Instance से access नहीं होगा
let my_friend = new Person("Karan", "Thakur", 20, "India");
console.log(my_friend.eye); // ❌ undefined`}
      </Typography>

      <Typography variant="body2" color="textSecondary" mt={2}>
        Tip: Constructor में इस तरह से static properties add की जाती हैं।
      </Typography>
    </Box>
  );
};

export default Js_object_constructor;
