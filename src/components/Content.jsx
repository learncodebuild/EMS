import React, { useEffect, useState, useContext } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { SavedContext } from "./SavedContext";
import Tab1 from "./Tab1";
import Upload from "./Upload";

const Content = ({
  setIsAcc,
  setIsCat,
  catItem,
  accItem,
  setCatItem,
  setAccItem,
  isIncome,
}) => {
  const [dataArr, setDataArr] = useContext(SavedContext);
  const [date, setDate] = useState(new Date().toISOString());
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState("");
  const [account, setAccount] = useState("");
  const [note, setNote] = useState("");
  const [desc, setDesc] = useState("");
  const [incomeSave, setIncomeSave] = useState([]);
  const [expenseSave, setExpenseSave] = useState([]);
  const [saved, setSaved] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [data, setData] = useState([]);

  const handleSave = () => {
    const newSave = { date, amount, catItem, accItem, note, desc, isIncome };
    // console.log(newSave);
    if (!(!amount || !date || !catItem || !accItem)) {
      if (isIncome) {
        setIncomeSave([...incomeSave, newSave]);
        setData();
      } else {
        setExpenseSave([...expenseSave, newSave]);
        setData(expenseSave);
      }
      setDate(new Date().toISOString());
      setAmount("");
      setCategory("");
      setAccount("");
      setNote("");
      setDesc("");
      setCatItem("");
      setAccItem("");
    } else {
      alert("empty fields cannot be saved");
    }
  };

  useEffect(() => {
    const mergedArr = [...incomeSave, ...expenseSave];
    setDataArr(mergedArr);
  }, [expenseSave, incomeSave]);

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-3/5">
          <div className="  mb-5  pb-7">
            <div className="ml-6 flex  mt-4 mb-2 items-center">
              <label className="text-2xl text-black mr-16">Date</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                    className="w-3/5"
                    defaultValue={dayjs(date)}
                    onChange={(d) => setDate(d.$d.toISOString())}
                    variant="standard"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className="ml-6 flex  mt-4 mb-2 ">
              <label className="text-2xl text-black  mr-6">Amount</label>
              <input
                type="number"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mx-3  border-b border-blue-300 bg-transparent text-2xl px-3 outline-none w-3/5"
              />
            </div>

            <div className="ml-6 flex mt-4 mb-2">
              <label className="text-2xl text-black mr-4">Category</label>
              <input
                type="text"
                readOnly={true}
                value={catItem}
                onClick={() => {
                  setIsCat((p) => (p = !p));
                  setIsAcc(false);
                }}
                className="mx-3 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none w-3/5"
              />
            </div>
            <div className="ml-6 flex mt-4 mb-2">
              <label className="text-2xl text-black mr-6">Account</label>
              <input
                type="text"
                readOnly={true}
                value={accItem}
                onClick={() => {
                  setIsAcc((q) => (q = !q));
                  setIsCat(false);
                }}
                className="mx-3 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none w-3/5"
              />
            </div>

            <div className="ml-6 flex mt-4 mb-2 ">
              <label className="text-2xl text-black mr-14">Note</label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength="100"
                className="mx-3 w-1/2 border-b border-blue-300 bg-transparent text-2xl px-3 outline-none w-3/5"
              />
            </div>
            {/* </div> */}
            <div className="desc mx-4 ">
              <div className="flex">
                <textarea
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Description"
                  maxLength="2000"
                  className="pl-3 outline-none resize-none bg-transparent w-4/5 text-xl border-2 border-blue-300 "
                  multiline
                  rows={8}
                />
                <div
                  className="border-blue-300 ml-4 "
                  onClick={() => setIsUpload((p) => (p = !p))}
                >
                  <i className="fa-solid fa-camera text-5xl"></i>
                </div>
              </div>
              <div>
                <button
                  className="save mt-7  rounded-lg bg-red-700 text-2xl text-white px-9 py-2"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="back mt-7  rounded-lg bg-red-700 text-2xl text-white px-9 py-2 mx-4"
                  onClick={() => setSaved((p) => (p = !p))}
                >
                  View History
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>{saved && <Tab1 />}</div>
      </div>
      {isUpload && <Upload />}
    </>
  );
};

export default Content;
