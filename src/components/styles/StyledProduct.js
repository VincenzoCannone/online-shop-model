import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border-radius: 5%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
  margin: 0.5rem;
  min-width: 28rem;
  height: 35rem;
  background-color: var(--products-bg);
  border-radius: 5%;

  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  background-color: white;
`;

export const Image = styled.img`
  z-index: 2;
  height: 75%;
  width: 100%;
  object-fit: contain; /* Object-fit helps with pictures that are two wide … but it needs both: width & height; */
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  margin: 1rem;
  border-radius: 50%;
  transition: all 0.5s ease;
  cursor: pointer;
  background-color: white;

  &:hover {
    transform: scale(1.2);
    background-color: var(--product-icons);
  }
`;
