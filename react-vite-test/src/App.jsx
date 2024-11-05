import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import Header from './components/Header/Header'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
            {/* <Route index element={<Home />} /> */}
            {/* <Route path='counter' element={<Counter />} />
            <Route path='input' element={<Input />} /> */}
        </Route>
      </Routes>
    </>
  );
}
