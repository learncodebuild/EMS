import React from 'react'
import { useState } from 'react'
import Wrapper from './Wrapper'

const Header = ({saved}) => {

    const [isIncome, setIsIncome] = useState(null)
    // const handleIncome=()=>{
    //     const incomee=saved.filter((save)=>save.category==='income')
    //     setIncome(incomee)
    //     console.log(incomee);
    // }
    // const handleExpense=()=>{
    //     const expensee=saved.filter((save)=>save.category==='expense')

    //     console.log(expensee);

    // }


  const buttonClass = `bg-${isIncome ? 'green-600' : 'blue-300 hover:border-solid hover:border-2 hover:border-green-500'} m-3 text-black rounded-lg py-2 px-9 mx-4 border-2 border-transparent text-2xl `

  const buttonClasse = `bg-${(isIncome===false) ? 'red-600' : 'blue-300 hover:border-solid hover:border-3 hover:border-red-500'} m-3 text-black rounded-lg py-2 px-9 mx-4 border-2 border-transparent text-2xl`

     return (
        <>
        <div className="bg-slate-100 h-screen top-0">
      <div className="bg-slate-100 flex flex-row justify-center ">
        <button className={buttonClass} onClick={() => setIsIncome(true)}>Income</button>
        <button className={buttonClasse} onClick={()=>setIsIncome(false)}>Expense</button>
    </div>
    <Wrapper
      isIncome={isIncome}
    />
         </div>
  </>
  )
}

export default Header