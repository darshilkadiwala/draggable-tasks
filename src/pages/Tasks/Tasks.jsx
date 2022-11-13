import React from "react";
import TaskLists from "../../components/Task/TaskLists/TaskLists";
import TaskGroup from "../../components/Task/TaskGroup/TaskGroup";
import Icon from "../../components/UI/Icon/Icon";
import cssClasses from "./Tasks.module.css";

const Tasks = () => {
	return (
		<div className={cssClasses["task-container"]}>
			<h1 className={cssClasses.header}>
				<Icon icon='task' />
				<span>My Tasks</span>
			</h1>
			<TaskLists>
				<TaskGroup cardColor='gray' />
				<TaskGroup cardColor='gray' />
				<TaskGroup cardColor='gray' />
				<TaskGroup cardColor='gray' />
			</TaskLists>
		</div>
	);
};

export default Tasks;
