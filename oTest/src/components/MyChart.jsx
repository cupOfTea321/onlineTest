import React, {useState} from 'react';
import {Box} from "@mui/material";

import PieChart from "./PieChart.jsx";
const { Chart } = await import('chart.js');
const MyChart = ({UserData}) => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.name),
        datasets: [
            {
                label: "Количество",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
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
