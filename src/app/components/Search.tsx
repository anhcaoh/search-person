"use client";

import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

export interface ISearch {
  id?: string;
  options: { id: string; label: string; value: string }[];
  content?: {
    noDataAvailable: string;
    placeholder?: string;
  };
  CTA?: JSX.Element; // optional call-to-action for consumer to provide own interfaces
  className?: string;
}
const Search = ({
  id = "search",
  options,
  content,
  CTA,
  className,
}: ISearch) => {
  return (
    <Autocomplete
      className={className}
      id={id}
      options={options}
      noOptionsText={content?.noDataAvailable}
      renderInput={(props) =>
        CTA ?? <TextField {...props} label={content?.placeholder} />
      }
    />
  );
};

export default Search;
