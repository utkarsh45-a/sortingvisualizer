
import InsertionGenerateArray from "./insertion";
import Header from "./header";
import InsertionDescription from "./insertionDesc";
import Footer from "./footer"

export default function InsertionBody(){
    return(

         <>
                <Header></Header>
                <div className="bg-[#000000]">
                    <h1 className="text-[#ffffff] pt-7 pl-10 pb-4 text-4xl">INSERTION SORT</h1>
                   
                    <div>
                    <InsertionGenerateArray></InsertionGenerateArray>
                    </div>
                    <InsertionDescription></InsertionDescription>
                    <Footer></Footer>
                </div>
                </>
    )

}