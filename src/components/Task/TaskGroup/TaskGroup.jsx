import React from "react";
import Card from "../../UI/Card/Card";
import TaskList from "../TaskList/TaskList";
import cssClasses from "./TaskGroup.module.css";

const TaskGroup = (props) => {
	return (
		<Card shadow='light'>
			<div className={cssClasses["task-group"]}>
				<Card
					shadow='light'
					cardColor={props.cardColor}
				>
					<h1 className={cssClasses["group-header"]}>
						{props.taskGroup.title}
					</h1>
				</Card>
				<TaskList
					cardColor={props.cardColor}
					droppableId={props.droppableId}
					tasks={props.taskGroup.tasks}
				/>
			</div>
		</Card>
	);
};

export default TaskGroup;
