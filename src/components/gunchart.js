import React from "react";
import { Bar } from 'react-chartjs-2';

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Custom Chart Title'
        },
        tooltip:{
            enabled:true,
            position:'nearest'
        },legend: {
            display: false
        }
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

// var datachart = {
//     labels: ['อาวุธปืนทั่วไป', 'อาวุธสงคราม', 'อาวุธปืนไทยประดิษฐ์', 'ammunition'],
//     datasets: [
//         {
//             label: 'ยอดตรวจยึดอาวุธปืน',
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)'
//             ],
//             borderWidth: 1,
//         },
//     ],
// }


const Charttotalguns = (props) => {
    let datainput = [props.normalgun, props.wargun, props.thaicraftgun, props.ammunition]
    //datachart.datasets[0]['data']=datainput
    return (
        <>
            <Bar className="align-self-end"
                data={{
                    labels: ['อาวุธปืนทั่วไป', 'อาวุธสงคราม', 'อาวุธปืนไทยประดิษฐ์', 'เครื่องยุทธภัณฑ์'],
                    datasets: [
                        {
                            label: 'อาวุธปืน',
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: 1,
                            data: datainput
                        }
                    ]
                }}
                options={options}
                // width={'500px'}
                // height={'100%'}
            />
        </>
    )
}


export default Charttotalguns

