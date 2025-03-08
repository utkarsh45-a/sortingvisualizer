import { useEffect, useState } from "react";

export default function BubbleGenerateArray() {
    const [Value, setValue] = useState(30);
    const [speed, setSpeed] = useState(150);
    const [isSorted, setIsSorted] = useState(false);
    const [sorting, setSorting] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(null);
    const [numbers, setNumbers] = useState(() => getRandomArray(Value));

    // Generate a random array
    function getRandomArray(value) {
        return Array.from({ length: value }, () => Math.floor(Math.random() * 200));
    }

    // Sleep function for delay
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Bubble Sort Algorithm
    async function bubbleSort() {
        if (isSorted || sorting) return; // Prevent sorting an already sorted or ongoing sort

        setSorting(true);
        let arr = [...numbers];
        let len = arr.length;
        let sorted = true; // Track if sorting is needed

        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setHighlightIndex(j);
                    setNumbers([...arr]);
                    await sleep(speed);
                    sorted = false; // Sorting was needed
                }
            }
            if (sorted) break; // If no swaps were made, array is already sorted
        }

        setHighlightIndex(null);
        setSorting(false);
        setIsSorted(true);
    }

    // Shuffle Array
    const handleShuffle = () => {
        if (sorting) return;
        setNumbers(getRandomArray(Value));
        setIsSorted(false);
    };

    return (
        <div className="p-4 space-y-6 text-[#ffffff]">
            {/* Controls */}
            <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex flex-col items-center">
                    <input
                        type="range"
                        min="1"
                        max="200"
                        value={Value}
                        onChange={(e) => {
                            if (sorting) return;
                            const newValue = Number(e.target.value);
                            setValue(newValue);
                            setNumbers(getRandomArray(newValue));
                            setIsSorted(false);
                        }}
                        disabled={sorting}
                        className="w-40 md:w-64"
                    />
                    <p className="text-sm">Array length: {Value}</p>
                </div>

                <div className="flex flex-col items-center">
                    <input
                        type="range"
                        min="1"
                        max="500"
                        value={speed}
                        onChange={(e) => setSpeed(Number(e.target.value))}
                        disabled={sorting}
                        className="w-40 md:w-64"
                    />
                    <p className="text-sm">Speed: {speed}</p>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
                {/* Shuffle Button */}
                <button
                    className="px-4 py-2 rounded-2xl text-lg bg-[#484747] hover:bg-gray-600 transition disabled:opacity-50"
                    onClick={handleShuffle}
                    disabled={sorting}
                >
                    Shuffle
                </button>

                {/* Sort Button */}
                <button
                    className="px-4 py-2 rounded-2xl text-lg bg-[#484747] hover:bg-gray-600 transition disabled:opacity-50"
                    onClick={bubbleSort}
                    disabled={sorting || isSorted}
                >
                    {sorting ? "Sorting..." : isSorted ? "Sorted" : "Sort"}
                </button>
            </div>

            {/* Visualization */}
            <div className="flex items-end justify-center space-x-1 p-4 bg-gray-900 rounded-lg overflow-x-auto min-h-[200px]">
                {numbers.map((num, idx) => (
                    <div
                        key={idx}
                        className={`w-4 md:w-6 lg:w-8 transition-all duration-300 ease-in-out rounded 
                            ${idx === highlightIndex ? "bg-[#5af30d] scale-105" : "bg-blue-500"}`}
                        style={{ height: `${num * 2}px` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
