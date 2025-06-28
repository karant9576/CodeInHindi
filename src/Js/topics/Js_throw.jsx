import { Box, Typography } from "@mui/material";

const Js_throw = () => {
  return (
    <Box className="doc" sx={{ p: 2, maxWidth: 1000, mx: "auto", mt: -1 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript throw Statement
      </Typography>

      <Typography paragraph>
        पिछले topics में आपने program में आयी <strong>Exceptions</strong> को handle करना सीखा। कई बार ऐसा होता है कि किसी particular condition पर हमें खुद से एक custom error generate करनी पड़ती है।
      </Typography>

      <Typography paragraph>
        JavaScript हमें <strong>throw</strong> statement के ज़रिए custom exceptions generate करने की सुविधा देता है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        📘 Syntax:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`throw expression;
// या
throw new Error("message");`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        <strong>expression</strong> वह value होती है जिसे हम error के रूप में throw करना चाहते हैं। हम चाहें तो JavaScript के predefined constructors जैसे <code>Error</code>, <code>SyntaxError</code>, या <code>ReferenceError</code> का उपयोग भी कर सकते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        ✅ Example: User Defined Exception
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre' }}>
        <Typography component="pre" sx={{ m: 0 }}>
{`<script type="text/javascript">
  try {
    let num = prompt("Enter Any Number : ");
    if (num == 0)
      throw new Error("Invalid number");
    else
      document.write("You entered: " + num);
  } catch (ErrorObj) {
    document.write("Error Name : " + ErrorObj.name + "<br>");
    document.write("Error Message : " + ErrorObj.message);
  }
</script>`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        उपर दिए गए उदाहरण में <code>prompt()</code> का उपयोग user से input लेने के लिए किया गया है। अगर user <code>0</code> डालता है तो एक custom error generate होती है।
      </Typography>

      <Typography variant="h6" gutterBottom color="secondary">
        🔧 Error Constructors
      </Typography>
      <Typography paragraph>
        JavaScript में कई predefined constructors होते हैं जिन्हें हम custom exception generate करने के लिए इस्तेमाल कर सकते हैं:
      </Typography>
      <Box sx={{ bgcolor: '#8CCDEB', p: 2, borderRadius: 1 ,overflowX:'auto',whiteSpace:'pre'}}>
        <Typography component="pre" sx={{ m: 0 }}>
{`throw new Error("message");
throw new SyntaxError("message");
throw new ReferenceError("message");`}
        </Typography>
      </Box>

      <Typography paragraph mt={2}>
        इन constructors से बनी error का <code>name</code> वही होता है जो constructor का नाम होता है, और <code>message</code> वह होता है जो हम पास करते हैं।
      </Typography>
    </Box>
  );
};

export default Js_throw;
