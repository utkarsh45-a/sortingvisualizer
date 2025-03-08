import { useState, useEffect } from "react";

export default function BinarySearch() {
    const [arraySize, setArraySize] = useState(30);
    const [speed, setSpeed] = useState(200);
    const [searchNumber, setSearchNumber] = useState("");
    const [lowIndex, setLowIndex] = useState(null);
    const [midIndex, setMidIndex] = useState(null);
    const [highIndex, setHighIndex] = useState(null);
    const [foundIndex, setFoundIndex] = useState(null);
    const [searching, setSearching] = useState(false);
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        setNumbers(generateSortedArray(arraySize));
    }, [arraySize]);

    // Generate a sorted array
    function generateSortedArray(size) {
        return Array.from({ length: size }, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b);
    }

    // Sleep function for delay
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Binary Search Algorithm
    async function binarySearch() {
        if (searchNumber === "" || searching) return; // Prevent empty or multiple searches

        setSearching(true);
        setFoundIndex(null);
        setLowIndex(null);
        setMidIndex(null);
        setHighIndex(null);

        let low = 0;
        let high = numbers.length - 1;
        let target = parseInt(searchNumber);

        while (low <= high) {
            setLowIndex(low);
            setHighIndex(high);
            let mid = Math.floor((low + high) / 2);
            setMidIndex(mid);
            await sleep(speed);

            if (numbers[mid] === target) {
                setFoundIndex(mid);
                break;
            } else if (numbers[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        setLowIndex(null);
        setMidIndex(null);
        setHighIndex(null);
        setSearching(false);
    }

    const handleShuffle = () => {
        if (searching) return;
        setNumbers(generateSortedArray(arraySize));
        setFoundIndex(null);
        setLowIndex(null);
        setMidIndex(null);
        setHighIndex(null);
    };

    return (
        <>
            {/* Controls */}
            <div className="flex flex-wrap justify-center items-center gap-6 p-4 bg-gray-800 text-white">
                {/* Shuffle Button */}
                <button 
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md disabled:opacity-50"
                    onClick={handleShuffle}
                    disabled={searching}
                >
                    Shuffle With (Sort)
                </button>

                {/* Search Input */}
                <input
                    type="number"
                    placeholder="Enter number"
                    className="p-2 rounded-md bg-gray-700 text-white"
                    value={searchNumber}
                    onChange={(e) => setSearchNumber(e.target.value)}
                    disabled={searching}
                />

                {/* Search Button */}
                <button 
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md border-white disabled:opacity-50"
                    onClick={binarySearch}
                    disabled={searching || searchNumber === ""}
                >
                    {searching ? "Searching..." : "Search"}
                </button>

                {/* Array Size Control */}
                <div>
                    <p>Array Size: {arraySize}</p>
                    <input
                        type="range"
                        min="5"
                        max="100"
                        value={arraySize}
                        onChange={(e) => {
                            if (searching) return;
                            const newSize = Number(e.target.value);
                            setArraySize(newSize);
                            setNumbers(generateSortedArray(newSize));
                            setFoundIndex(null);
                            setLowIndex(null);
                            setMidIndex(null);
                            setHighIndex(null);
                        }}
                        disabled={searching}
                    />
                </div>

                {/* Speed Control */}
                <div>
                    <p>Speed: {speed} ms</p>
                    <input
                        type="range"
                        min="10"
                        max="500"
                        value={speed}
                        onChange={(e) => setSpeed(Number(e.target.value))}
                        disabled={searching}
                    />
                </div>
            </div>

            {/* Visualization */}
            <div className="flex items-end justify-center space-x-1 p-4 bg-gray-900 rounded-lg overflow-x-auto min-h-[200px]">
                {numbers.map((num, idx) => (
                    <div
                        key={idx}
                        className={`w-6 md:w-8 transition-all duration-300 ease-in-out rounded 
                            ${idx === foundIndex ? "bg-green-500 scale-110" : 
                              idx === midIndex ? "bg-yellow-500 scale-105" :
                              idx === lowIndex ? "bg-red-500 scale-105" :
                              idx === highIndex ? "bg-purple-500 scale-105" : "bg-blue-500"}`}
                        style={{ height: `${num * 3}px` }}
                    >
                        <p className="text-[10px] text-white text-center">{num}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
