import React from "react";
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const options = {
    plugins: {
        title: {
            display: true,
            text: 'นารายณ์ปราบศาสตรา',
            font: {
                size: 20
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
    let {normalgun,wargun,thaicraftgun,ammunition} = props.overview
    let datainput = [normalgun, wargun, thaicraftgun, ammunition]
    //datachartdatasets[0]['data']=datainput
    return (
        <>
            <Bar className="align-self-end"
                data={{
                    labels: ['อาวุธปืนทั่วไป', 'อาวุธสงคราม', 'อาวุธปืนไทยประดิษฐ์', 'เครื่องยุทธภัณฑ์'],
                    datasets: [
                        {
                            backgroundColor: [
                                'rgba(54, 162, 235, 02)',
                                'rgba(255, 99, 132, 02)',
                                'rgba(255, 206, 86, 02)',
                                'rgba(75, 192, 192, 02)'
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
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

