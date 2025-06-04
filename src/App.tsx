import React from "react";
import Header from "./components/Header";
const App: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>{/* Task tracker content */}</main>
    </>
  );
};

export default App;
