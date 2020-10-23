import React, {useState} from 'react';

const Form = (props) => {
    const [inputType] = useState(props.type)
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value);
        if(props.onChange) props.onChange(inputValue)
    }

    return(
        <div>
            <input type={inputType} value={inputValue} name="input-form" onChange={handleChange} class="inputClass"/>
        </div>
    );
};

export default Form;