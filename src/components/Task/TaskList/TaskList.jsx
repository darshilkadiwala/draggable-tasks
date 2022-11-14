import React from "react";
import TaskListItem from "../TaskListItem/TaskListItem";
import cssClasses from "./TaskList.module.css";

const TaskList = (props) => {
	const onDragOver = (e) => {
		e.preventDefault();
		// console.log("DragOverging", e);
	};
	const onDragDropped = (e) => {
		e.preventDefault();
		console.log("Dragged", e.dataTransfer.getData("taskId"));
	};
	return (
		<ul
			className={cssClasses.list}
			onDragOver={onDragOver}
			onDrop={onDragDropped}
		>
			<TaskListItem
				cardColor={props.cardColor}
				taskId={Math.ceil(Math.random() * 100000)}
			/>
			<TaskListItem
				cardColor={props.cardColor}
				taskId={Math.ceil(Math.random() * 100000)}
			/>
		</ul>
	);
};

export default TaskList;
