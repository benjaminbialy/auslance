export interface SavedJob {
  saved_job_id?: number;
  job_id: number;
  freelancer_id: number;
  time_sent?: number;
}

export interface SavedJobsMap {
  [job_id: number]: true;
}

export interface ProposedJobsMap {
  [job_id: number]: number;
}
