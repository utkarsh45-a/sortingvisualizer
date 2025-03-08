import { useState } from "react";

export default function LinearSearch() {
    const [arraySize, setArraySize] = useState(30);
    const [speed, setSpeed] = useState(178);
    const [highlightIndex, setHighlightIndex] = useState(null);
    const [searchNumber, setSearchNumber] = useState("");
    const [foundIndex, setFoundIndex] = useState(null);
    const [searching, setSearching] = useState(false);
    const [numbers, setNumbers] = useState(() => generateRandomArray(30));

    // Generate a random array
    function generateRandomArray(size) {
        return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    }

    // Sleep function for delay
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Linear Search Algorithm with Visualization
    async function linearSearch() {
        if (searchNumber === "" || searching) return; // Prevent empty or multiple searches

        setSearching(true);
        setFoundIndex(null); // Reset found state

        for (let i = 0; i < numbers.length; i++) {
            setHighlightIndex(i);
            await sleep(speed);

            if (numbers[i] === parseInt(searchNumber)) {
                setFoundIndex(i);
                setHighlightIndex(null);
                setSearching(false);
                return;
            }
           
        }

        setHighlightIndex(null); // Reset highlight if not found
        setSearching(false);
        alert("number not found")
    }

    const handleShuffle = () => {
        if (searching) return; // Prevent shuffle during search
        setNumbers(generateRandomArray(arraySize));
        setFoundIndex(null);
        setHighlightIndex(null);
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
                    Shuffle
                </button>

                {/* Search Input */}
                <input
                    type="number"
                    placeholder="Enter number"
                    className="p-2 text-white rounded-2xl bg-gray-700"
                    value={searchNumber}
                    onChange={(e) => setSearchNumber(e.target.value)}
                    disabled={searching}
                />

                {/* Search Button */}
                <button 
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md border-white disabled:opacity-50"
                    onClick={linearSearch}
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
                            const newValue = Number(e.target.value);
                            setArraySize(newValue);
                            setNumbers(generateRandomArray(newValue));
                            setFoundIndex(null);
                            setHighlightIndex(null);
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
                              idx === highlightIndex ? "bg-[#ff0000]" : "bg-blue-500"}`}
                        style={{ height: `${num * 3}px` }}
                    >
                        <p className="text-[10px] text-white text-center">{num}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
