import React, {useState} from 'react';
import {Box} from "@mui/material";
import audio1 from "../../../public/audio/05. Am-pitiavana.mp3";
import Audio from "../AudioCard/Audio";
import AlbumImgAndContent from "./AlbumImgAndContent";
import AudioList from './AudioList';
import {songsState} from "../../Service/RecoilState";
import {useRecoilValue} from "recoil";
import {songType} from "../../Service/Type";

type isPlayingType = {
    play: boolean,
    data: songType | { url: string, folderPath: string, name: string }
}

const Album = () => {
    const allSongs: Array<songType> = useRecoilValue( songsState )
    const albumImage = allSongs?.filter(( data ) => data.metadata.mimetype === "image/jpeg" )[ 0 ].url
    const [ isPlaying, setIsPlaying ] = useState<isPlayingType>({
        play: false,
        data: { url: "", folderPath: "", name: "" }
    })

    return (
        <Box sx={{ p: { xs:"5px", sm:1, md:3 }, mt: { xs:1, sm:0, md:0 } }}>
            <AlbumImgAndContent allSongs={ allSongs }
                                albumImage={ albumImage }
                                setIsPlaying={setIsPlaying}/>

            <AudioList allSongs={ allSongs }
                       albumImage={ albumImage }
                       setIsPlaying={ setIsPlaying }/>

            <Audio src={ isPlaying.data.url }
                   albumImage={ albumImage }
                   albumTitle={ isPlaying.data.folderPath }
                   isPlay={ isPlaying.play }
                   title={ isPlaying.data.name }/>
        </Box>
    );
};

export default Album;