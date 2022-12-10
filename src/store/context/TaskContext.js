import React from "react";

const TaskContext = React.createContext({
	allTasks: {},
	addTask: (task, group) => {},
	removeTask: (id, group) => {},
	reorderTask: (reorder) => {},
});

export default TaskContext;
