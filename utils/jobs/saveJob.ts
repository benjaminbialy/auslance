import { getEpochSecondsNow } from "./../getEpochSecondsNow";
import { SAVED_JOBS_TABLE } from "../../constants/tableNames";
import { supabase } from "../../lib/supabase/supabaseClient";

export const saveJob = async (
  freelancer_id: number,
  job_id: number,
  isSaved: boolean
) => {
  try {
    if (isSaved) {
      await supabase
        .from(SAVED_JOBS_TABLE)
        .delete()
        .match({ freelancer_id: freelancer_id, job_id: job_id });
    } else {
      await supabase.from(SAVED_JOBS_TABLE).insert({
        job_id: job_id,
        freelancer_id: freelancer_id,
        time_sent: getEpochSecondsNow(),
      });
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
