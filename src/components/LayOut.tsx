import React, { ReactNode } from "react";
import { HStack } from "@chakra-ui/react";

const LayOut = ({ children }: { children: ReactNode }) => {
  return <HStack>{children}</HStack>;
};

export default LayOut;
