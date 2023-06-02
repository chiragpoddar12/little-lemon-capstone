import {useNavigate} from "react-router-dom";
import {useState} from "react";

function BookingForm(props){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        mobile:"",
        date:"",
        time: "",
        guests: "",
        seating: "",
        occasion: "",
        comments: ""
    });
    const [formTouchData, setFormTouch] = useState({
        name: false,
        email: false,
        mobile: false
    });

    const isInputValid = (input) => input !== "";

    const isFormValid = () =>
        isInputValid(formData.name) &&
        isInputValid(formData.email) &&
        isInputValid(formData.mobile) &&
        isInputValid(formData.guests);

    function onValueChange (e){
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    function onInputBlur(e){
        setFormTouch({
            ...formTouchData,
            [e.target.id]: true
        });
    }

    function onDateChange(e){
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
        props.updateTimes(new Date(e.target.value));
    }

    function onSubmitClick(e){
        e.preventDefault();
        if(props.submitAPI(formData))
        {
            navigate("/confirmed");
        }

    }

    return (
        <form className={"bookingForm"}>
            <h2>Personal Details</h2>
            <div className={"inputLabel"}>
                <label htmlFor="name">Full Name:</label>
                <br/>
                <input type="text" placeholder={"John Doe"} id="name" value={formData.name} onChange={onValueChange} onBlur={onInputBlur}/>
                {!isInputValid(formData.name) && formTouchData.name && (
                    <p style={{color: "red"}}>
                        Please enter valid name
                    </p>
                )}
            </div>
            <div className={"inputLabel"}>
                <label htmlFor="email">Email:</label>
                <br/>
                <input type="email" placeholder={"example@test.com"} id="email" value={formData.email} onChange={onValueChange} onBlur={onInputBlur}/>
                {!isInputValid(formData.email) && formTouchData.email && (
                    <p style={{color: "red"}}>
                        Please enter valid email
                    </p>
                )}
            </div>
            <div className={"inputLabel"}>
                <label htmlFor="mobile">Mobile:</label>
                <br/>
                <input type="number" placeholder={"(xxx) xx-xxx-xxxx"} id="mobile" value={formData.mobile} onChange={onValueChange} onBlur={onInputBlur}/>
                {!isInputValid(formData.mobile) && formTouchData.mobile && (
                    <p style={{color: "red"}}>
                        Please enter valid mobile
                    </p>
                )}
            </div>
            <br/>
            <h2>Table Details</h2>
            <div className={"inputLabel"}>
                <label htmlFor="date">Select Date:</label>
                <br/>
                <input type="date" id="date" value={formData.date} onChange={onDateChange}/>
            </div>
            <div className={"inputLabel"}>
                <label htmlFor="time">Select Time:</label>
                <br/>
                <select id="time"  value={formData.time} onChange={onValueChange}>
                    {props.availableTimes.map((availableTime) => <option>{availableTime}</option>)}
                </select>
            </div>
            <div className={"inputLabel"}>
                <label htmlFor="guests">No of Guests:</label>
                <br/>
                <input type="number" id="guests" placeholder={"1"} value={formData.guests} onChange={onValueChange}/>
            </div>
            <div className={"inputLabel"}>
                <label htmlFor="seating">Seating:</label>
                <br/>
                <select id="seating"  value={formData.seating} onChange={onValueChange}>
                    <option>Indoor</option>
                    <option>Outdoor</option>
                </select>
            </div>
            <div className={"inputLabel"}>
                <label htmlFor="occasion">Occasion:</label>
                <br/>
                <select id="occasion"  value={formData.occasion} onChange={onValueChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                </select>
            </div>
            <div className={"inputLabel"}>
                <label htmlFor="comments">Comments:</label>
                <br/>
                <textarea id="comments"  value={formData.comments} onChange={onValueChange}/>
            </div>
            <div className={"termsAndCondition"}>
                <p><strong>By clicking on Confirm below, you agree to be contacted by phone and email</strong></p>
            </div>
            <button className={"yellowButton"} disabled={!isFormValid()} type={"Submit"} onClick={onSubmitClick}>Book Now</button>
        </form>
    );
}

export default BookingForm;