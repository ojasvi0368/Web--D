import ( useState ) from "react";
import ( useState ) from "react";
import ( useState ) from "react";
import "./App.css";
import Studentcard from "./Studentcard";

function App() {
  return (
    <>
    <div className="container">
      <h1>Student Profile Dashboard</h1>
      <div className="cards">
        <StudentCard
          image="https://randomuser.me/api/portraits/men/32.jpg"
          name="Rahul Sharma"
          course="B.Tech CSE"
          year="2nd Year"
          cgpa="7.5"
        />
        <StudentCard
          image="https://randomuser.me/api/portraits/women/44.jpg "
          name="Priya Singh"
          course="BCA"
          year="2nd Year"
          cgpa="8.1"
        />
      </div>
    </div>
    </>
  );
}
export default App;
