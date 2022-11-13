import cssClasses from "./Greetings.module.css";
import React from "react";

const Greetings = (props) => {
	return (
		<div className={cssClasses.greeting}>
			<span className={cssClasses.hello}>Hello {props.name}!</span>
			<h1 className={cssClasses.greetMessage}>Good Morning</h1>
		</div>
	);
};

export default Greetings;
