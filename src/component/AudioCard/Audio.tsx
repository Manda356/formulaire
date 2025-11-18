import React, {useEffect, useRef, useState} from 'react';
import {Box, CardContent, CardMedia, CircularProgress, IconButton, Typography} from "@mui/material";
import {btnStyle, FlexSpaceBetween, mediaStyle, styleFlex} from "../../Style/MuiStyle";
import BtnPlayAndPause from "../btn/BtnPlayAndPause";
import AudioProgress from "./AudioProgress";
import BtnDownload from "../btn/BtnDownload";
import SongTime from "./SongTime";

const Audio = ( props: any ) => {
    const audioRef: any = useRef(null)
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ onProgress, setOnProgress ] = useState(false)
    // quand je change le song
    useEffect(() => {

        if( props.isPlay ){
            audioRef.current.addEventListener("canplay", () => {
                // play initial
                audioRef.current.play()
                // initialiser le play
                setIsPlaying( props.isPlay )
                // faite apparaitre le progress
                setOnProgress( false )
            })

            setOnProgress( true )
        }

    }, [ props.isPlay, props.src ]);

    return (
        <Box sx={{ position: "fixed", left: 0, bottom: 10, width: "100%" }}>
            <Box sx={ mediaStyle }>
                { onProgress ? <Progress/> : "" }

                <Box sx={ FlexSpaceBetween }>
                    <Box sx={ styleFlex }>
                        <CardMedia
                            component="img"
                            height="35px"
                            sx={{...btnStyle, width: "35px"}}
                            title="Pochette"
                            image={ props.albumImage }
                            alt="Mkm Cover"
                        />

                        <CardContent sx={{p:'0 !important', ml:1}}>
                            <Typography variant='body2' sx={{ fontSize: 12.5, fontWeight: "bold", mb:0.3}} noWrap>{ props.title }</Typography>
                            <Typography variant='body2' sx={{fontSize: 10.5}} color="rgba(255,255,255,0.5)" noWrap>
                                { props.albumTitle }
                            </Typography>
                        </CardContent>
                    </Box>

                    <Box sx={ styleFlex }>
                        <SongTime audioRef={audioRef}/>

                        <BtnPlayAndPause audioRef={audioRef}
                                         isPlaying={isPlaying}
                                         setIsPlaying={setIsPlaying}/>
                        <BtnDownload size="small" data={ props.src }/>
                    </Box>
                </Box>

                <AudioProgress audioRef={audioRef} setIsPlaying={setIsPlaying}/>
                <audio ref={audioRef} src={props.src}></audio>
            </Box>
        </Box>
    );
};

const Progress = () => (
    <Box
        sx={{
            position: "relative",
            width: "100%",
            bgcolor: "rgb(46,46,46,0.8)",
            left: 0, margin: "-8px -10px -47px -10px",
            zIndex: 2,
            padding: "10px",
            borderRadius: "8px"
        }}>
        <IconButton aria-label="progress" sx={{ left: "-2px", top: "2px" }}>
            <CircularProgress size={24} sx={{ color: "#6d00c6" }}/>
        </IconButton>
    </Box>
)

export default Audio;