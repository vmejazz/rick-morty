import styled from "styled-components";

export const CardStyled = styled.li`
  position: relative;

  width: 180px;
  height: 220px;
  margin-bottom: 30px;
  margin-left: 30px;
  overflow: hidden;
`;

export const CardImageStyled = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: auto 100%;
  background-color: gray;
`;

export const CardButtonStyled = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  width: 30px;
  height: 30px;

  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #ffffff;

    background-color: red;

    &:before,
    &::after {
      background-color: white;
    }
  }

  &:before,
  &:after {
    position: absolute;
    top: 8px;
    left: 14px;
    content: " ";
    height: 14px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
