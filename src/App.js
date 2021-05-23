import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import JavaFinch from './components/JavaFinch'
import Notability from './components/Notability'
import Tilt from 'react-vanilla-tilt';
import { InterpolateSmooth } from 'three'


function App() {
  return (
    <div className="container">
      <Header></Header>
      <Body></Body>
      <About></About>
      <Notability></Notability>
      <JavaFinch></JavaFinch>
      <Tilt> Thanks for reading :D</Tilt>
    </div>
  );
}

export default App;
