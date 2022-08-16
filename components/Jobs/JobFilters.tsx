import React, { useState } from "react";

function JobFilters({ savedFilters }) {
  const [filterID, setFilterID] = useState(-1);
  return (
    <div>
      {savedFilters.map((filter: JobFilterInterface) => (
        <div
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
}

export default JobFilters;

interface JobFilterInterface {
  id: number;
  name: string;
  location?: string;
  minimum?: number;
  maximum?: number;
  roles?: Array<{ roleName: string; roleID: number }>;
}
