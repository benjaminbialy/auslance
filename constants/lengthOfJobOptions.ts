import { SelectOption } from "../components/Inputs/ObjectSelectInput";
import { JobLength } from "../globalTypes/databaseTypes";

export const lengthOfJobOptions: SelectOption[] = [
  {
    id: "jobLength-option-short",
    value: JobLength.short,
    label: "Short term (< 1 month)",
  },
  {
    id: "jobLength-option-medium",
    value: JobLength.medium,
    label: "Medium term (1-3 months)",
  },
  {
    id: "jobLength-option-long",
    value: JobLength.long,
    label: "Long term (> 3 months)",
  },
];
