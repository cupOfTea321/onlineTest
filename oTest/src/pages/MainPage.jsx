import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const questions = [
    {index: 1, title: 'Какой диапазон измерения объемной доли % метана и углекислого газа газоанализатора ЭРИС?'},
    {index: 2, title: 'До каких рабочих давлений применимы счетчики газа типа \n' +
            'СГ-16МТ или аналогичного типа?\n'},
    {index: 3, title: 'Датчики какого типа используются в составе аппаратуры \n' +
            'контроля загазованности СГГ-6М?\n'},
    {index: 4, title: 'Каким мегаомметром должно производиться измерение \n' +
            'сопротивления изоляции электропроводок систем \n' +
            'автоматизации?\n'},
    {index: 5, title: 'На чем основан принцип действия аппаратуры контроля \n' +
            'вибрации ГПА?\n'},
    {index: 6, title: 'Какой принцип измерения используется в термометрах ТГП-100 для \n' +
            'сигнализации достижения заданной температуры?\n'},
    {index: 7, title: 'Какова периодичность проверки устройств и приборов \n' +
            'защиты САУ ГПА?\n'},
    {index: 8, title: 'Что такое абсолютная погрешность измерения?'},
    {index: 9, title: 'Что такое давление?'},
    {index: 10, title: 'Укажите единицу измерения давления в системе СИ?'},
]
const MainPage = () => {
    return (
        <Box sx={{background: 'rgb(240,235,248)', height: '100vh'}}>
            <Container maxWidth={'lg'}>
                <Box sx={{textAlign: 'center', paddingTop: '3%'}}>
                    <Typography component={'h1'} variant={'h3'}>
                        ПЕРЕЧЕНЬ ТЕСТОВ
                    </Typography>
                    <Typography component={'h2'} variant={'h5'}>
                        для проверки знаний, полученных в процессе обучения рабочих
                        по профессии «Приборист»
                    </Typography>
                    {questions.map(question => (
                        <Box>
                            <Typography component={'h3'} sx={{fontWeight: 'bold'}}>
                                Вопрос №{question.index}. {question.title}
                            </Typography>

                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default MainPage;
