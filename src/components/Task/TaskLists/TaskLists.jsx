import React from "react";
import cssClasses from "./TaskLists.module.css";

const TaskLists = (props) => {
	return <div className={cssClasses["task-lists"]}>{props.children}</div>;
};

export default TaskLists;
 