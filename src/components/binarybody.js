
import Header from "./header"
import BinarySearch from "./binary"
import BinaryDescription from "./binaryDesc"

import Footer from "./footer"

export default function Binarybody(){

    return(
        <>
          <Header></Header>
       <div className="bg-[#000000]">
        <h1 className="text-[#ffffff] pt-7 pl-10 pb-4 text-4xl">BINARY SEARCH</h1>
                            
        <div>
            
            <BinarySearch></BinarySearch>
        </div>
          <BinaryDescription></BinaryDescription>
           
           <Footer></Footer>
        </div>
        </>
    )
}