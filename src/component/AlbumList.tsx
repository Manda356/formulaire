import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import mkmCover from "../../public/img/anthony-intraversato-xr43RescWSA-unsplash.jpg"
import BtnDownload from "./btn/BtnDownload";
import {useNavigate} from "react-router-dom";
import {cardContentStyle} from "../Style/MuiStyle";
import { supabase } from "../supabaseClient";
import {AlbumType} from "../Service/Type";
import {useSetRecoilState} from "recoil";
import {songsState} from "../Service/RecoilState";
import ProgressComponent from "./Progress/ProgressComponent";

const cardProjectStyle = {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 2,
    '&:hover': {boxShadow: "0 0 5px #6d00c6"}
}

const AlbumList = () => {
    const navigate = useNavigate()
    const [ onProgress, setOnProgress ] = useState( false )
    const setSongsAlbum = useSetRecoilState( songsState )
    const [albumFolder, setAlbumFolder] : [ Array<AlbumType>, React.Dispatch<React.SetStateAction<any>> ] = useState([])
    // contruction fuction supabse fetch
    const supabaseFetch = async ( bucket: string, folder: string ) =>
        ( await supabase.storage.from( bucket ).list( folder, { limit: 100 } ))
    // mi-fetch an'le hira aho eto
    const fetchData = async () => {
        // progress allumer par defaut
        setOnProgress( true )
        // fetch Album
        try{
            const { data, error } = await supabaseFetch( "Mpikomy", "" )
            // si c'est un erreur affichier l'erreur
            if( error ) {
                console.log(error)
                // progress allumer si c'est erreur
                setOnProgress( false )
            }
            // sinon obtenir les album et le songs
            else {
                const albumAndSongs = await Promise.all(
                    data?.map(async (albumI, i) => {
                        const songs = await supabaseFetch("Mpikomy", albumI.name)
                        // ajouter l'url pour downoald song
                        const allSongs = songs.data?.map(( song ) => ({
                            ...song, folderPath: albumI.name,
                            url: `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/Mpikomy/${albumI.name}/${song.name}`
                        }))

                        return { ...albumI, songs: allSongs }
                    }) || []
                );
                // modifier le state à nouveau par l'album + songs
                setAlbumFolder( albumAndSongs )
                // progress fermer par defaut
                setOnProgress( false )
            }
        }catch (err){
            console.log(err)
            // progress allumer si c'est erreur
            setOnProgress( false )
        }
    };
    // a l'instant
    useEffect(() => { fetchData().then() }, []);
    // navigatio vers "/album"
    const extraction = ( album: any ) => {
        navigate('/album')
        // faire un mise a jour pour le state songsState
        setSongsAlbum( album )
    }

    return (
        <Box>

            {
                onProgress ? (
                    <ProgressComponent/>
                ) : (
                    <Box>
                        <Box
                            sx={{
                                background: `url(${mkmCover})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: { xs:200, md:250 }, boxShadow: "0 1px 2px rgba(0,0,0,0.4)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "end"
                            }}>

                            <Box sx={{ m: {xs: 2,sm: 3, md:3} }}>
                                <Typography variant='body2' sx={{fontSize: { xs: 18, sm: 25, md: 30 }}} color="rgba(255,255,255,0.5)" noWrap>
                                    Studio
                                </Typography>
                                <Typography variant='h1' sx={{fontSize: { xs: 25, sm: 40, md: 50 }}} noWrap>M.P.I.K.O.M.Y</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ p: { xs:"5px", sm:1, md:3 }, mt: { xs:1, sm:0, md:0 } }}>
                            <Grid container spacing={{ xs:1, sm:2, md:4 }}>
                                {
                                    albumFolder?.map(( album, i ) => (
                                        <Grid item key={ i } xs={6} sm={3} md={3}>
                                            <Card sx={ cardProjectStyle }>
                                                <BtnDownload size="medium" data={ album.songs }/>

                                                <CardMedia
                                                    component="img"
                                                    height="100%"
                                                    title="Open"
                                                    onClick={ () => extraction( album.songs ) }
                                                    sx={{ marginTop: "-40px", cursor: "pointer" }}
                                                    image={ album.songs.filter(( song: any ) => song.metadata.mimetype === "image/jpeg" )[0].url }
                                                    alt="album-cover"
                                                />

                                                <CardContent sx={ cardContentStyle }>
                                                    <Typography variant='body2' sx={{fontSize: 13}} noWrap>{ album.name }</Typography>
                                                    <Typography variant='body2' sx={{fontSize: 11}} color="rgba(255,255,255,0.5)" noWrap>
                                                        Album { album.songs.filter( data =>
                                                        data.metadata.mimetype !== "text/plain" &&
                                                        data.metadata.mimetype !== "image/jpeg" ).length
                                                    } titre
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    </Box>
                )
            }

        </Box>
    );
};

export default AlbumList;