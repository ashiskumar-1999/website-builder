import React, { ReactNode } from "react";
import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

type PanelProp = {
  isPanelOpen: boolean;
  onPanelClose: () => void;
  children: ReactNode;
};
const ElementsPanel = ({ isPanelOpen, onPanelClose, children }: PanelProp) => {
  return (
    <Drawer isOpen={isPanelOpen} placement="left" onClose={onPanelClose}>
      <DrawerOverlay />
      <DrawerContent p={3}>{children}</DrawerContent>
    </Drawer>
  );
};

export default ElementsPanel;
