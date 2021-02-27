import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Route from "react-router-dom/Route";
import NavLinks from "./NavLinks";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

const drawerWidth = 180;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  }
});

class Navigation extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <div>
              <Typography variant="title" color="inherit" noWrap>
                Jason Stocker | Software Engineer
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <NavLinks />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <NavLinks />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route exact path="/" component={About} />
          <Route path="/experience/" component={Experience} />
          <Route path="/projects/" component={Projects} />
          <Route path="/skills/" component={Skills} />
          <Route path="/education/" component={Education} />
        </main>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Navigation);