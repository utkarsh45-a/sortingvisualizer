// import { useEffect, useState } from "react"


// export default function GenerateArray(){

//     const [Value,setValue]=useState(30)

//     const [highlightIndex, setHighlightIndex] = useState(null)
       

    
//     const getRandomArray = (value) =>
//         Array.from({ length: value }, () => Math.floor(Math.random() * 100));


   
//     const [numbers, setNumbers] =useState(() => getRandomArray(Value));

//     let arr = [...numbers]; 
//     async function bubbleSort() {
      
//         let len = arr.length;
    
//         for (let i = 0; i < len - 1; i++) {
//           for (let j = 0; j < len - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
              
//               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

            
//               setHighlightIndex(j)
              

//               setNumbers([...arr]);
//               await new Promise((resolve) => setTimeout(resolve, 50));
//             }
//           }
//         }
        
//         setHighlightIndex(null)
          
//     }
//   return(
//         <>
//               <div className=" pt-7 pl-10 pb-4 flex justify-center align-middle gap-14 text-[#ffffff]"> 
//                 <button className=" pl-2 pr-2 pt-1 pb-1 rounded-2xl text-2xl bg-[#484747]" 
//                  onClick={() => setNumbers(getRandomArray(Value))}>Shuffle</button>
//                 <button className=" pl-2 pr-2 pt-1 pb-1 rounded-2xl text-2xl bg-[#484747]"
//                 onClick={bubbleSort}>sort</button>
//                 <input
//                 type="range"
//                 min="1"
//                 max="100"
//                 value={Value}
//                 onChange={(e) => {
//                     const newValue = Number(e.target.value);
//                     setValue(newValue);
//                     setNumbers(getRandomArray(newValue)); 
//                 }}
//                 />
//                 <p>Array length: {Value}</p>
//              </div>
//              <div>
               
//                {numbers.map((num, idx) => (
//                 <div
//                   key={idx}
//                   style={{
//                     width: "10px",
//                     height: `${num * 3}px`,
//                     background: idx === highlightIndex ? "white" : "blue",
//                     display: "inline-block",
//                     margin: "2px",
//                   }}
//                 />
//               ))}
                
//              </div>
//         </>
//     )
// }