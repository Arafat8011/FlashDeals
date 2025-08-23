"use client"
import { useState } from "react";

const images = [
  {
    id: 0,
    url: "/slide/1.png"
  },
  {
    id: 1,
    url: "/slide/1.png"
  },
  {
    id: 2,
    url: "/slide/2.png"
  },
  {
    id: 3,
    url: "/slide/3.png"
  },
  {
    id: 4,
    url: "/slide/4.png"
  },
  {
    id: 5,
    url: "/slide/5.png"
  }
];

const Slide = () => {
  const [img, setImg] = useState("");
  const handleNext = () => {
    // TODO: add logic
  }
  return (
    <div className="shadow rounded-md">
      <div className="flex items-center text-center ">
        <img className="h-auto max-w-full overflow-hidden rounded-md" src="/slide/1.png" alt="" />
      </div>
    </div>
  )
}

export default Slide;
