

import MergeGenerateArray from "./merge";
import Header from "./header";
import MergeDescription from "./mergeDesc";
import Footer from "./footer";

export default function MergeBody(){
    return(

         <>
                <Header></Header>
                <div className="bg-[#000000]">
                    <h1 className="text-[#ffffff] pt-7 pl-10 pb-4 text-4xl">MERGE SORT</h1>
                   
                    <div>
                    <MergeGenerateArray></MergeGenerateArray>
                    </div>
                    <MergeDescription></MergeDescription>
                    <Footer></Footer>
                </div>
                </>
    )

}