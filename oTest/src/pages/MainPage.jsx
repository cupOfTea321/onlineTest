import React, {useState} from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import MyChart from "../components/MyChart.jsx";

const questions = [
    {
        title: 'Какой диапазон измерения объемной доли % метана и углекислого газа газоанализатора ЭРИС?',
        answers: [
            {ans: 'Метана от 0 до 6%; углекислого газа от 0 до 10 %', isCorrect: false},
            {ans: 'Метана от 0 до 10%; углекислого газа от 0 до 6 %', isCorrect: false},
            {ans: 'Метана и углекислого газа от 5 до 15 %', isCorrect: false},
            {ans: 'Метана от 5 до 15 %; углекислого газа от 0 до 6%', isCorrect: false},
            {ans: 'Метана и углекислого газа от 0 до 4.4 %', isCorrect: true},
        ]
    },
    {
        title: 'До каких рабочих давлений применимы счетчики газа типа \n' +
            'СГ-16МТ или аналогичного типа?\n',
        answers: [
            {ans: 'До 10 Мпа', isCorrect: false},
            {ans: 'До 1 МПа', isCorrect: false},
            {ans: 'До 1,6 МПа', isCorrect: true},
            {ans: 'До 0,01 МПа', isCorrect: false},
            {ans: 'До 25 кгс/ см2', isCorrect: false},
        ]
    },
    {
        title: 'Датчики какого типа используются в составе аппаратуры \n' +
            'контроля загазованности СГГ-6М?\n',
        answers: [
            {ans: 'Инфракрасные.', isCorrect: false},
            {ans: 'Электродинамические.', isCorrect: false},
            {ans: 'Электрохимические.', isCorrect: false},
            {ans: 'Электроконтактные.', isCorrect: false},
            {ans: 'Термокаталитические.', isCorrect: true},
        ]
    },
    {
        title: 'Каким мегаомметром должно производиться измерение \n' +
            'сопротивления изоляции электропроводок систем \n' +
            'автоматизации?\n',
        answers: [
            {ans: 'На напряжение 250-500 В', isCorrect: false},
            {ans: 'На напряжение 150-250 В', isCorrect: false},
            {ans: 'На напряжение 500-1000 В', isCorrect: true},
            {ans: 'На напряжение до 750 В', isCorrect: false},
            {ans: 'На напряжение свыше 1000 В', isCorrect: false},
        ]
    },
    {
        title: 'На чем основан принцип действия аппаратуры контроля \n' +
            'вибрации ГПА?\n',
        answers: [
            {ans: 'На явлении тензоэффекта.', isCorrect: false},
            {ans: 'На явлении пьезоэффекта.', isCorrect: false},
            {ans: 'На явлении пьезоэффекта.', isCorrect: true},
            {ans: 'На принципе измерения сдвига фаз.', isCorrect: false},
            {ans: 'На возможности подсчета ИК-излучения.', isCorrect: false},
        ],
    },
    {
        title: 'Какой принцип измерения используется в термометрах ТГП-100 для \n' +
            'сигнализации достижения заданной температуры?\n',
        answers: [
            {ans: 'Широкий температурный коэффициент расширения.', isCorrect: false},
            {ans: 'Малый коэффициент объёмного расширения.', isCorrect: false},
            {
                ans: 'Способность изменения давления в зависимости от температуры при постоянном. объеме (изохорный процесс).',
                isCorrect: true
            },
            {ans: 'Способность ртути оставаться жидкой в широком интервале температур.', isCorrect: false},
            {ans: 'Способность проводить электрический ток.', isCorrect: false},
        ]
    },
    {
        title: 'Какова периодичность проверки устройств и приборов \n' +
            'защиты САУ ГПА?\n',
        answers: [
            {ans: 'Один раз в месяц.', isCorrect: true},
            {ans: 'Два раза в месяц.', isCorrect: false},
            {ans: 'Не реже одного раза в квартал.', isCorrect: false},
            {ans: 'Два раза в квартал.', isCorrect: false},
            {ans: 'Один раз в полгода.', isCorrect: false},
        ]
    },
    {
        title: 'Что такое абсолютная погрешность измерения?',
        answers: [
            {
                ans: 'Это отношение половины действительного значения измеряемой величины \n' +
                    'к максимальному значению шкалы приборы в процентах.\n', isCorrect: false
            },
            {
                ans: 'Это отношение половины допустимой погрешности прибора к истинному \n' +
                    'значению измеряемой величины в процентах.\n', isCorrect: false
            },
            {
                ans: 'Это отношение результата измерения к действительному значению \n' +
                    'измеряемой величины в процентах.\n', isCorrect: false
            },
            {
                ans: 'Это разность между результатом измерения и действительным (истинным) \n' +
                    'значением измеряемой величины.\n', isCorrect: true
            },
            {
                ans: 'Это разность между действительным значением измеряемой величины и \n' +
                    'результатом измерения.\n', isCorrect: false
            },
        ]
    },
    {
        title: 'Что такое давление?',
        answers: [
            {ans: 'Сила, с которой газ или жидкость действуют на стенку сосуда.', isCorrect: false},
            {ans: 'Сила, с которой газ или жидкость действуют на стенку сосуда.', isCorrect: true},
            {ans: 'Сила, с которой молекулы вещества действуют на единицу объема сосуда.', isCorrect: false},
            {ans: 'Сила, с которой молекулы вещества взаимодействуют с материалом сосуда.', isCorrect: false},
            {ans: 'Общий вес молекул вещества в сосуде.', isCorrect: false},
        ]
    },
    {
        title: 'Укажите единицу измерения давления в системе СИ?',
        answers: [
            {ans: 'кгС/см2', isCorrect: false},
            {ans: 'кПа', isCorrect: false},
            {ans: 'Па', isCorrect: true},
            {ans: 'мм.рт.ст.', isCorrect: false},
            {ans: 'МПа', isCorrect: false},
        ]
    },
]

const MainPage = () => {
    // текущий вопрос
    const [currentQuestion, setCurrentQuestion] = useState(0)
    // количество правильных ответов
    const [score, setScore] = useState(0)
    // пора ли показывать результат
    const [showScore, setShowScore] = useState(false)

    const UserData = [
        {
            id: 1,
            userGain: score,
            name: 'Баллы'
        },
        {
            id: 2,
            userGain: questions.length - score,
            name: 'Ошибки'
        },
    ]
    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        // проверка на последний вопрос
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }
    const refresh = () => {
        setShowScore(false)
        setCurrentQuestion(0)
        setScore(0)
    }
    return (
        <Box sx={{background: 'rgb(240,235,248)', height: {sm:'100vh', xs:'120vh'}}}>
            <Container maxWidth={'lg'}>
                <Box sx={{textAlign: 'center', paddingTop: '3%'}}>
                    <Typography component={'h1'} variant={'h3'} sx={{fontSize: {sm:'48px', xs: '32px'}}}>
                        ПЕРЕЧЕНЬ ТЕСТОВ
                    </Typography>
                    <Typography component={'h2'} variant={'h5'} sx={{fontSize: {sm:'24px', xs: '20px'}}}>
                        для проверки знаний, полученных в процессе обучения рабочих
                        по профессии «Приборист»
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
                        {!showScore ?
                            <>
                                <Box sx={{display: 'flex', flexDirection: 'column', width: {sm:'60%', xs: '100%'}}}>
                                    <Typography component={'h3'} sx={{fontWeight: 'bold', fontSize: {md: '32px', sm: '24px', xs: '16px'}}}>
                                        Вопрос № {currentQuestion + 1}/{questions.length}.
                                    </Typography>
                                    <Typography>
                                        {questions[currentQuestion].title}
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', width: {md: '40%', sm: '40%', xs: '100%' }}}>
                                    {questions[currentQuestion].answers.map((btn, index) => (
                                        <Button
                                            key={index}
                                            onClick={() => handleAnswerClick(btn.isCorrect)}
                                            variant="outlined" sx={{
                                            marginTop: '10px',
                                            borderRadius: '10px',
                                            padding: '5px',
                                            fontSize: {md: '14px',sm: '10px', xs: '10px'},
                                            borderColor: 'black',

                                        }}>{btn.ans}</Button>
                                    ))}
                                </Box>
                            </>
                            :
                            <Box sx={{margin: '0 auto'}}>
                                <Typography component={'h3'} sx={{fontSize: {sm: '32px', xs: '20px'}, marginBottom: '5px'}}>
                                    Правильных ответов {score} из {questions.length}
                                </Typography>
                                {score >= 8 ?
                                <Typography sx={{color: '#20B2AA', marginBottom: '10px'}}>Поздравляем, экзамен сдан!</Typography>
                                : <Typography sx={{color: '#F08080', marginBottom: '10px'}}>Извините, экзамен не сдан, попробуйте в следующий раз</Typography>
                                }
                                <MyChart UserData={UserData}/>
                                <Button onClick={refresh} variant="outlined" sx={{
                                    marginBottom: '10px',
                                    borderRadius: '10px',
                                    padding: '5px',
                                    borderColor: 'black',
                                    marginTop: '50px'
                                }}>
                                    Попробовать ещё раз?
                                </Button>
                            </Box>
                        }

                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default MainPage;
