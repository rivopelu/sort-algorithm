import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { routesList } from "./constants/routesList";

function App() {
  return (
    <div className="min-h-screen h-full flex flex-col">
      <Header />
      <div className="mt-3"></div>
      <div className="flex-1  h-full  flex items-center justify-center">
        <Routes>
          {routesList.map((item, i) => {
            const Element = item.element;
            return <Route key={i} path={item.path} element={<Element />} />;
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
