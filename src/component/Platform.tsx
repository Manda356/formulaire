
import React from 'react';
import {Box, Container} from "@mui/material";
import Navbar from "./Navbar";
import {containerStyle} from "../Style/MuiStyle";
import {RouterProvider} from "react-router-dom";
import router from "./Routes/Routes";

const Platform = () => {

    return (
        <Container component="main" maxWidth="md" sx={ containerStyle }>
            <Box>
                <Navbar/>

                <RouterProvider router={router}/>
            </Box>
        </Container>
    );
};

export default Platform;