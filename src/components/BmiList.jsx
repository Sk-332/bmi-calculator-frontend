import { useEffect, useState } from "react";

function BmiList({ refresh }) {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bmi`);
      const data = await res.json();
      setRecords(data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  // Runs after submit and show record
  useEffect(() => {
    fetchRecords();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      setRecords(records.filter((item) => item._id !== id));

      await fetch(`${import.meta.env.VITE_API_URL}/api/bmi/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  return (
    <div className="bmi-list">
      <h2>BMI Records</h2>

      {records.length === 0 && <p>No records found.</p>}

      {records.map((item) => (
        <div className="bmi-card" key={item._id}>
          <div className="bmi-info">
            <p><strong>Height:</strong> {item.height} cm</p>
            <p><strong>Weight:</strong> {item.weight} kg</p>
            <p><strong>BMI:</strong> {item.bmi}</p>

            <p className={`status ${item.status.toLowerCase().replace(" ", "")}`}>
              {item.status}
            </p>

            <p className="bmi-date">
              {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </div>

          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BmiList;
