import { useState } from "react";

const useInput = (ref,initialValue) => {
	const [value, setValue] = useState(initialValue);
	const reset = () => {
		setValue(initialValue);
	};
	const bind = {
		value,
		onChange: (e) => {
			setValue((prevValue) => e.target.value);
		},
	};
	return [value, bind, reset];
};

export default useInput;
