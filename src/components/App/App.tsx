import Main from '../Main/Main'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

function App() {
  return (
    <div style={{'boxSizing': 'border-box', width: '100vw'}}>
      <Router>
        <Main />
      </Router>
    </div>
  )
}

export default App;
