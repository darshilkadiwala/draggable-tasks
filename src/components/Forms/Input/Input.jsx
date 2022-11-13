import React from "react";
import cssClasses from "./Input.module.css";

const Input = (props) => {
	const {
		inputType = "text",
		label = "Enter text here",
		name,
		value="",
		onChange,
		required = false,
		readOnly = false,
	} = props;

	return (
		<div className={`${cssClasses.inputbox}`}>
			<input
				className={`${cssClasses["floating-input"]}`}
				type={inputType}
				placeholder=' '
				id={name}
				name={name}
				required={required}
				readOnly={readOnly}
				value={value}
				onChange={onChange}
			/>

			<label
				htmlFor={name}
				className={`${cssClasses["floating-label"]}`}
			>
				{label && label}
			</label>
		</div>
	);
};
export default Input;
