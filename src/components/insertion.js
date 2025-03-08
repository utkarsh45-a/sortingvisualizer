import { useState } from "react";

export default function InsertionGenerateArray() {
  const [value, setValue] = useState(30);
  const [speed, setSpeed] = useState(10);
  const [highlightIndex, setHighlightIndex] = useState(null);
  const [swappingIndex, setSwappingIndex] = useState(null);
  const [sorting, setSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const getRandomArray = (size) =>
    Array.from({ length: size }, () => Math.floor(Math.random() * 200));

  const [numbers, setNumbers] = useState(() => getRandomArray(value));

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function insertionSort() {
    if (sorting || isSorted) return; // Prevent re-sorting

    setSorting(true);
    setIsSorted(false);

    let arr = [...numbers];

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      setHighlightIndex(i);
      await sleep(speed);

      while (j >= 0 && arr[j] > key) {
        setSwappingIndex(j); // Highlight current swap
        arr[j + 1] = arr[j];
        setNumbers([...arr]);
        await sleep(speed);
        j--;
      }

      arr[j + 1] = key;
      setNumbers([...arr]);
      setSwappingIndex(null);
      await sleep(speed);
    }

    setHighlightIndex(null);
    setSorting(false);
    setIsSorted(true);
  }

  const handleShuffle = () => {
    if (sorting) return;
    setNumbers(getRandomArray(value));
    setIsSorted(false); // Reset sorting state
  };

  return (
    <>
      <div className="pt-7 px-4 pb-4 flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14 text-white">
        {/* Shuffle Button */}
        <button
          className="px-3 py-2 rounded-xl text-lg md:text-xl bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 disabled:opacity-50"
          onClick={handleShuffle}
          disabled={sorting}
        >
          Shuffle
        </button>

        {/* Sort Button */}
        <button
          className="px-3 py-2 rounded-xl text-lg md:text-xl bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 disabled:opacity-50"
          onClick={insertionSort}
          disabled={sorting || isSorted}
        >
          {isSorted ? "Sorted" : sorting ? "Sorting..." : "Sort"}
        </button>

        {/* Array Size Input */}
        <div className="flex flex-col items-center">
          <input
            type="range"
            min="1"
            max="200"
            value={value}
            onChange={(e) => {
              if (sorting) return;
              const newValue = Number(e.target.value);
              setValue(newValue);
              setNumbers(getRandomArray(newValue));
              setIsSorted(false);
            }}
            disabled={sorting}
            className="cursor-pointer"
          />
          <p className="text-sm md:text-base">Array length: {value}</p>
        </div>

        {/* Sorting Speed Input */}
        <div className="flex flex-col items-center">
          <input
            type="range"
            min="1"
            max="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={sorting}
            className="cursor-pointer"
          />
          <p className="text-sm md:text-base">Speed: {speed}</p>
        </div>
      </div>

      {/* Visualization */}
      <div className="flex items-end justify-center space-x-1 p-4 bg-gray-900 rounded-lg">
        {numbers.map((num, idx) => (
          <div
            key={idx}
            className={`w-4 md:w-6 lg:w-8 transition-all duration-300 ease-in-out rounded 
              ${
                idx === highlightIndex
                  ? "bg-yellow-500 scale-105"
                  : idx === swappingIndex
                  ? "bg-red-500"
                  : "bg-blue-500"
              }`}
            style={{ height: `${num * 2}px` }}
          ></div>
        ))}
      </div>
    </>
  );
}
