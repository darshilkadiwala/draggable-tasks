import React, { useReducer } from "react";
import { v4 } from "uuid";
import TaskContext from "./TaskContext";

const ACTIONS = {
	ADD_TASK: "add-task",
	REORDER_TASK: "reorder-task",
	REMOVE_TASK: "remove-task",
};

const item = {
	id: v4(),
	taskTitle: "Clean desk",
};
const item2 = {
	id: v4(),
	taskTitle: "Wash the car",
};
const item3 = {
	id: v4(),
	taskTitle: "Gether requirements for task project",
};
const item4 = {
	id: v4(),
	taskTitle: "Send email to project guide",
};

const defaultTaskState = {
	todo: {
		title: "To-Do",
		tasks: [item, item2],
	},
	inprogress: {
		title: "In Progress",
		tasks: [item3],
	},
	completed: {
		title: "Completed",
		tasks: [ item4],
	},
};

const taskReducer = (taskState, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TASK: {
			//const updatedTasksListState = { ...state.tasks };

			const { tasks: taskList } = taskState[action.tasks.type];
			console.log("Tasklist => ", taskList);
			const newTask = {
				id: v4(),
				taskTitle: action.tasks.taskTitle,
			};
			const updatedTaskList = [newTask, ...taskList];
			console.log("updatedTaskList => ", updatedTaskList);
			return {
				...taskState,
				[action.tasks.type]: {
					title: taskState[action.tasks.type].title,
					tasks: updatedTaskList,
				},
			};
		}
		case ACTIONS.REORDER_TASK: {
			const { destination, source } = action.reorder;
			if (
				!destination ||
				(destination.index === source.index &&
					destination.droppableId === source.droppableId)
			) {
				return taskState;
			}

			const itemCopy = {
				...taskState[source.droppableId].tasks[source.index],
			};

			taskState[source.droppableId].tasks.splice(source.index, 1);

			// Adding to new tasks array location
			taskState[destination.droppableId].tasks.splice(
				destination.index,
				0,
				itemCopy
			);

			return taskState;
		}
		case ACTIONS.REMOVE_TASK: {
			const existingTaskItemIndex = taskState.tasks.findIndex((item) => {
				return item.id === action.id;
			});
			const existingTaskItem = taskState.tasks[existingTaskItemIndex];

			const updatedTotalAmount = taskState.totalAmount - existingTaskItem.price;

			let updatedItems = [...taskState.tasks];
			if (existingTaskItem.amount === 1) {
				updatedItems = taskState.tasks.filter((item) => item.id !== action.id);
			} else {
				updatedItems[existingTaskItemIndex] = {
					...existingTaskItem,
					amount: existingTaskItem.amount - 1,
				};
			}

			return {
				totalAmount: updatedTotalAmount,
				tasks: updatedItems,
			};
		}
		default:
			console.log("Default task runs");
			return defaultTaskState;
	}
};

const TaskProvider = (props) => {
	const [taskState, dispatchTaskState] = useReducer(
		taskReducer,
		defaultTaskState
	);

	const addTaskItemHandler = (taskTitle, type) => {
		console.log(taskTitle, type);
		dispatchTaskState({ type: ACTIONS.ADD_TASK, tasks: { type, taskTitle } });
	};

	// const removeTaskItemHandler = (id, group) => {
	// 	dispatchTaskState({ type: ACTIONS.REMOVE_TASK, tasks: { id, group } });
	// };

	const reorderTaskItemHandler = (reorder) => {
		dispatchTaskState({ type: ACTIONS.REORDER_TASK, reorder });
	};
	// const clearTaskHandler = () => {
	// 	dispatchTaskState({ type: ACTIONS.CLEAR });
	// };

	const taskCtx = {
		allTasks: taskState,
		addTask: addTaskItemHandler,
		reorderTask: reorderTaskItemHandler,
		// removeTask: removeTaskItemHandler,
		// clearTask: clearTaskHandler,
	};

	return (
		<TaskContext.Provider value={taskCtx}>
			{props.children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
