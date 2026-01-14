import BmiForm from "./components/BmiForm";
import BmiList from "./components/BmiList";
import "./App.css";


function App(){
  return(
   <div className="app-container">
    <h2>My BMI Calculator</h2>
    <BmiForm/>
    <BmiList/>
  </div>);
}

export default App;