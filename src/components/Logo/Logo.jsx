import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/download.svg";
import cssClasses from "./Logo.module.css";

const LogoIcon = () => {
	return (
		<div className={cssClasses["logo-wrapper"]}>
			<Logo className={cssClasses.logo} />
			<Link
				to='/'
				className={cssClasses["logo-text"]}
			>
				<h3>Draggable</h3>
				<p>Tasks</p>
			</Link>
		</div>
	);
};

export default LogoIcon;
