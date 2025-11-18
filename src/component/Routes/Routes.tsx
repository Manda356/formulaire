import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Album from "../Playlist/Album";
import AlbumList from "../AlbumList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AlbumList/>
    },{
        path: "/album",
        element: <Album />
    }
])

export default router;