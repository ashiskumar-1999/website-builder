import React, { ReactNode } from "react";
import { Flex, HStack } from "@chakra-ui/react";

const LayOut = ({ children }: { children: ReactNode }) => {
  return (
    <Flex flexDirection="row" bgColor="gray.200">
      {children}
    </Flex>
  );
};

export default LayOut;
