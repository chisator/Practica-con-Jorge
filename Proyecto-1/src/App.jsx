import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ id, path, Element }) => (
          <Route path={path} key={id} element={<Element />} />
        ))}
        <Route path="/" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
