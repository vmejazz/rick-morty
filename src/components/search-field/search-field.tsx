import * as React from "react";
import { InputStyled } from "./style";

type SearchFieldProps = {
  changeSeachText: Function;
};

const SearchField = (props: SearchFieldProps) => {
  const { changeSeachText } = props;

  return (
    <div>
      <InputStyled
        type="text"
        placeholder="Find your rick"
        onChange={(evt) => changeSeachText(evt)}
      ></InputStyled>
    </div>
  );
};

export default SearchField;
