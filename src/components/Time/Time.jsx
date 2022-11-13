import cssClasses from './Time.module.css'
import React from "react";
import Card from "../UI/Card/Card";

const Time = () => {
	return <Card cardcolor='light'><div className= {cssClasses.time }>9:45 AM</div></Card>;
};

export default Time;
