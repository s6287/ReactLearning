import './App.css';
import Functionalcomponent from './Component/Functionalcomponent';

import Classcomponent from "./Component/Classcomponent";

// component names in React should start with a capital letter . 
// like ex we cant give "shivam" we have to write Shivam

import Shivam from "./Component/props";


function App() {
  let data = "shivam rajput"

  // click event and function

  function apple() {
    data = "pankaj"
    alert(data)
  }
  return (
    <>
      {/* <Functionalcomponent text="Functional component example with prop and on click" />

      <Classcomponent /> */}

      {/* <Shivam text="shivam" /> */}
      
      {/* Passing obj and string */}
      {/* <Shivam obj={{ name: "shivammmm singh" }} text="shivam" /> */}
      <h1>{data}</h1>
      <button onClick={apple}>Click Me</button>
    </>
  );
}

export default App;
