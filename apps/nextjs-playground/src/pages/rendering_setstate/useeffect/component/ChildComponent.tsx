import { FunctionComponent } from "react";

interface ChildComponentProps {
  count: number;
}
export const ChildComponent: FunctionComponent<ChildComponentProps> = ({ count }) => {
  new Array(100000).fill(0).forEach((index, i) => i + 1 + index);

  return <h1>{count}</h1>;
};
