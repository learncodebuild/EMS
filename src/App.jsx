import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SavedContext,SavedProvider} from './components/SavedContext';

function App() {
  return (
    <SavedProvider>  
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
      </SavedProvider>
  )
}

export default App
