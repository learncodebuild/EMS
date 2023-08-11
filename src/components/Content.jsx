import React, { useEffect } from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Category from './Category'
import { useNavigate } from 'react-router-dom';


const Content = ({ setIsAcc, setIsCat, catItem, accItem, setCatItem, setAccItem, isIncome }) => {

  const [date, setDate] = useState('');
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState('');
  const [account, setAccount] = useState('');
  const [note, setNote] = useState('');
  const [desc, setDesc] = useState('');
  const [incomeSave, setIncomeSave] = useState('')
  const [expenseSave, setExpenseSave] = useState('')

  const handleSave = () => {
    const newSave = { date, amount, category, account, note, desc };
      if (isIncome) {
        setIncomeSave([...incomeSave, newSave]);
      }

      else {
        setExpenseSave([...expenseSave, newSave]);
        
      }
      console.log(isIncome);
      
    setDate('');
    setAmount('');
    setCategory('');
    setAccount('');
    setNote('');
    setDesc('');
    setCatItem('')
    setAccItem('')

  }

  const navigate = useNavigate();
  const handleBackClick = (event) => {
    navigate(-1);

  }
  return (
    <>
      <div className='flex flex-col w-full '>
        <div className='  mb-5  pb-7'>

          <div className="flex  mt-4 mb-2 ">
            <label className="text-2xl text-black mx-6">Date</label>
            <input type="date" readOnly={true} value={date} className="mx-12 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none" />
            {/* <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat='dd/MM/yyyy' placeholderText='dd/MM/yyyy'>

            </DatePicker> */}
          </div>

          <div className="flex  mt-4 mb-2 ">
            <label className="text-2xl text-black  mx-6">Amount</label>
            <input type="number" placeholder='0' value={amount} onChange={(e) => setAmount(e.target.value)} className="mx-3 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none" />
          </div>

          <div className='flex mt-4 mb-2'>
            <label className="text-2xl text-black mx-6">Category</label>
            <input type="text" readOnly={true} value={catItem} onClick={() => {
              setIsCat(p => p = !p);
              setIsAcc(false);
            }} className="mx-1 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none" />
          </div>
          <div className='flex mt-4 mb-2'>
            <label className="text-2xl text-black mx-6">Account</label>
            <input type="text" readOnly={true} value={accItem} onClick={() => {
              setIsAcc(q => q = !q);
              setIsCat(false)
            }} className="mx-4 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none" />
          </div>

          <div className='flex mt-4 mb-2 '>
            <label className="text-2xl text-black mx-6">Note</label>
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} maxLength="50" className="mx-12 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none " />
          </div>

        </div>
        <div className="desc">
          <div className="flex ">
            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description' max="300" className="ml-12 bg-transparent border-b border-blue-300 w-5/6 text-2xl pl-3 pb-3 pt-4 outline-none" />
            <div className='pt-4 border-b border-blue-300 pr-4'>
              <i className="fa-solid fa-camera text-4xl"></i>
            </div>
          </div>
          <div>
      <button className="save mt-7 mx-4 rounded-lg bg-red-700 text-2xl text-white px-9 py-2 mx-4" onClick={handleSave} >Save</button>
      <button className="back mt-7 mx-4 rounded-lg bg-red-700 text-2xl text-white px-9 py-2 mx-4" onClick={handleBackClick}>Back</button>

       </div>
        </div>
      </div>
    </>
  )
}

export default Content