import { Box, Typography } from '@mui/material';

const Html_table = () => {
  return (
    <Box sx={{ p: 2, maxWidth: '900px', mx: 'auto' }}>
      <Typography variant="h4" color="primary" gutterBottom>
        HTML Table In Hindi
      </Typography>

      <Typography variant="body1" gutterBottom>
        जब हमें किसी जानकारी को row और column में tabular format में दिखाना होता है, तब हम <code>&lt;table&gt;</code> टैग का उपयोग करते हैं।
      </Typography>

      <Typography variant="h6" gutterBottom>
        📌 HTML Table बनाने के लिए मुख्य टैग:
      </Typography>

      <ul>
        <li><code>&lt;table&gt;</code> — Table की शुरुआत के लिए</li>
        <li><code>&lt;thead&gt;</code> — Table का head section</li>
        <li><code>&lt;th&gt;</code> — Heading cells</li>
        <li><code>&lt;tr&gt;</code> — Table row</li>
        <li><code>&lt;td&gt;</code> — Table data (column)</li>
        <li><code>&lt;tbody&gt;</code> — Table body (main content)</li>
        <li><code>&lt;tfoot&gt;</code> — Table footer</li>
      </ul>

      <Typography variant="h6"  gutterBottom sx={{ mt: 4 }}>
        📋 HTML Table Example
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
{`<table border="1">
  <thead>
    <tr>
      <th>Language Name</th>
      <th>Uses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PHP</td>
      <td>An open-source, object-oriented, cross-platform, server-side scripting language.</td>
    </tr>
    <tr>
      <td>Laravel</td>
      <td>A PHP Framework used to develop web applications.</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>An open-source, object-oriented, cross-platform, client-side scripting language.</td>
    </tr>
    <tr>
      <td>jQuery</td>
      <td>A JavaScript library.</td>
    </tr>
    <tr>
      <td>HTML</td>
      <td>Hyper Text Markup Language used to develop web pages.</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Language Name</th>
      <th>Uses</th>
    </tr>
  </tfoot>
</table>`}
</Box>

      <Typography variant="body2" gutterBottom>
         Output:
      </Typography>

      {/* Rendered Table */}
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Language Name</th>
            <th>Uses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PHP</td>
            <td>An open-source, object-oriented, cross-platform, server-side scripting language.</td>
          </tr>
          <tr>
            <td>Laravel</td>
            <td>A PHP Framework used to develop web applications.</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>An open-source, object-oriented, cross-platform, client-side scripting language.</td>
          </tr>
          <tr>
            <td>jQuery</td>
            <td>A JavaScript library.</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>Hyper Text Markup Language used to develop web pages.</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Language Name</th>
            <th>Uses</th>
          </tr>
        </tfoot>
      </table>

      <Typography variant="body1" sx={{ mt: 3 }}>
        ऊपर दिए गए उदाहरण में हमने <code>border="1"</code> attribute का प्रयोग किया है जिससे rows और columns को अलग-अलग देखना आसान हो जाता है।
      </Typography>
      <Typography variant="body1" sx={{ mt: 3 }}>
        Hum isko style भी कर सकते हैं। जैसे कि table की width, height, background color, text color आदि को CSS के माध्यम से सेट कर सकते हैं।
      </Typography>
    </Box>
  );
};

export default Html_table;
