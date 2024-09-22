import React, { useState } from 'react'
import { personList } from './data/Data'


function App() {
  const [index, setIndex] = useState(0)
  const [details, setDetails] = useState(personList.map(()=>false))

  function Add(){
    if(index < personList.length -1){
      setIndex(index+1)
    }
  }

  function Previous(){
    if(index > 0){
      setIndex(index-1)
    }
  }

  function Details(){
   setDetails((detail)=>{
    const value = [...detail]
    value[index ] = !value[index]
  
    
    return value;
   }
  )
  }

  const people = personList[index]
  return (
    <div >
      <div className='bg-slate-100 h-screen container p-2 '>
    <li >
     <h1 className='text-3xl font-bold'> {people.name}</h1>
     <img src = {people.url} className='h-40 rounded-lg m-3'/>
     <h3 className='text-3xl font-bold'>{people.profession}</h3>
     <button onClick={Details} className='cursor-pointer px-1 py-1 bg-green-300 rounded-lg ml-2 mr-2 mt-3 font-extrabold'>{details[index]? 'hide':'show'} details</button>
     {details[index] && <p className='whitespace-normal text-left text-wrap font-bold'>{people.description}</p>}
     </li>
      <button onClick={Add} className='cursor-pointer px-1 py-1 bg-blue-400 rounded-lg ml-2 mr-2 mt-3 font-extrabold'>Next</button>
      <button onClick={Previous} className='cursor-pointer px-1 py-1 bg-red-400 border rounded-lg ml-2 mr-2 font-extrabold'>Previous</button>
     
      </div>
    </div>
  )
}

export default App
