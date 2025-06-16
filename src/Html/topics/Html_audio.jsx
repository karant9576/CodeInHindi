import { Box, Typography } from "@mui/material";

const Html_audio = () => {
  return (
    <Box sx={{ p: 2,  maxWidth: '900px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        HTML Audio in Hindi
      </Typography>

      <Typography paragraph>
        जब हम Web Page तैयार करते हैं तो ज़रूरत के अनुसार हमें audio files की भी आवश्यकता होती है। HTML में audio या music को उपयोग में लेने के लिए <strong>&lt;audio&gt;</strong> tag का उपयोग किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom>
        HTML Supported Audio Formats:
      </Typography>
      <ul>
        <li>MP3</li>
        <li>WAV</li>
        <li>OGG</li>
      </ul>

      <Typography variant="h6" gutterBottom>
        HTML Audio Example:
      </Typography>

      <Typography paragraph>
        Audio files का path देने के लिए <strong>&lt;source&gt;</strong> tag का उपयोग किया जाता है।
      </Typography>

      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          fontFamily: 'monospace',
          p: 2,
          borderRadius: 2,
          whiteSpace: 'pre',
          overflowX: 'auto',
          mb: 2,
        }}
      >
        {`<audio controls>  
  <source src="path of audio" type="audio/mp3">  
  browser does not support audio tag.  
</audio>`}
      </Box>

      <Typography paragraph>
        ऊपर दिए गए उदाहरण में जैसे ही page लोड होता है, audio को control करने के लिए play/pause बटन दिखता है।
      </Typography>

      <Typography variant="h6" gutterBottom>
        HTML Audio Attributes:
      </Typography>

      <ul>
        <li><strong>controls:</strong> audio को play/pause करने के लिए बटन देता है।</li>
        <li><strong>autoplay:</strong> जैसे ही page लोड होता है, audio अपने आप play हो जाती है।</li>
        <li><strong>loop:</strong> audio खत्म होते ही फिर से play हो जाती है।</li>
        <li><strong>muted:</strong> audio को mute करने के लिए उपयोग होता है।</li>
      </ul>

      <Typography variant="h6" gutterBottom>
        Audio Attribute Example:
      </Typography>

      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          fontFamily: 'monospace',
          p: 2,
          borderRadius: 2,
          whiteSpace: 'pre',
          overflowX: 'auto',
          mb: 2,
        }}
      >
        {`<audio controls autoplay loop>  
  <source src="path of audio" type="audio/mp3">  
  browser does not support audio tag.  
</audio>`}
      </Box>

      <Typography paragraph>
        अब क्योंकि इस उदाहरण में <code>autoplay</code> और <code>loop</code> attribute का उपयोग हुआ है, तो audio अपने आप play हो जाएगी और अंत में फिर से शुरू हो जाएगी।
      </Typography>

      <Typography paragraph>
        <strong>I Hope</strong>, अब आप HTML में audio को कैसे उपयोग करते हैं यह अच्छे से समझ गए होंगे।
      </Typography>
    </Box>
  );
};

export default Html_audio;
