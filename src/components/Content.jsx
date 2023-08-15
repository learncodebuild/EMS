import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import 'react-datepicker/dist/react-datepicker.css'
import dayjs from 'dayjs';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Category from './Category'
import { useNavigate } from 'react-router-dom';
import { SavedContext } from './SavedContext'
import Tabsec from './Tab1'
import { compareAsc, format } from 'date-fns'

const Content = ({ setIsAcc, setIsCat, catItem, accItem, setCatItem, setAccItem, isIncome }) => {

  const [dataArr, setDataArr] = useContext(SavedContext)
  const [date, setDate] = useState(new Date().toISOString());
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState('');
  const [account, setAccount] = useState('');
  const [note, setNote] = useState('');
  const [desc, setDesc] = useState('');
  const [incomeSave, setIncomeSave] = useState([])
  const [expenseSave, setExpenseSave] = useState([])
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    const newSave = { date, amount, catItem, accItem, note, desc, isIncome};
    console.log(newSave);
    if(!(!amount || !date || !catItem || !accItem)){
    if (isIncome) {
      setIncomeSave([...incomeSave, newSave]);
      setDataArr(incomeSave);
    }

    else {
      setExpenseSave([...expenseSave, newSave]);
      setDataArr(expenseSave);
    }
    // console.log(isIncome);
    setSaved(true);
    setDate(new Date().toISOString());
    setAmount('');
    setCategory('');
    setAccount('');
    setNote('');
    setDesc('');
    setCatItem('')
    setAccItem('')
}
else{
  alert("empty fields cannot be saved")
}
  }

  useEffect(() => {
    // setDataArr(expenseSave);
    // console.log(expenseSave);
    const mergedArr =isIncome ? incomeSave: expenseSave;
    setDataArr(mergedArr);   
  }, [expenseSave,incomeSave,isIncome])


  const navigate = useNavigate();
  const handleBackClick = (event) => {
    navigate(-1);

  }
  return (
    <>
      <div className="flex flex-col w-full">
        <div className='flex flex-col w-3/5'>
          <div className='  mb-5  pb-7'>
    
            <div className="ml-6 flex  mt-4 mb-2 items-center">
              <label className="text-2xl text-black mr-16">Date</label>
              {/* <input type="date" readOnly={true} value={date} className="mx-12 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none" /> */}
              {/* <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat='dd/MM/yyyy' placeholderText='dd/MM/yyyy'>
            </DatePicker> */}
            
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DemoContainer components={['DateTimePicker']} >
                  <DateTimePicker className='w-3/5' defaultValue={dayjs(date)} onChange={d => setDate(d.$d.toISOString())} variant="standard" />
                </DemoContainer>
              </LocalizationProvider>

            </div>

            <div className="ml-6 flex  mt-4 mb-2 ">
              <label className="text-2xl text-black  mr-6">Amount</label>
              <input type="number" placeholder='0' value={amount} onChange={(e) => setAmount(e.target.value)} className="mx-3  border-b border-blue-300 bg-transparent text-2xl px-3 outline-none w-3/5" />
            </div>

            <div className='ml-6 flex mt-4 mb-2'>
              <label className="text-2xl text-black mr-4">Category</label>
              <input type="text" readOnly={true} value={catItem} onClick={() => {
                setIsCat(p => p = !p);
                setIsAcc(false);
              }} className="mx-3 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none  w-3/5" />
            </div>
            <div className='ml-6 flex mt-4 mb-2'>
              <label className="text-2xl text-black mr-6">Account</label>
              <input type="text" readOnly={true} value={accItem} onClick={() => {
                setIsAcc(q => q = !q);
                setIsCat(false)
              }} className="mx-3 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none w-3/5" />
            </div>

            <div className='ml-6 flex mt-4 mb-2 '>
              <label className="text-2xl text-black mr-14">Note</label>
              <input type="text" value={note} onChange={(e) => setNote(e.target.value)} maxLength="50" className="mx-3 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none w-3/5" />
            </div>

          </div>
          <div className="desc">
            <div className="flex ">
              <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description' max="300" className="ml-12 bg-transparent border-b border-blue-300 w-5/6 text-2xl pl-3 pb-3 pt-4 outline-none w-3/5" />
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
          <div>
          {saved && (
          <Tabsec />
          )}
        </div>
        </div>
    </>
  )
}

export default Content