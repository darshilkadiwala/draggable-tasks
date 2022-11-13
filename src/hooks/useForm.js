import { useState } from "react";

const useForm = (initState) => {
	const [state, setState] = useState(initState || {});
	const handleChange = (e) => {
		setState((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
	};
	return [state, handleChange];

	// const [refs, setRefs] = useState(initialRefs || {});
	// const addNewRef = (newRef) => {
	// 	setRefs((prevRefs) => ({
	// 		...prevRefs,
	// 		newRef,
	// 	}));
	// };

	// const getData=()=>{

	// }
	// return [refs, addNewRef];
};

export default useForm;
