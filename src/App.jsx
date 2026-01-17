import { useState } from "react";
import BmiForm from "./components/BmiForm";
import BmiList from "./components/BmiList";
import "./App.css";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="app-container">
      <h2>My BMI Calculator</h2>

      
      <BmiForm onSuccess={() => setRefresh(!refresh)} />

      
      <BmiList refresh={refresh} />
    </div>
  );
}

export default App;
