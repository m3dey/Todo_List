import React, {useState} from 'react';

const ToDoForm = ({addTodo}) => {
    let [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value)
        setValue(value)
    };
    return (
        <div>
            <form className={'TodoForm'} onSubmit={handleSubmit}>
                <input onChange={(e) => setValue(e.target.value)} value={value} type={"text"} className={'todo-input'}
                       placeholder={'What is the task today?'}/>
                <button type={'submit'} className={'todo-btn'}>Add Task</button>
            </form>

        </div>
    );
};

export {ToDoForm};