import React, { memo } from "react";
import General from "./General";
import Scripts from "./Scripts";
import Devices from "./Devices";

const Main: React.FC = memo(() => {
  return (
    <main className="main">
      <General />
      <Scripts />
      <Devices />
    </main>
  );
});

export default Main;