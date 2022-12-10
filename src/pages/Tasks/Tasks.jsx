import React, { useContext } from "react";
import TaskGroup from "../../components/Task/TaskGroup/TaskGroup";
import TaskLists from "../../components/Task/TaskLists/TaskLists";
import Icon from "../../components/UI/Icon/Icon";
import TaskContext from "../../store/context/TaskContext";
import cssClasses from "./Tasks.module.css";

// const item = {
// 	id: v4(),
// 	name: "Clean the house",
// };
// const item2 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item3 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item4 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item5 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item6 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item7 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item8 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item9 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item10 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item11 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item12 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item14 = {
// 	id: v4(),
// 	name: "Wash the car",
// };
// const item13 = {
// 	id: v4(),
// 	name: "Wash the car",
// };

const Tasks = () => {
	// const [state, setState] = useState({
	// 	todo: {
	// 		title: "Todo",
	// 		tasks: [item, item2],
	// 	},
	// 	"in-progress": {
	// 		title: "In Progress",
	// 		tasks: [item3, item6, item5],
	// 	},
	// 	done: {
	// 		title: "Completed",
	// 		tasks: [item4, item7, item8],
	// 	},
	// 	review: {
	// 		title: "Under Review",
	// 		tasks: [item9],
	// 	},
	// });

	const taskListState = useContext(TaskContext);

	const handleDragEnd = ({ destination, source }) => {
		if (
			!destination ||
			(destination.index === source.index &&
				destination.droppableId === source.droppableId)
		) {
			return;
		}

		taskListState.reorderTask({ destination, source });

		// Creating a copy of item before removing it from state
		// console.log(source.droppableId, source.index);
		// const itemCopy = { ...state[source.droppableId].tasks[source.index] };

		// setState((prev) => {
		// 	prev = { ...prev };
		// 	// Remove from previous tasks array
		// 	prev[source.droppableId].tasks.splice(source.index, 1);

		// 	// Adding to new tasks array location
		// 	prev[destination.droppableId].tasks.splice(
		// 		destination.index,
		// 		0,
		// 		itemCopy
		// 	);

		// 	return prev;
		// });
	};

	return (
		<div className={cssClasses["task-container"]}>
			<h1 className={cssClasses.header}>
				<Icon icon='task' />
				<span>My Tasks</span>
			</h1>
			<TaskLists handleOnDragEnd={handleDragEnd}>
				{Object.keys(taskListState.allTasks).map((key) => {
					console.log("taskGroup=> ", taskListState.allTasks[key]);
					return (
						<TaskGroup
							cardColor='gray'
							taskGroup={taskListState.allTasks[key]}
							droppableId={key}
							key={key}
						/>
					);
				})}
			</TaskLists>
		</div>
	);
};

export default Tasks;
