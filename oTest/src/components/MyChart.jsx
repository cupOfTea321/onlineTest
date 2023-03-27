import React, {useState} from 'react';
import {Box} from "@mui/material";

import PieChart from "./PieChart.jsx";
const { Chart } = await import('chart.js');
const MyChart = ({UserData}) => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.name),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    // "#50AF95",
                    // "#f3ba2f",
                    // "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });


    return (
        <>
            <Box sx={{width: 300, margin: '0 auto'}}>
                <PieChart chartData={userData} />
            </Box>
        </>


    );
};

export default MyChart;
