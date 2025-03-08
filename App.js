import React from "react";
import ReactDOM from "react-dom/client";
import BubbleBody from "./src/components/bubblebody";
import InsertionBody from "./src/components/insertionbody";
import { BrowserRouter,Route,Routes } from "react-router";
import SelectionBody from "./src/components/selectionbody";
import QuickBody from "./src/components/quickbody";
import MergeBody from "./src/components/mergebody";
import Linearbody from "./src/components/linearbody";
import Binarybody from "./src/components/binarybody";



function App(){

    return(
       <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<BubbleBody></BubbleBody>} ></Route>
            <Route path="/insertion" element={<InsertionBody></InsertionBody>}></Route>
            <Route path="/selection" element={<SelectionBody></SelectionBody>}></Route>
            <Route path="/quick" element={<QuickBody></QuickBody>}></Route>
            <Route path="/merge" element={<MergeBody></MergeBody>}></Route>
            <Route path="/linear" element={<Linearbody></Linearbody>}></Route>
            <Route path="/binary" element={<Binarybody></Binarybody>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);