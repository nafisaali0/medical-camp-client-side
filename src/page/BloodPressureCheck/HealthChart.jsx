import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// import BloodPressureChart from "./BloodPressureChart";

const HealthChart = () => {

    const { user } = useAuth();
    const [bloodPressureData, setbloodPressureData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/bloodPressure?email=${user?.email}`)
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