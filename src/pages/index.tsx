import RootLayout from "@/app/layout";
import React from "react";

("use-client");
const Index = () => {
  return (
    <RootLayout>
      <h1 className="text-red-500 text-6xl bg-green-500">Hello World</h1>
    </RootLayout>
  );
};

export default Index;
