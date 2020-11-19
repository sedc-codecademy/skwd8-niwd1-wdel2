import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../actions/todosActions";

export function TodoForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([
            ...items,
            { done: false, text: '' }
        ]);
    };

    const handleItemChange = (item, value) => {
        item.text = value;
        setItems([...items]);
    };

    const saveHandler = () => {
        const listPayload = {
            title,
            items,
        };
        dispatch(createTodo(listPayload));
    };

    return (
        <div>
            <label>
                Title
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) } }/>
            </label>
            <button onClick={addItem}>Add items</button>

            {items.map((item, index) => 
                <div key={index}>
                    <input type="text" value={item.text} onChange={ (e) => { handleItemChange(item, e.target.value) }}/>
                </div>
            )}

            <button onClick={saveHandler}>Save</button>

        </div>
    );
}