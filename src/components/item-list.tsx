import { stringify } from 'querystring';
import React, { useState } from 'react';

const initialValue : object[] = [];
const id = Math.random();
export type Item = {
    id: number;
    task: string;
}
const initialObject: Item = {
    id: id,
    task: '',
};


const ItemList: React.FC = () => {
    const [todoList, setTodoList] = useState(initialValue);
    const [newItem, setNewItem] = useState(initialObject);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setTodoList([
            ...todoList,
            newItem
        ]);
        setNewItem(initialObject);
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNewItem({
            id: Math.random(),
            task: e.target.value,
        });
    }

    // const handleDelete = (e: any) => {
    //     return(todoList.filter(task !== task.id));
    // }

    console.log(todoList);


    return (
        <div>
            {todoList.map((item: any) => (
                <div>
                    <p>{item.task}</p>
                    {/* <button onClick={handleDelete}>X</button> */}
                </div>))}
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
