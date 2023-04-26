import styled from "styled-components";

export const SearchFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto;
  padding: 2.5rem 0;

  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme["gray-100"]};
`;

export const SearchFormContent = styled.form`
  display: flex;
  width: 80%;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 1px;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme["gray-300"]};
    border: 1px solid ${(props) => props.theme["gray-100"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: ${(props) => props.theme["green-100"]};
    color: ${(props) => props.theme["gray-400"]};
    font-weight: bold;
    border-radius: 6px;
  }
`;
