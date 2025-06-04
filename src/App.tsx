import Header from "./components/Header";
import NewTask from "./components/NewTask";
import AllTasks from "./components/AllTasks";

function App() {
  return (
    <>
      <Header />
      {/* Your other components */}
      <main>
        <NewTask />
        <AllTasks />
        {/* Add more components here as needed */}
      </main>
    </>
  );
}

export default App;
