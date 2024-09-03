import React, { ReactNode } from "react";
import { HStack } from "@chakra-ui/react";

const LayOut = ({ children }: { children: ReactNode }) => {
  return <HStack bgColor="gray.200">{children}</HStack>;
};

export default LayOut;
