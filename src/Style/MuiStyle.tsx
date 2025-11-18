import {alpha, styled} from "@mui/material/styles";

// column flex center
export const styleFlex = {
    display: "flex",
    alignItems: "center"
}

// column flex space-between
export const FlexSpaceBetween = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
}

// Navbar style
export const NavbarStyle = {
    position: "fixed",
    zIndex: 2,
    width: "100%",
    top: 0, left: 0,
    display: "flex", justifyContent: "center"
}

// Recherche style
export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.1)",
    '&:hover': {
        backgroundColor: alpha("rgb(109,0,198)", 0.3),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    border: "1px solid rgba(0,0,0,0.1)",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: '90%',
    },
}));

// le style de container
export const containerStyle = {
    backgroundColor: "rgba(255,255,255,0.03)",
    width: "calc(100% - 10px)",
    minHeight: "calc(100vh - 10px)",
    m: { xs:"5px", md:"5px auto" },
    borderRadius: 2, padding: "0 !important", overflow: "hidden"
}

//Style des playlist audio
export const mediaStyle = {
    backgroundColor: "rgb(46,46,46)",
    borderRadius: 2, p: 1,
    maxWidth: "calc(855px - 20px)",
    m: { xs: "0 10px", sm: "O 10px", md:"auto" },
    '&:hover': { backgroundColor: "#350061" },
    transitionDuration: "200ms"
}

//Style des boutons
export const btnStyle = {
    backgroundColor: "rgba(28,28,28,0.8)",
    borderRadius: 2, color: "#FFF",
    '&:hover': { backgroundColor: "#6d00c6" }
}

// Style de progress linear
export const progressLinear = {
    backgroundColor: "rgba(28,28,28,0.8)",
    height: 3, width: "100%",
    borderRadius: 2, overflow: "hidden",
    cursor: "pointer",
    position: "relative", bottom: '-6px'
}

// Style de Card content
export const cardContentStyle = {
    color: "#FFF",
    padding: "8px 12px !important"
}

// le temps 0:00 de song style
export const SongTimeStyle = {
    mr: 1, bottom: "-9px",
    position: "relative",
    color: "rgba(255,255,255,0.5)",
    fontSize: 10.5
}

// L'image et le contenu de l'album styliser
export const AlbumStyle = {
    backgroundColor: "transparent",
    zIndex: 0, ...styleFlex,
    display: { sm: "flex", xs: "block", md: "flex" },
    pt:0, pb: 2, pr: 2, pl: 2,
    mt: 8, mb: 1
}