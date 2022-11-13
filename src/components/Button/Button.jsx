import cssClasses from "./Button.module.css";

const Button = ({ title, css, type, disabled }) => {
	let cssStyle = cssClasses["button"];
	if (typeof css === "string") {
		cssStyle += ` ${cssClasses[css]}`;
	} else if (typeof css === "object") {
		css.forEach((element) => {
			cssStyle += ` ${cssClasses[element]}`;
		});
	}
	return (
		<button
			type={type}
			className={cssStyle}
			disabled={disabled}
		>
			{title}
		</button>
	);
};

export default Button;
