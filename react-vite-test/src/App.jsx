import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Counter from "./components/Counter/Counter";
import Home from "./components/Home/Home";
import Input from "./components/Input/Input";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="input" element={<Input />} />
        </Route>
      </Routes>
  );
}
