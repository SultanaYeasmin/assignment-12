import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const BarChart = () => {
    const axiosSecure = useAxiosSecure();

    const { data: bookingsData = {}, isLoading } = useQuery({
        queryKey: ["bookingsData"],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/bookings-by-date')
            return data;
        }
    })
    
    //console.log(bookingsData);

    const series= [{
            data: bookingsData?.count
        }]
     const options= {
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
        }

    if (isLoading) {
        return <div className="text-center py-10 text-primary text-xl italic underline">Loading chart...</div>;
    }
    return (
        <div className='my-10'>
            <div id="chart" className='max-w-3xl mx-auto w-full'>
                <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default BarChart;

