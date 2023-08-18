import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tab1 from "./Tab2";
import Tab2 from "./Tab1";
import Tab3 from "./Tab3";
import Header from "./Header";
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [value, setValue] = useState(0);
  const [onClick, setOnClick] = useState(false);
  const [clickTab, setClickTab] = useState(false);
  const [clickTabt, setClickTabt] = useState(false);
  const [isHeader, setIsHeader] = useState(false);
  const [hideIcon, setHideIcon] = useState(false);
  const [onDash, setOnDash] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => {
    setOnClick(true);
  };
  const handleClose = () => {
    setOnClick(false);
  };

  // const navigate = useNavigate();
  // const handleBackClick = (event) => {
  //     navigate(-1);

  // }

  return (
    <>
      <div className="h-screen bg-gray-200 ">
        <Box className="w-full flex /justify-center">
          {/* <button className='text-4xl' onClick={handleBackClick}>
                            <i className="fa-solid fa-circle-chevron-left"></i>
                        </button> */}

          <Tabs value={value} onChange={handleChange}>
            <button
              className="mx-5 text-4xl"
              onClick={() => {
                setOnDash(true);
                setClickTabt(false);
                setClickTab(false);
                setHideIcon(false);
              }}
            >
              <i className="fa-solid fa-circle-chevron-left"></i>
            </button>
            <Tab
              label="History"
              style={{ color: "black", fontSize: "18px" }}
              onClick={() => {
                setClickTab(true);
                setClickTabt(false);
                setHideIcon(true);
              }}
            />

            <Tab
              label="Item Two"
              style={{ color: "black", fontSize: "18px" }}
              onClick={() => {
                setOnClick(true);
                setClickTab(false);
                setClickTabt(false);
                setHideIcon(true);
              }}
            />
            <Tab
              label="Item Three"
              style={{ color: "black", fontSize: "18px" }}
              onClick={() => {
                setClickTabt(true);
                setClickTab(false);
                setHideIcon(true);
              }}
            />
          </Tabs>
        </Box>
        <Tab1
          onClick={onClick}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />

        {clickTab && <Tab2 clickTab={clickTab} />}
        {clickTabt && <Tab3 clickTabt={clickTabt} />}

        {/* <button className="plus absolute right-0 mx-10 my-10 bottom-0" onClick={()=>setIsHeader(true)}>
        <i className="fa-solid fa-circle-plus text-6xl "></i>
    </button> */}
        {!hideIcon && onDash && (
          <Link
            to="/header"
            className="plus absolute right-0 mx-10 my-10 bottom-0"
          >
            <i className="fa-solid fa-circle-plus text-6xl "></i>
          </Link>
        )}
      </div>

      {/* {isHeader && <Header />} */}
    </>
  );
};

export default Dashboard;
