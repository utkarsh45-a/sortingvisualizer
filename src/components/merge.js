import { useState } from "react";

export default function MergeGenerateArray() {
  const [value, setValue] = useState(30);
  const [speed, setSpeed] = useState(50);
  const [highlightIndices, setHighlightIndices] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const getRandomArray = (size) =>
    Array.from({ length: size }, () => Math.floor(Math.random() * 200));

  const [numbers, setNumbers] = useState(() => getRandomArray(value));

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function mergeSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    await mergeSort(arr, left, mid);
    await mergeSort(arr, mid + 1, right);
    await merge(arr, left, mid, right);
  }

  async function merge(arr, left, mid, right) {
    let leftArr = arr.slice(left, mid + 1);
    let rightArr = arr.slice(mid + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;

    while (i < leftArr.length && j < rightArr.length) {
      setHighlightIndices([k, left + i, mid + 1 + j]);

      if (leftArr[i] < rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }

      setNumbers([...arr]);
      await sleep(speed);
      k++;
    }

    while (i < leftArr.length) {
      setHighlightIndices([k, left + i]);
      arr[k] = leftArr[i];
      setNumbers([...arr]);
      await sleep(speed);
      i++;
      k++;
    }

    while (j < rightArr.length) {
      setHighlightIndices([k, mid + 1 + j]);
      arr[k] = rightArr[j];
      setNumbers([...arr]);
      await sleep(speed);
      j++;
      k++;
    }

    setHighlightIndices([]);
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
    await mergeSort(arrCopy, 0, arrCopy.length - 1);

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
              max="500"
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
                highlightIndices.includes(idx) ? "bg-yellow-500 scale-110" : "bg-blue-500"
              }`}
              style={{ height: num * 2 + "px" }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
