import { testFunc1 } from "@/utils";

export default function Test2() {
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  return <h1 onClick={testFunc1}>Test2 page</h1>;
}
