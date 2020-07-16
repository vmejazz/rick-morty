import styled from "styled-components";

export const MainStyled = styled.main`
  max-width: 810px;
  margin: 0 auto;
  margin-top: 140px;
`;

export const H1Hidden = styled.h1`
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;

  white-space: nowrap;

  border: 0;

  clip: rect(0 0 0 0);
  clip-path: inset(100%);
`;
