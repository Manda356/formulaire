import React from 'react';
import {btnStyle} from "../../Style/MuiStyle";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {IconButton} from "@mui/material";

const BtnMute = () => {
    return (
        <IconButton aria-label="Mute"
                    title="Mute"
                    sx= { btnStyle }>
            <FileDownloadIcon fontSize="small" />
        </IconButton>
    );
};

export default BtnMute;