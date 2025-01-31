/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExcerciseCard from "./ExcerciseCard";

export default function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"Welcome to "}
      title={["The", "Danger", "zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((excercise, index) => {
          return (
            <ExcerciseCard excercise={excercise} key={index} index={index} />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
