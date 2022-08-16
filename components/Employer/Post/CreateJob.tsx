import React from "react";
import SimpleTextInput from "../../Inputs/SimpleTextInput";

function CreateJob({ title, setTitle }) {
  return (
    <div>
      <SimpleTextInput
        value={title}
        setValue={setTitle}
        placeholder={"Job title"}
      />
    </div>
  );
}

export default CreateJob;
