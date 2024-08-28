import { Box, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDrop } from "react-dnd";

const ItemTypes = {
  TEXT: "text",
  IMAGE: "image",
  BUTTON: "button",
};

const Canvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BUTTON,
    drop: (item) => {
      handleDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [inputs, setInputs] = useState<any>([]);
  const [value, setValue] = useState();
  console.log("Input field:", inputs);

  const handleDrop = (item: any) => {
    setInputs((prevInputs: any) => [
      ...prevInputs,
      { id: item.id, text: item.text, value: value },
    ]);
    console.log("item", item);
  };

  drop(canvasRef);
  return (
    <Box
      ref={canvasRef}
      w="100%"
      h="500px"
      m={10}
      p={10}
      border="1px solid"
      borderRadius="3xl"
    >
      {inputs.map((data: any) => (
        <Input
          my={1}
          id={data.id}
          value={data.value}
          onChange={(e: any) => setValue(e.target.value)}
        />
      ))}
    </Box>
  );
};

export default Canvas;
