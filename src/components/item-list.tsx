import React, { useState } from 'react';

const ItemList = () => {
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
    }

    return (
        <div>
            <p>This will be the list of to do items</p>
            <form onSubmit={handleSubmit}>
                <label /> Create a new item:
                <input 
                    type="text"
                    name="todo"

                />
                <button>Create</button>
            </form>
        </div>
    );
}

export default ItemList;
