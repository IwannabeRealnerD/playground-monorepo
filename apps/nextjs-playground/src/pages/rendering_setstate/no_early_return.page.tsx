import { NextPage } from "next";
import { Profiler, useRef, useState } from "react";

import { ChildComponent } from "./component";

const NoEarlyReturnPage: NextPage = () => {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState<null | string>(null);
  const renderCount = useRef(0);
  const renderTimeResult = useRef(0);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "increasing" : "decreasing");
  }
  return (
    <Profiler
      id="Sidebar"
      onRender={(id, phase, actualDuration) => {
        if (phase === "mount") {
          return;
        }
        // eslint-disable-next-line no-console
        console.log(actualDuration);
        renderTimeResult.current += actualDuration;
        // eslint-disable-next-line no-console
        console.log("renderCount", renderCount.current);
        // eslint-disable-next-line no-console
        console.log("renderTimerResult", renderTimeResult.current);
        // eslint-disable-next-line no-console
        console.log("평균값", renderTimeResult.current / renderCount.current);
      }}
    >
      <main>
        {Boolean(new Array(100000).fill(0).forEach((index, i) => i + 1 + index))}
        <h1>no early return</h1>
        <button
          type="button"
          onClick={() => {
            renderCount.current += 1;
            setCount((prev) => prev + 1);
          }}
        >
          increment
        </button>
        <button
          type="button"
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          decrement
        </button>
        <ChildComponent count={count} />
        <p>{trend}</p>
      </main>
    </Profiler>
  );
};

export default NoEarlyReturnPage;
