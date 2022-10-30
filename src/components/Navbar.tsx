import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { dark } from "../styles/themes";
import HomeIcon from "@mui/icons-material/HomeRounded";
import AppIcon from "@mui/icons-material/Inventory2Rounded";
import OptiIcon from "@mui/icons-material/CleaningServicesRounded";
import SettingsIcon from "@mui/icons-material/SettingsRounded";
import React from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends React.PureComponent {
    render(): JSX.Element {
        return (
            <React.Fragment>
                <ThemeProvider theme={dark}>
                    <Drawer
                        variant="permanent"
                        anchor="left"
                        className="sb-main"
                    >
                        <List className="sb-list">
                            <ListItem key="WUText" className="sb-logo">
                                <ListItemText primary="Windows Utilities" className="sb-logo-text" />
                            </ListItem>

                            <ListItem key="Home" className="sb-navi">
                                <NavLink to="/"  /* TODO: Use button onClick instead of NavLink. */>
                                    <ListItemButton className="sb-navi-button">
                                        <ListItemIcon className="sb-navi-icon">
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Home" className="sb-navi-text" />
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>

                            <ListItem key="Applications">
                                <NavLink to="/applications">
                                    <ListItemButton className="sb-navi-button">
                                        <ListItemIcon className="sb-navi-icon">
                                            <AppIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Applications" className="sb-navi-text" />
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>

                            <ListItem key="Optimizations">
                                <NavLink to="/optimizations">
                                    <ListItemButton className="sb-navi-button">
                                        <ListItemIcon className="sb-navi-icon">
                                            <OptiIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Optimizations" className="sb-navi-text" />
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>

                            <ListItem key="Settings">
                                <NavLink to="/settings">
                                    <ListItemButton className="sb-navi-button">
                                        <ListItemIcon className="sb-navi-icon">
                                            <SettingsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Settings" className="sb-navi-text" />
                                    </ListItemButton>
                                </NavLink>
                            </ListItem>
                        </List>

                    </Drawer>
                </ThemeProvider>
            </React.Fragment >
        );
    }
}
