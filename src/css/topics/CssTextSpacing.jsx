import { Box, Typography } from "@mui/material";

const CssTextSpacing = () => {
  return (
    <Box sx={{ p: 2 , width: "100%", maxWidth: 900, margin: "auto" }}>
        <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
        CSS Text Spacing 
      </Typography>
      <Typography variant="h6" gutterBottom >
        CSS में Text Spacing का मतलब होता है — Text, Line और Words के बीच की spacing को control करना। इसे manage करने के लिए निम्न properties का उपयोग किया जाता है:
      </Typography>

      <Typography variant="subtitle1" gutterBottom color="secondary" mt={2}>
        1. <b>text-indent</b> — किसी पैराग्राफ की पहली लाइन को कितनी दूर से शुरू करना है।
      </Typography>
      <Box sx={{ background: "#8CCDEB",p:1, whiteSpace: "pre", overflowX: "auto",borderRadius: 2, }}>

      <pre>{`
p {
    text-indent: 40px;
    }
    `}</pre>
    </Box>
      <Typography>Output:</Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, my: 1 , whiteSpace: "pre" , overflowX: "auto" ,bgcolor: '#8CCDEB' ,borderRadius: 2,}}>
        <p style={{ textIndent: "60px" }}>
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </Box>

      <Typography variant="subtitle1" gutterBottom color="secondary" mt={2}>
        2. <b>letter-spacing</b> — अक्षरों के बीच की दूरी सेट करता है।
      </Typography>
      <Box sx={{ background: "#8CCDEB", p: 1, mb: 2, whiteSpace: "pre", overflowX: "auto" ,borderRadius: 2, }}>
      <pre>{`
p {
  letter-spacing: 5px;
}
      `}</pre>
      </Box>
      <Typography>Output:</Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, my: 1 , whiteSpace: "pre" , overflowX: "auto" ,bgcolor: '#8CCDEB' ,borderRadius: 2,}}>
        <p style={{ letterSpacing: "5px" }}>This is simple letter-spacing example.</p>
        <p style={{ letterSpacing: "10px" }}>Another letter-spacing example.</p>
        <p style={{ letterSpacing: "2px" }}>Another one letter-spacing example.</p>
        <p style={{ letterSpacing: "1px" }}>Another one letter-spacing example.</p>
      </Box>

      <Typography variant="subtitle1" gutterBottom color="secondary" mt={2}>
        3. <b>line-height</b> — लाइनों के बीच की ऊँचाई को सेट करता है।
      </Typography>
      <Box sx={{ background: "#8CCDEB", p: 1, mb: 2, whiteSpace: "pre", overflowX: "auto" ,borderRadius: 2, }}>

      <pre>{`
#p1 { line-height: 15px; }
#p2 { line-height: 25px; }
#p3 { line-height: 40px; }
`}</pre>
</Box>
      <Typography>Output:</Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, my: 1,  whiteSpace: "pre" , overflowX: "auto" ,bgcolor: '#8CCDEB',borderRadius: 2 }}>
        
        <p style={{ lineHeight: "15px" }}>
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
        
        <p style={{ lineHeight: "25px" }}>
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
        
        <p style={{ lineHeight: "40px" }}>
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
      </Box>

      <Typography variant="subtitle1" gutterBottom color="secondary" mt={2}>
        4. <b>word-spacing</b> — शब्दों के बीच की दूरी को सेट करता है।
      </Typography>
      <Box sx={{ background: "#8CCDEB", p: 1, mb: 2, whiteSpace: "pre", overflowX: "auto" }}>
      <pre>{`
p {
  word-spacing: 10px;
}
      `}</pre>
      </Box>
      <Typography>Output:</Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, my: 1 , whiteSpace: "pre" , overflowX: "auto" ,bgcolor: '#8CCDEB' ,borderRadius: 2,}}>
        <p style={{ wordSpacing: "1px" }}>This is simple word-spacing example.</p>
        <p style={{ wordSpacing: "10px" }}>Another word-spacing example.</p>
        <p style={{ wordSpacing: "20px" }}>Another one word-spacing example.</p>
        <p style={{ wordSpacing: "40px" }}>Another one word-spacing example.</p>
      </Box>

      <Typography variant="subtitle1" gutterBottom color="secondary" mt={2}>
        5. <b>white-space</b> — text में मौजूद खाली स्थानों को manage करता है।
      </Typography>
      <Box sx={{ background: "#8CCDEB", p: 1, mb: 2, whiteSpace: "pre", overflowX: "auto" ,borderRadius: 2,}}>
      <pre>{`
element {
  white-space: normal | nowrap | pre | pre-line | pre-wrap | initial | inherit;
}
      `}</pre>
      </Box>
      <Typography>Output:</Typography>
      <Box sx={{ border: "1px solid #ccc", p: 2, my: 1 , whiteSpace: "pre" , overflowX: "auto" ,bgcolor: '#8CCDEB' ,borderRadius: 2,}}>
        <h4>white-space: normal</h4>
        <p style={{ whiteSpace: "normal" }}>
          Text       with        multiple         spaces        collapses.
        </p>
        <h4>white-space: nowrap</h4>
        <p style={{ whiteSpace: "nowrap" }}>
          Text       with        multiple         spaces        stays on same line.
        </p>
        <h4>white-space: pre</h4>
        <p style={{ whiteSpace: "pre" }}>
          Text       with        multiple         spaces
          stays preserved.
        </p>
        <h4>white-space: pre-line</h4>
        <p style={{ whiteSpace: "pre-line" }}>
          Text       with        multiple         spaces
          collapse, but line breaks preserved.
        </p>
        <h4>white-space: pre-wrap</h4>
        <p style={{ whiteSpace: "pre-wrap" }}>
          Text       with        multiple         spaces
          preserved and wrapped.
        </p>
      </Box>
    </Box>
  );
};

export default CssTextSpacing;
