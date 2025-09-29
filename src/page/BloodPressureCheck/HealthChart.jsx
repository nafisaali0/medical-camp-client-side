import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// import BloodPressureChart from "./BloodPressureChart";

const HealthChart = () => {

    const { user } = useAuth();
    const [bloodPressureData, setbloodPressureData] = useState([])

    useEffect(() => {
        fetch(`https://medical-camp-server-seven.vercel.app/bloodPressure?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setbloodPressureData(data)
            })
    }, [user?.email])

    const formatDataForChart = (fieldName) => {
        return bloodPressureData.map(entry => ({
            label: entry.date,
            time: entry.time, // Assuming date is a valid date string
            y: entry[fieldName],
        }));
    };

    const systolicData = formatDataForChart("systolic");

    // Convert systolicData y values to numbers
    const systolicDataConverted = systolicData.map(entry => ({
        y: Number(entry.y),
        label: entry.label,
    }));
    const diastolicData = formatDataForChart("diastolic");

    // Now, if diastolicData is an array of objects with y values as strings, convert them to numbers
    const diastolicDataConverted = diastolicData.map(entry => ({
        y: Number(entry.y),
        label: entry.label,
    }));

    const options = {
        animationEnabled: true,
        title: {
            text: "Blood Pressure Chart",
        },
        axisY: {
            title: "Reading Value",
            minimum: 0,
            maximum: 200,
        },
        toolTip: {
            shared: true,
        },
        data: [
            {
                type: "spline",
                name: "systolic",
                showInLegend: true,
                dataPoints: systolicDataConverted,
            },
            {
                type: "spline",
                name: "diastolic",
                showInLegend: true,
                dataPoints: diastolicDataConverted,
            },
            {
                type: "spline",
                name: "time",
                showInLegend: true,
                dataPoints: formatDataForChart("time"),
            },
        ],
    };
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
};

export default HealthChart;
// import { useEffect, useState } from 'react';
// import useAuth from '../../hooks/useAuth';
// import { Line } from 'react-chartjs-2';

// const HealthChart = () => {
//     const { user } = useAuth();
//     const [bloodPressureData, setbloodPressureData] = useState([])

//     useEffect(() => {
//         fetch(`https://medical-camp-server-seven.vercel.app/bloodPressure?email=${user?.email}`)
//             .then(res => res.json())
//             .then(data => {
//                 setbloodPressureData(data)
//             })
//     }, [user?.email])
//     console.log(bloodPressureData)
//     // Extracting labels (time) and data (systolic and diastolic) from bloodPressureData
//     const labels = bloodPressureData.map(entry => entry.time); // Replace 'time' with the actual property name in your data
//     const systolicData = bloodPressureData.map(entry => entry.systolic); // Replace 'systolic' with the actual property name in your data
//     const diastolicData = bloodPressureData.map(entry => entry.diastolic); // Replace 'diastolic' with the actual property name in your data


//     const data = {
//         labels: labels,
//         datasets: [
//             {
//                 label: 'Systolic',
//                 fill: false,
//                 lineTension: 0.1,
//                 backgroundColor: 'rgba(75,192,192,0.4)',
//                 borderColor: 'rgba(75,192,192,1)',
//                 borderCapStyle: 'butt',
//                 borderDash: [],
//                 borderDashOffset: 0.0,
//                 borderJoinStyle: 'miter',
//                 pointBorderColor: 'rgba(75,192,192,1)',
//                 pointBackgroundColor: '#fff',
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 5,
//                 pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//                 pointHoverBorderColor: 'rgba(220,220,220,1)',
//                 pointHoverBorderWidth: 2,
//                 pointRadius: 1,
//                 pointHitRadius: 10,
//                 data: systolicData,
//             },
//             {
//                 label: 'Diastolic',
//                 fill: false,
//                 lineTension: 0.1,
//                 backgroundColor: 'rgba(255,99,132,0.4)',
//                 borderColor: 'rgba(255,99,132,1)',
//                 borderCapStyle: 'butt',
//                 borderDash: [],
//                 borderDashOffset: 0.0,
//                 borderJoinStyle: 'miter',
//                 pointBorderColor: 'rgba(255,99,132,1)',
//                 pointBackgroundColor: '#fff',
//                 pointBorderWidth: 1,
//                 pointHoverRadius: 5,
//                 pointHoverBackgroundColor: 'rgba(255,99,132,1)',
//                 pointHoverBorderColor: 'rgba(220,220,220,1)',
//                 pointHoverBorderWidth: 2,
//                 pointRadius: 1,
//                 pointHitRadius: 10,
//                 data: diastolicData,
//             },
//         ],
//     };

//     return (
//         <div>
//             <Line data={data} />
//         </div>
//     );
// };

// export default HealthChart;