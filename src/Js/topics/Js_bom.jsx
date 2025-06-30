import { Box, Typography, List, ListItem } from "@mui/material";

const Js_bom = () => {
  return (
    <Box sx={{  p: 2, maxWidth: 1000, mx: "auto", mt: "-1px"  }}>
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        JavaScript BOM (Browser Object Model)
      </Typography>

      <Typography paragraph>
        BOM (Browser Object Model) का उपयोग ब्राउज़र से इंटरैक्ट करने के लिए किया जाता है। JavaScript में browser का default object
        <strong> window </strong> होता है, जिससे हम इसकी सभी properties और methods को सीधे access कर सकते हैं।
      </Typography>

      <Typography paragraph>
        BOM का root object <strong>window</strong> होता है, जो current browser window या tab को represent करता है।
        इसके कई child objects होते हैं जो अलग-अलग functionalities प्रदान करते हैं:
      </Typography>

      <List sx={{ listStyleType: "decimal", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <strong>window Object:</strong> ब्राउज़र विंडो को represent करता है। इसे JavaScript में ऑटोमैटिकली create किया जाता है।
        </ListItem>

        <ListItem sx={{ display: "list-item" }}>
          <strong>document Object:</strong> <code>window.document</code> का उपयोग पूरे वेब पेज को access और manipulate करने के लिए किया जाता है। इसे DOM (Document Object Model) भी कहा जाता है।
        </ListItem>

        <ListItem sx={{ display: "list-item" }}>
          <strong>history Object:</strong> ब्राउज़र की history को access और navigate करने के लिए इस्तेमाल किया जाता है।
        </ListItem>

        <ListItem sx={{ display: "list-item" }}>
          <strong>screen Object:</strong> यूज़र की screen की details (जैसे height, width) को access करने के लिए।
        </ListItem>

        <ListItem sx={{ display: "list-item" }}>
          <strong>navigator Object:</strong> ब्राउज़र से जुड़ी जानकारी (जैसे browser name, version, userAgent आदि) को प्राप्त करने के लिए।
        </ListItem>

        <ListItem sx={{ display: "list-item" }}>
          <strong>location Object:</strong> वर्तमान URL को detect या manipulate करने के लिए उपयोग किया जाता है।
          उदाहरण: <code>window.location.href</code>
        </ListItem>
      </List>

      <Typography paragraph sx={{ mt: 2 }}>
        ❗ <strong>नोट:</strong> <code>window</code> object ब्राउज़र का हिस्सा होता है, न कि core JavaScript का।
        जबकि <code>String</code>, <code>Array</code>, <code>Math</code> आदि JavaScript के built-in objects हैं।
      </Typography>
    </Box>
  );
};

export default Js_bom;
