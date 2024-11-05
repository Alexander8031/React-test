import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0)

  const Increment = () => setCount(count + 1)

  const Decrement = () => setCount(count - 1)

  return (
    <main>
      <div className="container">
        <h2>{count}</h2>
        <div className="button">
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
        </div>
      </div>
    </main>
  );
}
