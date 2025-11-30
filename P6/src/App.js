import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h1>Student List</h1>

      <StudentCard 
        name="Amit Verma"
        enrollmentNo="ENR001"
        course="BCA"
      />

      <StudentCard
        name="Kunal Singh"
        enrollmentNo="ENR002"
        course="MCA"
      />

      <StudentCard
        name="Aryan Khan"
        enrollmentNo="ENR003"
        course="B.Tech"
      />
    </div>
  );
}

export default App;
