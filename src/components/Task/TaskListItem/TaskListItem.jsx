import cssClasses from "./TaskListItem.module.css";
import React from "react";
import Card from "../../../components/UI/Card/Card";
import Icon from "../../../components/UI/Icon/Icon";

const TaskListItem = (props) => {
	return (
		<li className={cssClasses["list-item"]}>
			<Icon icon='grid-vertical' />
			<Card cardColor={props.cardColor}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt
					quae esse eum facilis voluptatibus, alias ad maiores. Sed quam,
					molestias earum repellat delectus enim reprehenderit necessitatibus
					distinctio voluptas. Rerum?
				</p>
			</Card>
		</li>
	);
};

export default TaskListItem;
