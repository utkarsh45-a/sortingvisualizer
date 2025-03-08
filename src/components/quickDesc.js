export default function QuickDescription() {
    return (
        <>
           <div className="bg-[#212121] text-white flex flex-col lg:flex-row justify-around p-10 lg:p-20 space-y-10 lg:space-y-0">
      {/* Description Section */}
      <div className="w-full lg:w-[50vw]">
        <h1 className="text-2xl font-bold">DESCRIPTION</h1>
        <p className="text-lg lg:text-2xl mt-4">
          Quick Sort is a divide-and-conquer sorting algorithm that selects a pivot element, partitions the array into two subarrays (elements smaller and larger than the pivot), and recursively sorts them. It has an average and best-case time complexity of O(n log n) but O(n²) in the worst case (when the pivot is poorly chosen). It is faster than Merge Sort in practice and works efficiently for large datasets.
        </p>
      </div>

      {/* Complexity Section */}
      <div className="w-full lg:w-auto">
        <h1 className="text-2xl font-bold text-center mb-4">COMPLEXITY</h1>
        <div className="border border-orange-500 w-full max-w-md mx-auto lg:mx-0">
          <div className="grid grid-cols-2 border-b border-orange-500 p-2">
            <span className="font-semibold">Average Complexity</span>
            <span className="text-right">O(n log n)</span>
          </div>
          <div className="grid grid-cols-2 border-b border-orange-500 p-2">
            <span className="font-semibold">Best Case</span>
            <span className="text-right">O(n log n)</span>
          </div>
          <div className="grid grid-cols-2 border-b border-orange-500 p-2">
            <span className="font-semibold">Worst Case</span>
            <span className="text-right">O(n²)</span>
          </div>
          <div className="grid grid-cols-2 p-2">
            <span className="font-semibold">Space Complexity</span>
            <span className="text-right">O(n)</span>
          </div>
        </div>
      </div>
    </div>
        </>
    )

}