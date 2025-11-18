import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {progressLinear} from "../../Style/MuiStyle";

const AudioProgress = ({ audioRef, setIsPlaying }: any) => {
    const [ progress, setProgress ] = useState(0)

    const changeTimeClick = (e: any) => {
        const width = e.currentTarget.clientWidth
        const clickX = e.nativeEvent.offsetX
        const duration = audioRef.current.duration
        audioRef.current.currentTime = (clickX / width) * duration
    }

    useEffect(() => {
        const audio = audioRef.current
        // si audio n'est pas null
        if( audio ) // changer le temps de progress
            audio.addEventListener("timeupdate", () => {
                const percent = ( audio.currentTime / audio.duration ) * 100
                // Si le temps de chargement est à la fin
                if( audio.currentTime === audio.duration ){
                    setIsPlaying( false )
                    setProgress(0)
                }else {// changer la valeur du progress
                    setProgress( percent )
                }
            })
    }, [ audioRef ]);

    return (
        <Box sx={ progressLinear } onClick={changeTimeClick}>
            <Box sx={{
                bgcolor: "rgba(109,0,198)",
                height: "100%",
                width: `${ progress }%`
            }}></Box>
        </Box>
    );
};

export default AudioProgress;