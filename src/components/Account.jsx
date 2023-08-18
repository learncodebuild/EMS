import React from "react";
import AccountData from "./AccountData";

const Account = ({ setAccItem, setIsAcc }) => {
  return (
    <>
      <div className="w-[35%] absolute right-0 top-[15%] max-h-[50%] h-auto bg-slate-200 h-full py-8 rounded-lg border-2 border-blue-200 px-4">
        <div className="grid grid-cols-3 gap-4">
          {AccountData.map((accData, index) => (
            <div
              key={index}
              className="border-b-2 divide-y-4  hover:border-blue-300 px-3 py-2 cursor-pointer text-center"
              onClick={(e) => {
                setAccItem(accData);
                setIsAcc(false);
              }}
            >
              {accData}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Account;
