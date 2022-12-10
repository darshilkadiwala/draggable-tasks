import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from "../../../components/UI/Card/Card";
import Icon from "../../../components/UI/Icon/Icon";
import cssClasses from "./TaskListItem.module.css";

const TaskListItem = (props) => {
	// const dragStarted = (e, id) => {
	// 	console.log(e);
	// 	e.dataTransfer.setData("taskId", id);
	// };

	return (
		<Draggable
			index={props.index}
			draggableId={props.task.id}
		>
			{(provided, snapshot) => {
				return (
					<li
						className={cssClasses["list-item"]}
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						// draggable
						// onDragStart={(e) => {
						// 	dragStarted(e, props.taskId);
						// }}
						// style={{backgroundColor:'blue'}}
					>
						<Icon icon='grid-vertical' />
						<Card
							cardColor={`${props.cardColor} ${
								snapshot.isDragging && "dragging"
							}`}
						>
							<p className={cssClasses["task-title"]}>
								{props.task.taskTitle}
							</p>
							{/* <p>{props.taskTitle}</p> */}
						</Card>
					</li>
				);
			}}
		</Draggable>
	);
};

export default TaskListItem;
