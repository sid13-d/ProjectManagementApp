import Button from "./Button";

export default function ProjectSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}) {

    return (
        <aside className="w-1/3 px-8 py-16 bg-slate-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Project Sidebar</h2>
            <div>
                <Button text="+ Project" onClick={onStartAddProject}/>
            </div>

            <ul className="mt-8">
                {projects.map((project) => {
                    let cssClasses = "w-full flex justify-between items-center text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

                    if(project.id === selectedProjectId) {
                        cssClasses += " bg-stone-800 text-stone-200";
                    }else {
                        cssClasses += " text-stone-400";
                    }

                    return (
                        <li key={project.id} className="flex items-center justify-between my-2">
                            <button onClick={() => onSelectProject(project.id)} className={cssClasses}>
                                <p>{project.title}</p>
                                <p className="text-xs text-stone-300">{project.dueDate}</p>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}