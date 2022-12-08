import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import cssClasses from "./TaskLists.module.css";

const TaskLists = (props) => {
	return (
		<div className={cssClasses["task-lists"]}>
			<DragDropContext
				onDragEnd={props.handleOnDragEnd}
			>
				{props.children}
			</DragDropContext>
		</div>
	);
};

export default TaskLists;
