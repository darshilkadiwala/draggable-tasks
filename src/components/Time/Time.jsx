import cssClasses from "./Time.module.css";
import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";

const Time = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setDate(new Date()), 1000);
		return function cleanup() {
			clearInterval(timer);
		};
	});

	const time = date.getHours() + ":" + date.getMinutes();
	const currDate =
		date.toLocaleString("default", { weekday: 'long' }) +
		", " +
		date.getDate() +
		" " +
		date.toLocaleString("default", { month: "long" }) +
		", " +
		date.getFullYear();
	return (
		<div className={cssClasses["flex-row"]}>
			<Card cardcolor='light'>
				<div className={cssClasses.time}>{time} AM</div>
			</Card>
			<Card cardcolor='light'>
				<div className={cssClasses.time}>{currDate}</div>
			</Card>
		</div>
	);
};

export default Time;
