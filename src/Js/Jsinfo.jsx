import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
  Grid,
  useMediaQuery,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// Topic components
import Js_intro from './topics/Js_intro';
// import Js_syntax from './topics/Js_syntax';
// import more components as needed...

const Jsinfo = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const jsTopics = [
    { label: 'JavaScript Introduction In Hindi', path: 'introduction' },
    { label: 'JavaScript Syntax In Hindi', path: 'syntax' },
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
    // etc...
  };

  const TopicComponent = topicComponents[topic];

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Mobile: Show topics on top */}
      {isMobile && (
        <Grid item xs={12} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            JavaScript Topics
          </Typography>
          <List>
            {jsTopics.map((t, i) => (
              <ListItem key={i} disablePadding sx={{ mb: 1 }}>
                <Button
                  fullWidth
                  variant={topic === t.path ? 'contained' : 'outlined'}
                  onClick={() => navigate(`/javascript/${t.path}`)}
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
        </Grid>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Grid item md={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            JavaScript Topics
          </Typography>
          <List>
            {jsTopics.map((t, i) => (
              <ListItem key={i} disablePadding sx={{ mb: 1 }}>
                <Button
                  fullWidth
                  variant={topic === t.path ? 'contained' : 'outlined'}
                  onClick={() => navigate(`/javascript/${t.path}`)}
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
      </Grid>
    </Grid>
  );
};

export default Jsinfo;
