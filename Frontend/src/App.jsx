/* eslint-disable no-unused-vars */
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom';

function App() {
 

  return (
    <>
      <Header/>
      <main className="bg-gray-900 text-white min-h-screen p-4">
        <Outlet/>
      </main>

    </>
  )
}

export default App
