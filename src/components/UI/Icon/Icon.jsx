import React from "react";
import cssClasses from "./Icon.module.css";

const Icon = (props) => {
	return <i className={`bx ${cssClasses.bx} bx-${props.icon}`}></i>;
};

export default Icon;
