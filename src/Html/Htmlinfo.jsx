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

// Topic components
import Html_intro from "./topics/Html_intro";
import Html_tags from "./topics/Html_tags";
import Html_meta_tags from "./topics/Html_meta_tags";
import Html_elements from "./topics/Html_elements";
import Html_attributes from "./topics/Html _attributes";
import Html_formatting from "./topics/Html_formatting";
import Html_heading from "./topics/Html_heading";
import Html_anchor from "./topics/Html_anchor";
import Html_image from "./topics/Html_image";
import Html_list from "./topics/Html_list";
import Html_table from "./topics/Html_table";
import Html_form from "./topics/Html_form";
import Html_form_element from "./topics/Html_form_element";
import Html_form_input_types from "./topics/Html_form_Input_type";
import Html_iframe from "./topics/Html_iframe";
import Html_audio from "./topics/Html_audio";
import Html_video from "./topics/Html_video";

const Htmlinfo = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const htmlTopics = [
    { label: "HTML Introduction", path: "introduction" },
    { label: "HTML Tags", path: "tags" },
    { label: "HTML Meta Tags", path: "meta-tags" },
    { label: "HTML Elements", path: "elements" },
    { label: "HTML Attributes", path: "attributes" },
    { label: "HTML Formatting", path: "formatting" },
    { label: "HTML Heading", path: "headings" },
    { label: "HTML Anchor", path: "anchor" },
    { label: "HTML Image", path: "image" },
    { label: "HTML List", path: "list" },
    { label: "HTML Table", path: "table" },
    { label: "HTML Form", path: "form" },
    { label: "HTML Form Elements", path: "form-elements" },
    { label: "HTML Form Input Types", path: "input-types" },
    { label: "HTML iframe", path: "iframe" },
    { label: "HTML Audio", path: "audio" },
    { label: "HTML Video", path: "video" },
  ];

  const topicComponents = {
    introduction: Html_intro,
    tags: Html_tags,
    "meta-tags": Html_meta_tags,
    elements: Html_elements,
    attributes: Html_attributes,
    formatting: Html_formatting,
    headings: Html_heading,
    anchor: Html_anchor,
    image: Html_image,
    list: Html_list,
    table: Html_table,
    form: Html_form,
    "form-elements": Html_form_element,
    "input-types": Html_form_input_types,
    iframe: Html_iframe,
    audio: Html_audio,
    video: Html_video,
  };

  const TopicComponent = topicComponents[topic];

  const renderTopicList = () => (
    <Box sx={{ width: 250, p: 2, maxWidth: 900, }}>
      <Typography variant="h6" gutterBottom>
        📘 HTML Topics
      </Typography>
      <List>
        {htmlTopics.map((t, i) => (
          <ListItem key={i} disablePadding sx={{ mb: 1 }}>
            <Button
              fullWidth
              variant={topic === t.path ? "contained" : "outlined"}
              onClick={() => {
                navigate(`/html/${t.path}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
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

  const currentIndex = htmlTopics.findIndex((t) => t.path === topic);
  const previousPath =
    currentIndex > 0 ? `/html/${htmlTopics[currentIndex - 1].path}` : null;
  const nextPath =
    currentIndex < htmlTopics.length - 1
      ? `/html/${htmlTopics[currentIndex + 1].path}`
      : null;

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Grid container>
      {/* Mobile Header with Menu */}
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
              HTML Tutorial
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
      <Grid item xs={12} md={9} sx={{ p: 3  }}>
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
          sx={{ mt: 4, mb: 4, justifyContent: "center", }}
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

export default Htmlinfo;
