import React, { useState } from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';

const initialValue : object[] = [];
const initialObject = {
    id: 0,
    task: '',
};

const ItemList = () => {
    const [todoList, setTodoList] = useState(initialValue);
    const [newItem, setNewItem] = useState(initialObject);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setTodoList([
            ...todoList,
            newItem
        ])
        setNewItem(initialObject);
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewItem({
            id: Math.random(),
            [e.target.name] : e.target.value,
        });
    }

    // const handleDelete = (e: any) => {
    //     return(todoList.filter(task !== task.id));
    // }

    console.log(todoList);

    return (
        <div>
            {todoList.map(item => 
                <div>
                    <p>{item.task}</p>
                    <button onClick={handleDelete}>X</button>
                </div>)}
            <form onSubmit={handleSubmit}>
                <label /> Create a new item:
                <input 
                    type="text"
                    name="todo"
                    value={newItem.task}
                    onChange={handleInput}
                />
                <button>Create</button>
            </form>
        </div>
    );
}

export default ItemList;
