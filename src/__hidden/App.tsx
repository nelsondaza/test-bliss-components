import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import * as RootButton from '../RootButton'
import * as useSomeData from '../useSomeData'
import OneFileComponent from './OneFileComponent'

import './assets/semantic.css'
import './assets/tailwind.css'

function App() {
  return (
    <Router>
      <div className="p-4">
        <Menu tabular inverted>
          <Menu.Item>
            <Link to="/">RootButton</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/use-some-data">useSomeData</Link>
          </Menu.Item>
        </Menu>
        <div className="p-2">
          <Routes>
            <Route path="/" element={<OneFileComponent exports={RootButton} />} />
            <Route path="/use-some-data" element={<OneFileComponent exports={useSomeData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
