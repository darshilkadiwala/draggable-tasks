import cssClasses from "./TaskListItem.module.css";
import React from "react";
import Card from "../../../components/UI/Card/Card";
import Icon from "../../../components/UI/Icon/Icon";

const TaskListItem = (props) => {
	const dragStarted = (e, id) => {
		console.log(e);
		e.dataTransfer.setData("taskId", id);
	};

	return (
		<li
			className={cssClasses["list-item"]}
			draggable
			onDragStart={(e) => {
				dragStarted(e, props.taskId);
			}}
		>
			<Icon icon='grid-vertical' />
			<Card cardColor={props.cardColor}>
				<p>Lorem ipsum dolor sit amet {props.taskId}</p>
				{/* <p>{props.taskTitle}</p> */}
			</Card>
		</li>
	);
};

export default TaskListItem;
