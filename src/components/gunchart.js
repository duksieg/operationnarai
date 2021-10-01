import React from "react";
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const options = {
    plugins: {
        title: {
            display: true,
            text: 'ยุทธการสอบสวนกลางกวาดล้างปืนเถื่อน',
            font: {
                size: 30
            }
        },
        datalabels:{
            anchor:'end',
            align:'center',
            font:{
                size:30
            }
        },
        legend: {
            display: false
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

    }
}


const Charttotalguns = (props) => {
    let {normalgun,wargun,thaicraftgun,ammunition,ammo} = props.overview
    let datainput = [normalgun, wargun, thaicraftgun, ammunition,ammo]
    //datachartdatasets[0]['data']=datainput
    return (
        <>
            <Bar className="align-self-end"
                data={{ font: {
                size: 40
            },
                    labels: ['อาวุธปืนทั่วไป', 'อาวุธสงคราม', 'อาวุธปืนไทยประดิษฐ์', 'เครื่องยุทธภัณฑ์','เครื่องกระสุน'],
                    datasets: [
                        {
                            backgroundColor: [
                                'rgba(54, 162, 235, 02)',
                                'rgba(255, 99, 132, 02)',
                                'rgba(255, 206, 86, 02)',
                                'rgba(75, 192, 192, 02)',
                                'rgba(131,129,129,1)'
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(131,129,129,1)'
                            ],
                            borderWidth: 1,
                            data: datainput
                            
                        }
                    ]
                }}
                options={options}
                plugins={[ChartDataLabels]}

            />
        </>
    )
}


export default Charttotalguns

