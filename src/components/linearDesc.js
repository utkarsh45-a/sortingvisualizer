export default function LinearDescription() {
    return (
        <>
           <div className="bg-[#212121] text-white flex flex-col lg:flex-row justify-around p-10 lg:p-20 space-y-10 lg:space-y-0">
      {/* Description Section */}
      <div className="w-full lg:w-[50vw]">
        <h1 className="text-2xl font-bold">DESCRIPTION</h1>
        <p className="text-lg lg:text-2xl mt-4">
        Linear Search is a simple algorithm that finds an element in a list by checking each item one by one. It works on both sorted and unsorted arrays, making it easy to implement but inefficient for large datasets. The search starts at the first element and moves sequentially until the target is found or the list ends. If a match is found, the index is returned; otherwise, it returns -1. The worst-case time complexity is O(n), while the best case is O(1) when the element is at the beginning. It is best suited for small datasets or unsorted data.
        </p>
      </div>

      {/* Complexity Section */}
      <div className="w-full lg:w-auto">
        <h1 className="text-2xl font-bold text-center mb-4">COMPLEXITY</h1>
        <div className="border border-orange-500 w-full max-w-md mx-auto lg:mx-0">
          <div className="grid grid-cols-2 border-b border-orange-500 p-2">
            <span className="font-semibold">Average Complexity</span>
            <span className="text-right">O(n)</span>
          </div>
          <div className="grid grid-cols-2 border-b border-orange-500 p-2">
            <span className="font-semibold">Best Case</span>
            <span className="text-right">O(1)</span>
          </div>
          <div className="grid grid-cols-2 border-b border-orange-500 p-2">
            <span className="font-semibold">Worst Case</span>
            <span className="text-right">O(n)</span>
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




