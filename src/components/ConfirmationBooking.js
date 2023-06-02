import booking from "../imgs/booking.jpg";

function ConfirmationBooking(props){
    return(
        <header className={"commonHeader"}>
            <img src={booking} alt={"Header Image"}/>
            <h1 className="header-text-center">
                Booking Confirmed
            </h1>
            <h1 className="header-text-center">
                Booking Confirmed
            </h1>
        </header>
    );
}

export default ConfirmationBooking