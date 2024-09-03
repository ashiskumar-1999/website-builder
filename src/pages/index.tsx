import React, { useState } from "react";
import LayOut from "@/components/LayOut";
import SideBar from "@/components/SideBar";
import CodeCanvas from "@/components/CodeCanvas";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";

export default function Home() {
  const [pages, setPages] = useState<{ id: number }[]>([{ id: 1 }]);
  const handleAddPage = () => {
    setPages([...pages, { id: pages.length + 1 }]);
  };
  return (
    <LayOut>
      <SideBar />
      <VStack direction="column" w="full" p={3} justifyContent="center">
        {pages.map((page) => (
          <CodeCanvas key={page.id} />
        ))}

        <Button
          bgColor="green.300"
          color="black"
          _hover={{ bgColor: "none" }}
          onClick={handleAddPage}
        >
          Add New Page
        </Button>
      </VStack>
    </LayOut>
  );
}
