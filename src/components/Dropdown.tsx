"use client";
import { categories } from "@/data/menuItems"

export default function CategoryDropdown() {
    return (
        <div className="w-full text-left bg-gray-100 hidden md:block" >
            <ul className="containe flex justify-center text-center">
                {categories.map(menu => (
                    <li className="py-1 w-56 rounded-md hover:bg-gray-200 group relative">
                        <span>
                            {menu.name}
                        </span>
                        <ul className=" absolute hidden group-hover:block bg-gray-100 text-center w-full rounded-md">
                            {menu.sub.map(item => (
                                <li className=" flex items-center  hover:bg-gray-200 rounded-md px-2 py-1">
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

