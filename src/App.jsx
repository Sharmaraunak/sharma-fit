import { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

function App() {
  const [workout, setWorkout] = useState(null);

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    const newWorkout = generateWorkout({
      poison: poision,
      muscles,
      goal: goals,
    });
    setWorkout(newWorkout);
    window.location.href = "#workout";
  }

  const [poision, setPoision] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-small sm:text-base">
      <Hero />
      <Generator
        poision={poision}
        muscles={muscles}
        goals={goals}
        setGoals={setGoals}
        setMuscles={setMuscles}
        setPoision={setPoision}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
