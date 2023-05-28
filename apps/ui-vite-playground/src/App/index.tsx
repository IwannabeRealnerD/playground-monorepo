import { FunctionComponent } from "react";
import { NavBar } from "@/components";
import { sharedTestFunction } from "shared-khanne-utils";

export const App: FunctionComponent = () => {
  sharedTestFunction();
  
  return (
    <main>
      <NavBar />
      <h1>app</h1>
    </main>
  );
};
