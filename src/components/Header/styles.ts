import {styled, keyframes } from "styled-components";

const rotateVibrate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const HeaderContainer = styled.div`
  background-color: #eee;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderOptionsGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HeaderOptions = styled.button`
  background: transparent;
  color: black;
  cursor: pointer;
  border: none;

  width: auto;
  height: 100%;

  font-size: 1.5rem;

  text-decoration-color: transparent;

  &:hover {
    opacity: 0.6;
    text-decoration: underline;
    text-decoration-color: black;
    transition: opacity 0.4s ease-in-out, text-decoration-color 0.4s ease-in-out;
  }

  transition: opacity 0.4s ease-in-out, text-decoration-color 0.4s ease-in-out;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.4s ease-in-out;
    animation: ${rotateVibrate} 1s infinite;
  }

  transition: opacity 0.4s ease-in-out;
`;

export const StyledLogo = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.4s ease-in-out;
    animation: ${rotateVibrate} 1s infinite;
  }

  transition: opacity 0.4s ease-in-out;
`;
