import React from 'react';
import {Avatar, Box, Toolbar} from "@mui/material";
import logo from "../../public/img/mkm-logo.png"
import {NavbarStyle, Search} from "../Style/MuiStyle";

const AppBarStyle = {
    backgroundColor: "#1c1c1c",
    borderRadius: 2,
    width: "855px",
    m: { xs: "10px", sm: "20px", md:"20px 25px" },
}

const Navbar = () => {
    return (
        <Box sx={ NavbarStyle }>
            <Box sx={ AppBarStyle }>
                <Toolbar sx={{ p: "0 !important", minHeight: "auto !important" }}>
                    <Avatar sx={{ m:1, bgcolor: 'secondary.main' }}
                            src={ logo }
                            alt="mpikomy-logo"/>

                    <Search>
                        <label htmlFor="search"></label>
                        <input type="text"
                               id="search"
                               placeholder="Search"
                               style={{
                                   color: "#FFF", width: "calc(100% - 20px)",
                                   backgroundColor: "transparent",
                                   padding: "7px 10px", border: "none", outline: "none"}}/>
                    </Search>
                </Toolbar>
            </Box>
        </Box>
    );
};

export default Navbar;