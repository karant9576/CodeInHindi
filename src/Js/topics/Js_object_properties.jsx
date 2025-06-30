import { Box, Typography } from "@mui/material";

const Js_object_properties = () => {
  return (
    <Box sx={{ p: 2, maxWidth: 1000, mx: "auto" ,mt:'-1px' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        JavaScript Object Properties
      </Typography>

      <Typography paragraph>
        Properties वो values होती हैं जो किसी Object से जुड़ी होती हैं। JavaScript Object एक unordered properties का collection होता है।
      </Typography>

      <Typography paragraph>
        JavaScript में Object properties को <code>key: value</code> pair में define किया जाता है और एक Object में कई properties हो सकती हैं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        🔍 Accessing Object Properties
      </Typography>

      <Typography paragraph>
        Object properties को दो तरीकों से access किया जा सकता है:
      </Typography>

      <Typography component="ul" sx={{ pl: 3 }}>
        <li><code>object.propertyName</code></li>
        <li><code>object["propertyName"]</code></li>
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        ✅ Example:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`let bike = {
  name: "TVS Apache",
  weight: "150kg",
  color: "White",
  max_speed: "110 to 160 km/h"
};

// Accessing properties
document.write("Bike: " + bike.name);
document.write("Color: " + bike.color);
document.write("Max Speed: " + bike["max_speed"]);`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom mt={2}>
        🔁 Iterating Object Properties
      </Typography>

      <Typography paragraph>
        Object properties को loop करने के लिए <code>for...in</code> loop का उपयोग किया जाता है:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1, overflowX: "auto" }}>
{`let person = {
  firstName: "Karan",
  lastName: "Thakur",
  age: 20,
  eyeColor: "black"
};

for (let key in person) {
  document.write(key + " : " + person[key] + "<br>");
}`}
      </Typography>

      <Typography paragraph color="warning.main" mt={2}>
        ⚠️ <code>for...in</code> loop के अंदर <code>key</code> से केवल values access करें — <code>person.key</code> से नहीं।
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        ➕ Add Property to Object
      </Typography>

      <Typography paragraph>
        JavaScript में Objects mutable होते हैं, जिससे आप किसी भी समय नई property जोड़ सकते हैं:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 }}>
{`person.nationality = "Indian";`}
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom mt={2}>
        ❌ Delete Property from Object
      </Typography>

      <Typography paragraph>
        किसी भी Object की property को <code>delete</code> operator से हटाया जा सकता है:
      </Typography>

      <Typography component="pre" sx={{ bgcolor: "#8CCDEB", p: 2, borderRadius: 1 }}>
{`delete person.age;
// or
delete person["age"];`}
      </Typography>

      <Typography paragraph color="error" mt={2}>
        ⚠️ Note: <code>delete</code> सिर्फ object properties को ही delete कर सकता है। Variables और functions को इससे delete नहीं कर सकते।
        <br />
        साथ ही, किसी भी built-in (predefined) JavaScript Object की properties को delete नहीं किया जा सकता।
      </Typography>

      
    </Box>
  );
};

export default Js_object_properties;
