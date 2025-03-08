export default function InsertionDescription() {
    return (
        <>
     <div className="bg-[#212121] text-white flex flex-col md:flex-row justify-around p-6 md:p-12 lg:p-20 gap-8">
  <div className="w-full md:w-1/2">
    <h1 className="text-xl md:text-2xl font-bold">DESCRIPTION</h1>
    <p className="text-base md:text-lg lg:text-2xl mt-4">
      Insertion Sort is a simple sorting algorithm that builds a sorted array one element at a time by inserting each element into its correct position. 
      It has a time complexity of O(n²) in worst and average cases, but O(n) in the best case when the array is already sorted. 
      It is efficient for small datasets and partially sorted data.
    </p>
  </div>

  <div className="w-full md:w-1/2">
    <h1 className="text-xl md:text-2xl font-bold text-center mb-4">COMPLEXITY</h1>
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