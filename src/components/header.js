import SideBar from "./sidebar"


export default function Header(){
    return(
        <>

        <div className="bg-[#161616] flex">
            <SideBar></SideBar>
            {/* <Menu className="text-white"></Menu> */}
           <h1 className="  text-[#afafaf] pt-4 pl-12 pb-4 text-3xl">DSA VISULIZER</h1>
        </div>
        </>
    )
}