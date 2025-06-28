import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const navItems = ["Home", "About", "Blog", "Tutorials"];

const tutorialItems = [
  "HTML",
  "CSS",
  "JavaScript",
  // "React",
  // "Bootstrap",
  // "Node.js",
  // "MongoDB",
  // "Git",
  // "Python",
  // "MySQL",
];

const Navbar = ({ darkMode, onToggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileTutorialsOpen, setMobileTutorialsOpen] = useState(false);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        CodeInHindi
      </Typography>
      <List sx={{ width: "100%" }}>
        {navItems.map((item) =>
          item === "Tutorials" ? (
            <Box key={item}>
              <ListItem
                button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileTutorialsOpen((prev) => !prev);
                }}
                sx={{
                  justifyContent: "center",
                  "& .MuiListItemText-primary": {
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  },
                }}
              >
                <ListItemText primary={item} />
                {mobileTutorialsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={mobileTutorialsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tutorialItems.map((tutorial) => (
                    <ListItem
                      key={tutorial}
                      button
                      onClick={() => {
                        handleDrawerToggle();
                        navigate(`/${tutorial.toLowerCase()}`);
                      }}
                      sx={{ pl: 4, justifyContent: "flex-start" }}
                    >
                      <ListItemText primary={tutorial} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          ) : (
            <ListItem
              button
              key={item}
              onClick={() => {
                handleDrawerToggle();
                if (item === "Home") navigate("/");
                else if (item === "About") navigate("/about");
                else if (item === "Blog") navigate("/blog");
              }}
              sx={{
                justifyContent: "center",
                "& .MuiListItemText-primary": {
                  fontWeight: 600,
                  fontSize: "1.1rem",
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItem>
          )
        )}
      </List>
      <IconButton onClick={onToggleTheme} color="inherit" sx={{ mt: 2 }}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  );

  return (
    <Box sx={{ color: darkMode ? "#fff" : "#000", transition: "all 0.4s ease" }}>
      {open && (
        <Box
          onClick={handleMenuClose}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 2,
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        />
      )}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          background: "#transparent",
          color: darkMode ? "#fff" : "#000",
          zIndex: 4,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: { xs: 1, sm: 2, md: 3 },
            px: { xs: 1, sm: 4, md: 10 },

          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
              letterSpacing: 1,
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            CodeInHindi
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            {navItems.map((item) =>
              item === "Tutorials" ? (
                <Box key={item}>
                  <Button
                    sx={{
                      color: darkMode ? "#fff" : "#000",
                      fontWeight: 500,
                      textTransform: "none",
                      fontSize: "1rem",
                      borderBottom: "2px solid transparent",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "#6c63ff",
                        borderBottom: "2px solid #6c63ff",
                      },
                    }}
                    onClick={handleMenuOpen}
                    id="tutorials-button"
                  >
                    {item}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      "aria-labelledby": "tutorials-button",
                    }}
                  >
                    {tutorialItems.map((tutorial) => (
                      <MenuItem
                        key={tutorial}
                        onClick={() => {
                          handleMenuClose();
                          navigate(`/${tutorial.toLowerCase()}`);
                        }}
                        sx={{
                          "&:hover": {
                            color: "#6c63ff",
                          },
                        }}
                      >
                        {tutorial}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={item}
                  sx={{
                    color: darkMode ? "#fff" : "#000",
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1rem",
                    borderBottom: "2px solid transparent",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#6c63ff",
                      borderBottom: "2px solid #6c63ff",
                    },
                  }}
                  onClick={() => {
                    if (item === "Home") navigate("/");
                    else if (item === "About") navigate("/about");
                    else if (item === "Blog") navigate("/blog");
                  }}
                >
                  {item}
                </Button>
              )
            )}
            <IconButton onClick={onToggleTheme} color="inherit" sx={{ ml: 1 }}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
