import React from 'react';
import {Box, Container, TextField, Typography} from "@mui/material";

const AuthPage = () => {
    return (
        <Box sx={{background: 'rgb(240,235,248)', height: {sm:'100vh', xs:'120vh'}}}>
            <Container maxWidth={'lg'}>
                <Box sx={{textAlign: 'center', paddingTop: '3%'}}>
                    <Typography component={'h1'} variant={'h3'} sx={{fontSize: {sm:'48px', xs: '32px'}}}>
                        Страница не найдена...
                    </Typography>

                </Box>
            </Container>
        </Box>
    );
};

export default AuthPage;
