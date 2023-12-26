import { useRef } from "react";
import NewTask from "./NewTask";

export default function Tasks({tasks, onAddTask, onDeleteTask}) {
let content;
    if(tasks.length === 0) {
        content = <p className="text-stone-800 mb-4">
        This project does not have any tasks yet
    </p>
    } else {
        content = <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map(task => (
            <li key={task.id} className="flex items-center justify-between mb-4">
                <p className="text-stone-600">{task.text}</p>
                <button className="text-stone-600 hover:text-stone-950" onClick={() => onDeleteTask(task.id)}>Delete</button>
            </li>
        ))}
    </ul>
    }
   
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
           <NewTask onAdd={onAddTask}/>
           
           {content}
            
        </section>
    );
}