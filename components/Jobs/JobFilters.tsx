import React, { useState, FC } from "react";

interface Props {
  savedFilters: JobFilter[];
}

export const JobFilters: FC<Props> = ({ savedFilters }) => {
  const [filterID, setFilterID] = useState(-1);
  return (
    <div>
      {savedFilters.map((filter: JobFilter) => (
        <div
          key={`filter-${filter.id}`}
          className={filterID == filter.id ? "text-green-400" : "text-red-400"}
          onClick={() => setFilterID(filter.id)}
        >
          {filter.name}
        </div>
      ))}
      {filterID > -1 ? (
        <div>
          <div>Titles/Roles</div>
          <div>Location</div>
          <div>more filters</div>
        </div>
      ) : (
        <div>Create a filter</div>
      )}
    </div>
  );
};

interface JobFilter {
  id: number;
  name: string;
  location?: string;
  minimum?: number;
  maximum?: number;
  roles?: Array<{ roleName: string; roleID: number }>;
}
