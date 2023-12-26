import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";



function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(taskData) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: taskData,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    console.log("handleDeleteTask", id)
    setProjectState(prevState => {
      

      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }

  function handleSelectProject(projectId) {
    //console.log("handleSelectProject", projectId);
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId
      }
    })
    // console.log(projectState);
    // console.log("The project Id is : ", projectId)
  }

  function handleStartAddProject() {
    console.log("handleStartAddProject");
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }

    })
  }
  function handleCancelAddProject() {
    console.log("handleCancelAddProject");
    setProjectState(prevState => {
      if(prevState.projects.length === 0) {
        return {
          ...prevState,
          selectedProjectId: undefined
        }
      }
    })
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleDeleteProject() {
   
    setProjectState(prevState => {
      

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      }
    })
  }

  
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  //console.log("Selected Project by the id which will be sent to SelectProject component :::", selectedProject);
  let content = <SelectedProject 
                    project={selectedProject} 
                    onDelete={handleDeleteProject} 
                    onAddTask={handleAddTask} 
                    onDeleteTask={handleDeleteTask}
                    tasks={projectState.tasks} />;

  if(projectState.selectedProjectId === null) {
    content = <NewProject onCancle={handleCancelAddProject} onAddProject={handleAddProject}/>
  }
  else if(projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
      onStartAddProject={handleStartAddProject}  
      projects={projectState.projects}
      onSelectProject={handleSelectProject}/>
      {content}
     </main>
  );
}

export default App;
