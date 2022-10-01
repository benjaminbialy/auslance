import { SelectOption } from "../components/Inputs/ObjectSelectInput";
import { RemoteLevel } from "../globalTypes/databaseTypes";

export const remoteLevelOptions: SelectOption[] = [
  {
    id: "remoteLevel-option-none",
    value: RemoteLevel.none,
    label: "100% Onsite",
  },
  {
    id: "remoteLevel-option-hybrid",
    value: RemoteLevel.hybrid,
    label: "Hybrid",
  },
  {
    id: "remoteLevel-option-full",
    value: RemoteLevel.full,
    label: "Fully remote",
  },
];
