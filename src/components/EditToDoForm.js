import React, {useState} from 'react';

const EditToDoForm = ({editTodo, task}) => {
    let [value, setValue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id)
        setValue(value)
    };
    return (
        <div>
            <form className={'TodoForm'} onSubmit={handleSubmit}>
                <input onChange={(e) => setValue(e.target.value)} value={value} type={"text"} className={'todo-input'}
                       placeholder={'Update Task'}/>
                <button type={'submit'} className={'todo-btn'}>Update Task</button>
            </form>

        </div>
    );
};

export {EditToDoForm};