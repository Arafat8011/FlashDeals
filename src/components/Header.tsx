"use client"
import Cart from "@/features/cart/Cart";
import Link from "next/link";
import { useState } from "react"
import { FaShoppingCart, FaHome, FaUserCircle, FaBox } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react"
import { motion } from "framer-motion"
import { categories } from "@/data/menuItems"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);
    const handleToggleCart = () => {
        setToggleCart(!toggleCart)
    }
    return (
        <header className="bg-white">
            <div className="container flex justify-between items-center py-1 px-4 mx-auto">
                {!isOpen && (
                    <h1 className="text-2xl font-bold text-blue-600">
                        <Link href="/">
                            FlashDeals
                        </Link>
                    </h1>
                )}
                <nav className={isOpen ? "w-full" : " "}>
                    <ul className="gap-4 hidden md:flex py-4">
                        <li><a href="/" className="hover:text-blue-600"><FaHome size={20} /></a></li>
                        <li><button onClick={() => setToggleCart(!toggleCart)} className="relative hover:text-blue-600">
                            <FaShoppingCart size={20} />
                            <h3 className="absolute scale-75 right-[-14px] top-[-10px] p-1.5 bg-red-500 flex items-center justify-center rounded-full font-bold leading-none text-white">
                                {/* TODO: Cart Counter state replace here*/}
                                0</h3>
                        </button> </li>
                    </ul>
                    <div className="md:hidden flex justify-end">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} />
                    </div>
                    {isOpen && (
                        <motion.ul className="flex-col items-center text-center justify-center" >
                            {categories.map(menu => (
                                <li className="w-full ">
                                    {menu.sub.map(item => (
                                        <li className="hover:bg-gray-200 py-2">{item.name}</li>
                                    ))}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                    {
                        toggleCart && <Cart toggle={handleToggleCart} />
                    }
                </nav>
            </div>
            {/*bottom bar for mobile*/}
            <div className="md:hidden w-full bg-black  fixed bottom-0 left-0 z-2">
                <div className="h-full text-white px-10">
                    <ul className="flex  justify-between items-center align-middle text-whit text-[12px]">
                        <li className="p-1.5 flex align-middle mx-auto "><a href="/" className=" hover:text-gray-500 flex-col align-middle justify-center "><FaHome size={20} className="mx-auto" /> <span >Home</span> </a></li>
                        <li className="p-1.5 flex align-middle mx-auto ">
                            <button onClick={() => setToggleCart(!toggleCart)} className="hover:text-gray-500 relative">
                                <FaShoppingCart size={20} className="mx-auto" />
                                <span>Cart</span>
                                <h3 className="absolute h-4 w-4  right-[-10px] top-[-6px] bg-red-500 flex items-center justify-center rounded-full font-[5px] leading-none p-1">
                                    {/* TODO: Cart Counter state replace here*/}
                                    0</h3>
                            </button> </li>
                        <li className="p-1.5 flex align-middle mx-auto "><Link href="/about" className=" hover:text-gray-500"><FaUserCircle size={20} className="mx-auto" /><span>Account</span></Link></li>
                    </ul>
                </div>
            </div>
        </header >
    )
}
export default Header;
