import React, {useState} from 'react';
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth.jsx";

const AuthPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signin} = useAuth()
    const fromPage = location.state?.from?.pathname || '/'
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const user = form.username.value
        const pass = form.pass.value
        // хардкодим строго одного пользователя
        if (user === 'test' && pass === '123') signin(user, () => navigate(fromPage, {replace: true}))
    }
    return (
        <Box sx={{background: 'rgb(240,235,248)', height: {sm:'100vh', xs:'120vh'}}}>
            <Container maxWidth={'lg'}>
                <Box sx={{textAlign: 'center', paddingTop: '3%'}}>
                    <Typography component={'h1'} variant={'h3'} sx={{fontSize: {sm:'48px', xs: '32px'}}}>
                        Авторизация
                    </Typography>

                    <Box sx={{

                        background: '#fff',
                        width: '100%',
                        margin: '0 auto',
                        padding: '20px',
                        marginTop: '40px',
                        display: 'flex',
                        flexDirection: {lg: 'row', cm:'column', sm:'column', xs:'column'},
                        justifyContent: {lg: 'space-between', cm: 'center', sm: 'center', xs: 'center'},
                        alignItems: 'center',
                        height: {lg: '60vh', md:'75vh', sm: '75vh', xs: '75vh'},
                        borderRadius: '20px'
                    }}>
                        <Box component={'form'} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '0 auto',
                            gap: 2
                        }} onSubmit={handleSubmit}>

                            <TextField sx={{width: '300px'}} name={'username'} id="outlined-basic" label="Логин" variant="outlined" />
                            <TextField type={'password'} name={'pass'} id="outlined-basic" label="Пароль" variant="outlined" />
                            <Button type="submit" variant="outlined" sx={{
                                marginTop: '10px',
                                borderRadius: '10px',
                                padding: '5px',
                                fontSize: {md: '14px',sm: '10px', xs: '10px'},
                                borderColor: 'black',

                            }}>Войти</Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default AuthPage;
