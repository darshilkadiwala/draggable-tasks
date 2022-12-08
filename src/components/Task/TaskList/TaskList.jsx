import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskListItem from "../TaskListItem/TaskListItem";
import cssClasses from "./TaskList.module.css";

const TaskList = (props) => {
	// const onDragOver = (e) => {
	// 	e.preventDefault();
	// 	// console.log("DragOverging", e);
	// };
	// const onDragDropped = (e) => {
	// 	e.preventDefault();
	// 	console.log("Dragged", e.dataTransfer.getData("taskId"));
	// };
	return (
		<Droppable droppableId={props.droppableId}>
			{(provided) => (
				<ul
					className={cssClasses.list}
					{...provided.droppableProps}
					ref={provided.innerRef}
					// onDragOver={onDragOver}
					// onDrop={onDragDropped}
				>
					{props.tasks.map((task, index) => (
						<TaskListItem
							cardColor={props.cardColor}
							task={task}
							key={task.id}
							index={index}
						/>
					))}
					{provided.placeholder}
				</ul>
			)}
		</Droppable>
	);
};

export default TaskList;
