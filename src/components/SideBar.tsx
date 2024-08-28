import React, { useState } from "react";
import {
  Button,
  Icon,
  Input,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { RxText } from "react-icons/rx";
import { CiImageOn, CiVideoOn } from "react-icons/ci";
import ElementsPanel from "./ElementsPanel";
import TextBlock from "./TextBlock";

const Buttons = [
  {
    id: "1",
    label: "Text",
    icon: RxText,
  },
  {
    id: "2",
    label: "Image",
    icon: CiImageOn,
  },
  {
    id: "3",
    label: "Video",
    icon: CiVideoOn,
  },
];
const SideBar = ({ onClick }: { onClick?: () => void }) => {
  const {
    isOpen: isPanelOpen,
    onOpen: onPanelOpen,
    onClose: onPanelClose,
  } = useDisclosure();
  const [buttonText, setButtonText] = useState("");
  console.log("Active Block", buttonText);
  return (
    <>
      <VStack h="100vh" px={1} py={20} bgColor="black" spacing={5}>
        {Buttons.map((button) => (
          <Button
            variant="ghost"
            key={button.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            size="lg"
            color="gray"
            _hover={{ color: "white" }}
            _focus={{ bgColor: "gray.800", color: "white" }}
            onClick={() => {
              onPanelOpen();
              setButtonText(button.label);
            }}
          >
            <Icon as={button.icon} />
            <Text>{button.label}</Text>
          </Button>
        ))}
      </VStack>
      {buttonText === "Text" ? (
        <ElementsPanel isPanelOpen={isPanelOpen} onPanelClose={onPanelClose}>
          <TextBlock id="1" text="Add a Heading" onDragStart={onPanelClose} />
        </ElementsPanel>
      ) : (
        <ElementsPanel isPanelOpen={isPanelOpen} onPanelClose={onPanelClose}>
          "Go to Text"
        </ElementsPanel>
      )}
    </>
  );
};

export default SideBar;
