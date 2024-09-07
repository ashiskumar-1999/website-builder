import React, { useState } from "react";
import {
  Button,
  Icon,
  Image,
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

type ImageProp = {
  id: number;
  url: string;
};
const SideBar = () => {
  const {
    isOpen: isPanelOpen,
    onOpen: onPanelOpen,
    onClose: onPanelClose,
  } = useDisclosure();
  const [buttonText, setButtonText] = useState("");
  const [image, setImage] = useState<ImageProp[]>([]);

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const imageURL = e.target?.result as string;
        const newImage: ImageProp = {
          id: new Date().getTime(),
          url: imageURL,
        };
        setImage([...image, newImage]);
        console.log("imageURL", imageURL);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <VStack
        h="100vh"
        px={1}
        py={20}
        bgColor="black"
        spacing={5}
        top={0}
        position="sticky"
        overflow="hidden"
      >
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
      ) : buttonText === "Image" ? (
        <ElementsPanel isPanelOpen={isPanelOpen} onPanelClose={onPanelClose}>
          <Input type="file" onChange={handleUploadImage} placeholder="" />
          {image.map((imageData) => (
            <Image key={imageData.id} src={imageData.url} />
          ))}
        </ElementsPanel>
      ) : (
        <ElementsPanel isPanelOpen={isPanelOpen} onPanelClose={onPanelClose}>
          "This Panel needs to be added."
        </ElementsPanel>
      )}
    </>
  );
};

export default SideBar;
