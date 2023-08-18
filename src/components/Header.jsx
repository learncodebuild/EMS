import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { useNavigate } from "react-router-dom";

const Header = ({ saved }) => {
  const [isIncome, setIsIncome] = useState(false);
  const buttonClass = `bg-${
    isIncome
      ? "green-600"
      : "blue-300 hover:border-solid hover:border-2 hover:border-green-500"
  } m-3 text-black rounded-lg py-2 px-9 mx-4 border-2 border-transparent text-2xl `;

  const buttonClasse = `bg-${
    isIncome === false
      ? "red-600"
      : "blue-300 hover:border-solid hover:border-3 hover:border-red-500"
  } m-3 text-black rounded-lg py-2 px-9 mx-4 border-2 border-transparent text-2xl`;

  const navigate = useNavigate();
  const handleBackClick = (event) => {
    navigate(-1);
  };

  return (
    <>
      <div className="bg-slate-100 h-screen top-0">
        <div className="bg-slate-100 flex flex-row justify-center ">
          <button className="absolute left-[2%] top-[18px] text-4xl" onClick={handleBackClick}>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
          <div className="">
          <button className={buttonClass} onClick={() => setIsIncome(true)}>
            Income
          </button>
          <button className={buttonClasse} onClick={() => setIsIncome(false)}>
            Expense
          </button>
          </div>
        </div>
        <Wrapper isIncome={isIncome} />
      </div>
    </>
  );
};

export default Header;
