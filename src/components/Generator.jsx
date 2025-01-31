/* eslint-disable react/prop-types */
import "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/fitness";
import { useState } from "react";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {
    poision,
    muscles,
    goals,
    setGoals,
    setMuscles,
    setPoision,
    updateWorkout,
  } = props;

  const [showModal, setShowModal] = useState(false);

  // const [poision, setPoision] = useState("individual");
  // const [muscles, setMuscles] = useState([]);
  // const [goals, setGoals] = useState("strength_power");

  // toggle the modal
  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (poision !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val != muscleGroup));
      return;
    }
    if (muscles.length > 2) {
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }
  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"pick your poision"}
        description={"select the workout you can endure"}
      />
      <div className="grid grid-cols-2 sm: grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              className={
                "bg-slate-950 border border-blue-400 py-3 px-4 rounded-lg duration-200 hover:border-blue-600 " +
                (type === poision ? "border-blue-600" : "border-blue-400")
              }
              key={typeIndex}
              type="button"
              onClick={() => {
                setMuscles([]);
                setPoision(type);
              }}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"lock on targets"}
        description={"select the muscles judged for annihilation."}
      />
      <div className="bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          className="relative p-3 flex items-center justify-center"
          onClick={toggleModal}
        >
          <p className="capitalize">
            {muscles.length == 0 ? "Select muscle group" : muscles.join(" ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poision === "individual"
              ? WORKOUTS[poision]
              : Object.keys(WORKOUTS[poision])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  type="button"
                  key={muscleGroupIndex}
                  className="hover:text-blue-400 duration-200"
                  onClick={() => updateMuscles(muscleGroup)}
                >
                  <p
                    className={
                      "uppercase " +
                      (muscles.includes(muscleGroup) ? "text-blue-400" : "")
                    }
                  >
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"become jaggernaut"}
        description={"select your ultimate objective."}
      />
      <div className="grid gris-cls-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              className={
                "bg-slate-950 border border-blue-400 py-3 px- 4 rounded-lg duration-200 hover:border-blue-600 " +
                (scheme === goals ? "border-blue-600" : "border-blue-400")
              }
              key={schemeIndex}
              type="button"
              onClick={() => {
                setGoals(scheme);
              }}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"} />
    </SectionWrapper>
  );
}
