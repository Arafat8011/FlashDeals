"use client"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [

  {
    id: 0,
    url: "/slide/test.jpg"
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
  },
  {
    id: 6,
    url: "/slide/6.png"
  }
];

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex + 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Changed to 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shadow ">
      <div className="grid md:grid-cols-3 grid-rows-2 gap-2 object-cover">
        <div className={`col-span-2 row-span-2 relative overflow-hidden`}>
          {images.map((img, index) => (
            <div key={index} className={`absolute transition-opacity duration-700 
                ${index === currentIndex ? 'opacity-100' : "opacity-0"}`}>
              <img src={img.url} alt="" />
            </div>
          ))}
          <button className="absolute left-8 top-1/2 cursor-pointer text-primary hover:bg-button-hover hover:text-primary-fg hover:rounded-full active:bg-button-active hover:scale-110 active:scale-95" onClick={() => prevSlide()}><ArrowLeft size={30} /></button>
          <button className="absolute right-8 top-1/2 cursor-pointer text-primary hover:bg-button-hover hover:text-primary-fg hover:rounded-full active:bg-button-active hover:scale-110 active:scale-95" onClick={() => nextSlide()}><ArrowRight size={30} /></button>
        </div>
        <img className="h-auto max-w-full w-full mx-auto overflow-hidden " src="/slide/test.jpg" alt="" />
        <img className="h-auto max-w-full w-full mx-auto overflow-hidden " src="/slide/test.jpg" alt="" />
      </div>
    </div>
  )
}

export default Slide;
