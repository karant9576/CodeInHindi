import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
  Grid,
  IconButton,
  Drawer,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Topic components
import Html_intro from './topics/Html_intro';
import Html_tags from './topics/Html_tags';
// import more components as needed...

const Htmlinfo = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const htmlTopics = [
    { label: 'HTML Introduction', path: 'introduction' },
    { label: 'HTML Tags', path: 'tags' },
    { label: 'HTML Meta Tags', path: 'meta-tags' },
    { label: 'HTML Elements', path: 'elements' },
    { label: 'HTML Attributes', path: 'attributes' },
    { label: 'HTML Formatting', path: 'formatting' },
    { label: 'HTML Heading', path: 'headings' },
    { label: 'HTML Anchor', path: 'anchor' },
    { label: 'HTML Image', path: 'image' },
    { label: 'HTML List', path: 'list' },
    { label: 'HTML Table', path: 'table' },
    { label: 'HTML Form', path: 'form' },
    { label: 'HTML Form Elements', path: 'form-elements' },
    { label: 'HTML Form Input Types', path: 'input-types' },
    { label: 'HTML iframe', path: 'iframe' },
    { label: 'HTML Audio', path: 'audio' },
    { label: 'HTML Video', path: 'video' },
  ];

  const topicComponents = {
    introduction: Html_intro,
    tags: Html_tags,
    // Add remaining components here...
  };

  const TopicComponent = topicComponents[topic];

  const renderTopicList = () => (
    <Box sx={{ width: 250, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        📘 HTML Topics
      </Typography>
      <List>
        {htmlTopics.map((t, i) => (
          <ListItem key={i} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              variant={topic === t.path ? 'contained' : 'outlined'}
              onClick={() => {
                navigate(`/html/${t.path}`);
                setDrawerOpen(false);
              }}
              sx={{
                textTransform: 'none',
                justifyContent: 'flex-start',
                fontWeight: 500,
              }}
            >
              {t.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // 🆕 Dynamic Navigation Logic
  const currentIndex = htmlTopics.findIndex((t) => t.path === topic);
  const previousPath = currentIndex > 0 ? `/html/${htmlTopics[currentIndex - 1].path}` : null;
  const nextPath = currentIndex < htmlTopics.length - 1 ? `/html/${htmlTopics[currentIndex + 1].path}` : null;

  return (
    <Grid container>
      {/* Mobile Header with Menu */}
      {isMobile && (
        <>
          <Grid item xs={12} sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1, mt: 1 }}>
              HTML Tutorial
            </Typography>
          </Grid>
          <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            {renderTopicList()}
          </Drawer>
        </>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Grid item md={3} sx={{ p: 2 }}>
          {renderTopicList()}
        </Grid>
      )}

      {/* Content */}
      <Grid item xs={12} md={9} sx={{ p: 3 }}>
        {TopicComponent ? (
          <TopicComponent />
        ) : (
          <Typography variant="body1">
            कृपया कोई टॉपिक चुनें, और यहाँ उसका कंटेंट दिखाई देगा।
          </Typography>
        )}

        {/* 🔁 Navigation Buttons */}
        <Stack direction="row" spacing={2} sx={{ mt: 4, mb: 4, justifyContent: 'center' }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => previousPath && navigate(previousPath)}
            disabled={!previousPath}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => nextPath && navigate(nextPath)}
            disabled={!nextPath}
          >
            Next
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Htmlinfo;
