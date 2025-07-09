import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const BarChart = () => {
    const axiosSecure = useAxiosSecure()
    const { data: bookingsData = [] } = useQuery({
        queryKey: ["bookingsData"],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/bookings-by-date')
            return data;
        }
    })
    console.log(bookingsData)
    const [state, setState] = React.useState({

        series: [{
            data: bookingsData?.count
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: bookingsData?.dates,
            }
        },


    });
    return (
        <div className='my-10'>
            <div id="chart" className='max-w-3xl mx-auto w-full'>
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default BarChart;



// const domContainer = document.querySelector('#app');
// ReactDOM.render(<BarChart />, domContainer);