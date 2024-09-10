import React, { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import Image from "next/image";

const ItemType = {
  IMAGE: "image",
};

type imageProp = {
  url: string;
  onDragStart?: () => void;
};

const ImageBlock = ({ url, onDragStart }: imageProp) => {
  const imageRef = useRef(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.IMAGE,
    item: { url },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  useEffect(() => {
    if (isDragging && onDragStart) {
      onDragStart();
    }
  }, [isDragging, onDragStart]);
  drag(imageRef);
  return <Image ref={imageRef} src={url} alt={``} width={100} height={100} />;
};

export default ImageBlock;
