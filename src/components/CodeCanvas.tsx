import { Card, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDrop } from "react-dnd";
import ImageBlock from "./DraggableComponents/ImageBlock";

const ItemTypes = {
  TEXT: "text",
  IMAGE: "image",
  BUTTON: "button",
};

const Canvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.BUTTON, ItemTypes.IMAGE],
    drop: (item) => {
      handleDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [inputs, setInputs] = useState<any>([]);
  const [value, setValue] = useState();

  const handleDrop = (item: any) => {
    setInputs((prevInputs: any) => [
      ...prevInputs,
      {
        id: item.id,
        type: item.type,
        text: item.text,
        value: value,
        url: item.url,
      },
    ]);
    console.log("item", item.type);
  };

  drop(canvasRef);
  return (
    <Card ref={canvasRef} w="90%" h="500px" m={10} p={10} borderRadius="xl">
      {inputs.map((data: any) =>
        ItemTypes.BUTTON ? (
          <Input
            my={1}
            id={data.id}
            defaultValue={data.text}
            value={data.value}
            onChange={(e: any) => setValue(e.target.value)}
          />
        ) : ItemTypes.IMAGE ? (
          <ImageBlock key={data.id} url={data.url} />
        ) : (
          "Error"
        )
      )}
    </Card>
  );
};

export default Canvas;
