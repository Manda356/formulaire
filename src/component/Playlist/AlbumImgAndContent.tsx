import React from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {AlbumStyle, styleFlex} from "../../Style/MuiStyle";
import BtnDownload from "../btn/BtnDownload";
import BtnPlayAndPause from "../btn/BtnPlayAndPause";
import { allSongsType } from "../../Service/Type";

const AlbumImgAndContent = ({ allSongs, albumImage }: allSongsType) => {
    const dataUpdate = allSongs?.filter(( data ) =>
        data.metadata.mimetype !== "text/plain" && data.metadata.mimetype !== "image/jpeg" )

    return (
        <Card sx={ AlbumStyle }>
            <CardMedia
                component="img"
                sx={{ width: 150, borderRadius: 2, m: { xs: "auto", sm: "10px 0 0", md: 0 } }}
                image={ albumImage }
                alt="Mkm Cover"
            />

            <Box sx={{ ml: { xs: 0, sm: 2, md: 2 }, mt: { xs: 2 } }}>
                <CardContent sx={{ color: "#FFF", p:0 }}>
                    <Typography variant='h1' sx={{fontSize: 25}} noWrap>{ dataUpdate[ 0 ].folderPath }</Typography>
                    <Typography variant='body1' sx={{fontSize: 13, mt: 1}} noWrap>
                        Album { dataUpdate.length } titre
                    </Typography>
                </CardContent>

                <Box sx={{ mt: 2, ...styleFlex }}>
                    <BtnPlayAndPause />
                    <BtnDownload size="small" data={ allSongs } full/>
                </Box>
            </Box>
        </Card>
    );
};

export default AlbumImgAndContent;