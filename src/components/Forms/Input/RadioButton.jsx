import React from "react";
import cssClasses from "./RadioButton.module.css";

const RadioButton = (props) => {
	const { label, name, value, formState, onChange, fieldType } = props;
	return (
		<div className={`${cssClasses.labelBox}`}>
			<label>
				<input
					type='radio'
					name={name}
					id={name}
					checked={formState[name] === value}
					value={value}
					onChange={onChange}
					data-field-type={fieldType}
				/>
				<span>{label}</span>
			</label>
		</div>
	);
};
export default RadioButton;
