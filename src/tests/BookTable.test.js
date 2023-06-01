import { render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import BookTable from '../components/BookTable';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={["12:00", "13.00", "14:00", "15.00", "16.00", "17.00"]} updateTimes={function(){}}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

