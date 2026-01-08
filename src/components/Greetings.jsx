import moment from "moment";
import { useEffect, useState } from "react"

const Greetings = () => {

    const currentHour = moment().format("HH");
    const [greetingsStatus, setGreetingsStatus] = useState();

    useEffect(() => {

        if (currentHour >= 5 && currentHour < 12) {
            setGreetingsStatus("Good Morning")
            // console.log("Good Morning");
        } else if (currentHour >= 12 && currentHour < 17) {
            setGreetingsStatus("Good Afternoon")
            // console.log("Good Afternoon")
        } else if (currentHour >= 17 && currentHour < 19) {
            // setGreetingsStatus("Good Evening")
            console.log("Good Evening")
        } else if (currentHour >= 19 || currentHour < 5) {
            setGreetingsStatus("Good Night")
            // console.log("Good Night")
        } else {
            console.log("not work")
        }
        
    }, [currentHour]); // Optional dependency array


    return (
        <>
            {greetingsStatus}
        </>
    )
}

export default Greetings;
