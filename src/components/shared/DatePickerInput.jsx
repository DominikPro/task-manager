import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import enGb from "date-fns/locale/en-GB";
registerLocale("en-gb", enGb);

const DatePickerInput = (props) => {
	let [startDate, setStartDate] = useState(new Date());
	const { setEndDate, resetDate, endDate } = props

	const StartDateSelected = () => {
		if (endDate) {
			return (new Date(endDate))
		}
		else {
		 return (0)
		}
	}
	
	
	useEffect(() => {

		console.log(startDate)
		// console.log(new Date(props.endDateMiliSecends))
		// setStartDate(new Date(props.endDateMiliSecends))
		if (resetDate === "") {
			setStartDate(new Date())
			console.log(props.endDateMiliSecends)	
		}
	  },[resetDate, endDate]);
		

	return (
		<DatePicker
			isClearable
			locale="en-gb"
			showWeekNumbers
			disabledKeyboardNavigation
			todayButton="Today"
			dateFormat="dd/MM/yyyy"
			selected={endDate? StartDateSelected() : startDate}
			closeOnScroll={e => e.target === document}
			// minDate={new Date()}
			placeholderText="When do you start?"
			onChange={(date) => { setStartDate(date); setEndDate(Date.parse(date))}}
		
			// onClick={(date) => { setEndDate(Date.parse(date))}}
			// onChange={(date) => { setStartDate(date)}}
			
		/>
	);
};

export default DatePickerInput;
