import React from 'react';
import {Box, CircularProgress, IconButton} from "@mui/material";

const ProgressComponent = () => {
    return (
        <Box
            sx={{
                position: "absolute",
                width: "100%",
                bgcolor: "rgb(46,46,46,0.8)",
                left: 0, top: 0,
                zIndex: 2,
                height: "100vh",
                display: "flex",
                alignItem: "center",
                justifyContent: "center"
            }}>
            <IconButton aria-label="progress">
                <CircularProgress size={50} sx={{ color: "#6d00c6" }}/>
            </IconButton>
        </Box>
    );
};

export default ProgressComponent;