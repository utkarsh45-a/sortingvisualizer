export default function BubbleDescription() {
    return (
        <>
    <div className="bg-[#212121] text-white p-10 lg:p-20 flex flex-col lg:flex-row justify-center lg:justify-around space-y-10 lg:space-y-0">
      {/* Description Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-xl lg:text-2xl font-bold">DESCRIPTION</h1>
        <p className="text-lg lg:text-2xl mt-4">
          Bubble Sort is a simple sorting algorithm that repeatedly compares and swaps adjacent elements if they are in the wrong order. This process continues until the array is fully sorted. It has a time complexity of O(n²) in worst and average cases, but O(n) in the best case when the array is already sorted. It is inefficient for large datasets but useful for educational purposes and small lists.
        </p>
      </div>

      {/* Complexity Section */}
      <div className="w-full lg:max-w-md mx-auto lg:mx-0">
        <h1 className="text-xl lg:text-2xl font-bold text-center mb-4">COMPLEXITY</h1>
        <div className="border border-orange-500 w-full">
          <div className="grid grid-cols-2 border-b border-orange-500 p-2">
            <span className="font-semibold">Average Complexity</span>
            <span className="text-right">O(n²)</span>
          </div>
          <div className="grid grid-cols-2 border-b border-orange-500 p-2">
            <span className="font-semibold">Best Case</span>
            <span className="text-right">O(n)</span>
          </div>
          <div className="grid grid-cols-2 border-b border-orange-500 p-2">
            <span className="font-semibold">Worst Case</span>
            <span className="text-right">O(n²)</span>
          </div>
          <div className="grid grid-cols-2 p-2">
            <span className="font-semibold">Space Complexity</span>
            <span className="text-right">O(1)</span>
          </div>
        </div>
      </div>
    </div>

        </>
    )

}