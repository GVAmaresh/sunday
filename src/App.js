import { createContext, useState } from "react";
import "./App.css";
import MainPage from "./Main Page/MainPage";
import SideNav from "./Main Page/SideNav";
export const UserContext = createContext();
function App() {
  const [createProject, setCreateProject] = useState(false);
  return (
    <UserContext.Provider value={{createProject, setCreateProject}}>
      <div className="App">
        <SideNav />
        <MainPage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
