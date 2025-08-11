import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Dashboard } from './Pages'
import { Header, Sidebar } from './Components'
function App() {

  return (
    <section className="main">
      <Header />
      <div className="contentMain flex">
        <div className="sidebarWrapper w-[18%]">
          <Sidebar />
        </div>
        <div className="rightContent py-4 px-5 w-[78%]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}

export default App
