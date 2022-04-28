import React, { useState } from 'react';

const initialValue : string[] = [];

const ItemList = () => {
    const [todoList, setTodoList] = useState(initialValue);
    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setTodoList([
            ...todoList,
            newItem
        ])
        setNewItem('');
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewItem(
            e.target.value
            );
    }

    console.log(todoList);

    return (
        <div>
            {todoList.map(item => 
                <div>
                    <p>{item}</p>
                </div>)}
            <form onSubmit={handleSubmit}>
                <label /> Create a new item:
                <input 
                    type="text"
                    name="todo"
                    value={newItem}
                    onChange={handleInput}
                />
                <button>Create</button>
            </form>
        </div>
    );
}

export default ItemList;
