import React from "react";
import TaskListItem from "../TaskListItem/TaskListItem";
import cssClasses from "./TaskList.module.css";

const TaskList = (props) => {
	return (
		<ul className={cssClasses.list}>
			<TaskListItem cardColor={props.cardColor} />
			<TaskListItem cardColor={props.cardColor} />
		</ul>
	);
};
 
export default TaskList;
