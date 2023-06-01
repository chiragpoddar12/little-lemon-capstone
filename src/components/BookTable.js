import CommonHeader from "./CommonHeader";
import BookingForm from "./BookingForm";
import {useReducer, useState} from "react";

function BookTable(props){
    const initialTimes = ["12:00", "13.00", "14:00", "15.00", "16.00", "17.00"];
    const [availableTimes, dispatch] = useReducer(updateTime, initializeTimes());

    function updateTime(availableTimes, selectedDate){
        console.log(selectedDate);
        return availableTimes;
    }

    function initializeTimes(){
        return initialTimes;
    }

    return (
        <>
            <CommonHeader
                title={"Book Table"}/>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </>
    );
}

export default BookTable;