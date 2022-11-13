import React from "react";
import Greetings from "../Greetings/Greetings";
import Time from "../Time/Time";
import cssClasses from "./HomeHeader.module.css";

const HomeHeader = (props) => {
	return (
		<div className={cssClasses["home-header"]}>
			<Greetings name={props.name} />
			<Time />
		</div>
	);
};

export default HomeHeader;
