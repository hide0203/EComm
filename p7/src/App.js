import { useState } from "react";
import StudentForm from "./StudentForm";
import SubmittedList from "./SubmittedList";

function App() {
  const [submissions, setSubmissions] = useState([]);

  function handleAdd(newEntry) {
    // Add newest at top; change to [...submissions, newEntry] to append instead
    setSubmissions(prev => [newEntry, ...prev]);
  }

  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <StudentForm onAdd={handleAdd} />
      <SubmittedList submissions={submissions} />
    </div>
  );
}

export default App;
