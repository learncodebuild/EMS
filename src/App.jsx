import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>  
    {/* <div className="bg-slate-100"> 
      <Dashboard /> */}
    {/* <Header /> */}

<Router>
          <Routes>
            <Route path="/header" element={<Header />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
    {/* </div> */}

    </>
  )
}

export default App
