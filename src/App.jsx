import AboutMe from "./component/AboutMe";
import Navbar from "./component/Navbar";
import Particle from "./utils/Particle";

function App() {
  return (
    <div className="">
      <Particle />
 
        <Navbar />
        <AboutMe/>
    </div>
  );
}

export default App;
