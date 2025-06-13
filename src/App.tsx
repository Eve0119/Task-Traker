import { useState, useEffect } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import AllTasks from "./components/AllTasks";
import FilterTasks from "./components/FilterTasks";
import type { Task } from "./types/type";
import type { Banner } from "./types/type";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [search, setSearch] = useState("");
  const [banner, setBanner] = useState<Banner>({
    all: 0,
    active: 0,
    completed: 0,
  });

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

  const editTask = (id: number, updatedTaskName: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, taskName: updatedTaskName } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
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

  const clearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.isComplete));
  };

  useEffect(() => {
    setBanner({
      all: tasks.length,
      active: tasks.filter((task) => !task.isComplete).length,
      completed: tasks.filter((task) => task.isComplete).length,
    });
  }, [tasks]);

  return (
    <>
      <Header />
      <main>
        <NewTask onAddTask={addTask} />
        <FilterTasks
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          banner={banner}
        />
        <AllTasks
          tasks={tasks}
          filter={filter}
          search={search}
          onToggleComplete={toggleTaskCompletion}
          clearCompletedTasks={clearCompletedTasks}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      </main>
    </>
  );
}

export default App;
