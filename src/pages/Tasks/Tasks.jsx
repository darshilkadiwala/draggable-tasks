import React, { useState } from "react";
import { v4 } from "uuid";
import TaskGroup from "../../components/Task/TaskGroup/TaskGroup";
import TaskLists from "../../components/Task/TaskLists/TaskLists";
import Icon from "../../components/UI/Icon/Icon";
import cssClasses from "./Tasks.module.css";

const item = {
	id: v4(),
	name: "Clean the house",
};

const item2 = {
	id: v4(),
	name: "Wash the car",
};
const Tasks = () => {
	const [state, setState] = useState({
		todo: {
			title: "Todo",
			tasks: [item, item2],
		},
		"in-progress": {
			title: "In Progress",
			tasks: [],
		},
		done: {
			title: "Completed",
			tasks: [],
		},
		review: {
			title: "Under Review",
			tasks: [],
		},
	});

	const handleDragEnd = ({ destination, source }) => {
		if (!destination) {
			return;
		}

		if (
			destination.index === source.index &&
			destination.droppableId === source.droppableId
		) {
			return;
		}

		// Creating a copy of item before removing it from state
		const itemCopy = { ...state[source.droppableId].items[source.index] };

		setState((prev) => {
			prev = { ...prev };
			// Remove from previous items array
			prev[source.droppableId].items.splice(source.index, 1);

			// Adding to new items array location
			prev[destination.droppableId].items.splice(
				destination.index,
				0,
				itemCopy
			);

			return prev;
		});
	};

	return (
		<div className={cssClasses["task-container"]}>
			<h1 className={cssClasses.header}>
				<Icon icon='task' />
				<span>My Tasks</span>
			</h1>
			<TaskLists handleOnDragEnd={handleDragEnd}>
				{Object.keys(state).map((key) => (
					<TaskGroup
						cardColor='gray'
						taskGroup={state[key]}
						droppableId={key}
						key={key}
					/>
				))}
			</TaskLists>
		</div>
	);
};

export default Tasks;
