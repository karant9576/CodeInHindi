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
import Js_intro from './topics/Js_intro.jsx';
import Js_syntax from './topics/Js_syntax.jsx';
import Js_variables from './topics/Js_variables.jsx';
import Js_comments from './topics/Js_comments.jsx';
import Js_operators from './topics/Js_operators.jsx';
import Js_data_types from './topics/Js_data_types.jsx';
import Js_type_conversion from './topics/Js_type_conversion.jsx';

// // Control Statements
// import Js_if_else from './topics/Js_if_else.jsx';
// import Js_while_loop from './topics/Js_while_loop.jsx';
// import Js_do_while_loop from './topics/Js_do_while_loop.jsx';
// import Js_for_loop from './topics/Js_for_loop.jsx';
// import Js_for_in_loop from './topics/Js_for_in_loop.jsx';
// import Js_for_of_loop from './topics/Js_for_of_loop.jsx';
// import Js_labeled_statement from './topics/Js_labeled_statement.jsx';
// import Js_continue_statement from './topics/Js_continue_statement.jsx';
// import Js_break_statement from './topics/Js_break_statement.jsx';
// import Js_switch_loop from './topics/Js_switch_loop.jsx';
// import Js_exception_handling from './topics/Js_exception_handling.jsx';
// import Js_try_catch from './topics/Js_try_catch.jsx';
// import Js_try_catch_finally from './topics/Js_try_catch_finally.jsx';
// import Js_throw from './topics/Js_throw.jsx';

// // Arrays
// import Js_array from './topics/Js_array.jsx';
// import Js_multidimensional_array from './topics/Js_multidimensional_array.jsx';
// import Js_array_functions from './topics/Js_array_functions.jsx';

// // Strings
// import Js_string from './topics/Js_string.jsx';
// import Js_string_functions from './topics/Js_string_functions.jsx';

// // Functions
// import Js_function from './topics/Js_function.jsx';
// import Js_parameterized_function from './topics/Js_parameterized_function.jsx';
// import Js_var_length_arg_function from './topics/Js_var_length_arg_function.jsx';
// import Js_anonymous_function from './topics/Js_anonymous_function.jsx';
// import Js_arrow_function from './topics/Js_arrow_function.jsx';
// import Js_callback_function from './topics/Js_callback_function.jsx';
// import Js_recursive_function from './topics/Js_recursive_function.jsx';

// // BOM
// import Js_bom from './topics/Js_bom.jsx';
// import Js_window_object from './topics/Js_window_object.jsx';
// import Js_history_object from './topics/Js_history_object.jsx';
// import Js_screen_object from './topics/Js_screen_object.jsx';
// import Js_navigator_object from './topics/Js_navigator_object.jsx';
// import Js_location_object from './topics/Js_location_object.jsx';

// // DOM
// import Js_dom from './topics/Js_dom.jsx';
// import Js_dom_elements from './topics/Js_dom_elements.jsx';
// import Js_innerhtml_innertext from './topics/Js_innerhtml_innertext.jsx';
// import Js_events from './topics/Js_events.jsx';
// import Js_events_handling from './topics/Js_events_handling.jsx';
// import Js_dom_event_listener from './topics/Js_dom_event_listener.jsx';
// import Js_simple_calculator from './topics/Js_simple_calculator.jsx';

// // Date
// import Js_date from './topics/Js_date.jsx';
// import Js_date_format from './topics/Js_date_format.jsx';

// // Objects
// import Js_object from './topics/Js_object.jsx';
// import Js_object_properties from './topics/Js_object_properties.jsx';
// import Js_object_methods from './topics/Js_object_methods.jsx';
// import Js_object_accessors from './topics/Js_object_accessors.jsx';
// import Js_object_constructor from './topics/Js_object_constructor.jsx';
// import Js_object_prototype from './topics/Js_object_prototype.jsx';

// // Classes / OOP
// import Js_classes from './topics/Js_classes.jsx';
// import Js_class_set_get from './topics/Js_class_set_get.jsx';
// import Js_class_prototype_guide from './topics/Js_class_prototype_guide.jsx';
// import Js_class_static from './topics/Js_class_static.jsx';
// import Js_inheritance from './topics/Js_inheritance.jsx';


const Jsinfo = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

 const jsTopics = [
  { label: 'Js Introduction', path: 'js-introduction' },
  { label: 'Js Syntax ', path: 'js-syntax' },
  { label: 'Js Variables ', path: 'js-variables' },
  { label: 'Js Comments ', path: 'js-comments' },
  { label: 'Js Operators ', path: 'js-operators' },
  { label: 'Js Data Types ', path: 'js-data-types' },
  { label: 'Js Type Conversion ', path: 'js-type-conversion' },

  // Control Statements
  { label: 'Js If Else ', path: 'js-if-else' },
  { label: 'Js while Loop ', path: 'js-while-loop' },
  { label: 'Js do while Loop ', path: 'js-do-while-loop' },
  { label: 'Js for Loop ', path: 'js-for-loop' },
  { label: 'Js for in Loop ', path: 'js-for-in-loop' },
  { label: 'Js for of Loop ', path: 'js-for-of-loop' },
  { label: 'Js Labeled Statement ', path: 'js-labeled-statement' },
  { label: 'Js continue Statement ', path: 'js-continue-statement' },
  { label: 'Js break Statement ', path: 'js-break-statement' },
  { label: 'Js switch Loop ', path: 'js-switch-loop' },
  { label: 'Js Exception Handling ', path: 'js-exception-handling' },
  { label: 'Js try...catch ', path: 'js-try-catch' },
  { label: 'Js try..catch..finally ', path: 'js-try-catch-finally' },
  { label: 'Js throw ', path: 'js-throw' },

  // Arrays
  { label: 'Js Array ', path: 'js-array' },
  { label: 'Js Multidimensional Array ', path: 'js-multidimensional-array' },
  { label: 'Js Array Functions ', path: 'js-array-functions' },

  // Strings
  { label: 'Js String ', path: 'js-string' },
  { label: 'Js String Functions ', path: 'js-string-functions' },

  // Functions
  { label: 'Js Function ', path: 'js-function' },
  { label: 'Js Parameterized Function ', path: 'js-parameterized-function' },
  { label: 'JS Variable Length Argument Function ', path: 'js-var-length-arg-function' },
  { label: 'Js Anonymous Function ', path: 'js-anonymous-function' },
  { label: 'Js Arrow Function ', path: 'js-arrow-function' },
  { label: 'Js Callback Function ', path: 'js-callback-function' },
  { label: 'Js Recursive Function ', path: 'js-recursive-function' },

  // BOM
  { label: 'Js Browser Object Model ', path: 'js-bom' },
  { label: 'Js window Object ', path: 'js-window-object' },
  { label: 'Js history Object ', path: 'js-history-object' },
  { label: 'Js screen Object ', path: 'js-screen-object' },
  { label: 'Js navigator Object ', path: 'js-navigator-object' },
  { label: 'Js location Object ', path: 'js-location-object' },

  // DOM
  { label: 'Js Document Object Model ', path: 'js-dom' },
  { label: 'Js DOM Elements ', path: 'js-dom-elements' },
  { label: 'Js innerHTML vs innerText ', path: 'js-innerhtml-innertext' },
  { label: 'Js Events ', path: 'js-events' },
  { label: 'Js Events Handling ', path: 'js-events-handling' },
  { label: 'Js DOM EventListener ', path: 'js-dom-event-listener' },
  { label: 'Js Making Simple Calculator', path: 'js-simple-calculator' },

  // Date
  { label: 'Js Date ', path: 'js-date' },
  { label: 'Js Date Format ', path: 'js-date-format' },

  // Objects
  { label: 'Js Object ', path: 'js-object' },
  { label: 'Js Object Properties ', path: 'js-object-properties' },
  { label: 'Js Object Methods ', path: 'js-object-methods' },
  { label: 'Js Object Accessors ', path: 'js-object-accessors' },
  { label: 'Js Object Constructor ', path: 'js-object-constructor' },
  { label: 'Js Object Prototype ', path: 'js-object-prototype' },

  // Classes
  { label: 'Js Classes  | Js OOP Concept ', path: 'js-classes' },
  { label: 'Essential Tips for Using Js Class Setter and Getter Method ', path: 'js-class-set-get' },
  { label: 'A Comprehensive Guide to Js Class Prototypes ', path: 'js-class-prototype-guide' },
  { label: 'Js Static Properties and Methods  : Js Class', path: 'js-class-static' },
  { label: 'Js Inheritance  | JS Inheritance Explained ', path: 'js-inheritance' },
];



  const topicComponents = {
   'js-introduction': Js_intro,
   'js-syntax': Js_syntax,
   'js-variables' : Js_variables,
   'js-comments': Js_comments,
   'js-operators': Js_operators ,
   'js-data-types': Js_data_types,
   'js-type-conversion': Js_type_conversion,

  // // Control Statements
  // 'js-if-else': Js_if_else,
  // 'js-while-loop': Js_while_loop,
  // 'js-do-while-loop': Js_do_while_loop,
  // 'js-for-loop': Js_for_loop,
  // 'js-for-in-loop': Js_for_in_loop,
  // 'js-for-of-loop': Js_for_of_loop,
  // 'js-labeled-statement': Js_labeled_statement,
  // 'js-continue-statement': Js_continue_statement,
  // 'js-break-statement': Js_break_statement,
  // 'js-switch-loop': Js_switch_loop,
  // 'js-exception-handling': Js_exception_handling,
  // 'js-try-catch': Js_try_catch,
  // 'js-try-catch-finally': Js_try_catch_finally,
  // 'js-throw': Js_throw,

  // // Arrays
  // 'js-array': Js_array,
  // 'js-multidimensional-array': Js_multidimensional_array,
  // 'js-array-functions': Js_array_functions,

  // // Strings
  // 'js-string': Js_string,
  // 'js-string-functions': Js_string_functions,

  // // Functions
  // 'js-function': Js_function,
  // 'js-parameterized-function': Js_parameterized_function,
  // 'js-var-length-arg-function': Js_var_length_arg_function,
  // 'js-anonymous-function': Js_anonymous_function,
  // 'js-arrow-function': Js_arrow_function,
  // 'js-callback-function': Js_callback_function,
  // 'js-recursive-function': Js_recursive_function,

  // // BOM
  // 'js-bom': Js_bom,
  // 'js-window-object': Js_window_object,
  // 'js-history-object': Js_history_object,
  // 'js-screen-object': Js_screen_object,
  // 'js-navigator-object': Js_navigator_object,
  // 'js-location-object': Js_location_object,

  // // DOM
  // 'js-dom': Js_dom,
  // 'js-dom-elements': Js_dom_elements,
  // 'js-innerhtml-innertext': Js_innerhtml_innertext,
  // 'js-events': Js_events,
  // 'js-events-handling': Js_events_handling,
  // 'js-dom-event-listener': Js_dom_event_listener,
  // 'js-simple-calculator': Js_simple_calculator,

  // // Date
  // 'js-date': Js_date,
  // 'js-date-format': Js_date_format,

  // // Objects
  // 'js-object': Js_object,
  // 'js-object-properties': Js_object_properties,
  // 'js-object-methods': Js_object_methods,
  // 'js-object-accessors': Js_object_accessors,
  // 'js-object-constructor': Js_object_constructor,
  // 'js-object-prototype': Js_object_prototype,

  // // Classes / OOP
  // 'js-classes': Js_classes,
  // 'js-class-set-get': Js_class_set_get,
  // 'js-class-prototype-guide': Js_class_prototype_guide,
  // 'js-class-static': Js_class_static,
  // 'js-inheritance': Js_inheritance,
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
