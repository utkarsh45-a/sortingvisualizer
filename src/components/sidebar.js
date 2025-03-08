

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Toggle Button */}
            <button
                className=" ml-5   text-white  rounded-md z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-900 text-white p-4 w-64 pt-20
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 shadow-lg`}
            >
                <h2 className="text-white text-2xl uppercase font-bold ">SORTING</h2>
                <ul className="mt-4 space-y-2">
                    {[
            { name: "Quick Sort", path: "/quick" },
            { name: "Merge Sort", path: "/merge" },
            { name: "Bubble Sort", path: "/" },
            { name: "Selection Sort", path: "/selection" },
            { name: "Insertion Sort", path: "/insertion" },
            { name: "linear search", path: "/linear" },
            { name: "binary search", path: "/binary" },
          ].map(
                        (algo, index) => (
                            <li key={index} className="text-lg hover:text-gray-500 cursor-pointer">
                               <Link to={algo.path} onClick={() => setIsOpen(false)}>{algo.name}</Link>

                            </li>
                        )
                    )}
                </ul>
            </div>
        </>
    );
}
