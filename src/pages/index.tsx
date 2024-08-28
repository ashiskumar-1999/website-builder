import React, { useState } from "react";
import LayOut from "@/components/LayOut";
import SideBar from "@/components/SideBar";
import CodeCanvas from "@/components/CodeCanvas";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const [pages, setPages] = useState([{ page: <CodeCanvas /> }]);
  const handleAddPage = () => {
    setPages(() => [...pages]);
  };
  return (
    <LayOut>
      <SideBar />

      <CodeCanvas />
      <Button onClick={handleAddPage}>Add New Page</Button>
    </LayOut>
  );
}
