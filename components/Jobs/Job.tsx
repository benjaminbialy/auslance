import React from "react";

function Job({ job }) {
  return (
    <div>
      <div>{job.title}</div>
      <div>{job.location}</div>
      <div>{job.budget}</div>
      <div>{job.hoursPerWeek}</div>
      <div>{job.timePosted}</div>
      <div>{job.description}</div>
      {job.skills.map((skill: string) => (
        <div key={"skill-" + skill}>{job.skill}</div>
      ))}
      <div>{job.noProposals}</div>
      <div>{job.employerReview}</div>
      <div>{job.employerName}</div>
    </div>
  );
}

export default Job;
