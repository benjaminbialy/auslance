// "Melbourne",
//   "Regional Victoria",
//   "Sydney",
//   "Regional New South Wales",
//   "Brisbane",
//   "Regional Queensland",
//   "Canberra",
//   "Regional ACT",
//   "Adelaide",
//   "Regional South Australia",
//   "Perth",
//   "Regional Western Australia",
//   "Darwin",
//   "Regional Northern Territory";

import { Dispatch, SetStateAction, FC } from "react";
import ArrayInObjectTextInput from "../../Inputs/ArrayInObjectTextInput";
import { ObjectNumberInput } from "../../Inputs/ObjectNumberInput";
import { ObjectTextInput } from "../../Inputs/ObjectTextInput";
import JobInterface from "../../Jobs/JobInterface";

interface Props {
  job: JobInterface;
  setJob: Dispatch<SetStateAction<JobInterface>>;
  id: string;
}

const CreateJob: FC<Props> = ({ job, setJob, id }) => {
  return (
    <form>
      <ObjectTextInput
        id={id}
        placeholder={"Title"}
        labelText={"Title:"}
        value={job}
        setValue={setJob}
        field={"title"}
        isLoading={false}
        isRequired={false}
      />
      <ObjectTextInput
        placeholder={"Location"}
        labelText={"Location:"}
        value={job}
        setValue={setJob}
        field={"location"}
        isLoading={false}
        isRequired={false}
        id={id}
      />
      <ObjectTextInput
        placeholder={"Employer Name"}
        labelText={"Employer name:"}
        value={job}
        setValue={setJob}
        field={"employerName"}
        isLoading={false}
        isRequired={false}
        id={id}
      />
      <ObjectTextInput
        placeholder={"Description"}
        labelText={"Job description:"}
        value={job}
        setValue={setJob}
        field={"description"}
        isLoading={false}
        isRequired={false}
        id={id}
      />
      <ObjectNumberInput
        placeholder={"Budget"}
        labelText={"Budget (cents):"}
        value={job}
        step={10000}
        min={0}
        setValue={setJob}
        field={"budget"}
        isLoading={false}
        isRequired={false}
        id={id}
      />
      <ObjectNumberInput
        labelText="Employer review (stars):"
        placeholder={"Employer Review"}
        min={0}
        max={5}
        value={job}
        setValue={setJob}
        field={"employerReview"}
        isLoading={false}
        isRequired={false}
        id={id}
      />
      <ObjectNumberInput
        placeholder={"Hours per week"}
        labelText="Hours per week:"
        value={job}
        setValue={setJob}
        field={"hoursPerWeek"}
        isLoading={false}
        isRequired={false}
        id={id}
        min={0}
        max={168}
      />
      <ObjectNumberInput
        placeholder={"Number of proposals"}
        labelText="Number of proposals:"
        value={job}
        setValue={setJob}
        field={"noProposals"}
        isLoading={false}
        isRequired={false}
        min={0}
        id={id}
      />
      <div className="w-3/4">
        {job?.skills.map((skill, index) => (
          <div className="flex" key={"skill-" + index}>
            <div>Skill {index + 1}:</div>
            <ArrayInObjectTextInput
              id={id}
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
    </form>
  );
};

export default CreateJob;
