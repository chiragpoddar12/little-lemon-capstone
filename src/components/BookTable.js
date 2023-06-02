import CommonHeader from "./CommonHeader";
import BookingForm from "./BookingForm";
import {useEffect, useReducer, useState} from "react";
import {serverAPI, fetchAPI} from "../serverAPI";

function BookTable(props){
    const todaysDate = new Date();

    function updateTimes(state, selectedDate) {
        return (
            fetchAPI(selectedDate)
        );
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, fetchAPI(todaysDate));

    return (
        <>
            <CommonHeader
                title={"Book Table"}/>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </>
    );
}

export default BookTable;