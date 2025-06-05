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

  return (
    <>
      <Header />
      {/* Your other components */}
      <main>
        <NewTask onAddTask={addTask} />
        <AllTasks tasks={tasks} />
        {/* Add more components here as needed */}
      </main>
    </>
  );
}

export default App;
