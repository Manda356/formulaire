import React from 'react';
import {Box, CardContent, Typography} from "@mui/material";
import BtnDownload from "../btn/BtnDownload";
import {FlexSpaceBetween} from "../../Style/MuiStyle";
import {allSongsType, songType} from "../../Service/Type";

const listStyle = {
    p: 1,
    cursor: "pointer",
    ...FlexSpaceBetween,
    '&:hover': { boxShadow: "0 0 5px #6d00c6" },
    borderRadius: 2, mb: 1, transitionDuration: "200ms"
}

const AudioList = ({ allSongs, setIsPlaying }: allSongsType) => {
    const dataUpdate = allSongs?.filter(( data ) =>
        data.metadata.mimetype !== "text/plain" && data.metadata.mimetype !== "image/jpeg" )
    // changer le state isPlaying et faite lire le song
    const handleClickPlay = ( song: songType ) => {
        setIsPlaying({
            play: true,
            data: song
        })
    }

    return (
        <Box sx={{ mb: { xs: "60px", sm: "60px", md: "45px" } }}>
            {
                dataUpdate?.map(( song, i ) => (
                    <Box sx={ listStyle } title="Lire" key={ i } onClick={ () => handleClickPlay( song ) }>
                        <CardContent sx={{ p:'0 !important' }}>
                            <Typography variant='body2' sx={{ fontSize: 12.5, fontWeight: "bold", mb:0.3}} noWrap>
                                { song.name }
                            </Typography>
                            <Typography variant='body2' sx={{fontSize: 10.5}} color="rgba(255,255,255,0.5)" noWrap>
                                { song.folderPath }
                            </Typography>
                        </CardContent>

                        <BtnDownload size="small" data={ song.url }/>
                    </Box>
                ))
            }
        </Box>
    );
};

export default AudioList;