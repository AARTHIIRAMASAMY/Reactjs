import React,{useState,useRef, useEffect} from "react"
const Reference=()=>{
    const [batchSize,updateBatchSize]=useState("")
    const prevBatch=useRef(batchSize);
    useEffect(()=>{
        prevBatch.current=batchSize
    })
    return(
        <div>
            <h1>Example of reference</h1>
            <input type ="test" onChange={(event)=>{updateBatchSize(event.target.value)}}/>
            <h2>the text typed is {batchSize} and its previous state is {prevBatch.current}</h2>
        </div>
    )
}
export default Reference