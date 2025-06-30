import { Box, Typography } from "@mui/material";

const Js_class_set_get = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" , mt:'-1px'}}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Class Setter और Getter
      </Typography>

      <Typography paragraph mt={2}>
        वैसे तो JavaScript classes में हम methods को define और call कर सकते हैं, लेकिन methods को और बेहतर तरीके से manage करने के लिए <strong>setter</strong> और <strong>getter</strong> methods का उपयोग किया जाता है।
      </Typography>

      <Typography paragraph>
        इनका मुख्य उद्देश्य code को <em>clean</em>, <em>standardized</em> और <em>safe</em> बनाना होता है।
        जबकि Java / C++ जैसी languages में setters और getters का use encapsulation के लिए किया जाता है, JavaScript में इन्हें data access को control करने के लिए इस्तेमाल किया जाता है।
      </Typography>

      <Typography paragraph>
        हालाँकि JavaScript में encapsulation को सीधे support नहीं किया गया है, लेकिन हम closures या private naming conventions (जैसे कि underscore `_`) का use करके इसे achieve कर सकते हैं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary">
        🔹 Example: Using Getters and Setters
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto' }}>
{`class Circle {
  constructor(radius) {
    this._radius = radius; // private-like property
  }

  // Getter for radius
  get radius() {
    return this._radius;
  }

  // Setter for radius
  set radius(newRadius) {
    if (newRadius >= 0) {
      this._radius = newRadius;
    } else {
      console.log("Radius cannot be negative.");
    }
  }

  // Getter for area
  get area() {
    return Math.PI * this._radius * this._radius;
  }
}`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom color="secondary" mt={2}>
        🔹 Explanation
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><strong>get radius()</strong>: radius को safely return करता है।</li>
        <li><strong>set radius(newRadius)</strong>: new radius को set करता है और negative value होने पर रोकता है।</li>
        <li><strong>get area()</strong>: circle का area calculate करता है।</li>
        <li><strong>_radius</strong>: एक convention है जो दर्शाता है कि यह property "private" है।</li>
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom mt={1} color="secondary">
        🔹 Usage Example
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 ,overflowX:'auto'}}>
{`const circle = new Circle(5);

console.log(circle.radius); // Output: 5
console.log(circle.area);   // Output: 78.53981633974483

circle.radius = 7;
console.log(circle.radius); // Output: 7

circle.radius = -2;         // Output: Radius cannot be negative.
console.log(circle.radius); // Output: 7`}
      </Typography>

      <Typography paragraph mt={2}>
        इस तरह से getter और setter methods आपको controlled access देते हैं जिससे आप validation, formatting या encapsulation जैसी चीजों को apply कर सकते हैं।
      </Typography>
    </Box>
  );
};

export default Js_class_set_get;
