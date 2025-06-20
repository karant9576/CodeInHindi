import {
  Box,
  Grid,
  Divider,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const tagData = [
  { tag: "<!DOCTYPE html>", use: "HTML5 डॉक्युमेंट को दर्शाने के लिए" },
  { tag: "<html>", use: "पूरे HTML डॉक्युमेंट की शुरुआत और अंत" },
  { tag: "<head>", use: "मेटा डेटा, टाइटल, स्टाइल, स्क्रिप्ट आदि के लिए" },
  { tag: "<title>", use: "ब्राउज़र टैब में दिखने वाला टाइटल सेट करता है" },
  { tag: "<meta>", use: "पेज जानकारी (जैसे charset, description) के लिए" },
  { tag: "<link>", use: "बाहरी CSS फाइल को लिंक करने के लिए" },
  { tag: "<style>", use: "इंटरनल CSS जोड़ने के लिए" },
  { tag: "<script>", use: "JavaScript जोड़ने के लिए" },
  { tag: "<body>", use: "मुख्य कंटेंट दिखाने के लिए" },
  { tag: "<h1> - <h6>", use: "हेडिंग के लिए (h1 सबसे बड़ी)" },
  { tag: "<p>", use: "पैराग्राफ के लिए" },
  { tag: "<br>", use: "लाइन ब्रेक डालने के लिए" },
  { tag: "<hr>", use: "हॉरिजॉन्टल लाइन डालने के लिए" },
  { tag: "<b>", use: "बोल्ड टेक्स्ट" },
  { tag: "<strong>", use: "महत्वपूर्ण बोल्ड टेक्स्ट" },
  { tag: "<i>", use: "इटैलिक टेक्स्ट" },
  { tag: "<em>", use: "जोर देने वाला इटैलिक टेक्स्ट" },
  { tag: "<u>", use: "अंडरलाइन टेक्स्ट" },
  { tag: "<mark>", use: "हाइलाइट करने के लिए" },
  { tag: "<small>", use: "छोटा टेक्स्ट" },
  { tag: "<del>", use: "डिलीट किया गया टेक्स्ट" },
  { tag: "<ins>", use: "नया जोड़ा गया टेक्स्ट" },
  { tag: '<a href="">', use: "हाइपरलिंक के लिए" },
  { tag: '<img src="">', use: "इमेज दिखाने के लिए" },
  { tag: "<map> / <area>", use: "इमेज मैप के लिए" },
  { tag: "<ul>", use: "अनऑर्डर्ड लिस्ट" },
  { tag: "<ol>", use: "ऑर्डर्ड लिस्ट" },
  { tag: "<li>", use: "लिस्ट आइटम" },
  { tag: "<dl>", use: "डेस्क्रिप्शन लिस्ट" },
  { tag: "<dt>", use: "लिस्ट टर्म" },
  { tag: "<dd>", use: "लिस्ट डिस्क्रिप्शन" },
  { tag: "<table>", use: "टेबल बनाने के लिए" },
  { tag: "<tr>", use: "टेबल रो" },
  { tag: "<td>", use: "टेबल सेल (डेटा)" },
  { tag: "<th>", use: "टेबल हेडिंग सेल" },
  { tag: "<thead>", use: "टेबल हेड" },
  { tag: "<tbody>", use: "टेबल बॉडी" },
  { tag: "<tfoot>", use: "टेबल फुटर" },
  { tag: "<caption>", use: "टेबल कैप्शन" },
  { tag: "<colgroup>", use: "कॉलम ग्रुप करने के लिए" },
  { tag: "<form>", use: "यूज़र इनपुट फॉर्म" },
  { tag: "<input>", use: "इनपुट बॉक्स, रेडियो, चेकबॉक्स आदि" },
  { tag: "<textarea>", use: "मल्टीलाइन इनपुट बॉक्स" },
  { tag: "<label>", use: "इनपुट के लिए लेबल" },
  { tag: "<select>", use: "ड्रॉपडाउन मेनू" },
  { tag: "<option>", use: "ड्रॉपडाउन के विकल्प" },
  { tag: "<button>", use: "बटन" },
  { tag: "<fieldset>", use: "फॉर्म ग्रुपिंग" },
  { tag: "<legend>", use: "फील्डसेट का टाइटल" },
  { tag: "<div>", use: "लेआउट के लिए ब्लॉक" },
  { tag: "<span>", use: "इनलाइन ग्रुपिंग" },
  { tag: "<header>", use: "हेडर सेक्शन" },
  { tag: "<nav>", use: "नेविगेशन सेक्शन" },
  { tag: "<main>", use: "मुख्य कंटेंट" },
  { tag: "<section>", use: "सेक्शन ब्लॉक" },
  { tag: "<article>", use: "आर्टिकल ब्लॉक" },
  { tag: "<aside>", use: "साइड कंटेंट" },
  { tag: "<footer>", use: "फुटर सेक्शन" },
  { tag: "<audio>", use: "ऑडियो प्ले" },
  { tag: "<video>", use: "वीडियो प्ले" },
  { tag: "<source>", use: "मीडिया स्रोत" },
  { tag: "<iframe>", use: "दूसरी वेबसाइट एम्बेड करना" },
  { tag: "<abbr>", use: "संक्षेप शब्द (abbreviation)" },
  { tag: "<code>", use: "कोड दिखाने के लिए" },
  { tag: "<pre>", use: "प्रीफॉर्मेटेड टेक्स्ट" },
  { tag: "<blockquote>", use: "कोटेशन" },
  { tag: "<cite>", use: "सोर्स/लेखक" },
  { tag: "<kbd>", use: "कीबोर्ड इनपुट" },
  { tag: "<sup>", use: "ऊपर टेक्स्ट (x²)" },
  { tag: "<sub>", use: "नीचे टेक्स्ट (H₂O)" },
];

const Html_tags = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center",  p: 2 , width: '100%', maxWidth: 'auto', margin: '0 auto'}}>
      <Grid >
        
          <Typography variant="h4" gutterBottom color="primary">
            HTML टैग्स
          </Typography>

          

          <Typography variant="body1" gutterBottom>
            • HTML कई <strong>Elements (तत्वों)</strong> की श्रृंखला से बना होता है।
            <br />• HTML एलिमेंट्स ब्राउज़र को बताते हैं कि कंटेंट को कैसे प्रदर्शित करना है।
            <br />• एक HTML एलिमेंट में होता है:
          </Typography>

          <List sx={{ pl: 2 }}>
            <ListItem>🔹 एक <strong>Start Tag</strong></ListItem>
            <ListItem>🔹 कुछ <strong>Content</strong></ListItem>
            <ListItem>🔹 एक <strong>End Tag</strong></ListItem>
          </List>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>उदाहरण:</Typography>
          <Box
            sx={{
              background: "#000",
              color: "#fff",
              p: 2,
              borderRadius: 2,
              fontFamily: "monospace",
              fontSize: "16px",
              whiteSpace: "pre-wrap",
              mb: 2,
            }}
          >
            {"<p>यह एक पैराग्राफ है</p>"}
          </Box>

          <Typography variant="body1" gutterBottom>
            इस उदाहरण में:
            <br /> • <code>&lt;p&gt;</code> है <strong>Start Tag</strong>,
            <br /> • "यह एक पैराग्राफ है" है <strong>Content</strong>,
            <br /> • <code>&lt;/p&gt;</code> है <strong>End Tag</strong>।
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom color="primary">
            एलिमेंट्स की संरचना (Syntax of Elements)
          </Typography>

          <Typography variant="body1" gutterBottom>
            हर HTML एलिमेंट में आमतौर पर एक ओपनिंग टैग (
            <code>&lt;tag&gt;</code>), कुछ कंटेंट और एक क्लोज़िंग टैग (
            <code>&lt;/tag&gt;</code>) होता है।
            <br />
            <br />
            कुछ टैग्स <strong>Self-Closing</strong> होते हैं, जैसे:
          </Typography>

          <Box
            sx={{
              background: "#000",
              color: "#fff",
              p: 2,
              borderRadius: 2,
              fontFamily: "monospace",
              fontSize: "16px",
              whiteSpace: "pre-wrap",
              mb: 2,
            }}
          >
            {"<br />\n<img />\n<hr />"}
          </Box>

          <Typography variant="body1" gutterBottom>
            HTML एलिमेंट्स खुद पेज पर दिखाई नहीं देते — बल्कि वे यह बताते हैं कि उनके अंदर जो कंटेंट है, उसे कैसे दिखाया जाए।
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" gutterBottom color="primary">
            HTML टैग्स की सूची (Table Form)
          </Typography>

          <Box sx={{ overflowX: "auto" }}>
            <Table sx={{ minWidth: 650, border: "1px solid #ccc" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px", background: "#725CAD", color: "#fff" }}>
                    टैग
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px", background: "#725CAD", color: "#fff" }}>
                    उपयोग
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tagData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <code>{item.tag}</code>
                    </TableCell>
                    <TableCell>{item.use}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        
      </Grid>
    </Box>
  );
};

export default Html_tags;
