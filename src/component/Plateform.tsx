
import React, {useState} from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Button, Container, FormControlLabel, TextField, Typography} from "@mui/material";

const Plateform = () => {
    const [ error, setError ] = useState( false )
    const url = "http://..."

    const SubmitData = async (ev: SubmitEvent)=>{
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const newData = Object.fromEntries( formData.entries() )

        const phone = [...newData.phone].length < 10
            ? "Le numero de télephone est incorecte" : true

        try {

            if( phone === true ){
                const response = await fetch( url , {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ ...newData })
                })

                setError(false)
                alert("L'information est envoyer")
                form.reset()
            }else {
                setError(true)
                alert( phone )
            }

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography component="h1" variant="h5">Ma formulaire</Typography>

                <Box component="form"
                     onSubmit={ SubmitData }
                     sx={{ mt: 1 }}>

                    <TextField margin="normal"
                               required
                               fullWidth
                               id="name"
                               label="Nom"
                               type="text"
                               name="name"
                               autoComplete="name"
                               autoFocus/>

                    <TextField margin="normal"
                               required
                               fullWidth
                               name="email"
                               label="Adresse e-mail"
                               type="email"
                               id="email"
                               autoComplete="email"/>

                    <TextField error={error}
                               margin="normal"
                               required
                               fullWidth
                               name="phone"
                               label="Téléphone"
                               type="number"
                               id="phone"
                               autoComplete="email"/>

                    <Typography component="textarea"
                                sx={{p:1, width: "95%", mt:2, borderRadius: 1}}
                                name="message"
                                rows={5}
                                placeholder="Message *"
                                type="text"
                                id="message"/>

                    <Button type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>Envoyer</Button>

                </Box>
            </Box>
        </Container>
    );
};

export default Plateform;