import { useState } from "react";

export default function TodoForm(props) {
    const [textValue, setTextValue] = useState('');

    const handleAddTodo = () => {
        props.addTodoCallback(textValue);
        setTextValue('');
    };

    return (
        <div>
            <input
                type={'text'}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTodo();
                    }
                }}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}