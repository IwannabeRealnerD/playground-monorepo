import { NextPage } from "next";
import { useState } from "react";

import { CountingBox } from "./component/CountingBox";

const RenderingEarlyReturnPage: NextPage = () => {
  const [count, setCount] = useState(0);
  return (
    <main>
      <button
        type="button"
        onClick={() => {
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
      <CountingBox count={count} />
    </main>
  );
};

export default RenderingEarlyReturnPage;
