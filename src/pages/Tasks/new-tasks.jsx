import _ from "lodash";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 } from "uuid";
import Card from "../../components/UI/Card/Card";
import Icon from "../../components/UI/Icon/Icon";
import cssClasses from "./Tasks.module.css";

///

import taskGroupCssClasses from "../../components/Task/TaskGroup/TaskGroup.module.css";
import taskListCssClasses from "../../components/Task/TaskList/TaskList.module.css";
import taskListItemCssClasses from "../../components/Task/TaskListItem/TaskListItem.module.css";
import taskListsCssClasses from "../../components/Task/TaskLists/TaskLists.module.css";

const item = {
	id: `todo-1-${v4()}`,
	name: "Clean the house",
};

const item2 = {
	id: `todo-2-${v4()}`,
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
		if (
			!destination ||
			(destination.index === source.index &&
				destination.droppableId === source.droppableId)
		) {
			return;
		}

		const itemCopy = { ...state[source.droppableId].items[source.index] };
		setState((prev) => {
			prev = { ...prev };
			prev[source.droppableId].items.splice(source.index, 1);
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
			<div className={taskListsCssClasses["task-lists"]}>
				<DragDropContext onDragEnd={handleDragEnd}>
					{_.map(state, (data, key) => {
						return (
							<Card
								shadow='light'
								key={key}
							>
								<div className={taskGroupCssClasses["task-group"]}>
									<Card
										shadow='light'
										cardColor={"gray"}
									>
										<h1 className={taskGroupCssClasses["group-header"]}>
											{data.title}
										</h1>
									</Card>

									<Droppable droppableId={key}>
										{(provided, snapshot) => {
											return (
												<ul
													className={taskListCssClasses.list}
													ref={provided.innerRef}
													{...provided.droppableProps}
													// onDragOver={onDragOver}
													// onDrop={onDragDropped}
												>
													{data.tasks.map((task, index) => {
														return (
															<Draggable
																index={index}
																key={task.id}
																draggableId={task.id}
															>
																{(provided, snapshot) => {
																	console.log(provided);
																	return (
																		<li
																			className={
																				taskListItemCssClasses["list-item"]
																			}
																			ref={provided.innerRef}
																			{...provided.draggableProps}
																			{...provided.dragHandleProps}
																			// draggable
																			// onDragStart={(e) => {
																			// 	dragStarted(e, props.taskId);
																			// }}
																		>
																			<Icon icon='grid-vertical' />
																			<Card
																				cardColor={`${"gray"} ${
																					snapshot.isDragging && "dragging"
																				}`}
																			>
																				<p>
																					Lorem ipsum dolor sit amet {task.id}
																				</p>
																				{/* <p>{props.taskTitle}</p> */}
																			</Card>
																		</li>
																	);
																}}
															</Draggable>
														);
													})}
													{provided.placeholder}
												</ul>
											);
										}}
									</Droppable>
								</div>
							</Card>
						);
					})}
				</DragDropContext>
			</div>
		</div>
	);
};

export default Tasks;
