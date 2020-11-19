import { useState } from "react";

export function TodoForm() {

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
            


        </div>
    );
}