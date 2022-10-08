import { useDatabase } from "./../lib/supabase/useDatabase";
import { useEffect, useState } from "react";
import { defaultFreelancer } from "../components/Freelancer/defaultFreelancer";
import { FreelancerInterface } from "../components/Freelancer/types";
import { Error } from "../globalTypes/error";

export const useFreelancer = (freelancer_id: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>({ error: false, message: "" });
  const [freelancer, setFreelancer] =
    useState<FreelancerInterface>(defaultFreelancer);
  const { read } = useDatabase();

  useEffect(() => {
    const handleLoad = async () => {
      if (freelancer_id) {
        try {
          const { data } = await read(
            "freelancers",
            "*, users(first_name,last_name,email), proposals(*, jobs(*, employers(name))), jobs(*)",
            {
              column: "freelancer_id",
              value: freelancer_id.toString(),
            }
          );
          setFreelancer({ ...data[0] });
        } catch (error) {
          setError({ error: true, message: error.message });
        } finally {
          setIsLoading(false);
        }
      }
    };
    handleLoad();
  }, [freelancer_id]);

  const updateTextField = (field: string, newValue: string): void => {
    setFreelancer((oldFreelancerValue) => ({
      ...oldFreelancerValue,
      [field]: newValue,
    }));
  };

  return { freelancer, updateTextField, error, isLoading };
};
