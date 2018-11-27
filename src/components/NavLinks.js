import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Person from '@material-ui/icons/Person';
import Timeline from '@material-ui/icons/Timeline';
import Ballot from '@material-ui/icons/Ballot';
import Brush from '@material-ui/icons/Brush';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import ContactMail from '@material-ui/icons/ContactMail';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import NavLink from "react-router-dom/NavLink";


const NavLinks = () => {
        return (
            <div>
                <Divider/>
                <List component="nav">
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="About"/>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/experience/" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <Timeline/>
                            </ListItemIcon>
                            <ListItemText primary="Experience"/>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/projects/" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <Ballot/>
                            </ListItemIcon>
                            <ListItemText primary="Projects"/>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/skills/" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <Brush/>
                            </ListItemIcon>
                            <ListItemText primary="Skills"/>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/education/" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <LocalLibrary/>
                            </ListItemIcon>
                            <ListItemText primary="Education"/>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/contact/" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <ContactMail/>
                            </ListItemIcon>
                            <ListItemText primary="Contact"/>
                        </ListItem>
                    </NavLink>
                    <a href="https://drive.google.com/open?id=0B_Wzh_m-Qs6YdDFCTHlKOEExcjg"
                       target="_blank"
                       style={{ textDecoration: 'none' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <InsertDriveFile/>
                        </ListItemIcon>
                        <ListItemText primary="Resume"/>
                    </ListItem>
                    </a>
                </List>
            </div>
        );
}

export default NavLinks