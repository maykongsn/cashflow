import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${props => props.theme["gray-600"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${props => props.theme["gray-300"]};
  text-align: center;
`;

export const LogoContainer = styled.div`
  h1 {
    display: inline;
    vertical-align: middle;
    margin-left: 0.5rem;
  }

  img {
    vertical-align: middle;
    width: 50px;
    height: 50px;
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${props => props.theme["green-100"]};
  color: ${props => props.theme["gray-600"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 1px;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme["green-400"]};
    color: ${props => props.theme["white"]};
    transition: background-color 0.2s;
  }
`;