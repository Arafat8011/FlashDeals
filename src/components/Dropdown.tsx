"use client";
import { categories } from "@/data/menuItems"

export default function CategoryDropdown() {
    return (
        <div className="w-full text-left bg-primary text-primary-fg hidden md:block " >
            <ul className="containe flex justify-center text-center">
                {categories.map((menu, index) => (
                    <li key={index} className="py-1 w-56 text-primary-fg  hover:bg-primary/80 group relative">
                        <span>
                            {menu.name}
                        </span>
                        <ul className=" absolute hidden group-hover:block bg-primary text-primary-fg text-center w-full rounded-md z-50">
                            {menu.sub.map((item, index) => (
                                <li key={index} className=" flex items-center hover:bg-surface hover:text-primary rounded-md px-2 py-1 ">
                                    <a href="#" className="">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div >
    );
}

