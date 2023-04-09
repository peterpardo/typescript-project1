import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

// These syntax indicates that the component is "Generic" component
// <T extends {}>
// <T,>
const List = <T,>(props: ListProps<T>) => {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={i}>{props.render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
