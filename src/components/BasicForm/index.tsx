import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import SearchInput from "../SearchInput";

const BasicForm = () => {
  return (
    <FormControl>
      <SearchInput
        id="outlined-search"
        label="Search Github repo"
        type="search"
      />
      <Button variant="contained">Search</Button>
    </FormControl>
  );
};

export default BasicForm;
