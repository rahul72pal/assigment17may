import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import JobList from './components/JobList'
import AddJob from './components/AddJob'
import JobDetail from './components/JobDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow p-4 flex justify-between">
          <h1 className="text-xl font-bold">Mini Job Board</h1>
          <div className="space-x-4">
            <Link to="/" className="text-blue-600">Home</Link>
            <Link to="/add-job" className="text-blue-600">Add Job</Link>
          </div>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/job/:id" element={<JobDetail />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App
