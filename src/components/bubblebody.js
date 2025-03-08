
import BubbleGenerateArray from "./bubble"
import Header from "./header"
import BubbleDescription from "./bubbleDesc"
import Footer from "./footer"

export default function BubbleBody(){
    

    return (

      
        <>
        <Header></Header>
        <div className="bg-[#000000]">
            <h1 className="text-[#ffffff] pt-7 pl-10 pb-4 text-4xl">BUBBLE SORT</h1>
           
            <div>
            <BubbleGenerateArray></BubbleGenerateArray>
            </div>
            <BubbleDescription></BubbleDescription>
            <Footer></Footer>
        </div>
        </>
    )
}