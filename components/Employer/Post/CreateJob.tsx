import { Dispatch, SetStateAction, FC, FormEvent } from "react";
import { areaOfExpertiseOptions } from "../../../constants/areaOfExpertiseOptions";
import { lengthOfJobOptions } from "../../../constants/lengthOfJobOptions";
import { locationOptions } from "../../../constants/locationOptions";
import { remoteLevelOptions } from "../../../constants/remoteLevelOptions";
import ArrayInObjectTextInput from "../../Inputs/ArrayInObjectTextInput";
import { ObjectNumberInput } from "../../Inputs/ObjectNumberInput";
import { ObjectSelectInput } from "../../Inputs/ObjectSelectInput";
import { ObjectTextInput } from "../../Inputs/ObjectTextInput";
import JobInterface from "../../Jobs/JobInterface";

interface Props {
  job: JobInterface;
  setJob: Dispatch<SetStateAction<JobInterface>>;
  id: string;
  onSubmit: (e: FormEvent) => void;
  error: string;
}

const CreateJob: FC<Props> = ({ job, setJob, id, onSubmit, error }) => {
  return (
    <>
      <div>{error}</div>
      <form
        className="flex flex-col m-10 border-2 border-slate-200"
        onSubmit={(e: FormEvent) => onSubmit(e)}
      >
        <ObjectTextInput
          id={id}
          placeholder={"Title"}
          labelText={"Title:"}
          value={job}
          setValue={setJob}
          field={"title"}
          isLoading={false}
          isRequired={true}
        />
        <ObjectSelectInput
          placeholder={"Location"}
          labelText={"Location:"}
          value={job}
          setValue={setJob}
          field={"location"}
          isLoading={false}
          isRequired={true}
          options={locationOptions}
          id={id}
        />
        <ObjectSelectInput
          placeholder={"Engineering"}
          labelText={"Area:"}
          value={job}
          setValue={setJob}
          field={"area"}
          isLoading={false}
          isRequired={true}
          options={areaOfExpertiseOptions}
          id={id}
        />
        <ObjectSelectInput
          placeholder={"Medium"}
          labelText={"Job length:"}
          value={job}
          setValue={setJob}
          field={"length"}
          isLoading={false}
          isRequired={true}
          options={lengthOfJobOptions}
          id={id}
        />
        <ObjectSelectInput
          placeholder={"Full"}
          labelText={"Remote level:"}
          value={job}
          setValue={setJob}
          field={"remote_level"}
          isLoading={false}
          isRequired={true}
          options={remoteLevelOptions}
          id={id}
        />
        <ObjectTextInput
          placeholder={"Description"}
          labelText={"Job description:"}
          value={job}
          setValue={setJob}
          field={"description"}
          isLoading={false}
          isRequired={true}
          id={id}
        />
        <ObjectNumberInput
          placeholder={"10000"}
          labelText={"Max Rate per Hour (cents):"}
          value={job}
          step={10000}
          min={0}
          setValue={setJob}
          field={"max_cents_per_hour"}
          isLoading={false}
          isRequired={true}
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
          isRequired={true}
          id={id}
        />
        <ObjectNumberInput
          placeholder={"Hours per week"}
          labelText="Hours per week:"
          value={job}
          setValue={setJob}
          field={"hoursPerWeek"}
          isLoading={false}
          isRequired={true}
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
          isRequired={true}
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
                onClick={(e: FormEvent) => {
                  e.preventDefault();
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
            onClick={(e: FormEvent) => {
              e.preventDefault();
              setJob((prev: JobInterface) => ({
                ...prev,
                skills: [...prev.skills, ""],
              }));
            }}
          >
            Add new skill
          </button>
        </div>
        <button type="submit">Post</button>
      </form>{" "}
    </>
  );
};

export default CreateJob;
