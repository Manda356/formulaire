import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import {SongTimeStyle} from "../../Style/MuiStyle";

const SongTime = ({ audioRef }: any) => {
    const [ currentTime, setCurrentTime ] = useState(0)

    useEffect(() => {
        const audio = audioRef.current
        // si audio n'est pas null
        if( audio ) // changer le temps de progress
            audio.addEventListener("timeupdate", () => {
                setCurrentTime( audio.currentTime )
                if( audio.currentTime === audio.duration )
                    setCurrentTime(0 )
            })
    }, [ audioRef ]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes} : ${seconds < 10 ? "0" + seconds : seconds}`
    }

    return (
        <Typography variant="body2" sx={ SongTimeStyle }>
            { formatTime(currentTime) }
        </Typography>
    );
};

export default SongTime;