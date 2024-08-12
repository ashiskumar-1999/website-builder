import React, { Children, ReactNode } from "react";
import { Drawer } from "@chakra-ui/react";

type PanelProp = {
  isPanelOpen: boolean;
  onPanelClose: () => void;
  children: ReactNode;
};
const ElementsPanel = ({ isPanelOpen, onPanelClose, children }: PanelProp) => {
  return (
    <Drawer isOpen={isPanelOpen} placement="right" onClose={onPanelClose}>
      {children}
    </Drawer>
  );
};

export default ElementsPanel;
