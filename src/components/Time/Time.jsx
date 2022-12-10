import cssClasses from "./Time.module.css";
import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
function format_two_digits(n) {
	return n < 10 ? "0" + n : n;
}
const Time = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setDate(new Date()), 1000);
		return function cleanup() {
			clearInterval(timer);
		};
	});

	const time =
		format_two_digits(date.getHours() % 12) +
		":" +
		format_two_digits(date.getMinutes()) +
		` ${date.getHours() >= 12 ? "PM" : "AM"}`;
	const currDate =
		date.toLocaleString("default", { weekday: "long" }) +
		", " +
		date.getDate() +
		" " +
		date.toLocaleString("default", { month: "long" }) +
		", " +
		date.getFullYear();
	return (
		<div className={cssClasses["flex-row"]}>
			<Card cardcolor='light'>
				<div className={cssClasses.time}>{time}</div>
			</Card>
			<Card cardcolor='light'>
				<div className={cssClasses.time}>{currDate}</div>
			</Card>
		</div>
	);
};

export default Time;
