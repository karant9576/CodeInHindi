import { Box, Typography } from '@mui/material';

const Html_image = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        HTML Image 
      </Typography>

      <Typography variant="body1" gutterBottom>
        HTML में <code>&lt;img&gt;</code> टैग का उपयोग वेब पेज में image दिखाने के लिए किया जाता है। यह एक self-closing tag होता है, मतलब इसका closing tag नहीं होता।
      </Typography>

      <Typography variant="h6" gutterBottom>उदाहरण:</Typography>
      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          p: 2,
          borderRadius: 2,
          fontFamily: 'monospace',
          mb: 2,
          whiteSpace: 'pre-wrap',
        }}
      >
        {`<img src="image_location">`}
      </Box>

      <Typography variant="body1" gutterBottom>
        जब आप image का path देते हैं, तो ध्यान रखें कि अगर वह image किसी folder में है तो path में वह folder भी include हो।
      </Typography>

      <Typography variant="body1" gutterBottom>
        उदाहरण:
      </Typography>
      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          p: 2,
          borderRadius: 2,
          fontFamily: 'monospace',
          mb: 2,
        }}
      >
        <Typography>{`<img src="folder1/folder2/image">`}</Typography>
      </Box>

      <Typography variant="h5" gutterBottom>
        📌 HTML Image Attributes
      </Typography>

      <ul style={{ paddingLeft: '1.2rem' }}>
        <li><strong>src</strong></li>
        <li><strong>alt</strong></li>
        <li><strong>width & height</strong></li>
        <li><strong>style</strong></li>
      </ul>

      <Typography variant="h6" gutterBottom>HTML src Attribute:</Typography>
      <Typography variant="body1" gutterBottom>
        <code>src</code> attribute में उस image का path दिया जाता है जिसे show करना होता है।
      </Typography>

      <Typography variant="h6" gutterBottom>HTML alt Attribute:</Typography>
      <Typography variant="body1" gutterBottom>
        <code>alt</code> attribute का उपयोग image का नाम या description दिखाने के लिए किया जाता है। यदि image load नहीं होती, तो alt text show होगा।
      </Typography>

      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          p: 2,
          borderRadius: 2,
          fontFamily: 'monospace',
          mb: 2,
          whiteSpace: 'pre',
          overflowX: 'auto',
        }}
      >
        {`<img src="image_tiger" alt="This Text Will Appear">`}
      </Box>

      <Typography variant="h6" gutterBottom>HTML width & height Attribute:</Typography>
      <Typography variant="body1" gutterBottom>
        <code>width</code> और <code>height</code> attributes से आप image का आकार fix कर सकते हैं।
      </Typography>

      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          p: 2,
          borderRadius: 2,
          fontFamily: 'monospace',
          mb: 2,
          whiteSpace: 'pre',
          overflowX: 'auto',
        }}
      >
        {`<img src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8" \nalt="HTML Image" width="300" height="300">`}
      </Box>

      <Typography variant="body1" gutterBottom>
        Output:
      </Typography>
      <img
        src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8"
        alt="HTML Image"
        width="300"
        height="300"
        loading='lazy'
        style={{ marginBottom: '1rem' }}
      />

      <Typography variant="h6" gutterBottom>HTML style Attribute:</Typography>
      <Typography variant="body1" gutterBottom>
        आप <code>style</code> attribute के द्वारा भी width, height, और border को define कर सकते हैं।
      </Typography>

      <Box
  sx={{
    backgroundColor: '#000',
    color: '#fff',
    p: 2,
    borderRadius: 2,
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    overflowX: 'auto',
  }}
>
{`<img src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8"
 alt="HTML Image" style="width:300px;height:300px;border:red">`}
</Box>


      <Typography variant="body1" gutterBottom mt={2}>
        Output: 
        </Typography>

       <img
        src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8"
        alt="HTML Image"
        width="300"
        height="300"
        loading='lazy'
        style={{ marginBottom: '1rem' }}
      />
    </Box>
  );
};

export default Html_image;
