import React from "react";

export type AlbumType = {
    created_at: string | null;
    id: string | number | null;
    last_accessed_at: string | null;
    metadata: Record<string, any> | null;
    name: string;
    updated_at: string | null;
    songs: Array<songType>;
};

export type songType = {
    created_at: string;
    folderPath: string;
    id: string | number;
    last_accessed_at: string;
    metadata: metadata;
    name: string;
    updated_at: string;
    url: string
}

export type allSongsType = {
    allSongs: Array<songType>,
    albumImage: string,
    setIsPlaying: React.Dispatch<React.SetStateAction<any>>
}

type metadata = {
    cacheControl: string
    contentLength: string
    eTag: string
    httpStatusCode: number
    lastModified: string
    mimetype: string
    size: number
}
