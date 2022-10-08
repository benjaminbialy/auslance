import { useDatabase } from "./../lib/supabase/useDatabase";
import { useEffect, useState } from "react";
import { Error } from "../globalTypes/error";
import { EmployerInterface } from "../components/Employer/types";
import { defaultEmployer } from "../components/Employer/defaultEmployer";

export const useEmployer = (employer_id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>({ error: false, message: "" });
  const [employer, setEmployer] = useState<EmployerInterface>(defaultEmployer);
  const { read } = useDatabase();

  useEffect(() => {
    const handleLoad = async () => {
      if (employer_id) {
        try {
          const { data } = await read(
            "employers",
            "*, users(first_name,last_name,email), jobs(*)",
            {
              column: "employer_id",
              value: employer_id,
            }
          );

          setEmployer({ ...data[0] });
        } catch (error) {
          if (error) console.log(error.details, error.message, error.hint);
          if (error) return setError({ error: true, message: error.message });
        } finally {
          setIsLoading(false);
        }
      }
    };
    handleLoad();
  }, [employer_id]);

  const updateTextField = (field: string, newValue: string): void => {
    setEmployer((employer) => ({
      ...employer,
      [field]: newValue,
    }));
  };

  return { employer, updateTextField, error, isLoading };
};
