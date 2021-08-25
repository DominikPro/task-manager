import React, { useState, useEffect } from "react";
//--------------------------------------------------------------------------------------------------
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import enGb from "date-fns/locale/en-GB";
//--------------------------------------------------------------------------------------------------


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
		if (resetDate === "") {
			setStartDate(new Date())
			console.log(props.endDateMiliSecends)	
		}
	  },[resetDate, endDate]);
//--------------------------------------------------------------------------------------------------		

	return (

		<DatePicker
		    readonly="readonly"
			isClearable
			locale="en-gb"
			showWeekNumbers
			disabledKeyboardNavigation
			todayButton="Today"
			dateFormat="dd/MM/yyyy"
			selected={endDate? StartDateSelected() : startDate}
			closeOnScroll={e => e.target === document}
			placeholderText="When do you start?"
			onChange={(date) => { setStartDate(date); setEndDate(Date.parse(date)) }}

		/>
	);
};

export default DatePickerInput;
