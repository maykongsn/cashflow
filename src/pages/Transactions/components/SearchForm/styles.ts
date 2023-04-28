import styled from "styled-components";

export const SearchFormContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem auto;
  width: 100%;
  max-width: 1120px;

  input {
    flex: 1;
    padding: 1rem;

    border-radius: 1px;
    border: 1px solid ${(props) => props.theme["gray-100"]};

    background-color: transparent;
    color: ${(props) => props.theme["gray-300"]};

    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    border: 0;
    padding: 1rem;
    background-color: ${(props) => props.theme["green-100"]};
    color: ${(props) => props.theme["gray-500"]};
    font-weight: bold;
    border-radius: 1px;
  }
`;
