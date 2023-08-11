import React from 'react'
import { useState } from 'react'

const EditMenu = ({setIsEdit,setEditItem,categoryData,setCategoryData,categoryDatain,setCategoryDatain,isIncome}) => {

    const [added, setAdded] = useState('')
    const del=(editData)=>{
            const filteredData = categoryData.filter((data)=>data!=editData);
          {!isIncome ? 
            (setCategoryData(filteredData)): 
            (setCategoryDatain(filteredData))
          }
    }

    const add=()=>{
      {!isIncome ? (setCategoryData([...categoryData,added])) : 
        (setCategoryDatain([...categoryDatain, added]))
      }
      setAdded('');
    }

    const handleBack=()=>{
      setIsEdit(false)
    }
  return (
      <div className='w-72 px-4 py-2 flex flex-col h-full bg-gray-200 rounded-lg border-2 border-blue-200 absolute top-0 right-0 overflow-y-auto text-center'>
          <div className='flex flex-col'>

        {!isIncome ?(categoryData.map((editData)=>
            <div className="flex justify-evenly  ">
            <div className="text-black text-xl px-5 py-2 cursor-pointer mb-1 w-1/2 " onClick={() => { setEditItem(editData); setIsEdit(false) }}>{editData}</div>
            <button className="delete w-1/2 text-2xl " onClick={()=>del(editData)}>
              <i className="fa-solid fa-delete-left" style={{color:"#000000"}}></i>
            </button>
            </div>
        )) :
          
          (categoryDatain.map((editData) =>
            <div className="flex justify-evenly  ">
              <div className="text-black text-xl px-5 py-2 cursor-pointer mb-1 w-1/2 " onClick={() => { setEditItem(editData); setIsEdit(false) }}>{editData}</div>
              <button className="delete w-1/2 text-2xl " onClick={() => del(editData)}>
                <i className="fa-solid fa-delete-left" style={{ color: "#000000" }}></i>
              </button>
            </div>
          ))
        }
    </div> 
    <div className='flex flex-col mr-3'>
    <div className="footer flex justify-evenly mt-3">
    <input type="text " id='addEdit' className='rounded mr-1 w-40 px-4 py-2 text-xl' placeholder='add expense' value={added} onChange={(e)=>setAdded(e.target.value)} />
    <button className=' rounded bg-red-600 px-4 py-2 text-xl ml-1' onClick={()=>add()}>Add</button>
      </div>

      <button className="back mt-8 text-xl bg-red-600 px-4 py-2 w-fit text-center rounded-md" onClick={handleBack}>Back</button>
      </div>
    </div>
  )
}

export default EditMenu