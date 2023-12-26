import { forwardRef, useState } from "react";

function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');
    const [inputClass, setInputClass] = useState("w-64 px-2 py-1 rounded-sm bg-stone-200");

   

    function handleChange(event) {
        setEnteredTask(event.target.value);
        setInputClass("w-64 px-2 py-1 rounded-sm bg-stone-200");
    }

    function handleClick() {
        if(enteredTask.trim().length === 0) {
            setInputClass("w-64 px-2 py-1 rounded-sm bg-stone-200 border border-red-500");
            return;
        }
        onAdd(enteredTask);
        console.log(enteredTask);
        setEnteredTask('');

    }

    return (
        <div className="flex items-center gap-4">
            <input 
            onChange={handleChange} 
            type="text" 
            className={inputClass}
            value={enteredTask}/>

            <button
             className="text-stone-700 hover:text-stone-950" 
             onClick={handleClick}
             >
                    Add Task
            </button>
        </div>
    );
}

export default NewTask;