import { Box, Typography } from "@mui/material";

const Html_video = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        HTML Video in Hindi
      </Typography>

      <Typography paragraph>
        HTML में video को web page पर दिखाने के लिए <strong>&lt;video&gt;</strong> tag का use किया जाता है।
      </Typography>

      <Typography variant="h6" gutterBottom>
        HTML Supported Video Formats:
      </Typography>
      <ul>
        <li>MP4</li>
        <li>WebM</li>
        <li>Ogg</li>
      </ul>

      <Typography paragraph>
        इनमें से <strong>MP4</strong> format को YouTube द्वारा recommended माना गया है।
      </Typography>

      <Typography variant="h6" gutterBottom>
        HTML Video Example:
      </Typography>

      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "monospace",
          p: 2,
          borderRadius: 2,
          whiteSpace: "pre",
          overflowX: "auto",
          mb: 2,
        }}
      >
        {`<!DOCTYPE html>
<html>   
  <head>     
    <meta charset="utf-8">     
    <title>HTML Video</title>
  </head>
  <body>
    <video width="320" height="240" controls> 
      <source src="filename.mp4" type="video/mp4">
    </video>
  </body>
</html>`}
      </Box>

      <Typography paragraph>
        तो कुछ इस तरह से web pages पर video files को use किया जाता है। हालांकि, <strong>&lt;video&gt;</strong> tag के कई useful attributes भी होते हैं ताकि video को बेहतर control किया जा सके।
      </Typography>

      <Typography variant="h6" gutterBottom>
        HTML Video Attributes:
      </Typography>

      <ul>
        <li>
          <strong>controls:</strong> video को play/pause करने के लिए control buttons देता है।
        </li>
        <li>
          <strong>autoplay:</strong> video file को automatically play करता है जैसे ही वह load होती है।
        </li>
        <li>
          <strong>source:</strong> video file का path define करता है। आप multiple formats भी दे सकते हैं और browser supported format को चुन लेगा।
        </li>
        <li>
          <strong>muted:</strong> video को mute करने के लिए उपयोग होता है।
        </li>
      </ul>
    </Box>
  );
};

export default Html_video;
