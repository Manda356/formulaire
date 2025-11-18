import React, { useState } from "react";
import { IconButton, CircularProgress, Box } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { btnStyle } from "../../Style/MuiStyle";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const BtnDownload = ({ size, data, full }: any) => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    /* ----------------------------------------
     * DOWNLOAD ZIP (ALBUM)
     * ---------------------------------------- */
    const downloadAlbumZip = async () => {
        if (!data || data.length === 0) {
            alert("Aucun fichier à télécharger 😅");
            return;
        }

        setLoading(true);
        setProgress(0);

        const zip = new JSZip();
        const totalFiles = data.length;
        let downloadedFiles = 0;

        await Promise.all(
            data.map(async (song: any) => {
                try {
                    const res = await fetch(song.url);
                    const blob = await res.blob();
                    zip.file(song.name, blob);
                } catch (err) {
                    console.error("Erreur téléchargement fichier :", err);
                }

                downloadedFiles++;
                setProgress(Math.round((downloadedFiles / totalFiles) * 100));
            })
        );

        const content = await zip.generateAsync(
            { type: "blob" },
            (meta) => setProgress(Math.round(meta.percent)) // % génération ZIP
        );

        const folderName = data.folderPath || data[0]?.folderPath || "album";
        saveAs(content, `${folderName}.zip`);

        setLoading(false);
    };

    /* ----------------------------------------
     * DOWNLOAD AUDIO (MP3)
     * ---------------------------------------- */
    const downloadAudio = async () => {
        try {
            setLoading(true);
            setProgress(0);

            const response = await fetch(data);
            const reader = response.body!.getReader();
            const total = Number(response.headers.get("Content-Length"));

            let loaded = 0;
            const chunks: Uint8Array[] = [];

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                chunks.push(value);
                loaded += value.length;

                if (total) {
                    setProgress(Math.round((loaded / total) * 100));
                }
            }

            const blob = new Blob(chunks);
            const fileName = data.split("/").pop();

            saveAs(blob, fileName);
        } catch (err) {
            console.error("Erreur téléchargement audio :", err);
        }

        setLoading(false);
    };

    const handleClick =
        size === "medium" || full ? downloadAlbumZip : downloadAudio;

    return (
        <Box sx={{ position: "relative", width: "fit-content" }}>
            <IconButton
                aria-label="download"
                title="Download"
                disabled={loading}
                onClick={handleClick}
                sx={
                    size === "medium"
                        ? { position: "relative", top: 10, left: 10, ...btnStyle }
                        : btnStyle
                }
            >
                {loading ? <CircularProgress size={24} sx={{ color: "#6d00c6" }}/> : <FileDownloadIcon fontSize={size} />}
            </IconButton>

            {loading && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "#FFF",
                        textShadow: "0 0 5px #000",
                        fontSize: 10,
                        marginTop: size === "medium" ? "-16px" : "-26px",
                        marginLeft: size === "medium" ? "9px" : 0
                    }}
                >
                    {progress}%
                </Box>
            )}
        </Box>
    );
};

export default BtnDownload;
