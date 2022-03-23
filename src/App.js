import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUser from "./components/CreateUser";
import Exercises from "./components/Exercises";
import ExerciseForm from "./components/ExerciseForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Exercises />} />
          <Route
            path="/edit/:id"
            element={<ExerciseForm title="Edit Exercise" />}
          />
          <Route
            path="/create"
            element={<ExerciseForm title="Create Exercise" />}
          />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
