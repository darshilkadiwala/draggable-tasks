import cssClasses from "./Card.module.css";
import React from "react";

const Card = (props) => {
	let cardColor = props.cardColor
		? cssClasses[`${props.cardColor}-card`]
		: cssClasses[`light-card`];

	if (props.shadow) {
		cardColor += ` ${cssClasses[`${props.shadow}-shadow`]}`;
	}
	return (
		<div className={`${cssClasses.card} ${cardColor}`}>{props.children}</div>
	);
};

export default Card;
