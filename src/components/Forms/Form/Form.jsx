import React from "react";
import cssClasses from "./Form.module.css";

const Form = (props) => {
	return (
		<div className={cssClasses["form-container"]}>
			<form onSubmit={props.onSubmit}>{props.children}</form>
		</div>
	);
};

export default Form;
