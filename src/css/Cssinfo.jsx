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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// ✅ Topic components
import WhatIsCss from "./topics/WhatIsCss";
import CssSyntax from "./topics/CssSyntax";
import AddCss from "./topics/AddCss";
import CssSelectors from "./topics/CssSelectors.jsx";
import CssColors from "./topics/CssColors.jsx";
import CssBackground from "./topics/CssBackground.jsx";
import CssBorderStyle from "./topics/CssBorderStyle.jsx";
import CssBorderWidth from "./topics/CssBorderWidth.jsx";
import CssBorderColor from "./topics/CssBorderColor.jsx";
import CssMargin from "./topics/CssMargin.jsx";
import CssPadding from "./topics/CssPadding.jsx";
import CssHeight from "./topics/CssHeight.jsx";
import CssWidth from "./topics/CssWidth.jsx";
import CssAlignment from "./topics/CssAlignment.jsx";
import CssTextDecoration from "./topics/CssTextDecoration.jsx";
import CssTextTransform from "./topics/CssTextTransform.jsx";
import CssTextSpacing from "./topics/CssTextSpacing.jsx";
import CssTextShadow from "./topics/CssTextShadow.jsx";
import CssFontFamily from "./topics/CssFontFamily.jsx";
import CssFontStyle from "./topics/CssFontStyle.jsx";
import CssFontSize from "./topics/CssFontSize.jsx";

const CssInfo = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const cssTopics = [
    { label: "What is CSS ?", path: "what-is-css" },
    { label: "CSS Syntax", path: "css-syntax" },
    { label: "How to use CSS ? ", path: "add-css" },
    { label: "CSS selectors क्या है ?", path: "css-selectors" },
    { label: "CSS Colors", path: "css-colors" },
    { label: "CSS Background Image", path: "css-background" },
    { label: "CSS Border Style", path: "css-border-style" },
    { label: "CSS Border Width", path: "css-border-width" },
    { label: "CSS Border Color", path: "css-border-color" },
    { label: "CSS margin", path: "css-margin" },
    { label: "CSS padding", path: "css-padding" },
    { label: "CSS height", path: "css-height" },
    { label: "CSS width", path: "css-width" },
    { label: "CSS alignment", path: "css-alignment" },
    { label: "CSS text decoration", path: "css-text-decoration" },
    { label: "CSS text-transform", path: "css-text-transform" },
    { label: "CSS Text Spacing", path: "css-text-spacing" },
    { label: "CSS text-shadow", path: "css-text-shadow" },
    { label: "CSS font-family", path: "css-font-family" },
    { label: "CSS font-style", path: "css-font-style" },
    { label: "CSS font-size", path: "css-font-size" },
  ];

  const topicComponents = {
    "what-is-css": WhatIsCss,
    "css-syntax": CssSyntax,
    "add-css": AddCss,
    "css-selectors": CssSelectors,
    "css-colors": CssColors,
    "css-background": CssBackground,
    "css-border-style": CssBorderStyle,
    "css-border-width": CssBorderWidth,
    "css-border-color": CssBorderColor,
    "css-margin": CssMargin,
    "css-padding": CssPadding,
    "css-height": CssHeight,
    "css-width": CssWidth,
    "css-alignment": CssAlignment,
    "css-text-decoration": CssTextDecoration,
    "css-text-transform": CssTextTransform,
    "css-text-spacing": CssTextSpacing,
    "css-text-shadow": CssTextShadow,
    "css-font-family": CssFontFamily,
    "css-font-style": CssFontStyle,
    "css-font-size": CssFontSize,
  };

  const TopicComponent = topicComponents[topic];

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderTopicList = () => (
    <Box sx={{ width: 250, p: 2 , maxWidth: 900,}}>
      <Typography variant="h6" gutterBottom>
        🎨 CSS Topics
      </Typography>
      <List>
        {cssTopics.map((t, i) => (
          <ListItem key={i} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              variant={topic === t.path ? "contained" : "outlined"}
              onClick={() => {
                handleNavigation(`/css/${t.path}`);
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

  const currentIndex = cssTopics.findIndex((t) => t.path === topic);
  const previousPath =
    currentIndex > 0 ? `/css/${cssTopics[currentIndex - 1].path}` : null;
  const nextPath =
    currentIndex < cssTopics.length - 1
      ? `/css/${cssTopics[currentIndex + 1].path}`
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
            <Typography variant="h6" sx={{ ml: 1, mt: 1 , display:'block',}}>
              CSS Tutorial
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

    // ✅ Hide scrollbar in WebKit browsers (Chrome, Safari, Edge)
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    // ✅ Hide scrollbar in Firefox
    scrollbarWidth: 'none', // Firefox-specific

    // Optional: to prevent layout shift
    msOverflowStyle: 'none', // Internet Explorer 10+

    
    
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
            onClick={() => handleNavigation(previousPath)}
            disabled={!previousPath}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNavigation(nextPath)}
            disabled={!nextPath}
            
          >
            Next
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CssInfo;
