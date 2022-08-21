import React, { ChangeEvent, SetStateAction, Dispatch, FC } from "react";
import ArrayInObjectTextInput from "../../Inputs/ArrayInObjectTextInput";
import ObjectNumberInput from "../../Inputs/ObjectNumberInput";
import ObjectTextInput from "../../Inputs/ObjectTextInput";
import JobInterface from "../../Jobs/JobInterface";

const CreateJob: FC<{
  job: JobInterface;
  setJob: Dispatch<SetStateAction<object>>;
}> = ({ job, setJob }) => {
  return (
    <div>
      <div>Title:</div>
      <ObjectTextInput
        placeholder={"Title"}
        value={job}
        setValue={setJob}
        field={"title"}
      />
      <div>Location:</div>
      <ObjectTextInput
        placeholder={"Location"}
        value={job}
        setValue={setJob}
        field={"location"}
      />
      <div>Employer name:</div>
      <ObjectTextInput
        placeholder={"Employer Name"}
        value={job}
        setValue={setJob}
        field={"employerName"}
      />
      <div>Job description:</div>
      <ObjectTextInput
        placeholder={"Description"}
        value={job}
        setValue={setJob}
        field={"description"}
      />
      <div>Budget (cents):</div>
      <ObjectNumberInput
        placeholder={"Budget"}
        value={job}
        step={10000}
        setValue={setJob}
        field={"budget"}
      />
      <div>Employer review (stars):</div>
      <ObjectNumberInput
        placeholder={"Employer Review"}
        max={5}
        value={job}
        setValue={setJob}
        field={"employerReview"}
      />
      <div>Hours per week:</div>
      <ObjectNumberInput
        placeholder={"Hours per week"}
        value={job}
        setValue={setJob}
        field={"hoursPerWeek"}
      />
      <div>Number of proposals:</div>
      <ObjectNumberInput
        placeholder={"Hours per week"}
        value={job}
        setValue={setJob}
        field={"noProposals"}
      />
      <div>Time posted (epoch):</div>
      <ObjectNumberInput
        placeholder={"Hours per week"}
        value={job}
        setValue={setJob}
        field={"timePosted"}
      />
      <div className="w-3/4">
        {job?.skills.map((skill, index) => (
          <div className="flex" key={"skill-" + index}>
            <div>Skill {index + 1}:</div>
            <ArrayInObjectTextInput
              placeholder={"Enter a skill"}
              value={job}
              setValue={setJob}
              field={"skills"}
              index={index}
            />
            <button
              onClick={() => {
                setJob((prev: JobInterface) => ({
                  ...prev,
                  skills: [
                    ...prev.skills.slice(0, index),
                    ...prev.skills.slice(index + 1),
                  ],
                }));
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            console.log(job.skills);
            setJob((prev: JobInterface) => ({
              ...prev,
              skills: [...prev.skills, ""],
            }));
          }}
        >
          Add new skill
        </button>
      </div>
    </div>
  );
};

export default CreateJob;
