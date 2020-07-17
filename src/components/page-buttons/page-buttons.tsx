import * as React from "react";
import { ListButtonStyled, ButtonPage } from "./style";

type PageButtonsProps = {
  info: {
    count: number;
    pages: number;
    next: number;
    prev: number;
  };
  changePageShow: Function;
};

const PageButtons = (props: PageButtonsProps) => {
  const { changePageShow, info } = props;
  const { next, prev } = info;

  return (
    <ListButtonStyled>
      {prev ? (
        <ButtonPage onClick={() => changePageShow(prev)}>Prev</ButtonPage>
      ) : null}
      {next ? (
        <ButtonPage onClick={() => changePageShow(next)}>Next</ButtonPage>
      ) : null}
    </ListButtonStyled>
  );
};

export default PageButtons;
