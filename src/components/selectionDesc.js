export default function SelectionDescription() {
    return (
        <>
       <div className="bg-[#212121] text-white flex flex-col md:flex-row justify-around p-10 md:p-20 gap-10 md:gap-0">
    <div className="w-full md:w-[50vw]">
        <h1 className="text-xl md:text-2xl font-bold">DESCRIPTION</h1>
        <p className="text-lg md:text-2xl mt-4">Selection Sort is a simple sorting algorithm that works by repeatedly selecting the smallest element from the unsorted part of the array and swapping it with the first unsorted element. It has a time complexity of O(n²) in all cases and a space complexity of O(1) since it sorts the array in place.</p>
    </div>
    <div className="w-full md:w-auto">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4">COMPLEXITY</h1>
        <div className="border border-orange-500 w-full md:w-auto">
            <div className="grid grid-cols-2 border-b border-orange-500 p-2 text-sm md:text-base">
                <span className="font-semibold">Average Complexity</span>
                <span className="text-right">O(n²)</span>
            </div>
            <div className="grid grid-cols-2 border-b border-orange-500 p-2 text-sm md:text-base">
                <span className="font-semibold">Best Case</span>
                <span className="text-right">O(n²)</span>
            </div>
            <div className="grid grid-cols-2 border-b border-orange-500 p-2 text-sm md:text-base">
                <span className="font-semibold">Worst Case</span>
                <span className="text-right">O(n²)</span>
            </div>
            <div className="grid grid-cols-2 p-2 text-sm md:text-base">
                <span className="font-semibold">Space Complexity</span>
                <span className="text-right">O(1)</span>
            </div>
        </div>
    </div>
</div>

        </>
    )

}