import React, { useEffect, useRef } from "react";
import { Button } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

const ItemTypes = {
  BUTTON: "button",
};

const TextBlock = ({
  id,
  text,
  onDragStart,
}: {
  id: string;
  text: string;
  onDragStart: () => void;
}) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BUTTON,
    item: { id, text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  useEffect(() => {
    if (isDragging && onDragStart) {
      onDragStart();
    }
  }, [isDragging, onDragStart]);
  drag(ref);
  return <Button ref={ref}>{text}</Button>;
};

export default TextBlock;
