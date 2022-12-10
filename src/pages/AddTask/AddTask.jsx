import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "../../components/Forms/Form/Form";
import Input from "../../components/Forms/Input/Input";
import RadioButton from "../../components/Forms/Input/RadioButton";
import TaskContext from "../../store/context/TaskContext";
import cssClasses from "./AddTask.module.css";

const initState = {
	taskTitle: "",
	taskGroup: "todo",
};

const AddTask = () => {
	const taskState = useContext(TaskContext);
	const [formState, setFormState] = useState(initState);
	const navigate = useNavigate();
	const onFormSubmitHandler = (event) => {
		event.preventDefault();
		if (formState.taskTitle.trim().length !== 0) {
			taskState.addTask(formState.taskTitle.trim(), formState.taskGroup);
			setFormState(initState);
			navigate("/tasks");
		}
	};

	const onTaskDataChange = (e) => {
		setFormState((prevForm) => ({
			...prevForm,
			[e.target.name]: e.target.value,
		}));
	};

	// const onTaskTitleChange = (e) => {
	// 	setFormState((prevForm) => ({ ...prevForm, taskTitle: e.target.value }));
	// };
	// const onTaskGroupChange = (e) => {
	// 	setFormState((prevForm) => ({ ...prevForm, taskGroup: e.target.value }));
	// };

	return (
		<Form onSubmit={onFormSubmitHandler}>
			<Input
				inputType='text'
				label='Title'
				name='taskTitle'
				value={formState.taskTitle}
				onChange={onTaskDataChange}
			/>
			<div className={cssClasses["task-group"]}>
				<RadioButton
					label='To-Do'
					name='taskGroup'
					value='todo'
					formState={formState}
					fieldType='taskGroup'
					onChange={onTaskDataChange}
				/>
				<RadioButton
					label='In Progress'
					name='taskGroup'
					value='inprogress'
					formState={formState}
					fieldType='taskGroup'
					onChange={onTaskDataChange}
				/>
				<RadioButton
					label='Completed'
					name='taskGroup'
					value='completed'
					formState={formState}
					fieldType='taskGroup'
					onChange={onTaskDataChange}
				/>
			</div>
			<Button
				type='submit'
				title='Add Task'
				css={["button-sm"]}
			/>
			<Button
				type='reset'
				title='Reset'
				css={["button-sm", "inverted"]}
			/>
		</Form>
	);
};

export default AddTask;
