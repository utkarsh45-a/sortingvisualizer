import SelectionGenerateArray from "./selection";
import Header from "./header";
import SelectionDescription from "./selectionDesc";
import Footer from "./footer";

export default function SelectionBody(){
    return(

         <>
               <Header></Header>
                <div className="bg-[#000000]">
                    <h1 className="text-[#ffffff] pt-7 pl-10 pb-4 text-4xl">SELECTION SORT</h1>
                   
                    <div>
                    <SelectionGenerateArray></SelectionGenerateArray>
                    </div>
                    
                    <SelectionDescription></SelectionDescription>
                    <Footer></Footer>
                </div>
                </>
    )

}