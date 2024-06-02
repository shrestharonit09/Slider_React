import React,{useState} from 'react'
import {information} from "./Data"

const Practice = () => {
  const[info,setInfo]=useState(0)
  const handleClicked=()=>{
    setInfo((info+1)%4)
  }
  return (
    <div className="flex justify-center mt-16 ">
    <div className="flex flex-col border-2 border-gray-500 rounded-lg p-5 gap-2 bg-gray-100"> 
    <div className="border border-gray-500">
     <h1>{information[info].name}</h1>
     <hr className="text-bold" />
     <h1>{information[info].address}</h1>
     <hr />
     <h1>{information[info].id}</h1>
     </div>
     <button className="rounded-lg hover:bg-blue-500 bg-blue-700 text-white w-16" onClick={handleClicked}>Data</button>
    </div>
    </div>
  )
}

export default Practice