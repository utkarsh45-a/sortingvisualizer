import { useState } from "react";

export default function SelectionGenerateArray() {
  const [value, setValue] = useState(30);
  const [speed, setSpeed] = useState(150);
  const [sorting, setSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(null)

  const getRandomArray = (size) =>
    Array.from({ length: size }, () => Math.floor(Math.random() * 200));

  const [numbers, setNumbers] = useState(() => getRandomArray(value));

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function selectionSort() {
    if (sorting || isSorted) return;
    setSorting(true);
    setIsSorted(false);

    let arr = [...numbers];
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      setHighlightIndex(i); // Highlight selected index

      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setNumbers([...arr]);
        await sleep(speed);
      }
    }

    setHighlightIndex(null);
    setSorting(false);
    setIsSorted(true);
  }

  const handleShuffle = () => {
    if (sorting) return;
    setNumbers(getRandomArray(value));
    setIsSorted(false);
  };

  return (
    <div className="text-white p-5 md:p-10">
      {/* Controls */}
      <div className="flex flex-wrap justify-center items-center gap-6 text-center">
        <button
          className="px-4 py-2 rounded-2xl text-lg md:text-2xl bg-[#484747] hover:bg-gray-600 transition disabled:opacity-50"
          onClick={handleShuffle}
          disabled={sorting}
        >
          Shuffle
        </button>

        <button
          className="px-4 py-2 rounded-2xl text-lg md:text-2xl bg-[#484747] hover:bg-gray-600 transition disabled:opacity-50"
          onClick={selectionSort}
          disabled={sorting || isSorted}
        >
          {isSorted ? "Sorted" : sorting ? "Sorting..." : "Sort"}
        </button>

        {/* Array Size Slider */}
        <div className="flex flex-col items-center">
          <input
            type="range"
            min="2"
            max="200"
            value={value}
            className="w-40 md:w-64"
            onChange={(e) => {
              if (sorting) return;
              const newValue = Number(e.target.value);
              setValue(newValue);
              setNumbers(getRandomArray(newValue));
              setIsSorted(false);
            }}
            disabled={sorting}
          />
          <p>Array length: {value}</p>
        </div>

        {/* Speed Slider */}
        <div className="flex flex-col items-center">
          <input
            type="range"
            min="1"
            max="500"
            value={speed}
            className="w-40 md:w-64"
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={sorting}
          />
          <p>Speed: {speed}</p>
        </div>
      </div>

      {/* Visualization */}
      <div className="overflow-x-auto mt-6 p-4 bg-gray-900 rounded-lg flex justify-center items-end space-x-1">
        {numbers.map((num, idx) => (
          <div
            key={idx}
            className={`w-4 md:w-6 lg:w-8 transition-all duration-300 ease-in-out rounded 
              ${idx === highlightIndex ? "bg-[#1ff403] scale-105" : "bg-blue-500"}`}
            style={{ height: `${num * 2}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
