import { useState } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import AllTasks from "./components/AllTasks";
import type { Task } from "./types/type";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    const newTask: Task = {
      id: Date.now(), // Unique ID for the task
      taskName,
      isComplete: false,
      dateCreated: new Date(),
      dateCompleted: null,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isComplete: !task.isComplete,
              dateCompleted: !task.isComplete ? new Date() : null, // Set dateCompleted if task is marked complete
            }
          : task
      )
    );
  };

  return (
    <>
      <Header />
      {/* Your other components */}
      <main>
        <NewTask onAddTask={addTask} />
        <AllTasks tasks={tasks} onToggleComplete={toggleTaskCompletion} />
        {/* Add more components here as needed */}
      </main>
    </>
  );
}

export default App;
