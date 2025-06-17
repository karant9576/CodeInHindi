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
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

// ✅ Topic Components
import Js_intro from './topics/Js_intro';
// import Js_syntax from './topics/Js_syntax';
// import Js_variables from './topics/Js_variables';
// import Js_functions from './topics/Js_functions';
// Add all remaining components...

const Jsinfo = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const jsTopics = [
    { label: 'JavaScript Introduction', path: 'introduction' },
    { label: 'JavaScript Syntax', path: 'syntax' },
    { label: 'Variables and Data Types', path: 'variables' },
    { label: 'Functions and Scope', path: 'functions' },
    { label: 'Objects and Arrays', path: 'objects-arrays' },
    { label: 'DOM Manipulation', path: 'dom' },
    { label: 'Event Handling', path: 'events' },
    { label: 'Promises and Async/Await', path: 'async' },
    { label: 'ES6+ Features', path: 'es6' },
    { label: 'Modules and npm', path: 'modules' },
  ];

  const topicComponents = {
    introduction: Js_intro,
    // syntax: Js_syntax,
    // variables: Js_variables,
    // functions: Js_functions,
    // Add the rest...
  };

  const TopicComponent = topicComponents[topic];

  const renderTopicList = () => (
    <Box sx={{ width: 250, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        📘 JavaScript Topics
      </Typography>
      <List>
        {jsTopics.map((t, i) => (
          <ListItem key={i} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              variant={topic === t.path ? 'contained' : 'outlined'}
              onClick={() => {
                navigate(`/javascript/${t.path}`);
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

  const currentIndex = jsTopics.findIndex((t) => t.path === topic);
  const previousPath = currentIndex > 0 ? `/javascript/${jsTopics[currentIndex - 1].path}` : null;
  const nextPath = currentIndex < jsTopics.length - 1 ? `/javascript/${jsTopics[currentIndex + 1].path}` : null;

  return (
    <Grid container>
      {/* Mobile Header */}
      {isMobile && (
        <>
          <Grid item xs={12} sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1, mt: 1 }}>
              JavaScript Tutorial
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
            कृपया कोई JavaScript टॉपिक चुनें, और यहाँ उसका कंटेंट दिखाई देगा।
          </Typography>
        )}

        {/* Navigation Buttons */}
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

export default Jsinfo;
