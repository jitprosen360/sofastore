import React from "react";
import {
  BottomSheet,
  SheetHeader,
  SheetTitle,
  SheetContent
} from "@biotic-ui/bottom-sheet";

export function DemoDrawer({ isVisible, onClose, children }) {
  // return (
  //   <Drawer isVisible={isVisible} onClose={onClose}>
  //     {children}
  //   </Drawer>
  // );

  return (
    <BottomSheet open={isVisible} height={1} onClose={() => onClose()}>
      <SheetHeader>
        <button onClick={() => onClose()}>Close</button>
        <SheetTitle>Bottom Sheet</SheetTitle>
      </SheetHeader>
      <SheetContent>
        tetur adipisicing elit. Harum dolores, sit odio nesciunt enim earum quod
        iusto molestias, quos excepturi. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Harum dolores, sit odio nesciunt enim earum quod iusto
        molestias, quos excepturi. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Harum dolores, sit odio nesciunt enim earum quod iusto
        molestias, quos excepturi.
      </SheetContent>
    </BottomSheet>
  );
}

/////////////////////////////// app.js

import React from "react";
import { DemoDrawer } from "./DemoDrawer";
import "./styles.css";

export default function App() {
  const [isVisible, setIsVisible] = React.useState(false);

  const onClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <h1>Hello CodeSandbox</h1>
      <h2 style={{ zIndex: 200 }}>Start editing to see some magic happen!</h2>
      <button onClick={() => setIsVisible(!isVisible)}>Open Drawer</button>

      <DemoDrawer isVisible={isVisible} onClose={onClose}>
        Drawer Contents
      </DemoDrawer>
    </div>
  );
}