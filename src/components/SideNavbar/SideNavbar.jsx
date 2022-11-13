import React from "react";
import LogoIcon from "../Logo/Logo";
import SideNavbarItem from "../SideNavbarItem/SideNavbarItem";
import cssClasses from "./SideNavbar.module.css";

const SideNavbar = () => {
	return (
		<div className={`container ${cssClasses.nav}`}>
			<LogoIcon />
			<ul className={cssClasses["link-container"]}>
				<SideNavbarItem
					icon='home-alt-2'
					toLink='/'
					title='Home'
				/>
				<SideNavbarItem
					icon='check-circle'
					toLink='/tasks'
					title='My Task'
				/>
				<SideNavbarItem
					icon='plus-circle'
					title='Add New Task'
					toLink='/add'
				/>
			</ul>
		</div>
	);
};

export default SideNavbar;
