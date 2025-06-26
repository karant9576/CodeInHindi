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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

// ✅ Import your React topic components
// import React_intro from "./topics/React_intro.jsx";
// import React_jsx from "./topics/React_jsx.jsx";
// import React_components from "./topics/React_components.jsx";
// import React_props from "./topics/React_props.jsx";
// import React_state from "./topics/React_state.jsx";

const Reactinfo = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const reactTopics = [
    { label: "React Introduction", path: "react-intro" },
    { label: "JSX in React", path: "react-jsx" },
    { label: "React Components", path: "react-components" },
    { label: "Props in React", path: "react-props" },
    { label: "State in React", path: "react-state" },
    { label: "Lifecycle Methods", path: "react-lifecycle" },
    { label: "Handling Events", path: "react-events" },
    { label: "Conditional Rendering", path: "react-conditional-rendering" },
    { label: "Lists and Keys", path: "react-lists-keys" },
    { label: "Forms in React", path: "react-forms" },
    { label: "Lifting State Up", path: "react-lifting-state" },
    { label: "Composition vs Inheritance", path: "react-composition-inheritance" },
    { label: "React Hooks Introduction", path: "react-hooks-intro" },
    { label: "useState Hook", path: "react-usestate" },
    { label: "useEffect Hook", path: "react-useeffect" },
    { label: "Custom Hooks", path: "react-custom-hooks" },
    { label: "Context API", path: "react-context-api" },
    { label: "useRef Hook", path: "react-useref" },
    { label: "useMemo & useCallback", path: "react-usememo-usecallback" },
    { label: "React Router", path: "react-router" },
    { label: "Code Splitting", path: "react-code-splitting" },
    { label: "Error Boundaries", path: "react-error-boundaries" },
    { label: "React Portals", path: "react-portals" },
    { label: "Forwarding Refs", path: "react-forwarding-refs" },
    { label: "Higher Order Components", path: "react-hoc" },
    { label: "Render Props", path: "react-render-props" },
    { label: "React Performance Optimization", path: "react-performance" },
    { label: "Testing in React", path: "react-testing" },
    { label: "React with TypeScript", path: "react-typescript" },
    { label: "React and Redux", path: "react-redux" },
  ];

  const topicComponents = {
    // "react-intro": React_intro,
    // "react-jsx": React_jsx,
    // "react-components": React_components,
    // "react-props": React_props,
    // "react-state": React_state,
  };

  const TopicComponent = topicComponents[topic];

  const renderTopicList = () => (
    <Box sx={{ width: 250, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        ⚛️ React Topics
      </Typography>
      <List>
        {reactTopics.map((t, i) => (
          <ListItem key={i} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              variant={topic === t.path ? "contained" : "outlined"}
              onClick={() => {
                navigate(`/react/${t.path}`);
                setDrawerOpen(false);
              }}
              sx={{
                textTransform: "none",
                justifyContent: "flex-start",
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

  const currentIndex = reactTopics.findIndex((t) => t.path === topic);
  const previousPath =
    currentIndex > 0 ? `/react/${reactTopics[currentIndex - 1].path}` : null;
  const nextPath =
    currentIndex < reactTopics.length - 1
      ? `/react/${reactTopics[currentIndex + 1].path}`
      : null;

  return (
    <Grid container>
      {/* Mobile Header */}
      {isMobile && (
        <>
          <Grid
            item
            xs={12}
            sx={{ p: 1, display: "flex", alignItems: "center" }}
          >
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1, mt: 1 }}>
              React Tutorial
            </Typography>
          </Grid>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            {renderTopicList()}
          </Drawer>
        </>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Grid
          item
          md={3}
          sx={{
            height: "100vh",
            position: "sticky",
            top: 0,
            overflowY: "auto",
            p: 2,
            pr: 1,
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {renderTopicList()}
        </Grid>
      )}

      {/* Content */}
      <Grid item xs={12} md={9} sx={{ p: 3 }}>
        {TopicComponent ? (
          <TopicComponent />
        ) : (
          <Typography variant="body1" ml={4}>
            कृपया कोई टॉपिक चुनें !
          </Typography>
        )}

        {/* Navigation Buttons */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 4, mb: 4, justifyContent: "center" }}
        >
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

export default Reactinfo;
