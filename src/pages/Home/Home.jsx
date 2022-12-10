import React from "react";
import CommingSoon from "../../assets/commingsoon.jpg";
import cssClasses from './Home.module.css';


const HomePage = () => {
	return (
		<div className={cssClasses.main}>
			<img
				src={CommingSoon}
				alt='This page is under construction !! Comming soon...'
			/>
		</div>
	);
};

export default HomePage;
