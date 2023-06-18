import type { FC } from "react";
import { CustomizedSearchInput } from "./StyledSearchInput";

interface Props {
  id: string;
  label: string;
  type: string;
}

const SearchInput: FC<Props> = ({ id, label, type }) => {
  return <CustomizedSearchInput id={id} label={label} type={type} />;
};

export default SearchInput;
