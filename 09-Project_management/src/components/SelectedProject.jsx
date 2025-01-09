import { useRef } from "react";
import Modal from "./Modal";
import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  const date = new Date(project.dueDate).toLocaleDateString("bg-BG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const modal = useRef();

  function confirmDeleteProject() {
    modal.current.open();
  }

  return (
    <>
      <Modal
        ref={modal}
        callbackFunction={onDelete}
        buttonCaption="Delete"
        header="Delete project"
        body="Are you sure you want to delete this project?"
      />
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
            <button onClick={confirmDeleteProject} className="text-stone-600 hover:text-stone-950">
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">{date}</p>
          <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
        <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
      </div>
    </>
  );
}
