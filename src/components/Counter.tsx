import { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = (props: CounterProps) => {
  return (
    <>
      <h1>{props.children}</h1>
      <button onClick={() => props.setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => props.setCount((prev) => prev - 1)}>-</button>
    </>
  );
};

export default Counter;
