import { FunctionComponent, useState } from "react";

interface CountingBoxProps {
  count: number;
}
export const CountingBox: FunctionComponent<CountingBoxProps> = ({ count }) => {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState<null | string>(null);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "increasing" : "decreasing");
  }
  return (
    <>
      <h1>{count}</h1>
      {trend && <p>The count is {trend}</p>}
    </>
  );
};
