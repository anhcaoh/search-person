"use client";

import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { SyntheticEvent } from "react";
import { IListOption } from "../utils/list.options";

export interface ISearch {
  id?: string;
  options: IListOption[];
  onChange?: (event: SyntheticEvent<Element, Event>, value: any) => void;
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
  onChange,
  content,
  CTA,
  className,
}: ISearch) => {
  return (
    <Autocomplete
      className={className}
      id={id}
      options={options}
      onChange={onChange}
      noOptionsText={content?.noDataAvailable}
      renderInput={(props) =>
        CTA ?? <TextField {...props} label={content?.placeholder} />
      }
    />
  );
};

export default Search;
