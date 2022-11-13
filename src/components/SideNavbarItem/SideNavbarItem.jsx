import cssClasses from "./SideNavbarItem.module.css";

import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../UI/Icon/Icon";

const SideNavbarItem = (props) => {
	return (
		<li className={cssClasses["link-item"]}>
			<NavLink
				to={props.toLink}
				className={(navData) => (navData.isActive ? cssClasses.active : "")}
			>
				<Icon icon={props.icon} />
				<span className={cssClasses.link}>{props.title}</span>
			</NavLink>
		</li>
	);
};

export default SideNavbarItem;
