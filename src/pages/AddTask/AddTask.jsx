import React, { useRef } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Forms/Form/Form";
import Input from "../../components/Forms/Input/Input";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import useForm from "../../hooks/useForm";
// import cssClasses from "./AddTask.module.css";

const AddTask = () => {
	const onFormSubmitHandler = (event) => {
		event.preventDefault();
		console.log(formState);
	};

	const [formState, handleChange] = useForm({});

	return (
		<Form onSubmit={onFormSubmitHandler}>
			<Input
				inputType='text'
				label='Name'
				name='fname'
				value={formState.fname}
				onChange={handleChange}
			/>
			<Input
				inputType='email'
				label='Email'
				name='email'
				value={formState.email}
				onChange={handleChange}
			/>
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
