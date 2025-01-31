/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      type="button"
      className="px-8 py-4 rounded-md border-[2px] bg-slate border-blue-400 border-solid blue-shadow duration-300 mx-auto"
      onClick={func}
    >
      <p>{text}</p>
    </button>
  );
}
