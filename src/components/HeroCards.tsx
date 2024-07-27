import { useEffect, useState } from "react";
import { ChatLayout } from "./chat/chat-layout";
import { parseCookies } from "nookies";

export const HeroCards = () => {
  const [defaultLayout, setDefaultLayout] = useState();

  useEffect(() => {
    const cookies = parseCookies();
    const layout = cookies["react-resizable-panels:layout"];
    if (layout) {
      setDefaultLayout(JSON.parse(layout));
    }
  }, []);

  return (
    <div className="z-10 border rounded-lg w-full h-full text-sm lg:flex">
      <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
    </div>
  );
};
