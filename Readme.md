# Sorting and Searching Visualizer

## Overview
This is a React-based web application that provides a visual representation of various sorting and searching algorithms. The application uses React Router to navigate between different algorithm visualizations.

## Features
- Sorting Algorithms:
  - Bubble Sort
  - Insertion Sort
  - Selection Sort
  - Quick Sort
  - Merge Sort

- Searching Algorithms:
  - Linear Search
  - Binary Search

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open the browser and go to:
   ```
   http://localhost:3000
   ```

## Project Structure
```
root/
  ├── src/
  │   ├── components/
  │   │   ├── BubbleSort
  │   │   │   ├── bubblebody.js - Handles UI layout for Bubble Sort.
  │   │   │   ├── bubble.js - Implements Bubble Sort logic and visualization.
  │   │   │   ├── bubbleDesc.js - Contains description and details about Bubble Sort.
  │   │   ├── InsertionSort
  │   │   │   ├── insertionbody.js - Handles UI layout for Insertion Sort.
  │   │   │   ├── insertion.js - Implements Insertion Sort logic and visualization.
  │   │   │   ├── insertionDesc.js - Contains description and details about Insertion Sort.
  │   │   ├── SelectionSort
  │   │   │   ├── selectionbody.js - Handles UI layout for Selection Sort.
  │   │   │   ├── selection.js - Implements Selection Sort logic and visualization.
  │   │   │   ├── selectionDesc.js - Contains description and details about Selection Sort.
  │   │   ├── QuickSort
  │   │   │   ├── quickbody.js - Handles UI layout for Quick Sort.
  │   │   │   ├── quick.js - Implements Quick Sort logic and visualization.
  │   │   │   ├── quickDesc.js - Contains description and details about Quick Sort.
  │   │   ├── MergeSort
  │   │   │   ├── mergebody.js - Handles UI layout for Merge Sort.
  │   │   │   ├── merge.js - Implements Merge Sort logic and visualization.
  │   │   │   ├── mergeDesc.js - Contains description and details about Merge Sort.
  │   │   ├── LinearSearch
  │   │   │   ├── linearbody.js - Handles UI layout for Linear Search.
  │   │   │   ├── linear.js - Implements Linear Search logic and visualization.
  │   │   │   ├── linearDesc.js - Contains description and details about Linear Search.
  │   │   ├── BinarySearch
  │   │   │   ├── binarybody.js - Handles UI layout for Binary Search.
  │   │   │   ├── binary.js - Implements Binary Search logic and visualization.
  │   │   │   ├── binaryDesc.js - Contains description and details about Binary Search.
  ├── index.js
  ├── package.json
  ├── README.md

## Usage
- Navigate between sorting and searching visualizations using different routes:
  - `/` → Bubble Sort
  - `/insertion` → Insertion Sort
  - `/selection` → Selection Sort
  - `/quick` → Quick Sort
  - `/merge` → Merge Sort
  - `/linear` → Linear Search
  - `/binary` → Binary Search

## Dependencies
- React
- React Router

## Contributing
Feel free to fork this repository and submit pull requests to improve the project.

*************************************Algorithm Details******************************************************

🚀 Merge Sort
🔹 Description:
Merge Sort is a divide-and-conquer sorting algorithm that recursively splits the array into smaller subarrays until each contains a single element. It then merges the subarrays back together in sorted order, ensuring efficient and stable sorting.

🔹 Features:
✅ Real-time Visualization – Highlights the merging process of divided subarrays.
✅ Adjustable Array Size – Modify the number of elements to sort.
✅ Adjustable Speed – Control the sorting speed.
✅ Shuffle Option – Generates a new randomized array.
✅ Efficient Sorting – Uses a recursive approach for optimal performance with O(n log n) time complexity.


🚀 Bubble Sort
🔹 Description:
Bubble Sort is a simple sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order. It continues iterating until the array is completely sorted.

🔹 Features:
✅ Real-time Visualization – Highlights elements being compared.
✅ Adjustable Array Size – Modify the number of elements to sort.
✅ Adjustable Speed – Control the sorting speed.
✅ Shuffle Option – Generates a new randomized array.
✅ Optimized Sorting – Stops early if no swaps are needed.



🚀 Selection Sort
🔹 Description:
Selection Sort is a simple sorting algorithm that divides the array into a sorted and an unsorted region. It repeatedly selects the smallest element from the unsorted region and swaps it with the first element of that region, expanding the sorted portion of the array step by step.

🔹 Features:
✅ Real-time Visualization – Highlights the currently selected minimum element and swapping process.
✅ Adjustable Array Size – Modify the number of elements to sort.
✅ Adjustable Speed – Control the sorting speed.
✅ Shuffle Option – Generates a new randomized array.
✅ Step-by-Step Sorting – Clearly shows how elements are selected and placed in order.




🚀 Quick Sort
🔹 Description:
Quick Sort is a divide-and-conquer sorting algorithm that selects a pivot element and partitions the array into two subarrays: elements smaller than the pivot and elements greater than the pivot. It then recursively sorts the subarrays, resulting in an efficiently sorted list.

🔹 Features:
✅ Real-time Visualization – Highlights the pivot element and partitioning process.
✅ Adjustable Array Size – Modify the number of elements to sort.
✅ Adjustable Speed – Control the sorting speed.
✅ Shuffle Option – Generates a new randomized array.
✅ Efficient Sorting – Uses a recursive approach with an average time complexity of O(n log n).



🚀 Insertion Sort
🔹 Description:
Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time. It takes each element and inserts it into its correct position relative to the already sorted portion of the array, making it efficient for small or nearly sorted datasets.

🔹 Features:
✅ Real-time Visualization – Highlights the current element being inserted and its comparisons.
✅ Adjustable Array Size – Modify the number of elements to sort.
✅ Adjustable Speed – Control the sorting speed.
✅ Shuffle Option – Generates a new randomized array.
✅ Efficient for Small Datasets – Works well for nearly sorted arrays with an average time complexity of O(n²).



🚀 Binary Search
🔹 Description:
Binary Search is an efficient searching algorithm that works on sorted arrays by repeatedly dividing the search interval in half. It compares the target element with the middle element, eliminating half of the remaining elements in each step until the target is found or the search space is empty.

🔹 Features:
✅ Real-time Visualization – Highlights the middle element and the narrowing search range.
✅ Adjustable Array Size – Modify the number of elements in the sorted array.
✅ Adjustable Speed – Control the search speed.
✅ Shuffle & Sort Option – Generates a new randomized array and sorts it for searching.
✅ Efficient Searching – Runs in O(log n) time complexity, making it significantly faster than linear search for large datasets.




🚀 Linear Search
🔹 Description:
Linear Search is a simple searching algorithm that checks each element in the array sequentially until the target element is found or the end of the array is reached. It is useful for unsorted arrays and small datasets.

🔹 Features:
✅ Real-time Visualization – Highlights the current element being checked.
✅ Adjustable Array Size – Modify the number of elements in the array.
✅ Adjustable Speed – Control the search speed.
✅ Shuffle Option – Generates a new randomized array for searching.
✅ Works on Unsorted Data – Unlike binary search, it does not require a sorted array but has a time complexity of O(n).



🔥 Technologies & Concepts Used:
✅ React Hooks – Utilizes useState and useEffect for state management.
✅ State Management – Manages sorting state, speed control, and array updates.
✅ Merge Sort Algorithm – Implements recursive division and merging.
✅ Asynchronous JavaScript – Uses async/await for animation delays.
✅ Dynamic UI with Tailwind CSS – Enhances the design and interactivity.
✅ Real-time Visualization – Highlights merging steps dynamically.



🛠 Key Features & Functionalities
✅ Merge Sort Algorithm Implementation:

    Recursively splits the array into smaller subarrays.
    Merges the subarrays back together in sorted order.
    Uses animation to visually represent the merging process.
✅ User Controls:

    Array Size Adjustment – Users can modify the length of the array dynamically.
    Speed Control – Allows adjusting the sorting speed.
    Shuffle Option – Generates a new randomized array.
    Sorting Button – Initiates the merge sort process.
✅ Interactive Sorting Visualization:

    Highlights the elements being merged in real-time.
    Displays the partitioning and merging process step by step.
    Uses color-coded bars for better differentiation.



    🎨 User Interface & Design
✅ Sliders for Customization:

        input[type="range"] for adjusting array size.
        input[type="range"] for controlling sorting speed.
✅ Buttons for Actions:

        Shuffle – Resets the array with new random values.
        Sort – Initiates the merge sort visualization.
✅ Dynamic Sorting Visualization:

        Uses color-coded bars (bg-yellow-500, bg-blue-500) to indicate active elements.
        Ensures smooth transitions using transition-all and scale-110.