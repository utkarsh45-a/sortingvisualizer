
import Header from "./header"
import LinearSearch from "./linear"
import LinearDescription from "./linearDesc"

import Footer from "./footer"

export default function Linearbody(){

    return(
        <>
          <Header></Header>
       <div className="bg-[#000000]">
        <h1 className="text-[#ffffff] pt-7 pl-10 pb-4 text-4xl">LINEAR SEARCH</h1>
                            
        <div>
            
            <LinearSearch></LinearSearch>
        </div>
           <LinearDescription></LinearDescription>
           
           <Footer></Footer>
        </div>
        </>
    )
}