import Main from '../Main/Main'
import {ParallaxProvider} from 'react-scroll-parallax';
import {
  BrowserRouter as Router,
} from 'react-router-dom'

function App() {
  return (
    <div style={{'boxSizing': 'border-box', width: '100vw'}}>
    <ParallaxProvider>
      <Router>
          <Main />
      </Router>
    </ParallaxProvider>
    </div>
  )
}

export default App;
