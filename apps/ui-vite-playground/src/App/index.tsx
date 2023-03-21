import { FunctionComponent } from "react";
import "@/style/globalStyle/index.css.ts";
import { NavBar } from "@/components";

export const App: FunctionComponent = () => {
  return (
    <main>
      <NavBar />
      <h1>app</h1>
    </main>
  );
};
