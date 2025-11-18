import React from 'react';
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {IconButton} from "@mui/material";
import {btnStyle} from "../../Style/MuiStyle";

const BtnPlayAndPause = ({ audioRef, isPlaying, setIsPlaying }: any) => {

    const controls = () => {
        !isPlaying ? audioRef.current.play() : audioRef.current.pause()
        setIsPlaying(!isPlaying)
    }

    return (
        <IconButton aria-label={ !isPlaying ? "Play" : "Pause" }
                    onClick={ controls }
                    title={ !isPlaying ? "Play" : "Pause" }
                    sx={{...btnStyle, mr:1}}>
            { !isPlaying ? <PlayArrowIcon fontSize="small"/> : <PauseIcon fontSize="small"/> }
        </IconButton>
    );
};

export default BtnPlayAndPause;