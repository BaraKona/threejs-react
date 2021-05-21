import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import JavaFinch from './components/JavaFinch'
import Notability from './components/Notability'
import Tilt from 'react-vanilla-tilt';


function App() {
  return (
    <div className="container">
      <Header></Header>
      <Body></Body>
      <About></About>
      <Notability></Notability>
      <JavaFinch></JavaFinch>
      <Tilt></Tilt>
    </div>
  );
}

export default App;
