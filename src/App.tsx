import { CookiesProvider } from "react-cookie";
import { Outlet } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  return (
    <CookiesProvider>
      <Context.Provider value={null}>
        <Outlet />
      </Context.Provider>
    </CookiesProvider>
  );
}

export default App;
