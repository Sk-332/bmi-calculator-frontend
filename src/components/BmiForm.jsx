import { useState } from "react";

function BmiForm() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w) {
      alert("Please enter valid values");
      return;
    }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bmi`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        height: h,
        weight: w,
      }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <form className="bmi-form" onSubmit={handleSubmit}>
      <h2>BMI Form</h2>

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button type="submit">Calculate BMI</button>

      {result && (
        <div className="result">
          <p>Your BMI: {result.bmi}</p>
          <p>Status: {result.status}</p>
        </div>
      )}
    </form>
  );
}

export default BmiForm;
