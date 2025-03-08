import { useState } from "react";

export default function QuickGenerateArray() {
  const [value, setValue] = useState(30);
  const [speed, setSpeed] = useState(10);
  const [pivotIndex, setPivotIndex] = useState(null);
  const [swapIndices, setSwapIndices] = useState([]);
  const [compareIndex, setCompareIndex] = useState(null);
  const [sorting, setSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const getRandomArray = (size) =>
    Array.from({ length: size }, () => Math.floor(Math.random() * 200));

  const [numbers, setNumbers] = useState(() => getRandomArray(value));

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIdx = await partition(arr, left, right);
      await quickSort(arr, left, pivotIdx - 1);
      await quickSort(arr, pivotIdx + 1, right);
    }
    setPivotIndex(null);
    setSwapIndices([]);
    setCompareIndex(null);
  }

  async function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;

    setPivotIndex(right);
    setSwapIndices([]);
    setCompareIndex(null);

    for (let j = left; j < right; j++) {
      setCompareIndex(j);
      await sleep(speed / 2);

      if (arr[j] < pivot) {
        i++;
        if (i !== j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setSwapIndices([i, j]);
          setNumbers([...arr]);
          await sleep(speed);
        }
      }
    }

    if (i + 1 !== right) {
      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
      setSwapIndices([i + 1, right]);
      setNumbers([...arr]);
      await sleep(speed);
    }

    setSwapIndices([]);
    setCompareIndex(null);
    return i + 1;
  }

  const handleShuffle = () => {
    if (sorting) return;
    setNumbers(getRandomArray(value));
    setIsSorted(false);
  };

  const handleSort = async () => {
    if (sorting || isSorted) return;
    setSorting(true);
    setIsSorted(false);

    let arrCopy = [...numbers];
    await quickSort(arrCopy, 0, arrCopy.length - 1);

    setSorting(false);
    setIsSorted(true);
  };

  return (
    <>
      <div className="p-4 space-y-4 text-white">
        {/* Sliders */}
        <div className="flex flex-wrap items-center justify-center gap-6">
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
              className="w-40 md:w-64"
            />
            <p className="text-sm">Array length: {value}</p>
          </div>

          <div className="flex flex-col items-center">
            <input
              type="range"
              min="1"
              max="50"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              disabled={sorting}
              className="w-40 md:w-64"
            />
            <p className="text-sm">Speed: {speed}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Shuffle Button */}
          <button
            className="px-4 py-2 rounded-xl text-lg bg-gray-700 hover:bg-gray-600 transition disabled:opacity-50"
            onClick={handleShuffle}
            disabled={sorting}
          >
            Shuffle
          </button>

          {/* Sort Button */}
          <button
            className="px-4 py-2 rounded-xl text-lg bg-gray-700 hover:bg-gray-600 transition disabled:opacity-50"
            onClick={handleSort}
            disabled={sorting || isSorted}
          >
            {isSorted ? "Sorted" : sorting ? "Sorting..." : "Sort"}
          </button>
        </div>

        {/* Visualization */}
        <div className="flex items-end justify-center space-x-1 p-4 bg-gray-900 rounded-lg overflow-x-auto min-h-[200px]">
          {numbers.map((num, idx) => (
            <div
              key={idx}
              className={`w-4 md:w-6 lg:w-8 transition-all duration-150 ease-in-out rounded ${
                idx === pivotIndex
                  ? "bg-white scale-110" // Pivot
                  : swapIndices.includes(idx)
                  ? "bg-red-500 scale-105" // Swapped
                  : idx === compareIndex
                  ? "bg-yellow-500 scale-105" // Compared
                  : "bg-blue-500"
              }`}
              style={{ height: `${num * 2}px` }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
