import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

// import { default as metadata } from './components/Button/Button.metadata.json';
/* eslint-disable import/no-webpack-loader-syntax */
import * as RootButton from '../RootButton'
import OneFileComponent from './OneFileComponent'

import './assets/semantic.css'
import './assets/tailwind.css'

function App() {
  return (
    <Router>
      <div className="p-4">
        <Menu tabular>
          <Menu.Item>
            <Link to="/">RootButton</Link>
          </Menu.Item>
        </Menu>
        <div className="p-2">
          <Routes>
            <Route path="/" element={<OneFileComponent exports={RootButton} />} />
          </Routes>
        </div>
        {/*<Route path="/" render={() => <Page component={Document} />} />*/}
        {/*<Route path="/about/" render={() => <Page component={About} />} />*/}
      </div>
    </Router>
  )
}

export default App
