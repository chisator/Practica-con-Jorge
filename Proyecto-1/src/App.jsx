import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import Layout from "./components/layout/Layout";
import { Login } from "./components/pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => (
            <Route path={path} key={id} element={<Element />} />
          ))}
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
