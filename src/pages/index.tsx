import RootLayout from "@/app/layout";
import React from "react";
import Image from "next/image";
import Hero from "/public/img/Hero-img.jpg";

const Index = () => {
  return (
    <div className="flex justify-center">
      <Image src={Hero} alt="" />
    </div>
  );
};

export default Index;
