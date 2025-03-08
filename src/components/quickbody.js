import QuickGenerateArray from "./quick";
import Header from "./header";
import QuickDescription from "./quickDesc";
import Footer from "./footer";
<Footer></Footer>

export default function QuickBody(){
    return(

         <>
               <Header></Header>
                <div className="bg-[#000000]">
                    <h1 className="text-[#ffffff] pt-7 pl-10 pb-4 text-4xl">QUICK SORT</h1>
                   
                    <div>
                    <QuickGenerateArray></QuickGenerateArray>
                    </div>
                    <QuickDescription></QuickDescription>
                    <Footer></Footer>
                </div>
                </>
    )

}