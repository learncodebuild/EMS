import React from 'react'
import { useState } from 'react'
import Edit from './Edit'
import EditMenu from './EditMenu'

const Category = ({setCatItem,setIsCat,categoryData,setCategoryData,isIncome,categoryDatain,setCategoryDatain}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [editItem, setEditItem] = useState('')

  // console.log(categoryData);
  categoryData.map((item)=>console.log(item))
  return (
    <>
      <div className='w-[45%] bg-slate-200 h-full pb-8 pt-2 px-4 rounded-lg border-2 border-blue-200'>
      <div className="edit text-end ">

      <Edit
          setIsEdit={setIsEdit}
        />

        {isEdit && (
        <EditMenu
          setIsEdit={setIsEdit}
          setEditItem={setEditItem}
          categoryData={categoryData}
          setCategoryData={setCategoryData}
          categoryDatain={categoryDatain}
          setCategoryDatain={setCategoryDatain}
          isIncome={isIncome}

        />
      )}
      </div>
  
        <div className="grid grid-cols-3 gap-4 ">
          {!isIncome ? (
          categoryData.map((catData)=>(
            
            <div className="border-b-2 divide-y-4  hover:border-blue-300 px-3 py-2 cursor-pointer text-center" onClick={()=>{setCatItem(catData); setIsCat(false)}}>{catData}</div>)
        )
          ): (categoryDatain.map((catData)=>(
            <div className="border-b-2 divide-y-4  hover:border-blue-300 px-3 py-2 cursor-pointer text-center" onClick={() => { setCatItem(catData); setIsCat(false) }}>{catData}</div>)
          ))}  
      </div>
        </div>

      </>
  )
}

export default Category