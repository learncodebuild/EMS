import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tabf from './Tabf';
import Tabsec from './Tabsec';
import Tabt from './Tabt';
import Header from './Header';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const Dashboard = () => {
    const [value, setValue] = useState(0)
    const [onClick, setOnClick] = useState(false)
    const [clickTab, setClickTab] = useState(false)
    const [clickTabt, setClickTabt] = useState(false)
    const [isHeader, setIsHeader] = useState(false)


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpen=()=>{
        setOnClick(true)
    }
    const handleClose=()=>{
        setOnClick(false)
    }

    // const navigate = useNavigate();

    return (
        <>
        <div className="h-screen bg-gray-200 ">
        <Box className="w-full flex justify-center">
            <Tabs value={value} onChange={handleChange} >
                <Tab label="Click to open" style={{color:'black', fontSize:'18px'}} onClick={()=>{setOnClick(true); setClickTab(false); setClickTabt(false)}}  />
                <Tab label="Item Two" style={{color:'black', fontSize:'18px'}} onClick={()=>{setClickTab(true),setClickTabt(false)}}/>
                <Tab label="Item Three" style={{color:'black', fontSize:'18px'}} onClick={()=>{setClickTabt(true),setClickTab(false)}}/>
            </Tabs>
        </Box>
    <Tabf onClick={onClick} handleClose={handleClose} handleOpen={handleOpen} />

    {clickTab &&(
    <Tabsec clickTab={clickTab} />
    )}
    {clickTabt && (
    <Tabt clickTabt={clickTabt} />
    )}

    {/* <button className="plus absolute right-0 mx-10 my-10 bottom-0" onClick={()=>setIsHeader(true)}>
        <i className="fa-solid fa-circle-plus text-6xl "></i>
    </button> */}
    <Link to="/header" className="plus absolute right-0 mx-10 my-10 bottom-0">
        <i className="fa-solid fa-circle-plus text-6xl "></i>
    </Link>

    </div>
        
    {/* {isHeader && <Header />} */}
    </>
    )
}

export default Dashboard